import type { Config } from '@react-router/dev/config'

export default {
  // Enable static site generation (pre-rendering)
  ssr: true,
  async prerender() {
    // Pre-render all routes for SSG
    return ['/']
  },
} satisfies Config
