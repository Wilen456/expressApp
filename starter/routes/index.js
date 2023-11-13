var express = require('express');
var router = express.Router();
const { getFakeData } = require('../fakeData');

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET dashboard page. */
router.get('/dashboard', async function (req, res, next) {
  const todos = await getFakeData('todos');
  res.render('dashboard', { title: 'Dashboard', todos });
});

/* GET profile page. */
router.get('/profile', async function (req, res, next) {
  const user = await getFakeData('users/1'); // Assuming user with ID 1
  res.render('profile', { title: 'Profile', user });
});

module.exports = router;
