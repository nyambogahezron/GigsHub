const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Provide name'],
      minlength: 3,
      maxlength: [50, 'Please Name Too Long'],
    },
    email: {
      type: String,
      required: [true, 'Please Provide Email'],
      unique: true,
      maxlength: [150, 'Invalid Email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide valid email',
      },
    },
    role: {
      type: String,
      enum: ['Job Seeker', 'Employer'],
      default: 'jobSeeker',
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
      minlength: 6,
    },
    userImg: {
      type: String,
      default: 'public/user.jpg', 
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;