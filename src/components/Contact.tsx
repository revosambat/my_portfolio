import React from 'react';
import { useForm } from '@formspree/react';
import type { FormEvent } from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm('mpzvwnyq');
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
          <label htmlFor="message">How can I help?<textarea id="message" name="message" rows={4} required /></label>
          <button className="button button-primary" type="submit" disabled={state.submitting}>{state.submitting ? 'Sending…' : 'Send message ↗'}</button>
        </form>
      )}
    </section>
  );
}
