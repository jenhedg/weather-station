import React from "react";
import "./App.css";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Weather Station</h1>
      </header>
      <main className="container-inner">
        <SearchParams />
      </main>
    </div>
  );
}

export default App;
