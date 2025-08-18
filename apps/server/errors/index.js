const CustomAPIError = require('./customError');
const UnauthenticatedError = require('./unauthenticated');
const NotFoundError = require('./notFound');
const BadRequestError = require('./badRequest');
const UnauthorizedError = require('./unauthorized');
module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
};
