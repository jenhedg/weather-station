import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  // const [weather, getWeather] = useState(false);
  //*****/to add an asyc await so that url loads when a city is entered but the request doesnt go out until the button is clicked currently it's hammering the api whenever a string is entered into the seach field
  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e0ae73daa44269e68dad05b97669bfe3`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => console.log("response:", response, response.message))
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }, [location]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Enter a city"
            onFocus={() => setLocation("")}
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </label>
      </form>
      <button onClick="getWeather">Submit</button>
    </div>
  );
};

export default SearchParams;
