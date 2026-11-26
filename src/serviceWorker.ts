export function registerServiceWorker() {
  if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;

  const register = async () => {
    try {
      const registration = await navigator.serviceWorker.register('./service-worker.js', { scope: './' });
      await navigator.serviceWorker.ready;

      const origin = window.location.origin;
      const urls = performance.getEntriesByType('resource')
        .map((entry) => entry.name)
        .filter((url) => url.startsWith(origin) && !url.endsWith('/service-worker.js'));

      if (urls.length > 0 && registration.active) {
        registration.active.postMessage({ type: 'CACHE_URLS', urls });
      }
    } catch (error) {
      console.warn('Service worker registration failed:', error);
    }
  };

  if (document.readyState === 'complete') {
    void register();
  } else {
    window.addEventListener('load', () => void register(), { once: true });
  }
}
