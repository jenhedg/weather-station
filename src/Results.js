import React from "react";

const Results = ({ weather, temp, location, feelsLike, error }) => {
  return (
    <div className="results">
      {weather === null ? (
        <h1></h1>
      ) : (
        <div className="results">
          <h3>City:{location}</h3>
          <h3>Current Temperature {temp}</h3>
          <h3>It feels like: {feelsLike}</h3>
        </div>
      )}
    </div>
  );
};

export default Results;
