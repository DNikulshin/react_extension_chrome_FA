import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"
import react from '@vitejs/plugin-react-swc'
import { crx, ManifestV3Export } from '@crxjs/vite-plugin'
import manifestJson  from './manifest.json'
const manifest = manifestJson  as ManifestV3Export
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [tsconfigPaths(), react(), crx({ manifest })],
})
