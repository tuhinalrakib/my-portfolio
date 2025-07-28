'use client';

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="min-h-screen px-4 py-20 bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
          About Me
        </h2>

        <div className="bg-[#96716b54] rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
          <p className="text-lg leading-relaxed text-center font-semibold text-primary">
            🚀 I am a <span className="text-secondary">Frontend Developer</span> using the <span className="badge badge-outline badge-primary">MERN Stack</span>.
          </p>

          <p className="text-lg leading-relaxed">
            👋 Hi, I'm <span className="font-semibold text-primary">Tuhin</span> — a dedicated and creative <span className="badge badge-outline badge-primary mx-1">MERN Stack Developer</span> with a deep love for building modern web applications.
          </p>

          <p className="text-lg leading-relaxed">
            I specialize in crafting full-stack solutions using:
            <span className="badge badge-secondary mx-1">MongoDB</span>
            <span className="badge badge-accent mx-1">Express.js</span>
            <span className="badge badge-info mx-1">React.js</span>
            <span className="badge badge-success mx-1">Next.js</span>
            <span className="badge badge-warning mx-1">Node.js</span>
          </p>

          <p className="text-lg leading-relaxed">
            I love working with:
            <span className="badge badge-outline mx-1">Tailwind CSS</span>
            <span className="badge badge-outline mx-1">DaisyUI</span>
            <span className="badge badge-outline mx-1">Firebase</span>
            <span className="badge badge-outline mx-1">JWT</span>
            <span className="badge badge-outline mx-1">Stripe</span>
          </p>

          <p className="text-lg leading-relaxed">
            I'm passionate about clean code, responsive design, and delivering amazing user experiences. 🎯
          </p>

          <div className="text-center pt-6">
            <a href="/projects" className="btn btn-primary btn-wide">
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
