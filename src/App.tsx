import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Skills';
import Awards from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Awards />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Manu BG. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
