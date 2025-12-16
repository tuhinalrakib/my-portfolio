// ProjectsClient
'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Rafi-Shop(Multi-Vendor E-commerce Website)',
    description: 'Developed a scalable multi-vendor e-commerce platform enabling multiple sellers to manage products, orders, and payments with role-based dashboards. Implemented secure authentication, order management, and responsive UI for a seamless user and vendor experience.',
    image: '/rafi-shop.png',
    liveLink : [
      {
        linkName : "UserLink",
        link : 'https://rafi-shop.vercel.app/'
      },
      {
        linkName : "AdminLink",
        link : 'https://rafi-shop-admin.vercel.app/'
      },
    ],
    tech: ["Next.js", 'React', 'Tailwind CSS', 'Material UI', 'Shadcn UI', 'Express.js', 'NextAuth','OAuth', 'Node.js', 'Mongoose', "Redis(Catching)", 'Socket.io', 'MongoDB', 'Express-limit', "Nodemailer", 'SSLCOMMERCE', 'Stripe'],
  },
  {
    title: 'Real Estate Platform',
    description: '3 role manage Web apps, Payment Intigration Width Stripe, SSLCOMMERCE, Add,Buy and sell flot',
    image: '/real-estate.png',
    liveLink : [
      {
        linkName : "liveLink",
        link : 'https://real-estate-316cb.web.app/'
      },
      {
        linkName : "githubLink",
        link : 'https://github.com/tuhinalrakib/real-estate-client'
      },
    ],
    tech: ['React', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Stripe'],
  },
  // {
  //   title: 'Job Portal',
  //   description: 'Job portal with authentication, resume uploads, role-based dashboards, and job filtering.',
  //   image: '/projects/job-portal.jpg',
  //   liveLink: 'https://jobportal-yourname.vercel.app',
  //   githubLink: 'https://github.com/yourname/job-portal',
  //   tech: ['React', 'Express', 'MongoDB', 'JWT', 'Firebase'],
  // },
  // {
  //   title: 'Hobby Hub',
  //   description: 'Hobby Managament Service you can add your Hobby Group, you can see other groups and manage Your Groups',
  //   image: '/hobbyHub.png',
  //   liveLink: 'https://hobbyhub-apps.web.app',
  //   githubLink: 'https://github.com/tuhinalrakib/hobbyhub-client-side.git',
  //   tech: ["React JS", 'Tailwind', 'MongoDB', 'Firebase'],
  // },
  {
    title: 'Marathon Management App',
    description: 'Marathon Management system with add marathons, see others Marathons, Particpate Other Marathon, and Registraion Process',
    image: '/marathons1.png',
    liveLink : [
      {
        linkName : "liveLink",
        link : 'https://marathon-management-8b5cc.web.app/'
      },
      {
        linkName : "githubLink",
        link : 'https://github.com/tuhinalrakib/marathon-management-client'
      },
    ],
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
              data-aos = "flip-left"
              data-aos-delay = "400"
              data-aos-duration = "1000"
              viewport={{ once: true }}
              className="card bg-fuchsia-500 shadow-xl"
            >
              <figure>
                <img
                  loading='lazy'
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
                  {
                    project.liveLink?.map((link,i)=><a key={i}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    {link.linkName} <FaExternalLinkAlt className="ml-1" />
                  </a>)
                  }
                  {/* <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    Code <FaGithub className="ml-1" />
                  </a> */}
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
