const express = require('express');
const { register, login, protected, admin } = require('../controllers/authController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', verifyToken, protected);
router.get('/admin', verifyToken, isAdmin, admin);

module.exports = router;