import { useEffect } from "react";
import Workoutdetails from "./components/workoutDetails";
import "./index.css";
import Form from "./components/Form";
import { useWorkoutContext } from "../src/hooks/useWorkoutContext";

export default function App() {
  const { workout, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_WORKOUT",
          payload: json,
        });
      }
    };

    fetchdata();
  }, [dispatch]);

  return (
    <div className="App">
      <div className="home">
        <div className="workouts">
          {workout &&
            workout.map((workout, index) => (
              <Workoutdetails key={index} workout={workout} />
            ))}
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
