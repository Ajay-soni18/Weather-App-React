import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-6 py-3 text-white bg-transparent glass-effect rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute right-3 p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 focus:outline-none"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
