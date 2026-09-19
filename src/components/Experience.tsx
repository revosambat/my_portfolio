import React, { useState } from 'react';
import { experience } from '../constants/data';

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);
  const selected = experience[activeExperience];

  return (
    <section id="experience" className="experience-section section-wrap">
      <div className="section-heading">
        <p className="eyebrow">03 / Experience</p>
        <h2>A career shaped by real products.</h2>
        <p>Move through the timeline to see how my work grew from software delivery into product-focused, full-stack systems.</p>
      </div>
      <div className="experience-timeline" role="tablist" aria-label="Career timeline">
        {experience.map((item, index) => (
          <button
            className={activeExperience === index ? 'timeline-item active' : 'timeline-item'}
            type="button"
            role="tab"
            aria-selected={activeExperience === index}
            key={item.company}
            onClick={() => setActiveExperience(index)}
          >
            <span>{item.period}</span>
            <strong>{item.company}</strong>
          </button>
        ))}
      </div>
      <div className="experience-detail" role="tabpanel">
        <div>
          <p className="eyebrow">{selected.period}</p>
          <h3>{selected.company}</h3>
          <p className="experience-role">{selected.role}</p>
        </div>
        <div>
          <p className="experience-summary">{selected.summary}</p>
          <div className="tag-list">
            {selected.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
