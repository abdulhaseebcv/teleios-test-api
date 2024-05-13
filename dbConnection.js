const mongoose = require('mongoose');

const connectToMongoDB = () => mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to MongoDB')).catch((error) => console.log('Error in MongoDB connection=>', error));

module.exports = connectToMongoDB;