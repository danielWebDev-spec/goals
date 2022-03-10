const express = require("express");
const router = express.Router();
// prettier-ignore
const { getGoals, createGoal, updateGoal, deleteGoal } = require("../controllers/goalCtrl.js");
const { protect } = require("../middleware/authMiddleware");

// GET, POST, controllers
router.route("/").get(protect, getGoals).post(protect, createGoal);

// PUT, DELETE, controllers
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
