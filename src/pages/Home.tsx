import React from "react";
import AboutSection from "../components/AboutSection.tsx";
import FreeTimeSection from "../components/FreeTimeSection.tsx";
import Footer from "../components/Footer.tsx";

const Home: React.FC = () => {
  return (
    <div>
      <AboutSection />
      <FreeTimeSection />
      <Footer />
    </div>
  );
}

export default Home;
