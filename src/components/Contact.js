import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto rounded-lg">
        <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col items-center">
          <div className="text-center mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">Contact Me</h1>
          </div>
          <div className="bg-gray-900 flex flex-col items-center py-6 rounded shadow-md">
            <div className="lg:w-full px-6">
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:indinamaull@gmail.com" className="flex items-center space-x-2 text-white-400">
                  <MailIcon className="w-6 h-6" />
                  <span>indinamaull@gmail.com</span>
                </a>
                <a href="tel:+6283185276497" className="flex items-center space-x-2 text-white-400">
                  <PhoneIcon className="w-6 h-6" />
                  <span>+628-3185 2764-97</span>
                </a>
                <a href="https://www.linkedin.com/in/indiana-namaul/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white-400">
                  <FaLinkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/indinamaul" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white-400">
                  <FaGithub className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
