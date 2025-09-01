#!/bin/bash
set -e

echo "🚀 Deploying LGS Super to production..."

# Configuration
COMPOSE_FILE="docker-compose.prod.yml"
ENV_FILE=".env.production"

# Check if environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: $ENV_FILE not found!"
    echo "Please create the production environment file with required variables."
    exit 1
fi

# Load environment variables
export $(cat $ENV_FILE | xargs)

# Verify required variables
required_vars=(
    "REGISTRY"
    "IMAGE_NAME"
    "IMAGE_TAG"
    "POSTGRES_DB"
    "POSTGRES_USER"
    "POSTGRES_PASSWORD"
    "JWT_SECRET"
    "NEXTAUTH_SECRET"
)

for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "❌ Error: Required environment variable $var is not set!"
        exit 1
    fi
done

echo "✅ Environment variables validated"

# Pull latest images
echo "📥 Pulling latest Docker images..."
docker-compose -f $COMPOSE_FILE pull

# Stop existing services
echo "🛑 Stopping existing services..."
docker-compose -f $COMPOSE_FILE down

# Start database and redis first
echo "🗄️ Starting database and cache services..."
docker-compose -f $COMPOSE_FILE up -d database redis

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
until docker-compose -f $COMPOSE_FILE exec -T database pg_isready -U $POSTGRES_USER -d $POSTGRES_DB; do
    echo "Database is not ready yet, waiting..."
    sleep 2
done

# Run database migrations
echo "🔄 Running database migrations..."
docker-compose -f $COMPOSE_FILE run --rm server npx prisma migrate deploy

# Start all services
echo "🚀 Starting all services..."
docker-compose -f $COMPOSE_FILE up -d

# Wait for services to be healthy
echo "🏥 Waiting for services to be healthy..."
timeout=300
counter=0

while [ $counter -lt $timeout ]; do
    if docker-compose -f $COMPOSE_FILE ps | grep -q "healthy"; then
        echo "✅ All services are healthy!"
        break
    fi
    
    echo "Waiting for services to be healthy... ($counter/$timeout)"
    sleep 5
    counter=$((counter + 5))
done

if [ $counter -ge $timeout ]; then
    echo "❌ Timeout waiting for services to be healthy"
    echo "📊 Current service status:"
    docker-compose -f $COMPOSE_FILE ps
    exit 1
fi

# Cleanup old images
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

echo "🎉 Deployment completed successfully!"
echo "🌐 Application should be available at your configured domain"
echo "📊 To check service status: docker-compose -f $COMPOSE_FILE ps"
echo "📋 To view logs: docker-compose -f $COMPOSE_FILE logs -f"