import React from 'react';
import { useForm } from '@formspree/react';
import type { FormEvent } from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mpzvwnyq');
  const [projectType, setProjectType] = React.useState('');
  const [stage, setStage] = React.useState('');
  const [challenge, setChallenge] = React.useState('');
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    void handleSubmit(event);
  };

  return (
    <section id="contact" className="contact-section section-wrap">
      <div className="contact-copy">
        <p className="eyebrow">04 / Start a conversation</p>
        <h2>Have a hard problem?<br /><em>Let&apos;s make it simpler.</em></h2>
        <p>Tell me what you&apos;re building, where it&apos;s stuck, or what you want to explore next.</p>
        <a className="email-link" href="mailto:revosambat123@gmail.com">revosambat123@gmail.com <span>↗</span></a>
      </div>
      {state.succeeded ? (
        <div className="form-success"><span>✓</span><h3>Thanks for reaching out.</h3><p>I&apos;ll get back to you soon.</p></div>
      ) : (
        <form onSubmit={submitForm} className="contact-form">
          <label htmlFor="name">Your name<input id="name" name="name" type="text" required /></label>
          <label htmlFor="email">Email address<input id="email" name="email" type="email" required /></label>
          <div className="brief-options">
            <label htmlFor="project-type">Project type
              <select id="project-type" name="project type" value={projectType} onChange={(event) => setProjectType(event.target.value)} required>
                <option value="">Choose one</option>
                <option>Web application</option><option>Mobile application</option><option>Backend system</option><option>Cloud architecture</option>
              </select>
            </label>
            <label htmlFor="project-stage">Current stage
              <select id="project-stage" name="project stage" value={stage} onChange={(event) => setStage(event.target.value)} required>
                <option value="">Choose one</option>
                <option>Idea</option><option>Prototype</option><option>Existing product</option><option>Scaling</option>
              </select>
            </label>
            <label htmlFor="challenge">Main challenge
              <select id="challenge" name="main challenge" value={challenge} onChange={(event) => setChallenge(event.target.value)} required>
                <option value="">Choose one</option>
                <option>Architecture</option><option>Performance</option><option>Offline support</option><option>Integrations</option>
              </select>
            </label>
          </div>
          <label htmlFor="message">Tell me more<textarea id="message" name="message" rows={4} required /></label>
          <button className="button button-primary" type="submit" disabled={state.submitting}>{state.submitting ? 'Sending…' : 'Send message ↗'}</button>
        </form>
      )}
    </section>
  );
}
