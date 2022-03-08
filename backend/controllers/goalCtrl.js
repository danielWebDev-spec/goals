// GET
const getGoals = (req, res) => {
  res.status(200).json({ msg: "get goals" });
};

// POST
const createGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ msg: "create goal" });
};

// UPDATE
const updateGoal = (req, res) => {
  res.status(200).json({ msg: `update goal ${req.params.id}` });
};

// DELETE
const deleteGoal = (req, res) => {
  res.status(200).json({ msg: `delete goal ${req.params.id}` });
};

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
