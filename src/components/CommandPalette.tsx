import { useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';
import { projects, skillGroups } from '../constants/data';
import { downloadVcard } from '../utils/vcard';
import { resumeProfile } from '../constants/resume';

const GROUPS = ['Navigate', 'Projects', 'Skills', 'Actions'] as const;
type Group = typeof GROUPS[number];

interface Command {
  id: string;
  label: string;
  hint: string;
  group: Group;
  keywords: string;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onToggleTheme: () => void;
  onSelectSkill: (skill: string) => void;
}

function goToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

function fuzzyScore(text: string, query: string) {
  const haystack = text.toLowerCase();
  const needle = query.trim().toLowerCase();
  if (!needle) return 1;

  const direct = haystack.indexOf(needle);
  if (direct >= 0) return 100 - direct;

  let index = 0;
  for (const character of needle) {
    index = haystack.indexOf(character, index);
    if (index === -1) return 0;
    index += 1;
  }
  return 1;
}

export default function CommandPalette({ open, onClose, onOpenResume, onToggleTheme, onSelectSkill }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [notice, setNotice] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    const sections = [
      { id: 'top', label: 'About', hint: 'Introduction and live status' },
      { id: 'work', label: 'Selected work', hint: 'Browse all projects' },
      { id: 'experience', label: 'Experience', hint: 'Career timeline' },
      { id: 'stack', label: 'Stack', hint: 'Tools and technologies' },
      { id: 'architecture', label: 'Architecture', hint: 'Explore system patterns' },
      { id: 'impact', label: 'Impact', hint: 'Measured outcomes' },
      { id: 'contact', label: 'Contact', hint: 'Get in touch' },
    ];

    const copyEmail = () => {
      void navigator.clipboard?.writeText(resumeProfile.contact.email).then(
        () => setNotice('Email copied to clipboard'),
        () => setNotice('Copy failed — use the email link'),
      );
    };

    return [
      ...sections.map((section) => ({
        id: `nav-${section.id}`,
        label: section.label,
        hint: section.hint,
        group: 'Navigate' as const,
        keywords: `go jump scroll section ${section.id}`,
        run: () => goToSection(section.id),
      })),
      ...projects.map((project) => ({
        id: `project-${project.id}`,
        label: project.title,
        hint: project.subtitle,
        group: 'Projects' as const,
        keywords: `${project.tags.join(' ')} ${project.period}`,
        run: () => window.dispatchEvent(new CustomEvent('portfolio:focus-project', { detail: project.id })),
      })),
      ...Array.from(new Set(skillGroups.flatMap((group) => group.items))).map((skill) => ({
        id: `skill-${skill}`,
        label: skill,
        hint: 'Filter projects by this skill',
        group: 'Skills' as const,
        keywords: 'technology filter stack',
        run: () => {
          onSelectSkill(skill);
          goToSection('work');
        },
      })),
      {
        id: 'action-resume',
        label: 'Open résumé',
        hint: 'Print or save as PDF',
        group: 'Actions' as const,
        keywords: 'cv download print pdf',
        run: onOpenResume,
      },
      {
        id: 'action-theme',
        label: 'Toggle theme',
        hint: 'Switch light / dark',
        group: 'Actions' as const,
        keywords: 'dark light appearance mode',
        run: onToggleTheme,
      },
      {
        id: 'action-vcard',
        label: 'Download vCard',
        hint: 'Save contact details',
        group: 'Actions' as const,
        keywords: 'contacts address book download',
        run: downloadVcard,
      },
      {
        id: 'action-copy-email',
        label: 'Copy email address',
        hint: resumeProfile.contact.email,
        group: 'Actions' as const,
        keywords: 'clipboard mail contact',
        run: copyEmail,
      },
      {
        id: 'action-top',
        label: 'Back to top',
        hint: 'Return to the beginning',
        group: 'Actions' as const,
        keywords: 'home start scroll top',
        run: () => goToSection('top'),
      },
    ];
  }, [onOpenResume, onToggleTheme, onSelectSkill]);

  const flatResults = useMemo(() => {
    return commands
      .map((command) => ({ command, score: fuzzyScore(`${command.label} ${command.hint} ${command.keywords}`, query) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 16)
      .map((item) => item.command);
  }, [commands, query]);

  const grouped = useMemo(() => (
    GROUPS
      .map((group) => ({ group, items: flatResults.filter((command) => command.group === group) }))
      .filter((entry) => entry.items.length > 0)
  ), [flatResults]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActiveIndex(0);
    setNotice('');

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const runCommand = (command: Command) => {
    onClose();
    window.setTimeout(() => command.run(), 0);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(flatResults.length, 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + Math.max(flatResults.length, 1)) % Math.max(flatResults.length, 1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const command = flatResults[activeIndex];
      if (command) runCommand(command);
    }
  };

  let flatIndex = -1;

  return (
    <div
      className="command-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="command-dialog" role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="command-search">
          <span aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            placeholder="Search sections, projects, skills, actions…"
            aria-label="Search commands"
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
              setNotice('');
            }}
            onKeyDown={onInputKeyDown}
          />
          <kbd>esc</kbd>
        </div>
        <div className="command-results">
          {flatResults.length === 0 && <p className="command-empty">No matches for “{query}”</p>}
          {grouped.map(({ group, items }) => (
            <div className="command-group" key={group}>
              <p className="command-group-label">{group}</p>
              {items.map((command) => {
                flatIndex += 1;
                const index = flatIndex;
                return (
                  <button
                    className={index === activeIndex ? 'command-item active' : 'command-item'}
                    type="button"
                    key={command.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => runCommand(command)}
                  >
                    <span className="command-item-label">{command.label}</span>
                    <span className="command-item-hint">{command.hint}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="command-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span>{notice || `${flatResults.length} results`}</span>
        </div>
      </div>
    </div>
  );
}
