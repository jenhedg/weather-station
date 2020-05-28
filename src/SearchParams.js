import React, { useState } from "react";
import Results from "./Results";

const SearchParams = (props) => {
  const [city, setCity] = useState("Tucson");
  const [data, setData] = useState([]);

  async function reqData() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0ae73daa44269e68dad05b97669bfe3`
    );
    const json = await res.json();
    const { base } = json;
    const {
      main: { temp, feels_like, temp_min, temp_max },
    } = json;
    console.log(json);
    // const data = {results: weather}
    // const data = Object.values(json);
    // console.log("data", data[3]);
    setData(base);
    setData(temp);
    console.log(temp, feels_like, temp_min, temp_max);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reqData();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={city}
            placeholder="Enter a city"
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {/* {json.map((item, i) => (
          <li key={i}>Current Temp: {main.temp}</li>
        ))} */}
      </ul>
      {/* <Results data={data} /> */}
    </div>
  );
};

export default SearchParams;
