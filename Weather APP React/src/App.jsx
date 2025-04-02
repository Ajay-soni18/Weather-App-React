import React, { useState } from "react";
import axios from "axios";
import { Cloud } from "lucide-react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

const API_KEY = "30b23093b3ad95686b61a7e684bd512c"; // Replace with your OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");

      const currentResponse = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setCurrentWeather({
        city: currentResponse.data.name,
        temperature: currentResponse.data.main.temp,
        description: currentResponse.data.weather[0].description,
        humidity: currentResponse.data.main.humidity,
        windSpeed: currentResponse.data.wind.speed,
        icon: currentResponse.data.weather[0].icon,
      });

      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const dailyForecast = forecastResponse.data.list.filter(
        (item, index) => index % 8 === 0
      );

      setForecast(dailyForecast);
    } catch (err) {
      setError("City not found. Please try again.");
      setCurrentWeather(null);
      setForecast(null);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="glass-effect px-6 py-3 rounded-full flex items-center space-x-3">
            <Cloud className="text-blue-400" size={32} />
            <h1 className="text-3xl font-bold text-white">Weather Dashboard</h1>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && (
          <div className="mt-4 p-4 glass-effect text-red-300 rounded-lg text-center">
            {error}
          </div>
        )}

        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}

        {!currentWeather && !error && (
          <div className="mt-12 text-center text-gray-300">
            <p className="text-lg">
              Enter a city name to get the weather forecast
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
