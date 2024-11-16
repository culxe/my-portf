import React from "react";
// import { MailIcon } from "@heroicons/react/solid";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative bg-black bg-cover bg-center font-rubik text-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-customBlue"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center py-40 px-6">
        <h1 className="text-3xl sm:text-4xl font-medium mb-4">Hi there, I'm Indiana Namaul Husnah.</h1>
        <p className="mb-8 leading-relaxed max-w-5xl">
          Fresh graduate in Computer Engineering passionate about Machine Learning, Data Science, and Data Analysis. Experienced in building and deploying machine learning models with a specialization in Natural Language Processing and
          Computer Vision. Key projects include the development of a sentiment analysis model for tourism applications and a 2D pixel game designed for accessibility in sign language learning. Certified Microsoft Azure AI Engineer
          Associate, with technical proficiencies in Python, PyTorch, TensorFlow, and data analysis tools like Pandas, Numpy, and Tableau. Actively applies skills in problem-solving, project management, and teamwork through project
          collaborations and leadership roles, such as Head of Human Resource Development at a university theatre organization.
          <br />
          <br />I strive to leverage my technical skills and practical experience to contribute to innovative projects in AI and machine learning that create real-world impact.
        </p>

        {/* Buttons for Contact and Projects */}
        <div className="flex justify-center gap-4">
          <a href="#contact" className="inline-flex items-center text-white bg-customBrown hover:bg-customHover transition duration-300 shadow-md hover:shadow-lg py-2 px-6 rounded-md">
            Contact Me
          </a>
          <a href="#projects" className="inline-flex items-center text-white  bg-customBrown hover:bg-customHover transition duration-300 shadow-md hover:shadow-lg py-2 px-6 rounded-md">
            My Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="mailto:indinamaull@gmail.com" className="text-white hover:text-[#A0522D] transition duration-500" aria-label="Email">
            {/* <MailIcon className="w-6 h-6" /> */}
          </a>
          <a href="https://www.linkedin.com/in/indiana-namaul/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A0522D] transition duration-500" aria-label="LinkedIn">
            {/* <FaLinkedin className="w-6 h-6" /> */}
          </a>
          <a href="https://github.com/culxe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#A0522D] transition duration-500" aria-label="GitHub">
            {/* <FaGithub className="w-6 h-6" /> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
