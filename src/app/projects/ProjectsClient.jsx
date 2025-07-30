// ProjectsClient
'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Real Estate Platform',
    description: 'Full-featured real estate web app with user roles, property listings, payments, and admin control.',
    image: '/real-estate.png',
    liveLink: 'https://real-estate-316cb.web.app/',
    githubLink: 'https://github.com/yourname/real-estate',
    tech: ['React', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Stripe'],
  },
  {
    title: 'Job Portal',
    description: 'Job portal with authentication, resume uploads, role-based dashboards, and job filtering.',
    image: '/projects/job-portal.jpg',
    liveLink: 'https://jobportal-yourname.vercel.app',
    githubLink: 'https://github.com/yourname/job-portal',
    tech: ['React', 'Express', 'MongoDB', 'JWT', 'Firebase'],
  },
  {
    title: 'Parcel Delivery App',
    description: 'Delivery service system with order tracking, admin control, Rider dashboard, and Stripe integration.',
    image: '/projects/parcel-app.jpg',
    liveLink: 'https://parcelapp-yourname.vercel.app',
    githubLink: 'https://github.com/yourname/parcel-app',
    tech: ['Next.js', 'Tailwind', 'MongoDB', 'Stripe', 'Firebase'],
  },
  {
    title: 'Marathon Management App',
    description: 'Marathon Management system with add marathons, see others Marathons, Particpate Other Marathon, and Registraion Process',
    image: '/projects/parcel-app.jpg',
    liveLink: 'https://parcelapp-yourname.vercel.app',
    githubLink: 'https://github.com/yourname/parcel-app',
    tech: ['React.js', 'Tailwind', 'MongoDB', "JWT", 'Firebase'],
  },
];

const ProjectsClient = () => {
  return (
    <motion.div
      id="projects"
      className="min-h-screen py-20 px-4 bg-base-100 text-base-content"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="card bg-fuchsia-500 shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge badge-outline">{tech}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live <FaExternalLinkAlt className="ml-1" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    Code <FaGithub className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsClient;
