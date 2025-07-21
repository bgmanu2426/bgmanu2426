import { lazy, Suspense } from 'react';
import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Awards = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Header />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse"></div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse"></div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse"></div>}>
          <Awards />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse"></div>}>
          <Contact />
        </Suspense>
      </main>
      <footer className="bg-black py-6">
        <AnimatedBackground variant="orange-glow" />
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="pt-6">
              <p className="text-neutral-400">
                &copy; {new Date().getFullYear()}{' '}
                <span className="text-orange-400 font-semibold">Manu BG</span>. All rights reserved.
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                Made with <span className="text-red-500">❤️</span> and{' '}
                <span className="text-orange-400">React</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
