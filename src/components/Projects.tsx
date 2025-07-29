import { LuGithub, LuEye } from 'react-icons/lu';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
    github: 'https://github.com/bgmanu2426/resume-analyser',
    demo: 'https://dub.sh/resume-analyzer',
  },
  {
    title: "E-LMS Backend API's",
    description:
      'A backend API for an E-Learning Management System (E-LMS) built with FastAPI and MongoDB, providing endpoints for user management, order tracking and course access.',
    image: 'https://cdn.lnbg.in/projects/lms.jpg',
    tech: ['Elysiajs', 'Reactjs', 'Docker', 'Resend', 'Redis', 'Cloudinary'],
    github: 'https://github.com/bgmanu2426/E-LMS',
  },
];

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isIntersecting] as const;
};

const Projects = () => {
  const [animationParent] = useAutoAnimate();
  const shouldReduceMotion = useReducedMotion();
  const [containerRef2, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.02,
          y: -5,
          border: '1px solid rgba(249, 115, 22, 0.5)',
          boxShadow: '0 15px 25px -10px rgba(249, 115, 22, 0.1)',
          transition: { duration: 0.2, type: 'spring', stiffness: 300 },
        },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.05,
          filter: 'brightness(1.05) contrast(1.02)',
          transition: { duration: 0.3 },
        },
  };

  const buttonVariants = {
    initial: { y: 0, scale: 1 },
    hover: shouldReduceMotion
      ? {}
      : {
          y: -2,
          scale: 1.03,
          boxShadow: '0 4px 12px -5px rgba(0, 0, 0, 0.3)',
          transition: { duration: 0.15, type: 'spring', stiffness: 400 },
        },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
      <AnimatedBackground variant="gradient" opacity={0.02} />

      <motion.div
        ref={containerRef2}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack
            development, IoT, and AI/ML technologies.
          </p>
        </motion.div>

        <div
          ref={animationParent}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-0 mx-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-colors duration-300"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm rounded-full border border-orange-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <LuGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <LuEye className="w-4 h-4" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
