require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const logger = require('./utils/logger')
const errorHandler = require('./middleware/errorHandler')
const { connectRedis } = require('./config/redis')

// Import routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const courseRoutes = require('./routes/courses')
const examRoutes = require('./routes/exams')
const questionRoutes = require('./routes/questions')
const analyticsRoutes = require('./routes/analytics')

const app = express()
const PORT = process.env.PORT || 5000

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
})

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LGS Super API',
      version: '1.0.0',
      description: 'API documentation for LGS Super educational platform',
      contact: {
        name: 'TOZ Solutions',
        email: 'support@tozsolutions.com'
      }
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/*.js', './controllers/*.js']
}

const specs = swaggerJsdoc(swaggerOptions)

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}))
app.use(compression())
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(limiter)

// API Documentation
if (process.env.API_DOCS_ENABLED === 'true') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0'
  })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/exams', examRoutes)
app.use('/api/questions', questionRoutes)
app.use('/api/analytics', analyticsRoutes)

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

// Error handling middleware
app.use(errorHandler)

// Initialize Redis connection
connectRedis()

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`)
  logger.info(`📚 API Documentation: http://localhost:${PORT}/api-docs`)
  logger.info(`🏥 Health Check: http://localhost:${PORT}/api/health`)
})

module.exports = app