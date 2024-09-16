const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    email: String,
    sizeWidth: String,
    sizeLength: String,
    floor: Number,
    bedroom: Number,
    bathroom: String,
    hallWidth: String,
    hallLength: String,
    kitchenLength: String,
    kitchenWidth: String,
    varanda: String,
    portigue: String,
    carparking: String,
    hospital: String,
    school: String,
    market: String,
    location: String,
    price: String,
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;