import React from 'react';
import { skillGroups } from '../constants/data';

export default function Skills() {
  return (
    <section id="stack" className="stack-section section-wrap">
      <div className="section-heading">
        <p className="eyebrow">03 / The toolkit</p>
        <h2>Built for the real world.</h2>
        <p>A practical stack for building, shipping, and maintaining products end to end.</p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <span className="skill-index">{group.index}</span>
            <h3>{group.title}</h3>
            <div className="skill-items">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="experience-strip">
        <span className="eyebrow">Experience</span>
        <p>Freelance · Web Friend · Dormo Solutions · Wolfmatrix</p>
        <span className="experience-years">2019—Now</span>
      </div>
    </section>
  );
}
