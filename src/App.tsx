import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <footer className="bg-black border-t border-neutral-800 py-12">
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
