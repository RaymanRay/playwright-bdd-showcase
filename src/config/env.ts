import { z } from 'zod';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Wir laden die richtige .env Datei basierend auf der Variable "ENV".
// Wenn nichts gesetzt ist, nutzen wir "development" als Standard.
const environment = process.env.ENV || 'development';
const envPath = path.resolve(__dirname, `../../.env.${environment}`);

// dotenv lädt die gefundenen Variablen in process.env
dotenv.config({ path: envPath });

// Dies ist unser Zod-Schema. Hier legen wir fest, welche Variablen wir erwarten
// und welche Formate sie haben müssen.
const envSchema = z.object({
  ENV: z.enum(['development', 'staging', 'production']).default('development'),
  BASE_URL: z.string().url("Die BASE_URL muss eine gültige URL sein"),
  ADMIN_USER: z.string().min(1, "ADMIN_USER darf nicht leer sein"),
  ADMIN_PASSWORD: z.string().min(1, "ADMIN_PASSWORD darf nicht leer sein"),
});

let parsedEnv;

// Wir lassen Zod die process.env überprüfen.
try {
  parsedEnv = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("❌ Fehler in der Umgebungskonfiguration (.env):");
    console.error(JSON.stringify(error.format(), null, 2));
    // Wir stoppen den Testlauf sofort, da die Konfiguration fehlerhaft ist.
    process.exit(1);
  }
}

// Wir exportieren die validierten Variablen.
// Überall sonst im Code können wir nun sicher auf `env.BASE_URL` etc. zugreifen.
export const env = parsedEnv!;
