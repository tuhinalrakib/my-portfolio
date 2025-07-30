'use client';

import { motion } from "framer-motion";
import { FaReact, FaNode, FaCss3Alt, FaDatabase, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiStripe, SiTailwindcss, SiNextdotjs, SiJsonwebtokens } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutClient = () => {
  return (
    <motion.div
      id="about"
      className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#806144] to-base-200 text-base-content"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-12 drop-shadow-md"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="bg-base-200 rounded-3xl shadow-xl p-6 md:p-12 space-y-8 border border-primary/30"
        >
          <motion.p variants={fadeInUp} className="text-xl text-center font-semibold text-primary">
            🚀 I'm a passionate <span className="text-secondary">Frontend Developer</span> building elegant web apps with the <span className="badge badge-outline badge-primary">MERN Stack</span>.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg leading-relaxed">
            👋 Hi, I'm <span className="font-bold text-primary">Tuhin</span> — a creative and driven <span className="badge badge-outline badge-primary mx-1">MERN Stack Developer</span> focused on performance, scalability, and stunning UI.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <p className="text-lg mb-2 font-medium">💻 Tech Stack:</p>
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-secondary"><SiMongodb /> MongoDB</span>
              <span className="badge badge-accent"><SiExpress /> Express.js</span>
              <span className="badge badge-info"><FaReact /> React.js</span>
              <span className="badge badge-success"><SiNextdotjs /> Next.js</span>
              <span className="badge badge-warning"><FaNode /> Node.js</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-lg mb-2 font-medium">🛠 Tools I Love:</p>
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-outline"><SiTailwindcss /> Tailwind CSS</span>
              <span className="badge badge-outline"><FaCss3Alt /> DaisyUI</span>
              <span className="badge badge-outline"><SiFirebase /> Firebase</span>
              <span className="badge badge-outline"><SiJsonwebtokens /> JWT</span>
              <span className="badge badge-outline"><SiStripe /> Stripe</span>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg leading-relaxed">
            🎯 I thrive on writing clean code, crafting responsive layouts, and delivering excellent user experiences with performance in mind.
          </motion.p>

          <motion.div variants={fadeInUp} className="text-center pt-6">
            <a
              href="/projects"
              className="btn btn-primary btn-wide transition-transform hover:scale-105 hover:shadow-lg"
            >
              View My Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutClient;
