import React from "react";

export default function CurrentWeather({ city, currConditions, currTemp }) {
  return (
    <div className="currentWeather">
      <h1>Current Weather in {city}</h1>
      <h2>{`${currConditions} - ${currTemp}`}</h2>
    </div>
  );
}
