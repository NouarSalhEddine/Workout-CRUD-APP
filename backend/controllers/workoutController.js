const workoutModel = require("../models/workoutModel");
const mongoose = require("mongoose");

//Get all workouts

const readWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });

  try {
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get a single workout

const readWorkout = async (req, res) => {
  const _id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await workoutModel.findById(_id);

  res.status(200).json(workout);
};
//Create Workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const workout = await workoutModel.create({ title, reps, load });

  try {
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete workout

const deleteWorkout = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not such workout" });
  }

  const workout = await workoutModel.findByIdAndDelete({ _id: id });

  res.status(200).json(workout);
};
// Update Workout

const updateWorkout = async (req, res) => {
  const  { id } = req.params;
  console.log(mongoose.Types.ObjectId.isValid(id));
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not such workout" });
  }
  const workout = await workoutModel.findOneAndUpdate({_id: id},{...req.body});

  res.status(200).json(workout)
};
module.exports = {
  readWorkouts,
  readWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};
