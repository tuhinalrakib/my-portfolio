"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Rafi-Shop (Multi-Vendor E-commerce)",
    description: 'Developed a scalable multi-vendor e-commerce platform enabling multiple sellers to manage products, orders, and payments with role-based dashboards. Implemented secure authentication, order management, and responsive UI for a seamless user and vendor experience. Admin dashboard for managing users, products, and Vendor(Seller). Developed using React, Next.js, Tailwind CSS, and Material UI on the frontend, with a microservice-based Express & MongoDB backend featuring Redis caching, real-time Socket.IO updates, secure token management, and email automation.',
    image: "/rafi-shop.png", 
    tech: ["Next.js", 'React', 'Tailwind CSS', 'Material UI', 'Shadcn UI', 'Express.js', 'NextAuth', 'OAuth', 'Node.js', 'Mongoose', "Redis(Catching)", 'Socket.io', 'MongoDB', 'Express-limit', "Nodemailer", 'SSLCOMMERCE', 'Stripe'],
    live: "https://rafi-shop.vercel.app",
    github: "https://github.com/your-repo",
  },
  {
    title: "Rahmino - Interior Management",
    description: 'A full-stack web application built to digitize interior design business operations. The platform includes a modern client website for showcasing projects, team members, and customer inquiries, along with a powerful admin dashboard for managing users, projects, and teams. Developed using React, Next.js, Tailwind CSS, and Material UI on the frontend, with a microservice-based Express & MongoDB backend featuring Redis caching, real-time Socket.IO updates, secure token management, and email automation.',
    image: "/rahnimo.png",
    tech: ["Next.js", 'React', 'Tailwind CSS', 'Material UI', "TasnStack Query(React Query)", 'Luicide React', "Framer Motion", 'Express.js', 'Node.js', "Express.js", "JWT", 'Mongoose', "Redis(Catching)", 'Socket.io', 'MongoDB', 'Express-limit', "Nodemailer"],
    live: "https://rahnimo.vercel.app/",
    github: "https://github.com/your-repo",
  },
  {
    title: "Real Estate Platform",
    description: "3-role managed web app with Stripe and SSLCOMMERZ integration for buying and selling property plots.",
    image: "/real-estate.png",
    tech: ["React", "Tailwind", "Firebase", "Node.js", "Mongoose"],
    live: "https://real-estate-316cb.web.app/",
    github: 'https://github.com/tuhinalrakib/real-estate-client',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-500 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            Portfolio
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white italic"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900/40 border border-white/10 rounded-[2rem] overflow-hidden hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-white/5 border border-white/10 rounded-full text-purple-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-sm transition-all"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl transition-all"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

/**
 * const projects = [
  {
    title: 'Rafi-Shop(Multi-Vendor E-commerce Website)',
    description: 'Developed a scalable multi-vendor e-commerce platform enabling multiple sellers to manage products, orders, and payments with role-based dashboards. Implemented secure authentication, order management, and responsive UI for a seamless user and vendor experience. Admin dashboard for managing users, products, and Vendor(Seller). Developed using React, Next.js, Tailwind CSS, and Material UI on the frontend, with a microservice-based Express & MongoDB backend featuring Redis caching, real-time Socket.IO updates, secure token management, and email automation.',
    CreddentialInfo: "Admin Username: admin77@gmail.com password:12345As@",
    image: '/rafi-shop.png',
    liveLink: [
      {
        linkName: "User Link",
        link: 'https://rafi-shop.vercel.app/'
      },
      {
        linkName: "Admin Link",
        link: 'https://rafi-shop-admin.vercel.app/'
      },
    ],
    tech: ["Next.js", 'React', 'Tailwind CSS', 'Material UI', 'Shadcn UI', 'Express.js', 'NextAuth', 'OAuth', 'Node.js', 'Mongoose', "Redis(Catching)", 'Socket.io', 'MongoDB', 'Express-limit', "Nodemailer", 'SSLCOMMERCE', 'Stripe'],
  },
  {
    title: 'Rahmino – Interior Design Management Platform (Full-Stack Web App)',
    description: 'A full-stack web application built to digitize interior design business operations. The platform includes a modern client website for showcasing projects, team members, and customer inquiries, along with a powerful admin dashboard for managing users, projects, and teams. Developed using React, Next.js, Tailwind CSS, and Material UI on the frontend, with a microservice-based Express & MongoDB backend featuring Redis caching, real-time Socket.IO updates, secure token management, and email automation.',
    image: '',
    video: "/my-video.mp4",
    CreddentialInfo: "Admin Username: admin77@gmail.com password:12345As@",
    liveLink: [
      {
        linkName: "User Link",
        link: 'https://rahnimo.vercel.app/'
      },
      {
        linkName: "Admin Link",
        link: 'https://rahnimo-admin.vercel.app/'
      },
    ],
    tech: ["Next.js", 'React', 'Tailwind CSS', 'Material UI', "TasnStack Query(React Query)", 'Luicide React', "Framer Motion", 'Express.js', 'Node.js', "Express.js", "JWT", 'Mongoose', "Redis(Catching)", 'Socket.io', 'MongoDB', 'Express-limit', "Nodemailer"],
  },
  {
    title: 'Real Estate Platform',
    description: '3 role manage Web apps, Payment Intigration Width Stripe, SSLCOMMERCE, Add,Buy and sell flot',
    image: '/real-estate.png',
    liveLink: [
      {
        linkName: "liveLink",
        link: 'https://real-estate-316cb.web.app/'
      },
      {
        linkName: "githubLink",
        link: 'https://github.com/tuhinalrakib/real-estate-client'
      },
    ],
    tech: ['React', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Stripe'],
  },

];


{projects.map((project, idx) => (
            <motion.div
              key={idx}
              data-aos="flip-left"
              data-aos-delay="400"
              data-aos-duration="1000"
              viewport={{ once: true }}
              className="card bg-fuchsia-500/70 shadow-xl"
            >
              <figure className="relative">
                {
                  project.video ? (
                    <video
                      src={project.video}
                      className="h-48 w-full object-cover rounded-t-xl"
                      autoPlay
                      muted
                      loop
                      preload = "metadata"
                      poster = "/rahnimo.png"
                      playsInline
                    />
                  ) : (
                    <Image
                      width={200}
                      height={200}
                      loading="lazy"
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover rounded-t-xl"
                    />
                  )
                }
              </figure>

              <div className="card-body">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                {
                  project.CreddentialInfo && <p className="text-sm mb-2 text-warning font-bold">{project.CreddentialInfo}</p>
                }
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge badge-accent">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {
                    project.liveLink?.map((link, i) => <a key={i}
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      {link.linkName} <FaExternalLinkAlt className="ml-1" />
                    </a>)
                  }
                </div>
              </div>
            </motion.div>
          ))}
 */