import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiHashnode } from 'react-icons/si';
import { useDarkMode } from '../hooks/useDarkMode';
import AnimatedBackground from './AnimatedBackground';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ['about', 'projects', 'technologies', 'awards', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  const headerVariants = {
    initial: {
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      y: 0,
    },
    scrolled: {
      boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    hidden: {
      y: -100,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
    hover: {
      y: -3,
      color: isDark ? '#ffffff' : '#000000',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 400,
      },
    },
    active: {
      color: isDark ? '#60a5fa' : '#2563eb',
      fontWeight: 'bold' as const,
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
    hover: {
      x: 5,
      color: isDark ? '#60a5fa' : '#2563eb',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 400,
      },
    },
    active: {
      color: isDark ? '#60a5fa' : '#2563eb',
      fontWeight: 'bold' as const,
    },
  };

  const themeToggleVariants = {
    light: { rotate: 0 },
    dark: { rotate: 180 },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 400,
      },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      textShadow: '0 0 8px rgba(59, 130, 246, 0.7)',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 400,
      },
    },
    tap: { scale: 0.95 },
  };

  const blogButtonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 400,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      } ${
        scrolled
          ? 'bg-background-light/90 dark:bg-background-dark/90'
          : 'bg-background-light/80 dark:bg-background-dark/80'
      } relative overflow-hidden`}
      initial="initial"
      animate={scrolled ? 'scrolled' : 'initial'}
      variants={headerVariants}
      transition={{ duration: 0.3 }}
    >
      <AnimatedBackground variant="default" opacity={0.03} />
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="text-2xl font-bold relative"
          >
            <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              🧑‍💻
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                custom={i}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className={`text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark transition-colors relative`}
                style={
                  activeSection === item.href.substring(1)
                    ? { color: isDark ? '#60a5fa' : '#2563eb' }
                    : {}
                }
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    className="absolute bottom-[-6px] left-0 h-[2px] bg-blue-500 dark:bg-blue-400"
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="https://blogs.lnbg.in/"
              target="_blank"
              rel="noopener noreferrer"
              variants={blogButtonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center">
                <SiHashnode className="inline-block mr-1 pb-[1]" /> Blogs
              </span>
            </motion.a>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                initial={isDark ? 'dark' : 'light'}
                animate={isDark ? 'dark' : 'light'}
                whileHover="hover"
                variants={themeToggleVariants}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? (
                      <Sun className="w-5 h-5 text-content-dark" />
                    ) : (
                      <Moon className="w-5 h-5 text-content-light" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              initial={isDark ? 'dark' : 'light'}
              animate={isDark ? 'dark' : 'light'}
              whileHover="hover"
              variants={themeToggleVariants}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-content-dark" />
                  ) : (
                    <Moon className="w-5 h-5 text-content-light" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            <motion.button
              className="text-content-light dark:text-content-dark p-2 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'open' : 'closed'}
                  initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-16 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg"
            >
              <div className="flex flex-col space-y-4 px-6 py-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    variants={mobileItemVariants}
                    whileHover="hover"
                    custom={i}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark py-2 px-4 rounded-lg relative`}
                    style={
                      activeSection === item.href.substring(1)
                        ? { color: isDark ? '#60a5fa' : '#2563eb' }
                        : {}
                    }
                  >
                    <span className="relative">
                      {item.name}
                      {activeSection === item.href.substring(1) && (
                        <motion.span
                          className="absolute bottom-[-2px] left-0 h-[2px] bg-blue-500 dark:bg-blue-400"
                          layoutId="mobileActiveSection"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href="https://blogs.lnbg.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={mobileItemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors text-center relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    <SiHashnode className="inline-block mr-1 pb-[2px]" /> Blogs
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
