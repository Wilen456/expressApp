var express = require('express');
var router = express.Router();
const { getFakeData } = require('../fakeData');

/* GET profile page. */
router.get('/', async function(req, res, next) {
  const user = await getFakeData('users/1'); // Assuming user with ID 1
  res.render('profile', { title: 'Profile', user });
});

module.exports = router;
