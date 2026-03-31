// commit: handle form submission
const { validationResult } = require('express-validator');

exports.submitForm = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  res.status(200).json({
    message: 'Form submitted successfully',
    data: { name, email }
  });
};