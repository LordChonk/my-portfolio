import {HashRouter as Router, Route, Routes} from "react-router-dom";
import StartAtTop from "./components/startAtTop.tsx";
import "./style.css";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Qualifications from "./pages/Qualifications.tsx";
import ProgExp from "./pages/ProgExp.tsx";

function App() {
  return(
    <Router>
      <Header />
      <StartAtTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/qualifications" element={<Qualifications />} />
        <Route path="/prog-exp" element={<ProgExp />} />
      </Routes>
    </Router>
  );
}

export default App;