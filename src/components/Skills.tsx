import { motion, AnimatePresence } from 'framer-motion';
import { FaJsSquare, FaRaspberryPi } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { FaInfinity } from 'react-icons/fa6';
import { ImFirefox } from 'react-icons/im';
import { VscVscode } from 'react-icons/vsc';
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiEspressif,
  SiNextdotjs,
  SiTensorflow,
  SiTailwindcss,
  SiReact,
  SiFastapi,
  SiFastify,
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
  SiSqlalchemy,
  SiNeo4J,
  SiRedis,
} from 'react-icons/si';
import { useRef, useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
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
    { name: 'Fastify', icon: SiFastify, level: 60 },
    { name: 'Flask', icon: SiFlask, level: 60 },
    { name: 'FastAPI', icon: SiFastapi, level: 90 },
    { name: 'ElysiaJS', icon: ImFirefox, level: 70 },
  ],
  devops: [
    { name: 'AWS', icon: SiAmazonwebservices, level: 60 },
    { name: 'Azure', icon: VscAzure, level: 50 },
    { name: 'Google Cloud', icon: SiGooglecloud, level: 60 },
    { name: 'Docker', icon: SiDocker, level: 80 },
    { name: 'Git', icon: SiGit, level: 90 },
    { name: 'GitHub', icon: SiGithub, level: 70 },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb, level: 90 },
    { name: 'MySQL', icon: SiMysql, level: 80 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 60 },
    { name: 'SQLite', icon: SiSqlite, level: 75 },
    { name: 'SqlAlchemy', icon: SiSqlalchemy, level: 70 },
    { name: 'Neo4j', icon: SiNeo4J, level: 70 },
    { name: 'Redis', icon: SiRedis, level: 70 },
  ],
  tools: [
    { name: 'VS Code', icon: VscVscode, level: 100 },
    { name: 'Raspberry Pi', icon: FaRaspberryPi, level: 80 },
    { name: 'Espressif', icon: SiEspressif, level: 70 },
    { name: 'TensorFlow', icon: SiTensorflow, level: 70 },
  ],
};

// Define category type
interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skillCategories: SkillCategory[] = [
  { id: 'frontend', name: 'Frontend', icon: Palette },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'devops', name: 'DevOps', icon: FaInfinity },
  { id: 'database', name: 'Database', icon: Database },
  { id: 'tools', name: 'Tools', icon: Code },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');

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
      className="py-20 bg-black text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="relative mb-16">
          {/* Floating background elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />

          {/* Header text with floating animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            animate={{ y: [0, -8, 0] }}
            className="text-4xl font-bold text-center text-white relative"
          >
            Skills{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              & Tech's
            </span>
            <motion.span
              className="absolute left-1/2 -bottom-3 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '150px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ x: '-50%' }}
            />
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
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400')
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {skills[activeSkillCategory].map(skill => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ scale: 1.03, y: -5, borderColor: 'rgba(249, 115, 22, 0.5)' }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-400"
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: 'rgba(249, 115, 22, 0.3)',
                          transition: { duration: 0.3, type: 'spring', stiffness: 400 },
                        }}
                      >
                        <skill.icon className="w-5 h-5" />
                      </motion.div>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-orange-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: `${skill.level}%` }}
                      key={`${activeSkillCategory}-${skill.name}`}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full relative"
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
