import React from "react";
import "../../index.scss";

const Results = ({ weather }) => {
  if (weather) {
    console.log(weather);
    return (
      <div className="results">
        <div className="results-top">
          <div className="results-locale">
            <h3 className="results-city">{weather.name}</h3>
            <div className=" results-datetime">
              <p>{new Date().toLocaleTimeString()}</p>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <h3 className="results-temp">{Math.round(weather.main.temp)}&deg;</h3>
        </div>
        <div className="results-wrap-bottom">
          <div className="icon-wrap">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png
            `}
              alt="weather icon"
            />
          </div>
          <h3>
            Current Conditions:
            {` ${weather.weather[0].main} - ${weather.weather[0].description}`}
          </h3>
          <h3>It feels like {Math.round(weather.main.feels_like)} degrees</h3>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
