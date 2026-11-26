import React from 'react';
import portrait from '../assets/images/my_pic_4.jpg';

interface AboutProps {
  onOpenResume: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
  return (
    <section id="top" className="hero section-wrap">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow"><span className="status-dot" /> Available for selected projects</p>
        <h1>Backend-minded.<br /><em>Product focused.</em></h1>
        <p className="hero-intro">
          I&apos;m Sambat, a software engineer with nearly five years building web, mobile, and
          backend systems across SaaS, recruitment, property tech, and environmental tech. I focus
          on clean architecture, secure APIs, and cloud delivery that stays reliable after launch.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
          <button className="text-link resume-link" type="button" onClick={onOpenResume}>Download résumé ↗</button>
          <a className="text-link" href="https://www.linkedin.com/in/sambat-das-67471b194/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="hero-aside" data-reveal>
        <div className="portrait-frame">
          <img src={portrait} alt="Sambat Das" />
          <span className="portrait-label">Sambat Das / 2026</span>
        </div>
        <div className="hero-note">
          <span className="note-number">01</span>
          <p>Currently working on backend engineering, technical requirements analysis, and system architecture for business applications.</p>
        </div>
      </div>
      <div className="hero-meta" data-reveal>
        <span>Software engineer</span>
        <span>Nearly 5 years shipping software</span>
        <span>Malta · Remote</span>
      </div>
    </section>
  );
}
