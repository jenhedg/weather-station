import React, { useState } from "react";
import Results from "./Results";

const SearchParams = (props) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function reqData() {
    const apiKey = "e0ae73daa44269e68dad05b97669bfe3";
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );
    const res = await url.json();
    setWeather(res || []);
    console.log(res);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reqData();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={city}
            placeholder="Enter a city"
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <Results weather={weather} />
    </div>
  );
};

export default SearchParams;
