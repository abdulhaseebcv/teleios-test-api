const express = require('express');
const router = express.Router();
const {submitForm} = require('../controllers/formController');

// Route for submitting the form
router.post('/', submitForm);

module.exports = router;
