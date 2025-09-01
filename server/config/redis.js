const redis = require('redis')
const logger = require('../utils/logger')

let redisClient = null

const connectRedis = async () => {
  if (!process.env.REDIS_URL) {
    logger.info('Redis URL not provided, skipping Redis connection')
    return
  }

  try {
    redisClient = redis.createClient({
      url: process.env.REDIS_URL
    })

    redisClient.on('error', (err) => {
      logger.error('Redis Client Error:', err)
    })

    redisClient.on('connect', () => {
      logger.info('✅ Connected to Redis')
    })

    await redisClient.connect()
  } catch (error) {
    logger.error('Failed to connect to Redis:', error)
  }
}

const getRedisClient = () => redisClient

module.exports = {
  connectRedis,
  getRedisClient
}