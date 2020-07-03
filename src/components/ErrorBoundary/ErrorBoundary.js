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
        <div className="error">
          <h1 className="error-msg">Please enter a valid city.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
