const User = require('../models/Users');
const Property = require('../models/Property');

module.exports.fetchAllUsers = async (req, res) => {
  try {
    const properties = await Property.find({}, 'email');
    const propertyEmails = properties.map(prop => prop.email);
    //console.log(propertyEmails);
    const users = await User.find({ email: { $in: propertyEmails } });
    //console.log(users.length);
    const usersWithPhotos = users.map(user => ({
      ...user.toObject(),
      photo: user.photo ? `data:image/jpeg;base64,${user.photo.toString('base64')}` : null,
    }));

    res.json({
      success: true,
      users: usersWithPhotos,
    });
  } catch (error) {
    res.json({ success: false, message: `Error fetching users with properties: ${error.message}` });
  }
};
