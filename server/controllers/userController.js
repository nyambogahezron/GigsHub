const Company = require('../models/companyModel');
const asyncWrapper = require('../middleware/asyncHandler');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createTokenUser } = require('../utils');

// @desc CreateCompany
// @endpoint   POST /api/v1/company
// @access  Protected

const createCompany = asyncWrapper(async (req, res) => {
  const user = req?.user?.userId;
  const email = req.body.email;

  const is_Company = await Company.findOne({ email })

  if (is_Company) {
    throw new CustomError.UnauthorizedError('Invalid Credetials');
  }

  if (!user) {
    throw new CustomError.UnauthorizedError('Unauthorized Access, please try again');
  }

  const company = await Company.create({ ...req.body, createdBy: user });

  if (!company) {
    throw new CustomError.BadRequestError('Something went wrong , try again');
  }

  res.status(StatusCodes.CREATED).json({
    msg: 'company created Successful',
    company: company,
  });
});

// @desc Update Company
// @endpoint   PATCH /api/v1/company/:id
// @access  Protected

const updateCompany = asyncWrapper(async (req, res) => {
  const userId = req?.user?.userId;
  const companyId = req.params.id;
  const email = req.body.email;


   if (!userId) {
    throw new CustomError.UnauthorizedError('Unauthorized Access, please try again');
  }

  const company = await Company.findOneAndUpdate(
    { createdBy: userId, _id: companyId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!company) {
    throw new CustomError.BadRequestError('Invalid Details');
  }

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Company Updated Successful', company: company });
});


// @desc Update Company
// @endpoint   PATCH /api/v1/company/:id
// @access  Protected

const updateUser = asyncWrapper(async (req, res) => {
  const id = req?.user?.id;
  const name = req?.user?.name;
  const email = req.params.email;
  const password = req.body.email;


   if (!id) {
    throw new CustomError.UnauthorizedError('Unauthorized Access, please try again');
  }

  const user = await Company.findOneAndUpdate(
    {  _id: id }, req.body,
    { new: true, runValidators: true }
  );

  if (!user) {
    throw new CustomError.BadRequestError('Invalid Details');
  }

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Company Updated Successful', company: company });
});


// @desc  Delete company
// @endpoint   DELETE /api/v1/company/:id
// @access  Protected

const deleteCompany = asyncWrapper(async (req, res) => {
  const userId = req.user.userId;
  const companyId = req.params.id;

  const company = await Company.findOneAndDelete({ createdBy: userId, _id: companyId });
  if (!company) {
    throw new CustomError.BadRequestError('Invalid Details');
  }

  res.status(StatusCodes.OK).json({ msg: 'Company Deleted Successful' });
});


// @desc  get single company
// @endpoint   GET /api/v1/company/:id
// @access  Public

const getSingleCompany = asyncWrapper(async (req, res) => {
  const company = await Company.findOne({ _id: req.params.id });
  if (!company) {
    throw new CustomError.BadRequestError('No company available');
  }

  res.status(StatusCodes.OK).json({ company: company });
});



module.exports = {
  createCompany,
  updateCompany,
  deleteCompany,
  getSingleCompany,
  updateUser,
};
