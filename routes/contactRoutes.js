const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  updateContactStatus
} = require('../controllers/contactController');

// Validation middleware
const validateContact = [
  body('full_name').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('subject').notEmpty().trim().escape(),
  body('mobilenumber').optional().trim(),
  body('message').optional().trim().escape()
];

// Routes
router.post('/', validateContact, createContact);
router.post('/getAllContacts/', getAllContacts);
router.put('/updateStatus/', updateContactStatus);

module.exports = router; 