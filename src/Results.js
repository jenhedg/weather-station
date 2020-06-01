import React from "react";

const Results = ({ weather, temp, location }) => {
  return (
    <div className="results">
      <h2>City: {location}</h2>
      <h2>Current Temp is {temp}</h2>
    </div>
  );
};

export default Results;
