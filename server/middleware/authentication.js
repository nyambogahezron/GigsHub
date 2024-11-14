const CustomError = require('../errors');
const { attachCookiesToResponse, isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  const { accessToken } = req.signedCookies;
  console.log(accessToken)

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;

      // Attach updated cookies with user information
      attachCookiesToResponse({
        res,
        user: payload.user,
      });

      return next();
    } else {
      throw new CustomError.UnauthenticatedError('Authentication Invalid');
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  authenticateUser,
};
