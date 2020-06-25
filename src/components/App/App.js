import React from "react";
import "../../index.scss";

import SearchParams from "../SearchParams/SearchParams";
// import ErrorBoundary from "../shared/ErrorBoundary";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Weather Station</h1>
      </header>
      <main className="content">
        {/* <ErrorBoundary> */}
        <SearchParams />
        {/* </ErrorBoundary> */}
      </main>
    </div>
  );
}

export default App;
