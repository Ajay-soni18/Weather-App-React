import React from "react";
import { Cloud, Droplets, Wind } from "lucide-react";
import { format } from "date-fns";

const CurrentWeather = ({ data }) => {
  return (
    <div className="glass-effect rounded-2xl p-8 mt-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">{data.city}</h2>
          <p className="text-gray-300">
            {format(new Date(), "EEEE, MMMM d, yyyy")}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
          alt={data.description}
          className="w-32 h-32"
        />
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-7xl font-bold">
              {Math.round(data.temperature)}°C
            </p>
            <p className="text-xl text-gray-300 capitalize mt-2">
              {data.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-effect rounded-xl p-4">
              <div className="flex items-center text-blue-400 mb-2">
                <Droplets size={24} className="mr-2" />
                <span className="text-lg">Humidity</span>
              </div>
              <p className="text-2xl font-bold">{data.humidity}%</p>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <div className="flex items-center text-blue-400 mb-2">
                <Wind size={24} className="mr-2" />
                <span className="text-lg">Wind</span>
              </div>
              <p className="text-2xl font-bold">
                {Math.round(data.windSpeed)} km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
