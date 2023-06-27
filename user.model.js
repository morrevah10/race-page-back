const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    email: String,
    identityCard: Number,
    gender: String,
    dateOfBirth: Date,
    phoneNumber: Number,
});

module.exports = mongoose.model('User', userSchema);