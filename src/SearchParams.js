import React, { useState } from "react";

const SearchParams = (props) => {
  const [city, setCity] = useState("");

  const fetchData = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0ae73dsdsfsfsdaa44269e68dad05b97669bfe3`
    )
      .then((response) => response.json())
      .then((response) => console.log("response:", response))
      .catch((error) => {
        console.log(error, error.message);
        throw error;
      });
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={city}
            placeholder="Enter a city"
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>
      </form>
      <button onClick={fetchData}>Submit</button>
    </div>
  );
};

export default SearchParams;
