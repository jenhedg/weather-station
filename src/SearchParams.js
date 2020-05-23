import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Enter a location");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=tucson&appid=e0ae73daa44269e68dad05b97669bfe3"
    )
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, [setWeather]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onFocus={() => setLocation("")}
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </label>
      </form>
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
