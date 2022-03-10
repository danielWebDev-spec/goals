const express = require("express");
const router = express.Router();
// prettier-ignore
const { getGoals, createGoal, updateGoal, deleteGoal } = require("../controllers/goalCtrl.js");

// GET, POST, controllers
router.route("/").get(getGoals).post(createGoal);

// PUT, DELETE, controllers
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
