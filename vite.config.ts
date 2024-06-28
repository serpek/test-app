import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' })],
  define: {
    RECORDING: JSON.stringify('recording'),
    PAUSED_RECORDING: JSON.stringify('paused_recording'),
    PAUSED_PLAYING: JSON.stringify('paused_playing'),
    PLAYING: JSON.stringify('playing'),
    PLAYING_REQUESTED: JSON.stringify('playing_requested'),
    PROCESSING: JSON.stringify('processing'),
    STOPPED: JSON.stringify('stopped'),
    GRAPH_WIDTH: 2,
  }
})
