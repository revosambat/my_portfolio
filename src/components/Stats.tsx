import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
}

const stats: Stat[] = [
  { value: 30, prefix: '~', suffix: '%', label: 'Fewer support tickets', detail: 'Offline and background API synchronization for mobile teams' },
  { value: 150, prefix: '$', suffix: '+', label: 'Monthly cloud savings', detail: 'VPC redesign and serverless architecture improvements' },
  { value: 40, prefix: '~', suffix: '%', label: 'Faster delivery cycles', detail: 'Reusable React Native and TypeScript component libraries' },
  { value: 7, label: 'Selected projects', detail: 'Web, mobile, cloud, and data products' },
  { value: 5, label: 'Years of engineering', detail: 'Across SaaS, property tech, and environmental tech' },
];

function formatValue(stat: Stat, value: number) {
  const rounded = Math.round(value);
  return `${stat.prefix ?? ''}${rounded}${stat.suffix ?? ''}`;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValue(stat.value);
      return;
    }

    let frame = 0;
    const duration = 1300;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(stat.value * eased);
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, stat.value]);

  return (
    <div className="stat-card" data-reveal>
      <strong className="stat-value" aria-label={formatValue(stat, stat.value)}>{formatValue(stat, value)}</strong>
      <span className="stat-label">{stat.label}</span>
      <p className="stat-detail">{stat.detail}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="stats-section section-wrap" ref={sectionRef}>
      <div className="section-heading" data-reveal>
        <p className="eyebrow">06 / Impact</p>
        <h2>Outcomes, not just output.</h2>
        <p>A few measurable results from recent work — the kind of details I look for when I evaluate my own systems.</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => <StatCard key={stat.label} stat={stat} active={active} />)}
      </div>
    </section>
  );
}
