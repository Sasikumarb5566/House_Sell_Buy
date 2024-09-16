const User = require('../models/Users');
const Property = require('../models/Property');

module.exports.profilePart = async(req, res) => {
    const { email, formData } = req.body;
    try {
        const user = await User.findOneAndUpdate({email}, {firstName: formData.firstName  , lastName: formData.lastName, phone: formData.phone, place: formData.place});
        return res.json({success: true});
    } catch(error) {
        console.log("Error in server side while saving the user profile"+error)
    }
}

module.exports.propertyPart = async(req, res) => {
    const { email, formData } = req.body;
    try {
        const property = await Property.findOneAndUpdate({email}, {sizeWidth: formData.sizeWidth  , sizeLength: formData.sizeLength, floor: formData.floor, bedroom: formData.bedroom, bathroom: formData.bathroom, hallWidth: formData.hallWidth  , hallLength: formData.hallLength, kitchenWidth: formData.kitchenWidth, kitchenLength: formData.kitchenLength, varanda: formData.varanda  , portigue: formData.portigue, carparking: formData.carparking, hospital: formData.hospital, school: formData.school, market: formData.market  , location: formData.location, price: formData.price});
        
        return res.json({success: true});

    } catch(error) {
        console.log("Error in server side while saving the user profile"+error)
    }
}