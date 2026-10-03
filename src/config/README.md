# ⚙️ Konfiguration & Umgebung

Dieses Modul kümmert sich um das Laden und Validieren von Umgebungsvariablen.

### Warum Zod?
Wir verwenden **Zod**, um unsere `.env` Dateien zur Laufzeit zu validieren. In typischen Testautomatisierungs-Frameworks führen fehlende oder falsch geschriebene Umgebungsvariablen oft dazu, dass Tests zufällig tief in der Ausführung fehlschlagen, wenn eine URL oder ein Passwort als `undefined` gewertet wird.

Durch die Verwendung von `envSchema.parse()` implementieren wir einen **Fail-Fast**-Ansatz. Das Framework validiert die Umgebung, *bevor* ein Test überhaupt startet. Wenn eine Variable fehlt oder den falschen Typ hat (z. B. ein ungültiges URL-Format), bricht die Ausführung sofort mit einer klaren, lesbaren Fehlermeldung ab.

### Nutzung
Importiere das validierte `env` Objekt an einer beliebigen Stelle im Framework, um auf deine Konfiguration zuzugreifen:
```typescript
import { env } from '../config/env';

console.log(env.BASE_URL); // Ist garantiert ein gültiger URL-String
```
