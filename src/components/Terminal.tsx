import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { projects } from '../constants/data';
import { resumeProfile } from '../constants/resume';

interface TerminalProps {
  onOpenResume: () => void;
  onToggleTheme: () => void;
}

interface Line {
  id: number;
  kind: 'system' | 'command' | 'output' | 'error';
  text: string;
}

const QUICK_COMMANDS = ['help', 'stack', 'projects', 'contact'];

export default function Terminal({ onOpenResume, onToggleTheme }: TerminalProps) {
  const [history, setHistory] = useState<Line[]>([
    { id: 0, kind: 'system', text: 'Portfolio shell v1.0 — type `help` to see what you can do.' },
  ]);
  const [input, setInput] = useState('');
  const nextId = useRef(1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const respond = (raw: string): Omit<Line, 'id'>[] => {
    const [command] = raw.trim().toLowerCase().split(/\s+/);

    switch (command) {
      case 'help':
        return [{ kind: 'output', text: [
          'Available commands:',
          '  whoami       short introduction',
          '  stack        core technologies',
          '  experience   recent roles',
          '  projects     selected work',
          '  contact      email and LinkedIn',
          '  resume       open the printable résumé',
          '  theme        toggle light / dark',
          '  time         current time in Malta',
          '  clear        clear this terminal',
        ].join('\n') }];
      case 'whoami':
        return [{ kind: 'output', text: 'Sambat Das — software engineer focused on backend architecture, secure REST APIs, and reliable cloud delivery. Currently in Malta, working remotely.' }];
      case 'stack':
        return [{ kind: 'output', text: 'NestJS · Node.js · TypeScript · PostgreSQL · DDD / CQRS · AWS · Docker · React.js · Next.js · React Native' }];
      case 'experience':
        return [{ kind: 'output', text: [
          'Backend-Focused Full Stack Engineer — Freelance (02/2026 – now)',
          'Independent Engineering & Technical Analysis — Freelance (2026 – now)',
          'Senior Full Stack Developer — Dormo Solutions (09/2025 – 12/2025)',
          'Full Stack Developer — Web Friend (12/2024 – 08/2025)',
          'Software Engineer — Wolfmatrix (11/2021 – 12/2023)',
        ].join('\n') }];
      case 'projects':
        return [{ kind: 'output', text: projects.map((project, index) => `${String(index + 1).padStart(2, '0')}  ${project.title} — ${project.subtitle}`).join('\n') }];
      case 'contact':
        return [{ kind: 'output', text: `Email     ${resumeProfile.contact.email}\nLinkedIn  ${resumeProfile.contact.linkedin}\nLocation  ${resumeProfile.location}` }];
      case 'resume':
        onOpenResume();
        return [{ kind: 'output', text: 'Opening résumé…' }];
      case 'theme':
        onToggleTheme();
        return [{ kind: 'output', text: 'Theme switched.' }];
      case 'time':
        return [{ kind: 'output', text: new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Malta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date()) + ' — San Pawl il-Baħar, Malta' }];
      case 'clear':
        return [];
      default:
        return [{ kind: 'error', text: `command not found: ${command || '(empty)'} — try \`help\`` }];
    }
  };

  const submit = (value: string) => {
    const raw = value.trim();
    if (!raw) return;

    if (raw.toLowerCase() === 'clear') {
      setHistory([]);
    } else {
      const lines: Line[] = [
        { id: nextId.current++, kind: 'command', text: raw },
        ...respond(raw).map((line) => ({ ...line, id: nextId.current++ })),
      ];
      setHistory((current) => [...current, ...lines]);
    }
    setInput('');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(input);
  };

  return (
    <div className="terminal" data-reveal>
      <div className="terminal-bar">
        <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>visitor@sambat.dev — portfolio shell</span>
      </div>
      <div className="terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
        {history.map((line) => (
          <p className={`terminal-line terminal-${line.kind}`} key={line.id}>
            {line.kind === 'command' && <span className="terminal-prompt">$ </span>}
            {line.text}
          </p>
        ))}
        <form className="terminal-form" onSubmit={onSubmit}>
          <label className="terminal-prompt" htmlFor="terminal-input">$ </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
            placeholder="type a command…"
          />
        </form>
      </div>
      <div className="terminal-hints">
        {QUICK_COMMANDS.map((command) => (
          <button type="button" key={command} onClick={() => submit(command)}>{command}</button>
        ))}
      </div>
    </div>
  );
}
