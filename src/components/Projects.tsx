import { LuGithub, LuEye } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AnimatedBackground from './AnimatedBackground';

const projects = [
  {
    title: 'RFID Based Smart Attendance System',
    description:
      'A smart attendance system that uses RFID technology to automate attendance marking for students and staff. The system is built using an ESP32 microcontroller, RFID reader, and a web application for attendance management.',
    image: 'https://cdn.lnbg.in/projects/rfid-esp32.png',
    tech: ['PHP', 'ESP32', 'RFID', 'MariaDB', 'Arduino', 'AWS'],
    github: 'https://github.com/bgmanu2426/rfid-attendance-system',
  },
  {
    title: 'FireChatz (Realtime Chat Application)',
    description:
      'FireChatz is a real-time chat application built using React, Firebase, and Socket.io. It allows users to create chat rooms, join existing rooms, and chat with other users in real-time. The application is built using Next.js and Tailwind CSS.',
    image: 'https://cdn.lnbg.in/projects/chat-app.jpg',
    tech: ['Nextjs', 'Firestore Database', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/bgmanu2426/FireChatz',
    demo: 'https://firechatzz.vercel.app',
  },
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
    title: 'Smart Library Managment System',
    description:
      'A comprehensive library management system with a React frontend and FastAPI backend for managing books, users, borrowing records, and reports.',
    image: 'https://cdn.lnbg.in/projects/library-managment.jpg',
    tech: ['Reactjs', 'FastAPI', 'SQLite', 'Docker', 'Gemini API'],
    github: 'https://github.com/bgmanu2426/library-managment-system',
  },
  {
    title: 'Resume Analyzer',
    description:
      'An AI-powered resume analysis system that evaluates job fit and provides targeted recommendations for career advancement.',
    image: 'https://cdn.lnbg.in/projects/resume-analyzer.png',
    tech: ['HTML5 & CSS3', 'FastAPI', 'Gemini API', 'Docker', 'Redis', 'Resend', 'Azure'],
    github: 'https://github.com/bgmanu2426/rfid-attendance-system',
    demo: 'https://dub.sh/resume-analyzer',
  },
  {
    title: "E-LMS Backend API's",
    description:
      'A comprehensive library management system with a React frontend and FastAPI backend for managing books, users, borrowing records, and reports.',
    image: 'https://cdn.lnbg.in/projects/rfid-esp32.png',
    tech: ['PHP', 'ESP32', 'RFID', 'MariaDB', 'Arduino', 'Apache', 'AWS EC2'],
    github: 'https://github.com/bgmanu2426/rfid-attendance-system',
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
      scale: 1.05,
      y: -10,
      border: '1px solid rgba(249, 115, 22, 0.5)',
      boxShadow: '0 20px 30px -10px rgba(249, 115, 22, 0.1)',
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
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      color: '#d1d5db',
      scale: 1,
    },
    hover: {
      backgroundColor: '#f97316',
      color: '#ffffff',
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Background Animation */}
      <AnimatedBackground variant="orange-glow" />

      {/* Floating Code Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-orange-400/20 text-4xl font-mono animate-bounce delay-300">
          {'<>'}
        </div>
        <div className="absolute top-40 right-20 text-blue-400/20 text-3xl font-mono animate-bounce delay-700">
          {'{}'}
        </div>
        <div className="absolute bottom-40 left-20 text-green-400/20 text-5xl font-mono animate-bounce delay-1000">
          {'[]'}
        </div>
        <div className="absolute bottom-20 right-40 text-purple-400/20 text-2xl font-mono animate-bounce delay-1500">
          {'()'}
        </div>
      </div>

      <motion.div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured{' '}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Projects
          </span>
          <motion.span
            className="block mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
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
              className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-orange-500/50"
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
                      'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.15), transparent 70%)',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.h3
                  className="text-xl font-bold mb-2 text-white relative z-10"
                  initial={{ y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 mb-4 flex-grow relative z-10">{project.description}</p>
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
                      className="inline-flex items-center justify-center px-4 py-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 rounded-lg font-semibold transition-all duration-300"
                    >
                      <LuGithub className="w-5 h-5 mr-2" />
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
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-semibold transition-all duration-300"
                    >
                      <LuEye className="w-5 h-5 mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/bgmanu2426"
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
