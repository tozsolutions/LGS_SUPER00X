const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /api/questions/{id}:
 *   get:
 *     summary: Get question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Question retrieved successfully
 */
router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get question by ID endpoint - to be implemented'
  })
})

/**
 * @swagger
 * /api/questions/{id}/answer:
 *   post:
 *     summary: Submit answer for a question
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Answer submitted successfully
 */
router.post('/:id/answer', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Submit answer endpoint - to be implemented'
  })
})

module.exports = router