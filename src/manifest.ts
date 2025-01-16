import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
  name: "My Chrome Extension",
  version: "1.0.0",
  description: "Chrome Extension with Side Panel",
  action: {},
  side_panel: {
    default_path: "sidepanel.html"
  },
  permissions: [
    'sidePanel',
    'activeTab'
  ],
  host_permissions: [
    '<all_urls>'
  ],
  background: {
    service_worker: 'src/background.ts',
    type: 'module'
  }
} as any)