import { ArrowRight, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 md:mb-10 md:px-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Lakshminarayana</span>
            </h1>
            <div className="text-3xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
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
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A passionate Full Stack Developer, Expert in IIoT and GenAI enthusiast specialized in
              building innovative solutions at the intersection of web development and artificial
              intelligence & machine learning.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="text-sm inline-flex items-center px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://storage.rxresu.me/cm3qleyi710w8dbpoekj62ubo/resumes/resume-portfolio.pdf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-400 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors text-sm"
                download
              >
                Download CV
                <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 hidden md:flex justify-center">
            <span className="text-9xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
