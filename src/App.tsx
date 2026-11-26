import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Architecture from './components/Architecture';
import Resume from './components/Resume';
import ScrollProgress from './components/ScrollProgress';
import OfflineNotice from './components/OfflineNotice';
import { useTheme } from './hooks/useTheme';
import { useSeo } from './hooks/useSeo';

function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useSeo();
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

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
        <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenResume={openResume} />
        <main>
          <About onOpenResume={openResume} />
          <Projects selectedSkill={selectedSkill} onClearSkill={() => setSelectedSkill(null)} />
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
      <Resume open={resumeOpen} onClose={closeResume} />
    </>
  );
}

export default App;
