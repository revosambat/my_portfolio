import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Sambat Das</span>
        <span>Building systems that stay useful.</span>
      </footer>
    </div>
  );
}

export default App;
