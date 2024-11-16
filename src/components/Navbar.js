import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = (hash) => {
    // Periksa apakah kita berada di halaman utama
    if (location.pathname === "/") {
      // Cari elemen berdasarkan id hash
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Gulir ke elemen yang ditemukan dengan animasi halus
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="md:sticky top-0 z-50 bg-customBrown font-rubik bg-opacity-90 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" onClick={() => handleNavClick("#about")} className="text-white text-xl hover:font-bold hover:text-customHover transition duration-500">
          About Me
        </Link>
        <nav className="flex space-x-5">
          <a href="#projects" onClick={() => handleNavClick("#projects")} className="text-white hover:text-customHover transition duration-500">
            Projects
          </a>
          <a href="#skills" onClick={() => handleNavClick("#skills")} className="text-white hover:text-customHover transition duration-500">
            CV/Resume
          </a>
          <a href="#contact" onClick={() => handleNavClick("#contact")} className="text-white hover:text-customHover transition duration-500">
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
