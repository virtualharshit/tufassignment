import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
