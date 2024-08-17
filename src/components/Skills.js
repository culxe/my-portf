import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="relative" style={{ backgroundImage: "url('./background-about.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container px-5 py-10 mx-auto relative z-10">
        {" "}
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Skills &amp; Technologies</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">Technical and soft skills that I have.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full ">
              <div className="rounded flex p-4 h-full items-center border">
                <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
