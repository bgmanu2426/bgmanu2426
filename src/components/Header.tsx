import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiHashnode } from 'react-icons/si';
import AnimatedBackground from './AnimatedBackground';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ['about', 'projects', 'skills', 'certification', 'contact'];
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

    const handleResize = () => {
      const isDesktopSize = window.innerWidth >= 768;
      setIsDesktop(isDesktopSize);

      if (isDesktopSize && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certification' },
    { name: 'Contact', href: '#contact' },
  ];

  const headerVariants = {
    initial: {
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      y: 0,
      scale: 1,
    },
    scrolled: {
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
      y: 0,
      // Only scale on desktop, not on mobile
      scale: isDesktop ? 0.98 : 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    hidden: {
      y: -100,
      scale: isDesktop ? 0.9 : 1,
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
      color: '#f97316',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 400,
      },
    },
    active: {
      color: '#f97316',
      fontWeight: 'bold' as const,
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
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
      scale: 1,
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
      color: '#f97316',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 400,
      },
    },
    active: {
      color: '#f97316',
      fontWeight: 'bold' as const,
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
      textShadow: '0 0 8px rgba(249, 115, 22, 0.7)',
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
    <>
      <motion.header
        className={`fixed transition-all duration-300 backdrop-blur-md z-50 overflow-hidden
          ${scrolled ? 'py-3' : 'py-4'}
          ${scrolled ? 'bg-black/90' : 'bg-black/70'}
          
          /* Mobile: Fixed at top */
          md:top-4 md:left-4 md:right-4 md:mx-auto md:max-w-7xl md:rounded-2xl md:border md:border-white/10 md:shadow-2xl
          
          /* Small screens: Full width at top */
          top-0 left-0 right-0 border-b border-white/10
        `}
        initial="initial"
        animate={scrolled ? 'scrolled' : 'initial'}
        variants={headerVariants}
        transition={{ duration: 0.3 }}
      >
        {/* Floating animation only on desktop */}
        <motion.div
          animate={{
            y: isDesktop ? [0, -2, 0] : 0,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"
        />
        <AnimatedBackground variant="orange-glow" opacity={0.02} />
        <nav className="container mx-auto px-6 relative z-10">
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
              <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
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
                  className={`text-white/80 hover:text-white transition-colors relative`}
                  style={activeSection === item.href.substring(1) ? { color: '#f97316' } : {}}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://blogs.lnbg.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm"
                variants={blogButtonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
              >
                <SiHashnode className="w-4 h-4" />
                <span>Blogs</span>
              </motion.a>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="md:hidden flex items-center justify-center p-2 rounded-full bg-neutral-900/30 text-white relative z-[70]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Menu - Outside header to avoid z-index conflicts */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-[60]"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            onClick={e => {
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false);
              }
            }}
          >
            <div className="container mx-auto px-6 py-24">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    variants={mobileItemVariants}
                    whileHover="hover"
                    className={`text-white/80 text-xl ${
                      activeSection === item.href.substring(1) ? 'text-orange-500 font-bold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="https://blogs.lnbg.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white w-fit mt-4"
                  variants={mobileItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <SiHashnode className="w-5 h-5" />
                  <span>Blogs</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
