import React from "react";
import "./Home.scss";
import SearchParams from "./components/SearchParams/SearchParams";
import ErrorBoundary from "./components/shared/ErrorBoundary";

function Home() {
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

export default Home;
