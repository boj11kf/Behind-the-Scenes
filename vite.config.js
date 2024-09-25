import react from '@vitejs/plugin-react';
import MillionLint from "@million/lint";
import { defineConfig } from "vite";
 
export default defineConfig({
  plugins: [MillionLint.vite(), react()],
});