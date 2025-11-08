const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { sendEmail, sendContactEmail, sendShivholicEmail } = require('../controllers/emailController');

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

// New validation middleware for contact email
const validateContactEmailRequest = [
  body('name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').notEmpty().trim(),
  body('subject').notEmpty().trim().escape(),
  body('message').notEmpty().trim().escape()
];

// Validation middleware for Shivholic email
const validateShivholicEmailRequest = [
  body('name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail()
];

router.post('/send', (req, res, next) => {
  next();
}, validateEmailRequest, sendEmail);
router.post('/contact', validateContactEmailRequest, sendContactEmail);
router.post('/shivholic', validateShivholicEmailRequest, sendShivholicEmail);

module.exports = router;