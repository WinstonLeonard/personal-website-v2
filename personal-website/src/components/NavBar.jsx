import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/60 backdrop-blur-md border-b border-white/10 shadow-[0_2px_20px_rgba(56,189,248,0.15)]">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
        >
          {"</>"}
        </a>

        {/* Desktop Nav — Right aligned */}
        <div className="hidden md:flex flex-1 justify-end space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-all duration-200 hover:underline underline-offset-4 decoration-purple-400/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-gray-300 hover:text-white transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900/95 to-slate-800/90 backdrop-blur-xl transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-5 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Gradient line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 opacity-60" />
      </div>
    </nav>
  );
};

export default Navbar;
