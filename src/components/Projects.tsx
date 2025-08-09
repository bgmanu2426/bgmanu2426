import { LuExternalLink } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SGPA and CGPA Calculator',
    description:
      'A simple web application to calculate SGPA and CGPA based on user input for the VTU Scheme. It provides a user-friendly interface for students to easily compute their academic performance metrics.',
    image: 'https://cdn.lnbg.in/projects/sgpa-calculator.png',
    tech: ['Gemini AI', 'RadixUI', 'JsPdf', 'Next.js'],
    github: 'https://github.com/bgmanu2426/VTU-SGPA_Calculator',
    demo: 'https://vtusgpacalculator.vercel.app',
  },
  {
    title: 'RFID Based Smart Attendance System',
    description:
      'A smart attendance system that uses RFID technology to automate attendance marking for students and staff. The system is built using an ESP32 microcontroller, RFID reader, and a web application for attendance management.',
    image: 'https://cdn.lnbg.in/projects/rfid-esp32.png',
    tech: ['PHP', 'ESP32', 'RFID', 'MariaDB', 'Arduino', 'AWS'],
    github: 'https://github.com/bgmanu2426/rfid-attendance-system',
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
    github: 'https://github.com/bgmanu2426/resume-analyser',
    demo: 'https://dub.sh/resume-analyzer',
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
  // {
  //   title: "E-LMS Backend API's",
  //   description:
  //     'A backend API for an E-Learning Management System (E-LMS) built with FastAPI and MongoDB, providing endpoints for user management, order tracking and course access.',
  //   image: 'https://cdn.lnbg.in/projects/lms.jpg',
  //   tech: ['Elysiajs', 'Reactjs', 'Docker', 'Resend', 'Redis', 'Cloudinary'],
  //   github: 'https://github.com/bgmanu2426/E-LMS',
  // },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-content-light dark:text-content-dark"
        >
          Featured{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-content-light dark:text-content-dark">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      <SiGithub className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary dark:bg-primary-light text-white rounded-md shadow-sm text-sm font-medium hover:bg-primary-dark transition-colors duration-200"
                    >
                      <LuExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  )}
                  {!project.demo && project.github && <div className="flex-1"></div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/bgmanu2426?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary dark:bg-primary-light text-white rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LuExternalLink className="w-5 h-5 mr-2" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
