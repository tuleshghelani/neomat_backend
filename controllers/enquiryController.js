const pool = require('../config/database');
const { validationResult } = require('express-validator');

const createEnquiry = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, company_name, email, mobilenumber, address } = req.body;
    
    const result = await pool.query(
      'INSERT INTO enquiry_master (name, company_name, email, mobilenumber, address) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, company_name, email, mobilenumber, address]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getAllEnquiries = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM enquiry_master ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getEnquiryById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM enquiry_master WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, company_name, email, mobilenumber, address } = req.body;
    
    const result = await pool.query(
      'UPDATE enquiry_master SET name = $1, company_name = $2, email = $3, mobilenumber = $4, address = $5 WHERE id = $6 RETURNING *',
      [name, company_name, email, mobilenumber, address, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM enquiry_master WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    
    res.json({ message: 'Enquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry
};