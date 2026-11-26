import { useEffect } from 'react';
import {
  resumeAchievements,
  resumeEducation,
  resumeExperience,
  resumeLanguages,
  resumeProfile,
  resumeProjects,
  resumeSkills,
} from '../constants/resume';

interface ResumeProps {
  open: boolean;
  onClose: () => void;
}

export default function Resume({ open, onClose }: ResumeProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const { contact } = resumeProfile;

  return (
    <div
      className="resume-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="resume-dialog" role="dialog" aria-modal="true" aria-labelledby="resume-title">
        <div className="resume-toolbar">
          <span className="eyebrow">Résumé / 2026</span>
          <div className="resume-toolbar-actions">
            <button className="button button-primary" type="button" onClick={() => window.print()}>
              Print / Save as PDF
            </button>
            <button className="resume-close" type="button" onClick={onClose} aria-label="Close résumé">
              ×
            </button>
          </div>
        </div>

        <div className="resume-sheet">
          <header className="resume-header">
            <div>
              <h2 id="resume-title">{resumeProfile.name}</h2>
              <p>{resumeProfile.title}</p>
            </div>
            <div className="resume-contact">
              <div>{resumeProfile.location}</div>
              <div><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
              <div><a href="tel:+35677233471">{contact.phone}</a></div>
              <div>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/sambat-das-67471b194/</a>
              </div>
            </div>
          </header>

          <section className="resume-section">
            <h3>Professional summary</h3>
            {resumeProfile.summary.map((paragraph) => (
              <p className="resume-summary" key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="resume-section">
            <h3>Technical skills</h3>
            <div className="resume-skill-list">
              {resumeSkills.map((group) => (
                <div className="resume-skill-block" key={group.title}>
                  <h4>{group.title}</h4>
                  <div className="resume-skills">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h3>Professional experience</h3>
            {resumeExperience.map((item) => (
              <div className="resume-entry" key={`${item.company}-${item.period}`}>
                <div className="resume-entry-aside">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <div>
                  <h4>{item.role} — {item.company}</h4>
                  <ul className="resume-bullets">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  {item.technologies && (
                    <p className="resume-tech"><strong>Technologies:</strong> {item.technologies}</p>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h3>Selected software projects</h3>
            {resumeProjects.map((project) => (
              <div className="resume-entry" key={project.title}>
                <div className="resume-entry-aside">
                  <span>{project.period}</span>
                </div>
                <div>
                  <h4>{project.title} — {project.kind}</h4>
                  <ul className="resume-bullets">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  {project.technologies && (
                    <p className="resume-tech"><strong>Technologies:</strong> {project.technologies}</p>
                  )}
                  {project.link && (
                    <a className="resume-link" href={project.link} target="_blank" rel="noreferrer">{project.link}</a>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h3>Key achievements</h3>
            {resumeAchievements.map((item) => (
              <div className="resume-achievement" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h3>Education</h3>
            <div className="resume-entry">
              <div className="resume-entry-aside">
                <span>{resumeEducation.period}</span>
                <span>{resumeEducation.location}</span>
              </div>
              <div>
                <h4>{resumeEducation.degree}</h4>
                <p className="resume-entry-meta">
                  {resumeEducation.school} · Final grade: {resumeEducation.finalGrade}
                </p>
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h3>Languages</h3>
            <div className="resume-facts">
              {resumeLanguages.map((item) => (
                <span key={item.language}><strong>{item.language}</strong> {item.level}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
