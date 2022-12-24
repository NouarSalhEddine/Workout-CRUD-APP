const workoutModel = require("../models/workoutModel");

//Get all workouts

const readWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({});

  try {
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get a single workout

const readWorkout = async (req, res) => {
  const _id = req.params.id;
  const workout = await workoutModel.findById(_id);

  try {
    res.status(200).json(workout);
  } catch {
    res.status(400).json({ error: error.message });
  }
};
//Create Workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const workout = await workoutModel.create( {title, reps, load });

  try {
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete workout
// Update Workout

module.exports = {
  readWorkouts,
  readWorkout,
  createWorkout
};
