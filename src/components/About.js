import React from "react";

export default function About() {
  return (
    <section id="about" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./background-about.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay gelap dengan transparansi */}
      <div className="relative z-10 container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Indiana Namaul.
              <br className="hidden lg:inline-block" />
              I'm Fresh Graduate in Computer Engineering.
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm seeking a challenging role as a machine learning engineer, data analyst, and data science. Experienced in developing machine learning models with Natural Language Processing and Computer Vision. Proficiency in ML, Deep
              Learning, Python, C/C++, HTML, CSS, MySQL, and Bash, I have a certification as an Azure AI Engineer Associate.
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="inline-flex text-white" style={{ backgroundColor: "#875200", padding: "0.5rem 1.5rem", borderRadius: "0.5rem" }}>
                Contact Me
              </a>
              <a href="#projects" className="ml-4 inline-flex text-white" style={{ backgroundColor: "#453C36", padding: "0.5rem 1.5rem", borderRadius: "0.5rem" }}>
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
