# 📊 Testdaten Management

Dieser Ordner enthält alle Testdaten und die Logik, um diese zu verwalten.

### Warum JSON-Dateien?
Hardcodierte Daten im Code (z.B. Usernamen, Passwörter, Produkt-IDs) sind ein Anti-Pattern. Sie machen den Code unübersichtlich und schwer zu pflegen.
Stattdessen lagern wir alle Daten in strukturierte JSON-Dateien (wie `testData.json`) aus.

### DataReader.ts
Diese Utility-Klasse dient als sichere Schnittstelle zwischen unserem Code und den JSON-Dateien.
- **Sicherer Zugriff**: Der `DataReader` fängt ab, falls eine Datei nicht existiert, und liefert eine klare Fehlermeldung.
- **Wiederverwendbarkeit**: Du kannst leicht neue Methoden hinzufügen (z.B. `getProducts()`), um auf spezifische Datensätze zuzugreifen.
