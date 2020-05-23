import React, { useState } from "react";

// api.openweathermap.org/data/2.5/weather?q={city name}&appid=5a8880d75c5a69f9efd3b12704b19e3a

const SearchParams = () => {
  const [location, setLocation] = useState("Enter a location");

  // useEffect(() => {});

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
