import React from 'react';
import portrait from '../assets/images/mypic.jpeg';

export default function About() {
  return (
    <section id="top" className="hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Available for selected projects</p>
        <h1>Backend-minded.<br /><em>Product focused.</em></h1>
        <p className="hero-intro">
          I&apos;m Sambat, a full-stack developer who turns complex workflows into reliable
          web and mobile products. I care about clear architecture, thoughtful UX, and systems
          that keep working after launch.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/sambat-das-67471b194/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="hero-aside">
        <div className="portrait-frame">
          <img src={portrait} alt="Sambat Das" />
          <span className="portrait-label">Sambat Das / 2026</span>
        </div>
        <div className="hero-note">
          <span className="note-number">01</span>
          <p>Currently building domain-driven systems, cloud products, and mobile experiences from Malta.</p>
        </div>
      </div>
      <div className="hero-meta">
        <span>Full-stack developer</span>
        <span>4+ years shipping software</span>
        <span>Malta · Remote</span>
      </div>
    </section>
  );
}
