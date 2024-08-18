import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
// import { ReactComponent as LinkedinIcon } from ".public/icon-linkedin.svg";
// import { ReactComponent as GithubIcon } from ".public/icon-github.svg";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./background-about.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>
      <div className="relative z-10 container mx-auto flex pt-6 md:flex-row flex-col items-center">
        <div className="container mx-auto rounded-lg">
          <div className="rounded-lg overflow-hidden flex flex-col items-center">
            <div className="text-center mb-2">
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">Contact Me</h1>
            </div>
            <div className="flex flex-col items-center py-6 rounded shadow-md">
              <div className="lg:w-full px-6">
                <div className="flex flex-wrap mt-1 justify-center gap-6">
                  <a href="mailto:indinamaull@gmail.com" className="flex items-center space-x-2 text-white-400">
                    <MailIcon className="w-6 h-6" />
                    <span>indinamaull@gmail.com</span>
                  </a>
                  <a href="tel:+6283185276497" className="flex items-center space-x-2 text-white-400">
                    <PhoneIcon className="w-6 h-6" />
                    <span>+628-3185 2764-97</span>
                  </a>
                  <a href="https://www.linkedin.com/in/indiana-namaul/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white-400">
                    {/* <LinkedinIcon className="w-6 h-6" /> */}
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/culxe" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white-400">
                    {/* <GithubIcon className="w-6 h-6" /> */}
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
