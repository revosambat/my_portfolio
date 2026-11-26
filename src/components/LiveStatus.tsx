import { useEffect, useState } from 'react';

const MALTA_TIME_ZONE = 'Europe/Malta';

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: MALTA_TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: MALTA_TIME_ZONE,
  weekday: 'short',
  day: 'numeric',
  month: 'short',
});

export default function LiveStatus() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="live-status" aria-label="Current availability and local time">
      <div className="live-status-top">
        <span className="live-status-badge"><span className="status-dot" /> Available for selected projects</span>
        <span className="live-status-clock">
          <time dateTime={now.toISOString()}>{timeFormatter.format(now)}</time>
          <span>Malta</span>
        </span>
      </div>
      <p className="live-status-date">{dateFormatter.format(now)} · San Pawl il-Baħar</p>
      <p className="live-status-focus">
        <strong>Currently building</strong>
        backend engineering, technical requirements analysis, and system architecture for business applications.
      </p>
    </aside>
  );
}
