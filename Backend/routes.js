const express = require('express');
const router = express.Router();
const { 
  signup, 
  login, 
  signout, 
  freeTrial, 
  saveMessages, 
  saveHistory,
  getUserProfile,
  checkUser 
} = require('../controllers/userController');

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', signout);

// Protected routes (require authentication)
router.post('/free-trial', checkUser, freeTrial);
router.post('/save-message', checkUser, saveMessages);
router.post('/save-history', checkUser, saveHistory);
router.get('/profile', checkUser, getUserProfile);

module.exports = router;