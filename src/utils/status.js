/**
 * Utility designed to create branch coverage.
 * Maps uptime (seconds) to a label.
 */
export function formatStatus (uptimeSec) {
  // DEVOPS-4: reject non-numbers, NaN and Infinity too, not just negatives
  if (typeof uptimeSec !== 'number' || !Number.isFinite(uptimeSec) || uptimeSec < 0) {
    throw new Error('invalid uptime')
  }
  if (uptimeSec < 60) return 'warming-up'
  if (uptimeSec < 3600) return 'healthy'
  return 'steady'
}
