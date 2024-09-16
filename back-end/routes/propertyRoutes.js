const express = require('express');
const router = express.Router();
const{ addProperty, fetchProperty, likeDisLike} = require('../controllers/property');

router.post('/property', addProperty);
router.get('/fetch', fetchProperty);
router.post('/like', likeDisLike);

module.exports = router;