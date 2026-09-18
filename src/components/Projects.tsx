import React from 'react';
import { projects } from '../constants/data';

export default function Projects() {
  return (
    <section id="work" className="work-section section-wrap">
      <div className="section-heading">
        <p className="eyebrow">02 / Selected work</p>
        <h2>Products with a purpose.</h2>
        <p>From sensor data and property tax appeals to offline-first field tools, these are the kinds of systems I enjoy making.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card project-card-${index + 1}`} key={project.id}>
            <div className="project-topline">
              <span>{project.period}</span>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="project-type">{project.subtitle}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project <span>↗</span></a>}
          </article>
        ))}
      </div>
    </section>
  );
}
