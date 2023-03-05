import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    incremental: true,
    babel:{presets:["@babel/preset-env","@babel/preset-react"]},    
    cache:true,
    minify:true,    
    chunks:true,
    moduleBundling:true,
    devCode:true,
    debug: true,
  }
})
