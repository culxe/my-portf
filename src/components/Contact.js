import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-customBrown bg-center bg-no-repeat">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 container mx-auto flex pt-6 md:flex-row flex-col items-center">
        <div className="container mx-auto rounded-lg my-5">
          <div className="rounded-lg overflow-hidden flex flex-col items-center">
            <div className="text-center mb-2">
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">Contact Me!</h1>
            </div>
            <div className="flex flex-col items-center py-6">
              <div className="lg:w-full px-6">
                <div className="flex flex-wrap mt-1 justify-center gap-6">
                  {/* Mengganti icon dengan teks atau menonaktifkan sementara */}
                  {/* <a href="mailto:indinamaull@gmail.com" className="flex items-center space-x-2 text-white">
                    <MailIcon className="w-6 h-6 hover:text-customHover transition duration-500" />
                    <span>Email</span>
                  </a> */}
                  <a href="https://www.linkedin.com/in/indiana-namaul/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <FaLinkedin className="w-6 h-6 hover:text-customHover transition duration-500" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/culxe" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white">
                    <FaGithub className="w-6 h-6 hover:text-customHover transition duration-500" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tambahkan bagian copyright di sini */}
      <div className="text-center py-8">
        <p className="text-white text-sm">&copy; {new Date().getFullYear()} Indiana Namaul Husnah 2024. All Rights Reserved.</p>
        <p className="text-white text-sm">Made with ❤️ using the FreeCodeCamp</p>
      </div>
    </section>
  );
};

export default Contact;
