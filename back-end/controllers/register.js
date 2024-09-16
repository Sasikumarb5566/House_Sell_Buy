// controllers/register.js
const User = require('../models/Users');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports.registerUser = async (req, res) => {
  const uploadSingle = upload.single('photo');

  uploadSingle(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: 'Error uploading file' });
    }

    const { firstName, lastName, phone, email, password, place } = req.body;
    const photo = req.file ? req.file.buffer : null; // Get the image data as Buffer

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      try {
        const user = new User({
          firstName,
          lastName,
          phone,
          place,
          email,
          password,
          photo,
        });

        await user.save();
        res.json({ success: true, message: 'Registered Successfully' });
      } catch (error) {
        res.json({ success: false, message: 'Try Again...' });
      }
    } else {
      res.json({ success: false, message: 'Email already exists' });
    }
  });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: 'Invalid email or password' });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: 'Invalid email or password' });
    }

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: `Error in checking user: ${error.message}` });
  }
};
