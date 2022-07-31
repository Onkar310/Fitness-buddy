//routes

const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
  getallWorkouts,
} = require("../controllers/workoutControllers");
const workoutModel = require("../model/workoutModel");

//get all workouts
router.get("/", getallWorkouts);

//get a single workout
router.get("/:id", getSingleWorkout);

//adding a workout
router.post("/", createWorkout);

//deleting workout
router.delete("/:id", deleteWorkout);

//updating workout
router.patch("/:id", updateWorkout);

module.exports = router;
