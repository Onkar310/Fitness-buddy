require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");

app.use(express.json());

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
