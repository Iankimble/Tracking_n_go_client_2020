const jwt = require("jsonwebtoken");

require("dotenv").config();

const expressJwt = require("express-jwt");
const _ = require("lodash");

// const User = require();

exports.signup = async (req, res) => {
  const userExist = await User.finOne({});
  if (userExists)
    return res.status(403).json({
      error: "This email already exists.",
    });
  const user = await new User(req.body);
  await user.save();
  res.status(200).json({ message: "Signup successful" });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(403)
        .json({ error: "User could not be found with those credentials." });
    }
    if (!user.authenticate(password)) {
      return res.status(403).json({
        error: "email and password do not match",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("tkn", token, { expire: new Date() + 9999 });
    const { _id, firstName, lastName, email } = user;
    return res.json({ token, user: { _id, email, fistName, lastName } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("tkn");
  return res.json({ message: "User is signed out." });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});
