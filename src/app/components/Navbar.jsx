'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const navLinks = (
    <>
      {["Home", "About", "Skills", "Projects", "Contact"].map((label) => (
        <li key={label}>
          <Link
            href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
            className="
            relative
            text-base
            font-medium
            text-inherit
            transition
            duration-300
            hover:text-primary
            before:absolute
            before:-bottom-1
            before:left-0
            before:h-0.5
            before:w-0
            before:rounded-full
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-primary
            before:to-secondary
            hover:before:w-full
            hover:-translate-y-1
            "
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );


  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md transition-colors duration-300
        ${theme === "dark" ? "text-white bg-gray-900" : "text-gray-900 bg-[#D99486]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Tuhin.dev
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:space-x-8">
            <ul className="flex space-x-6 font-medium text-lg">
              {navLinks}
            </ul>
          </div>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-10H21M3 12H2m15.364-6.364l.707.707M5.636 18.364l-.707.707M18.364 18.364l-.707-.707M5.636 5.636l.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 3.1A9 9 0 1 0 20.9 12 7 7 0 0 1 12 3.1z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Dropdown Mobile Menu */}
            {menuOpen && (
              <ul
                className={`lg:hidden flex flex-col space-y-3 absolute top-16 left-0 w-full bg-base-100 dark:bg-gray-800 shadow-md p-4 font-medium text-lg`}
                onClick={() => setMenuOpen(false)}
              >
                {navLinks}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
