const User = require('../models/Users');

module.exports.fetchUser = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne( {email} );
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    const photo = user.photo ? `data:image/jpeg;base64,${user.photo.toString('base64')}` : null;

    res.json({
      success: true,
      message:"success",
      user: {
        ...user.toObject(),
        photo,
      },
    });
  } catch (error) {
    res.json({ success: false, message: `Error fetching user: ${error.message}` });
  }
};
