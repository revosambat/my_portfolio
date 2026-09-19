import React, { useState } from 'react';
import { architecturePatterns } from '../constants/data';

export default function Architecture() {
  const [patternId, setPatternId] = useState(architecturePatterns[0].id);
  const [nodeId, setNodeId] = useState(architecturePatterns[0].nodes[0].id);
  const pattern = architecturePatterns.find((item) => item.id === patternId) || architecturePatterns[0];
  const node = pattern.nodes.find((item) => item.id === nodeId) || pattern.nodes[0];

  const choosePattern = (id: string) => {
    const next = architecturePatterns.find((item) => item.id === id) || architecturePatterns[0];
    setPatternId(next.id);
    setNodeId(next.nodes[0].id);
  };

  return (
    <section id="architecture" className="architecture-section section-wrap">
      <div className="section-heading">
        <p className="eyebrow">05 / How I think</p>
        <h2>Systems you can explore.</h2>
        <p>Choose a product pattern, then click through the building blocks behind the experience.</p>
      </div>
      <div className="architecture-tabs" role="tablist">
        {architecturePatterns.map((item) => (
          <button className={item.id === pattern.id ? 'architecture-tab active' : 'architecture-tab'} type="button" role="tab" aria-selected={item.id === pattern.id} key={item.id} onClick={() => choosePattern(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="architecture-panel">
        <div className="architecture-flow">
          {pattern.nodes.map((item, index) => (
            <React.Fragment key={item.id}>
              <button className={item.id === node.id ? 'architecture-node active' : 'architecture-node'} type="button" onClick={() => setNodeId(item.id)} aria-label={`Inspect ${item.label}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.label}</strong>
              </button>
              {index < pattern.nodes.length - 1 && <span className="architecture-arrow">↓</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="architecture-detail">
          <p className="eyebrow">{pattern.label}</p>
          <h3>{node.label}</h3>
          <p>{node.detail}</p>
          <span className="architecture-context">{pattern.description}</span>
        </div>
      </div>
    </section>
  );
}
