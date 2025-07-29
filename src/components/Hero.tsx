import { ArrowRight, Download } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import AnimatedBackground from './AnimatedBackground';

// Lazy load the typewriter component
const Typewriter = lazy(() => import('typewriter-effect'));

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.99] },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    },
    hover: {
      scale: 1.03,
      boxShadow: '0px 8px 16px rgba(249, 115, 22, 0.2)',
      transition: { duration: 0.2, type: 'spring', stiffness: 400 },
    },
    tap: { scale: 0.98 },
  };

  const outlineButtonVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
      backgroundColor: 'rgba(249, 115, 22, 0)',
    },
    hover: {
      scale: 1.03,
      boxShadow: '0px 4px 12px rgba(249, 115, 22, 0.3)',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      transition: { duration: 0.2, type: 'spring', stiffness: 400 },
    },
    tap: { scale: 0.98 },
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
        delay: 0.4,
      },
    },
  };

  // Simplified floating animation
  const floatingAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -8, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop' as const,
          ease: 'easeInOut',
        },
      };

  // Simplified glow effect
  const glowEffect = {
    initial: {
      filter: 'drop-shadow(0px 0px 0px rgba(249, 115, 22, 0))',
    },
    animate: {
      filter: shouldReduceMotion
        ? 'drop-shadow(0px 0px 0px rgba(249, 115, 22, 0))'
        : 'drop-shadow(0px 0px 8px rgba(249, 115, 22, 0.4))',
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 3,
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
                transition={{ delay: 0.3, duration: 0.4 }}
                whileHover={{
                  scale: 1.03,
                  textShadow: '0px 0px 6px rgba(249, 115, 22, 0.4)',
                }}
              >
                Lakshminarayana
                <motion.span
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </motion.span>
            </motion.h1>
            <motion.div
              className="md:text-3xl text-2xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              <Suspense fallback={<div className="h-8 bg-gray-700 animate-pulse rounded"></div>}>
                <Typewriter
                  options={{
                    strings: [
                      'IIoT',
                      'Cloud Computing',
                      'Web Development',
                      'Generative AI',
                      'AI & ML',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                  }}
                />
              </Suspense>
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
                  whileHover={{ x: 3 }}
                  animate={shouldReduceMotion ? {} : { x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, repeatDelay: 2 }}
                >
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </motion.a>
              <motion.a
                href="https://storage.rxresu.me/cm3qleyi710w8dbpoekj62ubo/resumes/resume-portfolio.pdf"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-bold transition-colors text-sm"
                download
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                Download CV
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
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
              style={{ filter: 'drop-shadow(0px 0px 8px rgba(249, 115, 22, 0.3))' }}
            >
              <motion.span initial="initial" animate="animate" variants={glowEffect}>
                👨‍💻
              </motion.span>
            </motion.span>

            {/* Simplified animated rings */}
            {!shouldReduceMotion && (
              <>
                <motion.div
                  className="absolute rounded-full border-2 border-orange-500/20"
                  initial={{ width: 100, height: 100, opacity: 0 }}
                  animate={{
                    width: [100, 180],
                    height: [100, 180],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: 'easeOut',
                  }}
                  style={{ top: 'calc(50% - 50px)', left: 'calc(50% - 50px)' }}
                />

                <motion.div
                  className="absolute rounded-full border-2 border-red-500/20"
                  initial={{ width: 100, height: 100, opacity: 0 }}
                  animate={{
                    width: [100, 250],
                    height: [100, 250],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeOut',
                    delay: 0.8,
                  }}
                  style={{ top: 'calc(50% - 50px)', left: 'calc(50% - 50px)' }}
                />
              </>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Simplified particles with CSS animations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-400/10 dark:bg-orange-500/20 animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
