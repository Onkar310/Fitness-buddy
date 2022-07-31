import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

export default function Workoutdetails({ workout }) {
  const { dispatch } = useWorkoutContext();
  const handleClick = async () => {
    console.log("deleted....");
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
    console.log();
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
