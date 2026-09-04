/**
 * Optional future backend init — NOT used right now.
 *
 * This site is 100% static. No API calls run on load.
 * When you add a backend later, you can call scheduleInitialRequest()
 * from App.jsx without blocking the first paint.
 */
export function scheduleInitialRequest() {
  const apiUrl = import.meta.env.VITE_API_URL
  if (!apiUrl) return

  window.setTimeout(() => {
    try {
      fetch(`${String(apiUrl).replace(/\/$/, '')}/health`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        credentials: 'omit',
      }).catch(() => {})
    } catch {
      // ignore
    }
  }, 5000)
}
