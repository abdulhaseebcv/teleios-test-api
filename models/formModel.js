const mongoose = require('mongoose');

// Define the schema
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  interests: {
    type: [String],
    required: true
  }
});

// Create the model
const Form = mongoose.model('Form', formSchema);

module.exports = Form;
