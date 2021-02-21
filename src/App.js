import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import "./App.scss";
function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
