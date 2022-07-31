import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar";

import { WorkoutContextProvider } from "./context/WorkoutContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <Navbar />
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>
);
