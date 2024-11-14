const jwt = require("jsonwebtoken");

// create JWT Token
const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

// verify JWT Token
const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);


// Attach token to Response
const attachCookiesToResponse = ({ res, user }) => {
  const accessTokenJWT = createJWT({ payload: { user } });

  const oneDay = 1000 * 60 * 60 * 24;
  const longerExp = 1000 * 60 * 60 * 24 * 30;

  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });

};

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
};
