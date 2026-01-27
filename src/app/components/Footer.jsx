'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#030712] text-white border-t border-white/5 py-12 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-purple-600/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-xl font-black tracking-tighter">
              TUHIN<span className="text-purple-500">.DEV</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Building digital experiences with precision and passion.
            </p>
          </div>

          {/* Social Links with Modern Styling */}
          <div className="flex items-center gap-5">
            {[
              { icon: <FaGithub />, link: "https://github.com/tuhinalrakib", label: "GitHub" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tuhin-al-rakib-5a4a71103/", label: "LinkedIn" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/engrtuhin.roky", label: "Facebook" },
              { icon: <FaEnvelope />, link: "mailto:eng.tuhin77@gmail.com", label: "Email" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-2xl text-gray-500 hover:text-white p-2 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-widest uppercase">
          <p>© {currentYear} TUHIN AL RAKIB. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;