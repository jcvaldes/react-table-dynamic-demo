import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jcvaldes.github.io/react-table-dynamic-demo/',
  plugins: [react()],
})
