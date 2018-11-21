/**
 * Settings route that defines settings logic.
 * @module settings
 */

/* Dependencies */
var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');
var User = require('../models/user');

/* Routes */
router.get('/', auth.isAuthenticated, function(req, res) {

  res.render('dashboard/settings');
  // res.send('Settings Page'); // Remove when using res.render()
});

router.get('/change-password', auth.isAuthenticated, function(req, res) {
  
  // res.render();
  res.send('Change Password Page'); // Remove when using res.render()
});

/* Export Module */
module.exports = router;