import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
// Wir importieren unsere env-Konfiguration. Dadurch wird das Zod-Schema validiert,
// BEVOR Playwright überhaupt mit den Tests beginnt.
import { env } from './src/config/env'; 

// Konfiguration für Playwright-BDD. Hier sagen wir dem Tool,
// wo unsere Feature-Files und Step-Definitions liegen.
const testDir = defineBddConfig({
  features: 'src/features/**/*.feature',
  steps: ['src/steps/**/*.ts'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
  
  use: {
    // Hier nutzen wir direkt unsere validierte BASE_URL
    baseURL: env.BASE_URL,
    // Zeigt den Browser an, anstatt ihn im Hintergrund auszuführen
    headless: false,
    // Spuren (Traces) und Screenshots nur bei Fehlern aufnehmen, 
    // um die Ausführung sauber zu halten.
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
