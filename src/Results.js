import React from "react";

const Results = ({ weather }) => {
  return (
    <div className="results">
      {weather === null ? (
        <div></div>
      ) : (
        <div className="weather">
          <h3>City:{weather.name}</h3>
          <h3>Current Temperature {weather.main.temp} degrees.</h3>
          <h3>It feels like: {weather.main.feels_like}</h3>
        </div>
      )}
    </div>
  );
};

export default Results;
