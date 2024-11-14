const express = require('express');
const router = express.Router();
const upload = require('../utils/filesUpload');
const multer = require("multer");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require('../controllers/authController');

router.post('/register', upload.single('profileImage'), registerUser);
router.post('/login', loginUser);
router.delete('/logout', logoutUser);

module.exports = router;