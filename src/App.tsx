import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import "./style.css";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Qualifications from "./pages/Qualifications.js";
import ProgExp from "./pages/ProgExp.js";

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/qualifications" element={<Qualifications />} />
        <Route path="/prog-exp" element={<ProgExp />} />
      </Routes>
    </Router>
  );
}

export default App;