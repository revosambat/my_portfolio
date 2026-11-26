import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
      setShowTop(window.scrollY > 400);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const rounded = Math.round(progress);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={rounded}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <button
        className={showTop ? 'back-to-top visible' : 'back-to-top'}
        type="button"
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span aria-hidden="true">↑</span>
      </button>
    </>
  );
}
