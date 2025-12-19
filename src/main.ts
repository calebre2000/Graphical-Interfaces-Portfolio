import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { retroTheme } from "./colors";

function applyRetroTheme() {
  const root = document.documentElement;

  Object.entries(retroTheme).forEach(([key, color]: [string, any]) => {
    root.style.setProperty(
      `--color-${key}`,
      color.hex()
    );
  });
}

applyRetroTheme();
createApp(App).mount('#app')
