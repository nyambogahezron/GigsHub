const createTokenUser = require('./createTokenUser');
const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt');

module.exports = {
  createJWT,
  isTokenValid,
  createTokenUser,
  attachCookiesToResponse,
};
