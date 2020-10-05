const _ = require("lodash");
const User = require("");
const fs = require("fs");
const { exec } = require("child_process");

exports.UserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found.",
      });
    }
    req.profile = user;
    next();
  });
};

exports.hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.profile._id === req.auth._id;
  if (err || !user) {
    return res.status(400).json({
      error: "You do not have authorization to do this action.",
    });
  }
  next();
};

exports.getUser = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.updateUser = (req, res, next) => {
  let user = req.profile;
  user = _.extend(usr, req.body);
  user.updated = Date.now();

  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: "an error occured hen updating the users info.",
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json({ user });
  });
};

exports.deleteUser = (req, res, next) => {
  let user = req.profile;
  user.remove((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "error",
      });
    }
    res.json({ msg: "user account has been successfully deleted." });
  });
};
