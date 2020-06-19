import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>There was an error.</h1>{" "}
          <h2>Please reload the page and enter a valid city.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
