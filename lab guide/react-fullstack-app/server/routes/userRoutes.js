const express = require('express');
const { loginWithGoogle, downloadPDF } = require('../controllers/userController');
const router = express.Router();

router.post('/auth/google', loginWithGoogle);
router.get('/download-pdf', downloadPDF);

module.exports = router;