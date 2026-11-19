import type { Config } from '@react-router/dev/config'

export default {
  // Static build: no server, every route is prerendered
  ssr: false,
  async prerender() {
    return ['/']
  },
} satisfies Config
