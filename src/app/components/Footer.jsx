'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer items-center p-6 bg-[#111111] text-white mt-20">
      <div className="grid-flow-col items-center">
        <p className="text-sm font-semibold">
          © {new Date().getFullYear()} Tuhin. All rights reserved.
        </p>
      </div>

      <div className="grid-flow-col gap-6 md:place-self-center md:justify-self-end text-2xl">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-yellow-300 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-sky-300 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-200 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="mailto:your-email@example.com"
          aria-label="Email"
          className="hover:text-emerald-300 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
