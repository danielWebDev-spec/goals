const asyncHandler = require("express-async-handler");

// GET
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "get goals" });
});

// POST
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ msg: "create goal" });
});

// UPDATE
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `update goal ${req.params.id}` });
});

// DELETE
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `delete goal ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
