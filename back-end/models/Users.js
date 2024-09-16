const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    place: String,
    email: String,
    password: String,
    photo: Buffer,
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;