// @desc Register new user data
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.status(200).json({ msg: "Register User" });
};

// @desc login user data
// @route POST /api/users
// @access Public
const loginUser = (req, res) => {
  res.status(200).json({ msg: "Login User" });
};

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = (req, res) => {
  res.status(200).json({ msg: "Get user data" });
};

module.exports = { registerUser, loginUser, getMe };
