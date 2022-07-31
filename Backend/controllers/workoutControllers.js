//logic for routes

const workoutModel = require("../model/workoutModel");

//get all workouts
const getallWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });
  res.json(workouts);
};

// get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await workoutModel.findById(id);
  if (!workout) {
    return res.json({ msg: "workout doesn't exists." });
  }
  res.json(workout);
};

//create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  const workout = await workoutModel.create({ title, load, reps });
  res.status(200).json(workout);
};

//delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await workoutModel.findOneAndDelete({ _id: id });
  res.json(workout);
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await workoutModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  res.json(workout);
};

module.exports = {
  createWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
  getallWorkouts,
};
