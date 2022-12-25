const express = require("express");
const {
  readWorkouts,
  readWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts

router.get("/", readWorkouts);

//GET a single workout

router.get("/:id", readWorkout);

//POST a new workout

router.post("/", createWorkout);

// DELETE a workout

router.delete("/:id", deleteWorkout);

// UPDATE a workout

router.patch("/:id", updateWorkout);

module.exports = router;
