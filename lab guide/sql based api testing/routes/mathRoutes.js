const express = require('express');
const router = express.Router();
const { computeGCD, computePower, computeFactorial } = require('../controllers/mathController');

router.post('/gcd', computeGCD);
router.post('/power', computePower);
router.post('/factorial', computeFactorial);

module.exports = router;