// commit: add form validation
const { body } = require('express-validator');

const validateForm = [
  body('name')
    .notEmpty().withMessage('Name is required'),

  body('email')
    .isEmail().withMessage('Valid email required'),

  body('password')
    .isLength({ min: 6 }).withMessage('Password min 6 chars')
];

module.exports = validateForm;