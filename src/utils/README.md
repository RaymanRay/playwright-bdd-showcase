# 🛠️ Allgemeine Hilfsfunktionen (Utils)

Dieser Ordner sammelt kleine Helferlein und Utility-Klassen, die überall im Projekt nützlich sein können, aber nirgendwo anders fachlich richtig reinpassen.

### Logger.ts
Ein einfaches Beispiel für einen Logger. Anstatt überall `console.log()` zu verwenden, zentralisieren wir das Logging hier. 
Sollten wir später ein komplexeres Logging-System (wie z.B. Winston oder das Schreiben von Logs in eine separate Datei) einbauen wollen, müssen wir den Code nur an dieser einen Stelle anpassen, anstatt hunderte von Testdateien zu ändern.
