const validateOrigin = (req, res, next) => {
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  const requestOrigin = req.get('origin');

  if (!allowedOrigin || requestOrigin !== allowedOrigin) {
    return res.status(403).json({
      success: false,
      message: 'Access forbidden: Invalid origin'
    });
  }

  next();
};

module.exports = validateOrigin; 