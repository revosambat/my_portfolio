import React, { useState } from 'react';
import { projects } from '../constants/data';

interface ProjectsProps {
  selectedSkill: string | null;
  onClearSkill: () => void;
}

export default function Projects({ selectedSkill, onClearSkill }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openProject, setOpenProject] = useState<number | null>(null);
  const filters = ['All', ...Array.from(new Set(projects.flatMap((project) => project.categories)))];
  const visibleProjects = projects.filter((project) => (
    (activeFilter === 'All' || project.categories.includes(activeFilter))
    && (!selectedSkill || project.tags.includes(selectedSkill) || project.categories.includes(selectedSkill))
  ));

  const clearFilters = () => {
    setActiveFilter('All');
    onClearSkill();
  };

  return (
    <section id="work" className="work-section section-wrap">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">02 / Selected work</p>
        <h2>Products with a purpose.</h2>
        <p>From sensor data and property tax appeals to offline-first field tools, these are the kinds of systems I enjoy making.</p>
      </div>
      <div className="project-filters" aria-label="Filter projects by capability" data-reveal>
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
            type="button"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid" data-reveal>
        {visibleProjects.map((project, index) => (
          <article className={`project-card project-card-${index + 1} ${selectedSkill ? 'skill-filtered' : ''}`} key={project.id}>
            <div className="project-topline">
              <span>{project.period}</span>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="project-type">{project.subtitle}</p>
            <h3>{project.title}</h3>
            <span className="project-status"><span /> {project.status ?? 'Live project'}</span>
            <p className="project-description">{project.description}</p>
            <button
              className="case-study-toggle"
              type="button"
              aria-expanded={openProject === project.id}
              onClick={() => setOpenProject(openProject === project.id ? null : project.id)}
            >
              {openProject === project.id ? 'Close case study' : 'Open case study'} <span>{openProject === project.id ? '↑' : '↓'}</span>
            </button>
            {openProject === project.id && (
              <div className="case-study">
                <p><strong>My role</strong>{project.role}</p>
                <p><strong>What I worked on</strong></p>
                <ul>
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            )}
            <div className="tag-list">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project <span>↗</span></a>}
          </article>
        ))}
      </div>
      {visibleProjects.length === 0 && (
        <div className="project-empty">
          <p>No projects match this combination yet.</p>
          <button type="button" onClick={clearFilters}>Clear filters ↗</button>
        </div>
      )}
    </section>
  );
}
