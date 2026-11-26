import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Architecture from './components/Architecture';
import Stats from './components/Stats';
import CommandPalette from './components/CommandPalette';
import Resume from './components/Resume';
import ScrollProgress from './components/ScrollProgress';
import OfflineNotice from './components/OfflineNotice';
import { useTheme } from './hooks/useTheme';
import { useSeo } from './hooks/useSeo';

function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useSeo();
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);
  const openCommand = useCallback(() => setCommandOpen(true), []);
  const closeCommand = useCallback(() => setCommandOpen(false), []);
  const clearSkill = useCallback(() => setSelectedSkill(null), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((current) => !current);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((target) => target.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <OfflineNotice />
      <div className="site-shell">
        <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenResume={openResume} onOpenCommand={openCommand} />
        <main>
          <About onOpenResume={openResume} onToggleTheme={toggleTheme} />
          <Projects selectedSkill={selectedSkill} onClearSkill={clearSkill} />
          <Experience />
          <Skills selectedSkill={selectedSkill} onSkillSelect={setSelectedSkill} />
          <Architecture />
          <Stats />
          <Contact />
        </main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Sambat Das</span>
          <span>Building systems that stay useful.</span>
        </footer>
      </div>
      <Resume open={resumeOpen} onClose={closeResume} />
      <CommandPalette
        open={commandOpen}
        onClose={closeCommand}
        onOpenResume={openResume}
        onToggleTheme={toggleTheme}
        onSelectSkill={setSelectedSkill}
      />
    </>
  );
}

export default App;
