# LGS SUPER00X - Comprehensive Educational Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-18%2B-blue)](https://reactjs.org/)

## 🎯 Project Overview

LGS SUPER00X is a comprehensive educational platform designed for Turkish LGS (Lisans Geçiş Sınavı) exam preparation. The platform provides students with interactive learning materials, practice tests, progress tracking, and personalized study plans.

## 🏗️ Architecture

### Frontend (Client)
- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **Forms**: React Hook Form with Zod validation
- **Charts/Analytics**: Recharts

### Backend (Server)
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcrypt
- **File Upload**: Multer with cloud storage
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Joi

### DevOps & Infrastructure
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Database**: PostgreSQL
- **Caching**: Redis
- **Monitoring**: Winston logging
- **Testing**: Jest + Supertest (Backend), Jest + React Testing Library (Frontend)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- Redis (optional, for caching)
- Docker (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tozsolutions/LGS_SUPER00X.git
   cd LGS_SUPER00X
   ```

2. **Install dependencies**
   ```bash
   npm run setup
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your database and other configurations
   ```

4. **Database Setup**
   ```bash
   cd server
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start Development**
   ```bash
   # From root directory
   npm run dev
   ```

### Using Docker

1. **Build and start services**
   ```bash
   docker-compose up -d
   ```

2. **Initialize database**
   ```bash
   docker-compose exec server npx prisma migrate dev
   docker-compose exec server npx prisma db seed
   ```

## 📁 Project Structure

```
LGS_SUPER00X/
├── client/                 # Next.js frontend application
│   ├── components/         # Reusable React components
│   ├── pages/             # Next.js pages
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # CSS and styling files
│   └── public/            # Static assets
├── server/                # Express.js backend application
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/           # Database models (Prisma)
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── tests/            # Backend tests
├── docs/                 # Documentation
├── docker/               # Docker configuration files
├── .github/              # GitHub Actions workflows
└── scripts/              # Build and deployment scripts
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server for production
- `npm run test` - Run all tests
- `npm run lint` - Lint all code
- `npm run setup` - Install all dependencies

### Docker
- `npm run docker:build` - Build Docker images
- `npm run docker:up` - Start all services with Docker
- `npm run docker:down` - Stop all Docker services

## 🔐 Environment Variables

### Server (.env)
```env
NODE_ENV=development
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/lgs_super00x"
JWT_SECRET=your-super-secret-jwt-key
REDIS_URL=redis://localhost:6379
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

### Client (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

## 🧪 Testing

### Run all tests
```bash
npm test
```

### Run specific tests
```bash
# Frontend tests
npm run client:test

# Backend tests
npm run server:test
```

## 📚 API Documentation

API documentation is available at `http://localhost:5000/api-docs` when running the server.

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS configuration
- Rate limiting
- Helmet.js security headers
- Environment variable protection

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Docker Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📈 Monitoring & Analytics

- Application logging with Winston
- Error tracking and reporting
- Performance monitoring
- User analytics and engagement tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact: support@tozsolutions.com

## 🗺️ Roadmap

- [ ] Mobile application (React Native)
- [ ] Advanced analytics dashboard
- [ ] AI-powered question generation
- [ ] Multi-language support
- [ ] Offline study mode
- [ ] Video lesson integration
- [ ] Live tutoring features

---

**Built with ❤️ by TOZ Solutions**