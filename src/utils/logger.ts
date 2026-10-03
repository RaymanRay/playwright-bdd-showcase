/**
 * Ein simpler Logger, um unsere Tests nachvollziehbarer zu machen.
 * Das ist besser als überall "console.log" zu nutzen, da wir hier
 * später leicht externe Logging-Tools (wie Winston oder File-Logging)
 * einbauen können, ohne den gesamten Code ändern zu müssen.
 */
export class Logger {
  static info(message: string) {
    console.log(`[INFO] ℹ️ ${message}`);
  }

  static error(message: string) {
    console.error(`[ERROR] ❌ ${message}`);
  }

  static step(stepName: string) {
    console.log(`\n▶ SCHRITT: ${stepName}`);
  }
}
