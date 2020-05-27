import React, { useState } from "react";

const SearchParams = (props) => {
  const [city, setCity] = useState("Tucson");
  const [data, setData] = useState([]);

  // async function reqData() {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0ae73daa44269e68dad05b97669bfe3`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => Object.values(response))
  //     .then((response) => console.log("response:", response[3]));

  //   setData(response || []);
  // }

  async function reqData() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0ae73daa44269e68dad05b97669bfe3`
    );
    const json = await res.json();
    const data = Object.values(json);
    console.log("data", data);
    setData(data);
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
      <p>
        {" "}
        {data.map((info) => {
          return <p key={info}>tests</p>;
        })}
      </p>
    </div>
  );
};

export default SearchParams;
