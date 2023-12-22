import logo from './logo.svg';
import './output.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="text-black-400 bg-blue-950 body-font">
      <Navbar />
      <About />
      <Contact />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
