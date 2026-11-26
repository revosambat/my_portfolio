import React from 'react';
import ThemeToggle from './ThemeToggle';
import type { Theme } from '../hooks/useTheme';

const links = [
  { href: '#work', label: 'Selected work' },
  { href: '#stack', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#contact', label: 'Contact' },
] as const;

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ theme, onToggleTheme, onOpenResume }: NavbarProps) {
  return (
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="Sambat Das home">
        <span className="brand-mark">SD</span>
        <span>Sambat Das</span>
      </a>
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="nav-resume" type="button" onClick={onOpenResume}>Résumé</button>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a className="nav-cta" href="mailto:revosambat123@gmail.com">Let's talk <span>↗</span></a>
      </div>
    </header>
  );
}
