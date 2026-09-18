import React from 'react';

const links = [
  { href: '#work', label: 'Selected work' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Navbar() {
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
      <a className="nav-cta" href="mailto:revosambat123@gmail.com">Let's talk <span>↗</span></a>
    </header>
  );
}
