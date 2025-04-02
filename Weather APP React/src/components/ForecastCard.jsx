import React from "react";
import { format } from "date-fns";

const ForecastCard = ({ date, temperature, icon, description }) => {
  return (
    <div className="weather-card glass-effect rounded-xl p-6 text-center text-white">
      <p className="text-lg font-semibold text-gray-300 mb-3">
        {format(new Date(date * 1000), "EEE")}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="w-20 h-20 mx-auto"
      />
      <p className="text-3xl font-bold mb-2">{Math.round(temperature)}°C</p>
      <p className="text-gray-300 capitalize text-sm">{description}</p>
    </div>
  );
};

export default ForecastCard;
