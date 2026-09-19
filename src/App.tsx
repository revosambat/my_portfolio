import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Architecture from './components/Architecture';

function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <About />
        <Projects selectedSkill={selectedSkill} />
        <Experience />
        <Skills selectedSkill={selectedSkill} onSkillSelect={setSelectedSkill} />
        <Architecture />
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
