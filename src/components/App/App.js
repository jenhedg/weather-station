import React from "react";
import "../../index.scss";
import SearchParams from "../SearchParams/SearchParams";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Weather Station</h1>
      </header>
      <main className="content">
        <SearchParams />
      </main>
      <footer>
        <span>
          &#169;2020 Jennifer Hedgcock | Made with &#10084; and React.js
        </span>
      </footer>
    </div>
  );
}

export default App;
