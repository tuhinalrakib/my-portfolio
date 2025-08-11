'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 bg-[#111111] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm font-semibold select-none">
          © {new Date().getFullYear()} Tuhin. All rights reserved.
        </p>

        <div className="flex gap-6 text-3xl">
          <a
            href="https://github.com/tuhinalrakib"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tuhin-al-rakib-5a4a71103/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/engrtuhin.roky"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:eng.tuhin77@gmail.com"
            aria-label="Email"
            className="hover:text-emerald-400 transition duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
