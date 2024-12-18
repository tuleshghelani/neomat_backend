const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { sendEmail } = require('../controllers/emailController');

// Validation middleware
const validateEmailRequest = [
  body('name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('mobile').notEmpty().trim(),
  body('company').optional().trim().escape(),
  body('address').notEmpty().trim().escape(),
  body('city').notEmpty().trim().escape(),
  body('state').notEmpty().trim().escape(),
  body('businessType').notEmpty().trim().escape(),
  body('experience').notEmpty().trim().escape(),
  body('investmentCapacity').notEmpty().trim().escape(),
  body('storageFacilities').notEmpty().trim().escape(),
  body('showroomFacilities').notEmpty().trim().escape(),
  body('transportFacilities').notEmpty().trim().escape(),
  body('message').optional().trim().escape()
];

router.post('/send', validateEmailRequest, sendEmail);

module.exports = router; 