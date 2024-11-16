import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 font-rubik body-font relative bg-customBlue">
      <div className="absolute inset-0"></div>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 relative z-10">
        <div className="flex flex-col w-full mb-20">
          {/* Mengganti CodeIcon dengan TerminalIcon, sementara menghapus ikon dulu */}
          {/* <TerminalIcon className="mx-auto inline-block w-10 mb-4 text-black" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">My Projects..</h1>
        </div>
        <div className="flex flex-wrap -m-6">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={project.image} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{project.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">{project.title}</h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
