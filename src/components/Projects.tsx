import { LuExternalLink } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AnimatedBackground from './AnimatedBackground';

const projects = [
  {
    title: 'PlayNex Backend API',
    description:
      'PlayNex is a robust backend for a YouTube-like video streaming application, integrating MongoDB for data persistence and Cloudinary for media management. It provides secure, RESTful API endpoints documented using Swagger for ease of development and testing.',
    image: 'https://cdn.lnbg.in/projects/video-app.avif',
    tech: ['Node.js', 'Express.js', 'Swagger', 'MongoDB', 'Cloudinary', 'Docker'],
    github: 'https://github.com/bgmanu2426/playnex-backend',
    demo: 'https://playnex-backend.onrender.com',
  },
  {
    title: 'RFID Based Smart Attendance System',
    description:
      'A smart attendance system that uses RFID technology to automate attendance marking for students and staff. The system is built using an ESP32 microcontroller, RFID reader, and a web application for attendance management.',
    image: 'https://cdn.lnbg.in/projects/rfid-esp32.png',
    tech: ['PHP', 'ESP32', 'RFID', 'MariaDB', 'Arduino', 'Apache', 'AWS EC2'],
    github: 'https://github.com/bgmanu2426/rfid-attendance-system',
  },
  {
    title: 'FireChatz (Realtime Chat Application)',
    description:
      'FireChatz is a real-time chat application built using React, Firebase, and Socket.io. It allows users to create chat rooms, join existing rooms, and chat with other users in real-time. The application is built using Next.js and Tailwind CSS.',
    image: 'https://cdn.lnbg.in/projects/chat-app.jpg',
    tech: ['Reactjs', 'Firebase', 'Nextjs', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/bgmanu2426/FireChatz',
    demo: 'https://firechatzz.vercel.app',
  },
  {
    title: 'FireChatz (Realtime Chat Application)',
    description:
      'FireChatz is a real-time chat application built using React, Firebase, and Socket.io. It allows users to create chat rooms, join existing rooms, and chat with other users in real-time. The application is built using Next.js and Tailwind CSS.',
    image: 'https://cdn.lnbg.in/projects/chat-app.jpg',
    tech: ['Reactjs', 'Firebase', 'Nextjs', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/bgmanu2426/FireChatz',
    demo: 'https://firechatzz.vercel.app',
  },
  {
    title: 'FireChatz (Realtime Chat Application)',
    description:
      'FireChatz is a real-time chat application built using React, Firebase, and Socket.io. It allows users to create chat rooms, join existing rooms, and chat with other users in real-time. The application is built using Next.js and Tailwind CSS.',
    image: 'https://cdn.lnbg.in/projects/chat-app.jpg',
    tech: ['Reactjs', 'Firebase', 'Nextjs', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/bgmanu2426/FireChatz',
    demo: 'https://firechatzz.vercel.app',
  },
];

const Projects = () => {
  const [animationParent] = useAutoAnimate();
  const containerRef = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3, type: 'spring', stiffness: 300 },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      filter: 'brightness(1.1) contrast(1.05)',
      transition: { duration: 0.4 },
    },
  };

  const buttonVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -3,
      scale: 1.05,
      boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.2, type: 'spring', stiffness: 400 },
    },
    tap: {
      scale: 0.95,
      boxShadow: '0 0px 5px -2px rgba(0, 0, 0, 0.2)',
    },
  };

  const tagVariants = {
    initial: {
      backgroundColor: '#dbeafe',
      color: '#2563eb',
      scale: 1,
    },
    hover: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <AnimatedBackground variant="default" opacity={0.05} />
      <AnimatedBackground variant="dots" />

      <motion.div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16 text-content-light dark:text-content-dark relative"
        >
          Featured Projects
          <motion.span
            className="absolute left-1/2 -bottom-3 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{ x: '-50%' }}
          />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={animationParent}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
            >
              <div className="overflow-hidden">
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="w-full h-48 overflow-hidden"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={imageVariants}
                    className="w-full h-48 object-cover transition-transform"
                  />
                </motion.div>
              </div>
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Subtle background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 rounded-xl"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.h3
                  className="text-xl font-bold mb-2 text-content-light dark:text-content-dark relative z-10"
                  initial={{ y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial="initial"
                      whileHover="hover"
                      variants={tagVariants}
                      className="px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto relative z-10">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      <SiGithub className="w-5 h-5 mr-2" />
                      Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <LuExternalLink className="w-5 h-5 mr-2" />
                      </motion.div>
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
