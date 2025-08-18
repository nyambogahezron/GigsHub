const Job = require('../models/jobModel');
const asyncWrapper = require('../middleware/asyncHandler');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createTokenUser } = require('../utils');

// @desc Create Gig
// @endpoint   POST /api/v1/gigs/create
// @access  Protected

const createGig = asyncWrapper(async (req, res) => {
  const user = req.user?.userId;
  console.log(user)

  const gig = await Job.create({ ...req.body, createdBy: user });

  if (!gig) {
    throw new CustomError.BadRequestError('Something went wrong , try again');
  }
  
  // Split tags if necessary
  const tags = req.body.tags ? req.body.tags.split(',') : [];
  
  res.status(StatusCodes.CREATED).json({
    msg: 'Gig created Successful',
    gig: gig,
  });
});

// @desc Update Gig
// @endpoint   PATCH /api/v1/gigs/update/:id
// @access  Protected

const updateGig = asyncWrapper(async (req, res) => {
  const userId = req.user.userId;
  const jobId = req.params.id;

  const job = await Job.findOneAndUpdate(
    { createdBy: userId, _id: jobId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new CustomError.BadRequestError('Invalid Details');
  }

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Gig Updated Successful', gig: job });
});

// @desc  delete Gig
// @endpoint   DELETE /api/v1/gigs/delete/:id
// @access  Protected

const deleteGig = asyncWrapper(async (req, res) => {
  const userId = req.user.userId;
  const jobId = req.params.id;

  const job = await Job.findOneAndDelete({ createdBy: userId, _id: jobId });
  if (!job) {
    throw new CustomError.BadRequestError('Invalid Details');
  }

  res.status(StatusCodes.OK).json({ msg: 'Gig Deleted Successful' });
});

// @desc  get all Gig
// @endpoint   GET /api/v1/gigs
// @access  Public

const getAllGigs = asyncWrapper(async (req, res) => {
  const { search, status, jobType, sort, tags } = req.query;

  const queryObject = {};

if (search) {
  const regex = new RegExp(search, 'i');
  queryObject.$or = [
    { title: { $regex: regex } },
    { position: { $regex: regex } }, 
    { description: { $regex: regex } }, 
    { tags: { $regex: regex } }, 
  ];
}

  if (status && status !== 'all') {
    queryObject.status = status;
  }
  
  if (jobType && jobType !== 'all') {
    queryObject.jobType = jobType;
  }

  if (tags) {
    queryObject.tags = { $regex: tags, $options: 'i' };
  }
  let result = Job.find(queryObject);

  if (sort === 'latest') {
    result = result.sort('-createdAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt');
  }
  if (sort === 'a-z') {
    result = result.sort('position');
  }
  if (sort === 'z-a') {
    result = result.sort('-position');
  }


  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  if (!jobs) {
    throw new CustomError.BadRequestError('No job available');
  }

  res.status(StatusCodes.OK).json({ gigs: jobs ,totalJobs, numOfPages  });
});

// @desc  get single Gig
// @endpoint   GET /api/v1/gigs/:id
// @access  Public

const getSingleGig = asyncWrapper(async (req, res) => {
  const job = await Job.findOne({ _id: req.params.id });
  if (!job) {
    throw new CustomError.BadRequestError('No job available');
  }

  res.status(StatusCodes.OK).json({ gig: job });
});

// @desc  get user Gig
// @endpoint   GET /api/v1/userGigs
// @access  Protected

const getUserGigs = asyncWrapper(async (req, res) => {
  const job = await Job.find({ createdBy: req.user.userId }).sort('createdAt');
  if (!job) {
    throw new CustomError.BadRequestError('No job available for this user');
  }

  res.status(StatusCodes.OK).json({ userGigs: job });
});

module.exports = {
  createGig,
  updateGig,
  deleteGig,
  getAllGigs,
  getSingleGig,
  getUserGigs,
};
