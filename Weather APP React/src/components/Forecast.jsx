import React from "react";
import ForecastCard from "./ForecastCard";

const Forecast = ({ data }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-white mb-6">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-white">
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p>Temperature: {item.main.temp}°C</p>
              <p>Weather: {item.weather[0].description}</p>
              <p>Wind Speed: {item.wind.speed} m/s</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
