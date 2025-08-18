const User = require("../models/userModel");
const asyncWrapper = require("../middleware/asyncHandler");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../utils");

// @desc    Register user & get token
// @endpoint   POST /api/v1/auth/register
// @access  Public

const registerUser = asyncWrapper(async (req, res) => {
  const { name, email, password, role, image } = req.body;
  const profileImage = req.file;

  /* path to the uploaded profile photo */
  const userImg = profileImage?.path;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials!");
  }
  const user = await User.create({ name, email, password, role, userImg });

  //create a JWT
  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ res, user: tokenUser });

  user.password = undefined;
  res.status(StatusCodes.CREATED).json({
    msg: "User Created Success",
    user: user,
  });
});

// @desc    Login/Auth user & get token
// @endpoint   POST /api/v1/auth/login
// @access  Public

const loginUser = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide all field");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.matchPassword(password);

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ res, user: tokenUser });

  user.password = undefined;

  res.status(StatusCodes.OK).json({ user: user });
});

// @desc    Logout user & destroy token
// @endpoint   POST /api/v1/auth/logout
// @access  Public

const logoutUser = asyncWrapper(async (req, res) => {
  const { userId } = req.body;

  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "Logged out Success!" });
});

module.exports = { registerUser, loginUser, logoutUser };
