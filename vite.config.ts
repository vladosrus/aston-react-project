import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
//Здесь важен именно экспорт по умолчанию для работы приложения
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()]
});
