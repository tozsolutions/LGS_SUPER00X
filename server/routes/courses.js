const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Courses retrieved successfully
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get courses endpoint - to be implemented'
  })
})

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Get course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course retrieved successfully
 */
router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get course by ID endpoint - to be implemented'
  })
})

module.exports = router