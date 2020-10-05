const express = require("express");

const { signup, signin, signout } = require("");
const { userById } = require("");
const { userSignupValidator } = require("");

const router = express.Router();

// Sign up
router.post();

// Sign in
router.post();

// Sign out
router.get();

router.param("");

module.exports = router;
