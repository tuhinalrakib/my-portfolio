'use client';

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerSkills from "../../../public/developerSkills.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutClient = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-base-100 via-purple-100 to-pink-50 dark:from-gray-900  flex flex-col-reverse lg:flex-row items-center justify-center gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Left: Text Card */}
      <motion.div
        variants={fadeInUp}
        className="max-w-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-purple-200 dark:border-purple-800"
      >
        <h2
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-4xl md:text-5xl font-bold mb-6 text-purple-700 dark:text-purple-300"
        >
          About Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          I’m <span className="font-semibold text-primary">Tuhin</span> — a frontend-focused{" "}
          <span className="font-semibold text-primary">MERN Stack Developer</span> who transforms ideas into fast, responsive, and visually stunning web applications.
          I combine clean code with sleek design to build user-first interfaces that work flawlessly across devices.
          <br /><br />
          With tools like{" "}
          <span className="font-semibold text-primary">
            React, Next.js, MongoDB, Firebase, and Tailwind CSS
          </span>
          , I specialize in creating performance-driven products that scale.
          My approach is not just about code — it’s about crafting seamless digital experiences that leave an impact.
          <br /><br />
          🚀 Let’s build something exceptional together.
        </p>
      </motion.div>

      {/* Right: Lottie Animation */}
      <motion.div
        variants={fadeInUp}
        className="p-5 bg-white/50 dark:bg-gray-800/50 rounded-3xl shadow-lg border border-purple-100 dark:border-purple-700"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Lottie animationData={developerSkills} loop={true} className="w-[350px] lg:w-[420px]" />
      </motion.div>
    </motion.section>
  );
};

export default AboutClient;
