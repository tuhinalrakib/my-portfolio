'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/myImage.jpg" // 👉 Replace with your image path
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full shadow-2xl border-4 border-primary"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-primary">Hi, I'm Tuhin</h1>
          <p className="py-4 text-lg text-base-content">
            I’m a passionate <span className="font-semibold">MERN Stack Developer</span> who loves building full-stack web apps with elegant UIs and modern tools like React, Next.js, MongoDB, Firebase, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link href="/projects" className="btn btn-primary">
              See My Work
            </Link>

            {/* Download CV */}
            <a
              href="/Tuhin_CV.pdf" // 📄 Place this file inside public/
              download
              className="btn btn-outline btn-primary"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
