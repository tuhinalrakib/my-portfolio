"use client"
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiJavascript, SiPostman, SiRedux, SiMui, SiRedis, SiSocketdotio, SiJsonwebtokens } from 'react-icons/si';
import { WalletCards } from 'lucide-react';
import { BiLogoVisualStudio } from "react-icons/bi";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "MUI", icon: <SiMui className="text-blue-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Stripe", icon: <span className="text-sm">💳</span> },
      { name: "SSLCommerz", icon: <WalletCards size={20} className='text-emerald-400'/> },
    ],
  },
];

const SkillsClient = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-500 font-semibold tracking-[0.2em] uppercase text-sm mb-3"
          >
            My Tech Stack
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white italic"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Expertise</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-gray-900/40 border border-white/10 backdrop-blur-xl p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-4 gap-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group/item flex flex-col items-center gap-2">
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-3xl p-3 rounded-xl bg-white/5 border border-white/5 group-hover/item:border-purple-500/50 group-hover/item:bg-purple-500/10 transition-all duration-300 shadow-lg"
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 group-hover/item:text-purple-400 font-medium transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsClient;