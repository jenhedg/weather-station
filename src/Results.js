import React from "react";

const Results = ({ weather, date }) => {
  return (
    <div className="results">
      {weather === null ? (
        <div></div>
      ) : (
        <div className="weather">
          <h3>City: {weather.name}</h3>
          {console.log(date)}
          <p>{new Date().toLocaleTimeString()}</p>
          <p>{new Date().toLocaleDateString()}</p>
          <h3>
            Current Conditions:
            {` ${weather.weather[0].main} - ${weather.weather[0].description}`}
          </h3>
          <h3>Current Temperature {weather.main.temp} degrees.</h3>
          <h3>It feels like {weather.main.feels_like} degrees</h3>
        </div>
      )}
    </div>
  );
};

export default Results;
