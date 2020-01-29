import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary pegou um erro", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => navigate("/"), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          Houve um erro com este link. <Link to="/">Clique aqui</Link> para
          retornar para a homepage ou espere 5 segundos.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
