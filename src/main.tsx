import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
import "./styles.css";

if (!navigator.geolocation) {
  alert("Geolocation OFF :(");
  throw new Error("Geolocation OFF :(");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
