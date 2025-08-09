import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiHashnode } from 'react-icons/si';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = useDarkMode();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-content-light dark:text-content-dark"
          ></motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark transition-colors"
            >
              Projects
            </a>
            <a
              href="#technologies"
              className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark transition-colors"
            >
              Technologies
            </a>
            <a
              href="#awards"
              className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark transition-colors"
            >
              Awards
            </a>
            <a
              href="#contact"
              className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark transition-colors"
            >
              Contact
            </a>
            <a
              href="https://blogs.lnbg.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
            >
              <SiHashnode className="inline-block mr-1 pb-[1]" /> Blogs
            </a>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-content-dark" />
                ) : (
                  <Moon className="w-5 h-5 text-content-light" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-content-dark" />
              ) : (
                <Moon className="w-5 h-5 text-content-light" />
              )}
            </button>
            <button
              className="text-content-light dark:text-content-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a
                href="#about"
                className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark"
              >
                Projects
              </a>
              <a
                href="#technologies"
                className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark"
              >
                Technologies
              </a>
              <a
                href="#awards"
                className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark"
              >
                Awards
              </a>
              <a
                href="#contact"
                className="text-content-light/80 dark:text-content-dark/80 hover:text-content-light dark:hover:text-content-dark"
              >
                Contact
              </a>
              <a
                href="https://lnbg.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors text-center"
              >
                <SiHashnode className="inline-block mr-1 pb-[2px]" /> Blogs
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
