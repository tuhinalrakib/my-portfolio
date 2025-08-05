'use client';

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerSkills from "../../../public/developerSkills.json"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const AboutClient = () => {
  return (
    <motion.div
      id="about"
      className="min-h-screen px-4 py-8 bg-base-100 flex flex-col lg:flex-row gap-4 items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeInUp}
        className="max-w-2xl bg-gray-200 p-7 rounded-2xl"
      >
        <h2
          data-aos="fade-up"
          data-aos-delay="600"
          data-aso-duration="1000"
          className="text-4xl md:text-5xl font-bold mb-6 "
        >
          About Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aso-duration="2000"
          className="text-lg  leading-relaxed">
          I’m Tuhin — a frontend-focused <span className="font-semibold text-primary">MERN Stack Developer</span> who transforms ideas into fast, responsive, and visually stunning web applications. I combine clean code with sleek design to build user-first interfaces that work flawlessly across devices.
          <br /><br />
          With tools like <span className="font-semibold">React, Next.js, MongoDB, Firebase, and Tailwind CSS</span>, I specialize in creating performance-driven products that scale. My approach is not just about code — it’s about crafting seamless digital experiences that leave an impact.
          <br /><br />
          Let’s build something exceptional together.
        </p>

      </motion.div>
      <div className="p-3">
        <Lottie animationData={developerSkills} loop={true} />
      </div>
    </motion.div>
  );
};

export default AboutClient;
