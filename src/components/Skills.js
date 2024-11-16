import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="relative bg-customBlue font-rubik">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20 w-full">
          {/* Mengganti ChipIcon dengan teks atau menonaktifkan sementara */}
          {/* <ChipIcon className="w-10 inline-block mb-4 text-black" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">CV/Resume</h1>
        </div>

        <div className="text-left text-black w-full">
          {/* Project Experience */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Project Experience</h2>
          <div className="mb-6">
            <ul className="ml-4 list-[circle] text-customColor">
              <li>
                <strong>Game Designer (Telematics Project: Sign Language Game)</strong> — Institut Teknologi Sepuluh Nopember, Sept. 2023 - Jan. 2024
                <ul className="ml-8 list-disc text-black">
                  <li>Designed a 2D pixel game top-down with Aseprite.</li>
                  <li>Designed UI/UX, character and objects, and maps for the game.</li>
                  <li>Involved in evaluations by lecturers and showcased in Computer Engineering Exhibition.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <ul className="ml-4 list-[circle] text-customColor">
              <li>
                <strong>Machine Learning Cohort (Internship)</strong> — Bangkit Academy by Google, GoTo, Traveloka, Feb. - July 2023
                <ul className="ml-8 list-disc text-black">
                  <li>Developed a machine learning model in Capstone Project for a tourism app finder with sentiment analysis (NLP) using TensorFlow.</li>
                  <li>Achieved 80% accuracy with CNN model built from scratch.</li>
                  <li>Enhanced soft skills: time management, critical thinking, project management, and communication.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Education Level */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Education Level</h2>
          <div className="mb-6">
            <ul className="ml-4 list-[circle] text-customColor">
              <li>
                <strong>Institut Teknologi Sepuluh Nopember - Surabaya</strong> — Computer Engineering, Aug. 2020 - Aug. 2024
                <ul className="ml-8 list-disc text-black">
                  <li>
                    <strong>Thesis Title:</strong> “Person Re-identification Multi-modal Data using Swin Transformer”
                    <ul className="ml-8 list-disc text-black">
                      <li>Developed and researched a machine learning model for person re-identification using Vision Transformer with PyTorch.</li>
                      <li>Analyzed model performance and visualized the model using Grad-CAM.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
          <div className="mb-6">
            <h3>
              <strong>Technical Skills</strong>
            </h3>
            <ul className="ml-8 list-[circle] text-black">
              <li>Programming: Python, HTML, CSS, MySQL, Bash, C/C++, Git</li>
              <li>
                Machine Learning: Deep Learning, Natural Language Processing, Computer Vision (
                <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
                  PyTorch
                </a>
                , TensorFlow)
              </li>
              <li>Data Visualization & Analytics: Tableau, Numpy, Pandas, Matplotlib, Seaborn</li>
            </ul>
            <h3>
              <strong>Soft Skills</strong>
            </h3>
            <ul className="ml-8 list-[circle] text-black">
              <li>Problem Solving, Critical Thinking, Teamwork, Research, Time Management, Project Management</li>
            </ul>
            <h3>
              <strong>Languages</strong>
            </h3>
            <ul className="ml-8 list-[circle] text-black">
              <li>Indonesian (Native), English (Basic)</li>
            </ul>
          </div>

          {/* Organisational & Volunteer Experience */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Organisational & Volunteer Experience</h2>
          <div className="mb-6">
            <ul className="ml-4 list-[circle] text-customColor">
              <li>
                <strong>Head of Human Resource Development</strong> — Teater Tiyang Alit (Campus Theatre Organization), Jan. - Dec. 2023
                <ul className="ml-8 list-disc text-black">
                  <li>Led theatrical production for 20–30 members, created weekly training agendas.</li>
                  <li>Conceptualized training materials and developed Terms of Reference for work plan.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Courses & Certification */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Courses & Certification</h2>
          <div className="mb-6">
            <ul className="ml-4 list-[circle] text-customColor">
              <li>
                <strong>Microsoft Certified Azure AI Engineer Associate</strong> — May 2024
                <ul className="ml-8 list-disc text-black">
                  <li>Certification for designing Azure AI solutions using Azure AI services, Azure AI Search, and Azure Open AI.</li>
                  <li>Credential ID: F6092F3FDE69B3</li>
                </ul>
              </li>
              <li>
                <strong>Freecodecamp Certification</strong> — June-July 2024
                <ul className="ml-8 list-disc text-black">
                  <li>Data Analysis with Python: Fundamental data analysis with Numpy, Pandas, Matplotlib, Seaborn.</li>
                  <li>Responsive Web Design: Basics of HTML and CSS.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
