import React from "react";
import CurrentWeather from "./CurrentWeather";

const Results = ({ weather }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      weather.map(item => return (
      {
        <CurrentWeather
          city={weather.city}
          currConditions={weather.currConditions}
          currTemp={weather.currTemp}
        />
      }
      ; )
    </div>
  );
};

export default Results;
