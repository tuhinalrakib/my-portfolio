'use client';

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerSkills from "../../../public/developerSkills.json";

const AboutClient = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-[#030712] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Visual/Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative group"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl">
            <Lottie animationData={developerSkills} loop={true} className="w-full max-w-[400px] mx-auto" />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <h4 className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-2">Introduction</h4>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm <span className="text-white font-semibold">Tuhin</span>, a results-driven <span className="text-white border-b-2 border-purple-500">MERN Stack Developer</span> dedicated to building digital products that blend functional excellence with aesthetic precision.
            </p>
            
            <p>
              My philosophy is simple: <span className="italic text-gray-300">Code should be clean, and user experiences should be effortless.</span> I don't just build websites; I craft high-performance scalable systems.
            </p>

            {/* Modern Skills Tags instead of long bold text */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["TypeScript", "React", "Next.js", "Tailwind", "Node.js", "MongoDB", "Socket.io", "Redux"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-purple-500/20 hover:border-purple-500/50 transition-all cursor-default text-gray-300">
                  {skill}
                </span>
              ))}
              <span className="px-4 py-2 text-sm text-purple-400 font-medium">+ Many More</span>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-6"
          >
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Let's Build Something Exceptional
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutClient;