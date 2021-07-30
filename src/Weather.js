import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="temperature">20℃</div>
      <div className="weatherConditions">Cloudy</div>
      <div className="weatherData">
        Precipitation: 87%
        <br />
        Wind: 5kmh
      </div>
    </div>
  );
}
