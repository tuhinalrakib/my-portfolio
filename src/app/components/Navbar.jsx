"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Set theme from localStorage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/skills">Skills</Link></li>
      <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </>
  );

  return (
    <div className={`navbar bg-base-100 shadow-md fixed top-0 z-50 ${theme === "dark" && "text-white"} :hover`}>
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold">Tuhin.dev</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {/* Theme Toggle */}
        <button
          className="btn btn-ghost btn-circle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-10H21M3 12H2m15.364-6.364l.707.707M5.636 18.364l-.707.707M18.364 18.364l-.707-.707M5.636 5.636l.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 3.1A9 9 0 1 0 20.9 12 7 7 0 0 1 12 3.1z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;