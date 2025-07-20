import { ArrowRight, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(249, 115, 22, 0.2)',
      transition: { duration: 0.3, type: 'spring', stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  const outlineButtonVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
      backgroundColor: 'rgba(249, 115, 22, 0)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 5px 15px rgba(249, 115, 22, 0.3)',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      transition: { duration: 0.3, type: 'spring', stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  const emojiVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut',
    },
  };

  const glowEffect = {
    initial: {
      filter: 'drop-shadow(0px 0px 0px rgba(249, 115, 22, 0))',
    },
    animate: {
      filter: 'drop-shadow(0px 0px 10px rgba(249, 115, 22, 0.5))',
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-8 bg-black text-white transition-colors duration-300 md:px-10 relative overflow-hidden"
    >
      <AnimatedBackground variant="orange-glow" />

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-white mb-2"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent relative inline-block hover:cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  textShadow: '0px 0px 8px rgba(249, 115, 22, 0.5)',
                }}
              >
                Lakshminarayana
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                />
              </motion.span>
            </motion.h1>
            <motion.div
              className="text-3xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Development',
                    'Industrial Internet of Things',
                    'Generative AI',
                    'Cloud Computing',
                    'AI & ML',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.div>
            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              A passionate Full Stack Developer, Expert in IIoT and GenAI enthusiast specialized in
              building innovative solutions at the intersection of web development and artificial
              intelligence & machine learning.
            </motion.p>
            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="text-sm inline-flex items-center px-4 py-2 border-2 border-orange-500 text-orange-400 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 transition-colors"
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={outlineButtonVariants}
              >
                View Projects
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                >
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </motion.a>
              <motion.a
                href="https://lnbg.in/resume"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-bold transition-colors text-sm"
                download
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                Download CV
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className="ml-2 w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 hidden md:flex justify-center relative hover:cursor-pointer"
            variants={itemVariants}
            whileHover={floatingAnimation}
          >
            <motion.span
              className="text-9xl filter"
              variants={emojiVariants}
              initial="initial"
              animate="animate"
              style={{ filter: 'drop-shadow(0px 0px 10px rgba(249, 115, 22, 0.3))' }}
            >
              <motion.span initial="initial" animate="animate" variants={glowEffect}>
                👨‍💻
              </motion.span>
            </motion.span>

            {/* Animated rings around the emoji */}
            <motion.div
              className="absolute rounded-full border-2 border-orange-500/20"
              initial={{ width: 100, height: 100, opacity: 0 }}
              animate={{
                width: [100, 200],
                height: [100, 200],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeOut',
              }}
              style={{ top: 'calc(50% - 50px)', left: 'calc(50% - 50px)' }}
            />

            <motion.div
              className="absolute rounded-full border-2 border-red-500/20"
              initial={{ width: 100, height: 100, opacity: 0 }}
              animate={{
                width: [100, 300],
                height: [100, 300],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeOut',
                delay: 1,
              }}
              style={{ top: 'calc(50% - 50px)', left: 'calc(50% - 50px)' }}
            />
          </motion.div>
        </div>
      </motion.div>

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

      {/* Animated particles in the background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-400/10 dark:bg-orange-500/20"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              width: 10 + Math.random() * 40,
              height: 10 + Math.random() * 40,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
