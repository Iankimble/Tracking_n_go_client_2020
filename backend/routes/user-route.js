const express = require("express");

const {
  userById,
  getUser,
  updateUser,
  deleteUser,
  hasAuthorization,
} = require("");

const { requireSignin } = require("");

const router = express.Router("");

// Get user account
router.get();

// Update user account
router.put();

// Delete user account
router.delete();

router.param();

module.exports = router;
