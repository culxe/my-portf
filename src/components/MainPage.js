// src/components/MainPage.js
import React from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default MainPage;
