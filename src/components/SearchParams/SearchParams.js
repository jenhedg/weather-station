import React, { useState } from "react";
import Results from "../Results/Results";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "../../index.scss";

const SearchParams = (props) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  // const [error, errorMsg] = useState("Please enter a valid city.");

  async function reqData() {
    const apiKey = "e0ae73daa44269e68dad05b97669bfe3";
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );
    const weather = await url.json();

    if (url.ok) {
      setWeather(weather);
    }

    console.log(url.ok, url.status === 400);
  }

  function handleSubmit() {
    reqData();
    setCity("");
  }

  return (
    <div className="search-params">
      <ErrorBoundary>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
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
          {/*Todo: Test input submit on mobile and if works ok rm btn below */}
          {/* <button className="search-params-btn" onClick={(event) => reqData()}>
          Submit
        </button> */}
        </form>

        <Results weather={weather} />
      </ErrorBoundary>
    </div>
  );
};

export default SearchParams;
