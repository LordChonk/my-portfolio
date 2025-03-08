import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import "./style.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Qualifications from "./pages/Qualifications.jsx";
import ProgExp from "./pages/ProgExp.jsx";

function App() {
  return(
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to /home */}
      <Route path="/home" element={<Home />} />
        <Route path ="/qualifications" element={<Qualifications />} />
        <Route path="/prog-exp" element={<ProgExp />} />
      </Routes>
    </Router>
  );
}

export default App;