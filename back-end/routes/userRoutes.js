const express = require('express');
const router = express.Router();
const { fetchAllUsers } = require('../controllers/fetchAllUsers');
const { registerUser, loginUser } = require('../controllers/register');
const { fetchUser } = require('../controllers/fetchuser');
const {profilePart, propertyPart} = require('../controllers/editProfile');

router.get('/all', fetchAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', fetchUser);
router.put('/profile-update', profilePart);
router.put('/property-update', propertyPart);

module.exports = router;
