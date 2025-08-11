'use client';
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="relative hero min-h-screen overflow-hidden bg-gradient-to-br from-base-100 via-purple-200 to-pink-50 ">
      
      {/* Background Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-12 z-10">
        
        {/* Profile Image with Glow & Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div className="p-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 ">
            <Image
              src="/myImage.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full shadow-2xl border-4 border-transparent"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className={`text-5xl font-bold leading-tight ${theme === "dark" && "text-white"}`}
          >
            Hi, I'm <span className="text-purple-600">Tuhin</span>
          </h1>

          <h3
            data-aos="fade-right"
            data-aos-duration="3000"
            className={`text-xl md:text-2xl lg:text-4xl my-7 font-semibold ${theme === "dark" && "text-white"}`}
          >
            I{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent font-extrabold">
              <Typewriter
                words={[
                  "build full-stack web apps",
                  "love clean and modern UI",
                  "solve real-world problems with code",
                  "work with React, Node & MongoDB",
                  "deploy secure and scalable apps",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="4000"
            className="py-4 text-lg text-base-content"
          >
            I’m a passionate{" "}
            <span className="font-semibold">MERN Stack Developer</span> who loves building full-stack web apps with elegant UIs and modern tools like React, Next.js, MongoDB, Firebase, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/projects"
              className="btn btn-primary hover:scale-105 transition-transform"
            >
              🚀 See My Work
            </Link>

            <a
              href="/Tuhin_CV.pdf"
              download
              className="btn btn-outline btn-primary hover:bg-primary hover:text-white transition"
            >
              📄 Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
