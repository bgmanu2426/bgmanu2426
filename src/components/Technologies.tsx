import { motion } from 'framer-motion';
import { FaNodeJs, FaPython, FaAws, FaJsSquare, FaRaspberryPi } from 'react-icons/fa';
import {
  SiTypescript,
  SiArduino,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiEspressif,
  SiDocker,
  SiTensorflow,
  SiTailwindcss,
  SiReact,
} from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { VscAzure } from 'react-icons/vsc';
import { useRef, useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

const technologies = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: FaJsSquare, proficiency: 90 },
      { name: 'TypeScript', icon: SiTypescript, proficiency: 70 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 80 },
      { name: 'React', icon: SiReact, proficiency: 70 },
      { name: 'Next.js', icon: RiNextjsFill, proficiency: 90 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, proficiency: 90 },
      { name: 'Express.js', icon: SiExpress, proficiency: 90 },
      { name: 'Docker', icon: SiDocker, proficiency: 60 },
      { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 60 },
      { name: 'MongoDB', icon: SiMongodb, proficiency: 90 },
    ],
  },
  {
    category: 'IoT & Embedded Systems',
    skills: [
      { name: 'Arduino', icon: SiArduino, proficiency: 100 },
      { name: 'Raspberry Pi', icon: FaRaspberryPi, proficiency: 80 },
      { name: 'Espressif', icon: SiEspressif, proficiency: 70 },
      { name: 'AWS', icon: FaAws, proficiency: 70 },
      { name: 'Azure', icon: VscAzure, proficiency: 60 },
    ],
  },
  {
    category: 'AI & ML',
    skills: [
      { name: 'Python', icon: FaPython, proficiency: 85 },
      { name: 'TensorFlow', icon: SiTensorflow, proficiency: 70 },
    ],
  },
];

const Technologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1,
      },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      dark: { backgroundColor: 'rgba(31, 41, 55, 1)' },
      transition: { duration: 0.5 },
    },
  };

  const progressVariants = {
    hidden: { width: '0%' },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hover: {
      filter: 'brightness(1.1)',
      boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
    },
  };

  const iconContainerVariants = {
    hover: {
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      scale: 1.2,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="technologies"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedBackground variant="waves" />

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16 text-content-light dark:text-content-dark relative"
        >
          Technologies & Skills
          <motion.span
            className="absolute left-1/2 -bottom-3 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '150px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{ x: '-50%' }}
          />
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              transition={{ duration: 0.3 }}
              className="dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform-gpu"
            >
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />

              <motion.h3
                className="text-xl font-bold mb-4 text-primary dark:text-primary-light relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  textShadow: '0px 0px 5px rgba(59, 130, 246, 0.3)',
                }}
              >
                {tech.category}
              </motion.h3>
              <div className="space-y-4 relative z-10">
                {tech.skills.map((skill, i) => (
                  <motion.div key={i} className="relative" variants={skillVariants}>
                    <motion.div
                      className="flex items-center mb-2"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover="hover"
                        variants={iconContainerVariants}
                        className="p-1 rounded-full bg-primary/10 dark:bg-primary-dark/10 transition-colors"
                      >
                        <skill.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                      </motion.div>
                      <span className="text-content-light dark:text-content-dark ml-2">
                        {skill.name}
                      </span>
                      <motion.span
                        className="ml-auto text-sm text-gray-500 dark:text-gray-400 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.proficiency}%
                      </motion.span>
                    </motion.div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                      <motion.div
                        custom={skill.proficiency}
                        variants={progressVariants}
                        whileHover="hover"
                        className="h-full rounded-full relative"
                        style={{
                          backgroundImage: `linear-gradient(90deg, #3b82f6 0%, #4f46e5 100%)`,
                        }}
                      >
                        {/* Animated shimmer effect */}
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          style={{
                            backgroundImage: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)`,
                            backgroundSize: '200% 100%',
                          }}
                          animate={{
                            backgroundPosition: ['100% 0%', '-100% 0%'],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Technologies;
