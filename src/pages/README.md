# 📄 Page Object Model (POM)

Dieser Ordner enthält alle Page-Klassen, die die Web-Benutzeroberfläche repräsentieren.

### BasePage.ts
Die `BasePage` dient als Elternklasse für alle Seiten. Sie kapselt grundlegende Playwright-Aktionen (wie `click`, `fill`, `goto`) und ermöglicht es uns, globale Logik hinzuzufügen (z. B. benutzerdefiniertes Logging, erweiterte Wartebedingungen oder Fehlerbehandlung).

### Spezifische Seiten (z. B. LoginPage.ts)
Jede eindeutige UI-Seite hat ihre eigene Klasse, die von `BasePage` erbt.

**Kernprinzipien:**
- **Kapselung**: Locators werden `private` gehalten (z. B. `private usernameInput: Locator;`). Step Definitions können Locators nicht direkt ändern oder mit ihnen interagieren.
- **Lesbarkeit**: Die Page-Klasse stellt fachspezifische Business-Methoden wie `login(username, password)` bereit, anstatt roher technischer Befehle wie `fill('#username', user)`. Das hält die Step Definitions extrem sauber.
