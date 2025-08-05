'use client';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiJavascript, SiVisualstudio, SiPostman } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";

const SkillsClient = () => {
  return (
    <motion.div
      id="skills"
      className="min-h-screen px-4 py-20 bg-gradient-to-br from-[#91995A] to-base-200 text-base-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
        data-aos ="fade-up"
        data-aos-delay ="500"
        data-aos-duration="1000"
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="1000"
            className="bg-cyan-200 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Frontend</h3>
            <div className="flex flex-wrap gap-3 text-2xl">
              <span className="tooltip" data-tip="HTML5"><FaHtml5 className="text-orange-600" /></span>
              <span className="tooltip" data-tip="CSS3"><FaCss3Alt className="text-blue-600" /></span>
              <span className="tooltip" data-tip="JavaScript"><SiJavascript className="text-yellow-400" /></span>
              <span className="tooltip" data-tip="React.js"><FaReact className="text-cyan-400" /></span>
              <span className="tooltip" data-tip="Next.js"><SiNextdotjs className="text-black dark:text-white" /></span>
              <span className="tooltip" data-tip="Tailwind CSS"><SiTailwindcss className="text-cyan-500" /></span>
              <span className="tooltip" data-tip="DaisyUI">🌼</span>
            </div>
          </div>

          {/* Backend Skills */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1000"
            className="bg-emerald-200 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Backend</h3>
            <div className="flex flex-wrap gap-3 text-2xl">
              <span className="tooltip" data-tip="Node.js"><FaNodeJs className="text-green-600" /></span>
              <span className="tooltip" data-tip="Express.js"><SiExpress className="text-gray-700 dark:text-white" /></span>
              <span className="tooltip" data-tip="MongoDB"><SiMongodb className="text-green-500" /></span>
              <span className="tooltip" data-tip="Firebase"><SiFirebase className="text-yellow-500" /></span>
              <span className="tooltip" data-tip="JWT">🔐</span>
            </div>
          </div>

          {/* Tools & Others */}
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="bg-fuchsia-200 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Tools</h3>
            <div className="flex flex-wrap gap-3 text-2xl">
              <span className="tooltip" data-tip="Git"><FaGitAlt className="text-orange-600" /></span>
              <span className="tooltip" data-tip="GitHub"><FaGithub className="text-black dark:text-white" /></span>
              <span className="tooltip" data-tip="VS Code">
                <BiLogoVisualStudio className="text-blue-500" /></span>
              <span className="tooltip" data-tip="Postman"><SiPostman className="text-orange-500" /></span>
              <span className="tooltip" data-tip="Stripe">💳</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsClient;
