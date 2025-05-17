const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');

// Auth Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect , getUserProfile);

module.exports = router;