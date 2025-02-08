import { LuExternalLink } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PlayNex Backend API',
    description: 'PlayNex is a robust backend for a YouTube-like video streaming application, integrating MongoDB for data persistence and Cloudinary for media management. It provides secure, RESTful API endpoints documented using Swagger for ease of development and testing.',
    image: 'https://pub-d600b57d450e41c7b0bd406a961f2e89.r2.dev/projects/video-app.avif',
    tech: ['Node.js', 'Express.js', 'Swagger', "MongoDB", "Cloudinary", "Docker"],
    github: 'https://github.com/bgmanu2426/playnex-backend',
    demo: 'https://playnex-backend.onrender.com'
  },
  {
    title: 'RFID Based Smart Attendance System',
    description: 'A smart attendance system that uses RFID technology to automate attendance marking for students and staff. The system is built using an ESP32 microcontroller, RFID reader, and a web application for attendance management.',
    image: 'https://pub-d600b57d450e41c7b0bd406a961f2e89.r2.dev/projects/rfid-app.avif',
    tech: ['PHP', 'ESP32', 'RFID', 'MariaDB', "Arduino", "Apache", "AWS EC2"],
    github: 'https://github.com/bgmanu2426/rfid-attendance-system',
  },
  {
    title: 'FireChatz (Realtime Chat Application)',
    description: 'FireChatz is a real-time chat application built using React, Firebase, and Socket.io. It allows users to create chat rooms, join existing rooms, and chat with other users in real-time. The application is built using Next.js and Tailwind CSS.',
    image: 'https://pub-d600b57d450e41c7b0bd406a961f2e89.r2.dev/projects/chat-app.jpg',
    tech: ['Reactjs', 'Firebase', 'Nextjs', 'Socket.io', "Tailwind CSS"],
    github: 'https://github.com/bgmanu2426/FireChatz',
    demo: 'https://firechatzz.vercel.app'
  }
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
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-content-light dark:text-content-dark">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <LuExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
