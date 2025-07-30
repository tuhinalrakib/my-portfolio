'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer items-center p-6 bg-[#111111] text-white">
      <div className="grid-flow-col items-center">
        <p className="text-sm font-semibold">
          © {new Date().getFullYear()} Tuhin. All rights reserved.
        </p>
      </div>

      <div className="grid-flow-col gap-6 md:place-self-center md:justify-self-end text-2xl">
        <a
          href="https://github.com/tuhinalrakib"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-yellow-300 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tuhin-al-rakib-5a4a71103/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-sky-300 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/engrtuhin.roky"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-200 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="mailto:eng.tuhin77@gmail.com"
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
