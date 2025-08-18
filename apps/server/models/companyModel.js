const mongoose = require('mongoose');
const validator = require('validator');

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, 'Please Provide Email'],
      unique: [true, 'Invalid Details'],
      maxlength: [150, 'Invalid Email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide valid email',
      },
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Provide company phone number'],
    },
    website: {
      type: String,
      required: [true, 'Provide company website'],
    },
    logo: {
      type: String,
      default: '/images/no-image.png',
    },
    location: {
      type: String,
      default: 'my city',
      required: [true, 'Provide Location'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Company', CompanySchema);
