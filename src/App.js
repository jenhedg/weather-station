import React from "react";
import "./App.scss";
import SearchParams from "./SearchParams";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Weather Station</h1>
      </header>
      <main className="container-inner">
        <ErrorBoundary>
          <SearchParams />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
