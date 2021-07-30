import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="forecastGrid">
      <div className="forecastDays">
        <div className="weekday"> SAT</div>
        <div className="forecastIcon">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={20}
            animate={true}
          />
        </div>
        <div className="forecastTemperature">10℃</div>
      </div>

      <div className="forecastDays">
        <div className="weekday"> SUN</div>
        <div className="forecastIcon">
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={20}
            animate={true}
          />
        </div>
        <div className="forecastTemperature">10℃</div>
      </div>

      <div className="forecastDays">
        <div className="weekday"> MON</div>
        <div className="forecastIcon">
          <ReactAnimatedWeather
            icon="FOG"
            color="black"
            size={20}
            animate={true}
          />
        </div>
        <div className="forecastTemperature">10℃</div>
      </div>

      <div className="forecastDays">
        <div className="weekday"> TUE</div>
        <div className="forecastIcon">
          <ReactAnimatedWeather
            icon="SNOW"
            color="black"
            size={20}
            animate={true}
          />
        </div>
        <div className="forecastTemperature">10℃</div>
      </div>

      <div className="forecastDays">
        <div className="weekday"> WED</div>
        <div className="forecastIcon">
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={20}
            animate={true}
          />
        </div>
        <div className="forecastTemperature">10℃</div>
      </div>
    </div>
  );
}
