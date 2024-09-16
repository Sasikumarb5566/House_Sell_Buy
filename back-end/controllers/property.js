const Property = require('../models/Property');

module.exports.addProperty = async(req, res) => {
    const {email, sizeWidth, sizeLength, floor, bedroom, bathroom, hallWidth, hallLength, kitchenLength, kitchenWidth, varanda, portigue, carparking, hospital, school, market, location, price } = req.body;

    const property = new Property({
        email, sizeWidth, sizeLength, floor, bedroom, bathroom, hallWidth, hallLength, kitchenLength, kitchenWidth, varanda, portigue, carparking, hospital, school, market, location, price
    });

    await property.save();
    return res.json({success: true, message: "Successfully store in the database"});
}

module.exports.fetchProperty = async (req, res) => {
    const { email } = req.query;
    //console.log(email);
    try {
      const property = await Property.findOne({ email }).lean();
      if (!property) {
        return res.json({ success: false, message: "Property not found" });
      }
      return res.json({ success: true, message: "success" ,property });
    } catch (error) {
      console.error("Error fetching property:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
};
module.exports.likeDisLike = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const existingProperty = await Property.findOne({ email });

      return res.json({ success: true, message: "Success", property: existingProperty });
  } catch (error) {
    console.log("Error toggling like:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
