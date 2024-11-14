const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    title: {
      type: String,
      required: [true, 'Please provide title'],
      maxlength: 200,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    tags: {
      type: String,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    jobLocation: {
      type: String,
    },
     image: {
      type: String,
      default: '/images/no-image.png',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
