import { motion, AnimatePresence } from 'framer-motion';
import { FaJsSquare, FaCloud } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { ImFirefox } from 'react-icons/im';
import { VscVscode } from 'react-icons/vsc';
import { RiToolsFill } from 'react-icons/ri';
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiEspressif,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiBun,
  SiFlask,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiMysql,
  SiSqlite,
  SiNeo4J,
  SiRedis,
  SiGooglegemini,
  SiLangchain,
  SiHuggingface,
  SiArduino,
  SiSmartthings,
  SiRaspberrypi,
} from 'react-icons/si';
import { useRef, useEffect, useState } from 'react';
import { Code, Database, Palette, Server } from 'lucide-react';
import { IconType } from 'react-icons';

// Define type for a skill
interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

// Define type for skills object
interface SkillsData {
  [key: string]: Skill[];
}

const skills: SkillsData = {
  iiot: [
    { name: 'Arduino', icon: SiArduino, level: 90 },
    { name: 'Espressif', icon: SiEspressif, level: 80 },
    { name: 'Raspberry Pi', icon: SiRaspberrypi, level: 70 },
  ],
  frontend: [
    { name: 'JavaScript', icon: FaJsSquare, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 70 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
    { name: 'React', icon: SiReact, level: 80 },
    { name: 'Next.js', icon: SiNextdotjs, level: 70 },
    { name: 'Django', icon: SiDjango, level: 70 },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, level: 90 },
    { name: 'Bun', icon: SiBun, level: 70 },
    { name: 'Express.js', icon: SiExpress, level: 90 },
    { name: 'Flask', icon: SiFlask, level: 60 },
    { name: 'FastAPI', icon: SiFastapi, level: 90 },
    { name: 'ElysiaJS', icon: ImFirefox, level: 70 },
  ],
  cloud: [
    { name: 'AWS', icon: SiAmazonwebservices, level: 60 },
    { name: 'Azure', icon: VscAzure, level: 50 },
    { name: 'Google Cloud', icon: SiGooglecloud, level: 60 },
    { name: 'Docker', icon: SiDocker, level: 80 },
    { name: 'GitHub', icon: SiGithub, level: 70 },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb, level: 90 },
    { name: 'MySQL', icon: SiMysql, level: 80 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 60 },
    { name: 'SQLite', icon: SiSqlite, level: 75 },
    { name: 'Neo4j', icon: SiNeo4J, level: 70 },
    { name: 'Redis', icon: SiRedis, level: 70 },
  ],
  genai: [
    { name: 'LangChain', icon: SiLangchain, level: 80 },
    { name: 'LangGraph', icon: SiLangchain, level: 80 },
    { name: 'LangSmith', icon: RiToolsFill, level: 70 },
    { name: 'LangFuse', icon: SiLangchain, level: 70 },
    { name: 'HuggingFace', icon: SiHuggingface, level: 80 },
  ],
  tools: [
    { name: 'VS Code', icon: VscVscode, level: 100 },
    { name: 'Git', icon: SiGit, level: 90 },
  ],
};

// Define category type
interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skillCategories: SkillCategory[] = [
  { id: 'iiot', name: 'IIoT', icon: SiSmartthings },
  { id: 'frontend', name: 'Frontend', icon: Palette },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'database', name: 'Database', icon: Database },
  { id: 'cloud', name: 'Cloud', icon: FaCloud },
  { id: 'genai', name: 'GenAI', icon: SiGooglegemini },
  { id: 'tools', name: 'Tools', icon: Code },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState('iiot');

  // Set up intersection observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We can use this later if needed
        if (entry.isIntersecting) {
          // Section is in view
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

  return (
    <motion.section
      id="skills"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="relative mb-16">
          {/* Header text with animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-content-light dark:text-content-dark"
          >
            Skills{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              & Tech's
            </span>
          </motion.h2>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveSkillCategory(category.id)}
              className={
                'flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ' +
                (activeSkillCategory === category.id
                  ? 'bg-primary dark:bg-primary-light text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary dark:hover:border-primary-light hover:text-primary dark:hover:text-primary-light')
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {skills[activeSkillCategory].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/20 dark:bg-primary-light/20 text-primary dark:text-primary-light"
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3, type: 'spring', stiffness: 400 },
                        }}
                      >
                        <skill.icon className="w-5 h-5" />
                      </motion.div>
                      <span className="font-semibold text-content-light dark:text-content-dark">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-primary dark:text-primary-light font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: `${skill.level}%` }}
                      key={`${activeSkillCategory}-${skill.name}`}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      className="bg-primary dark:bg-primary-light h-2 rounded-full relative"
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
