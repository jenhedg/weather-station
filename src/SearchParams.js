import React, { useState } from "react";
import Results from "./Results";

const SearchParams = (props) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [date, setDate] = useState(null);

  async function reqData() {
    const apiKey = "e0ae73daa44269e68dad05b97669bfe3";
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );
    const res = await url.json();
    setWeather(res || []);
    console.log(res);
  }

  function getDate() {
    var date = new Date();
    console.log(date);
    setDate(date);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reqData();
          getDate();
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
