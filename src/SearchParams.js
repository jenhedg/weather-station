import React, { useState } from "react";
import Results from "./Results";

const SearchParams = (props) => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [weather, setWeather] = useState(null);

  async function reqData() {
    const apiKey = "e0ae73daa44269e68dad05b97669bfe3";
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );
    const res = await url.json();
    console.log(res);
    const {
      main: { temp, feels_like, temp_min, temp_max },
      name,
    } = res;

    setWeather(res || []);
    console.log(temp, feels_like, temp_min, temp_max, name);
    console.log(res.length);
    setTemp(temp || []);
    setCity(city || []);
    setLocation(name || []);
    setFeelsLike(feels_like || []);
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
      <Results
        weather={weather}
        temp={temp}
        location={location}
        feelsLike={feelsLike}
      />
    </div>
  );
};

export default SearchParams;
