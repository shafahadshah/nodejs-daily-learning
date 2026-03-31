// commit: add form routes
const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');
const validateForm = require('../validators/formValidator');

router.post('/submit', validateForm, submitForm);

module.exports = router;