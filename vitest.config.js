/**
 * Vitest configuration.
 * Vitest does NOT read the "vitest" key of package.json: the coverage
 * thresholds below are the ones that really make the CI fail (quality gate).
 */
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.js'],
      exclude: ['src/index.js'], // only starts the HTTP server
      reporter: ['text', 'html', 'lcov'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80
      }
    }
  }
})
