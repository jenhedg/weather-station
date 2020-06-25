import React, { useState } from "react";
import Results from "../Results/Results";
import ErrorBoundary from "../shared/ErrorBoundary";
import "../../index.scss";

const SearchParams = (props) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function reqData() {
    const apiKey = "e0ae73daa44269e68dad05b97669bfe3";
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );
    const weather = await url.json();
    setWeather(weather);
    console.log(weather.cod, weather.message);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="location">
          <input
            id="location"
            value={city}
            placeholder="Enter a city"
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>
        <button className="search-params-btn" onClick={(event) => reqData()}>
          Submit
        </button>
      </form>
      <ErrorBoundary>
        <Results weather={weather} />
      </ErrorBoundary>
    </div>
  );
};

export default SearchParams;
