const Form = require('../models/formModel');

// Function for submitting the form
const submitForm = async (req, res) => {
  try {
    await Form.create(req.body);
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form. Please try again later' });
  }
};

module.exports = { submitForm };
