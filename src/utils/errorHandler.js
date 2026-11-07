/**
 * Centralized Express error handler.
 * Ensures consistent JSON error shape across the API.
 */
export function errorHandler (err, _req, res, _next) {
  // DEVOPS-3: only keep a real HTTP error status (400-599), otherwise 500
  const status = Number.isInteger(err?.status) && err.status >= 400 && err.status < 600 ? err.status : 500
  const message = err?.message ?? 'Internal Server Error'
  res.status(status).json({ error: true, message })
}
