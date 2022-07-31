import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

export default function Form() {
  const { dispatch } = useWorkoutContext();
  const [title, settitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const body = { title, load, reps };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = await data.json();
    if (data.ok) {
      setLoad("");
      setReps("");
      settitle("");
      console.log(data);
      dispatch({
        type: "CREATE_WORKOUT",
        payload: json,
      });
      if (!data.ok) {
        setError(data.error);
      }
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <strong>Title : </strong>
      <input
        type="text"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <strong>Load(kg) : </strong>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <strong> reps : </strong>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button type="submit">Add new workout</button>
      <div>{error && <div>{error}</div>} </div>
    </form>
  );
}
