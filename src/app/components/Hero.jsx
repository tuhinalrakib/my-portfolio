'use client';

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden px-6">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wide"
          >
            Available for New Projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Tuhin</span>
          </h1>

          <div className="h-12 md:h-16">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-300">
              I{" "}
              <span className="text-purple-400">
                <Typewriter
                  words={[
                    "build scalable web apps",
                    "design modern UI/UX",
                    "architect MERN stacks",
                    "solve complex problems"
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={40}
                />
              </span>
            </h3>
          </div>

          <p className="mt-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
            A passionate <span className="text-white border-b border-purple-500/50">MERN Stack Developer</span> specializing in building high-performance digital experiences with React, Next.js, and Node.js.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            {[
              { icon: <FaGithub />, link: "https://github.com/tuhinalrakib" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tuhin-al-rakib-5a4a71103/" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/engrtuhin.roky" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                className="text-2xl text-gray-500 hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
            >
              🚀 View My Projects
            </Link>

            <a
              href="/MyResumeCv.pdf"
              download
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              📄 Get Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image with Modern Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative group">
            {/* Animated Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-30 blur-xl group-hover:opacity-60 animate-spin-slow transition-all duration-1000"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
              <Image
                src="/myImage.jpg"
                alt="Tuhin's Profile"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Badges (Optional) */}
            <div className="absolute -bottom-4 -right-4 bg-gray-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl">
              <p className="text-2xl">💻</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;