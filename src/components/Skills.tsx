import React from 'react';
import { skillGroups } from '../constants/data';

interface SkillsProps {
  selectedSkill: string | null;
  onSkillSelect: (skill: string | null) => void;
}

export default function Skills({ selectedSkill, onSkillSelect }: SkillsProps) {
  return (
    <section id="stack" className="stack-section section-wrap">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">04 / The toolkit</p>
        <h2>Built for the real world.</h2>
        <p>A practical stack for building, shipping, and maintaining products end to end.</p>
      </div>
      <div className="skill-grid" data-reveal>
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <span className="skill-index">{group.index}</span>
            <h3>{group.title}</h3>
            <div className="skill-items">
              {group.items.map((item) => (
                <button
                  className={selectedSkill === item ? 'skill-button selected' : 'skill-button'}
                  type="button"
                  key={item}
                  onClick={() => onSkillSelect(selectedSkill === item ? null : item)}
                  aria-pressed={selectedSkill === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="experience-strip" data-reveal>
        <span className="eyebrow">Experience</span>
        <p>Freelance · Web Friend · Dormo Solutions · Wolfmatrix · Incwell</p>
        <span className="experience-years">2019—Now</span>
      </div>
    </section>
  );
}
