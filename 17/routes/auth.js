const express = require('express');
const router = express.Router();
const { register } = require('../controllers/register');
const { login } = require('../controllers/login');

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user account with email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "Ahmed"
 *               lastname:
 *                 type: string
 *                 example: "Hafez"
 *               email:
 *                 type: string
 *                 example: "user123@gmail.com"
 *               phone:
 *                 type: string
 *                 example: "01022178506"
 *               username:
 *                 type: string
 *                 example: "ahmed"
 *               password:
 *                 type: string
 *                 example: "12345678"
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Bad request.
 */
router.post('/register', register);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate user with email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login successful.
 *       401:
 *         description: Unauthorized.
 */
router.post('/login', login);

module.exports = router;
