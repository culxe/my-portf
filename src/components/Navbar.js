import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10" style={{ backgroundImage: "url('./background-about.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 container mx-auto flex px-6 py-2 md:flex-row flex-col items-center">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              About Me
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Portfolio
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#contact" className="mr-5 hover:text-white">
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
