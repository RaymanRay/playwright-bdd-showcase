# Playwright-BDD E2E Test Automation Framework

Dieses Repository präsentiert ein professionelles End-to-End (E2E) Testautomatisierungs-Framework auf Senior-Niveau, das mit modernen Tools und Best Practices entwickelt wurde. Es ist skalierbar, robust und leicht zu warten.

## 🛠️ Tech Stack
- **[Playwright](https://playwright.dev/)**: Schnelle, zuverlässige Core-Testing-Engine mit intelligenten Auto-Waiting-Funktionen.
- **[Playwright-BDD](https://github.com/vitalets/playwright-bdd)**: Nahtlose Integration der Cucumber/Gherkin-Syntax direkt in den Playwright Test-Runner.
- **TypeScript**: Sorgt für Typsicherheit, sauberen Code und hervorragende IDE-Unterstützung.
- **[Zod](https://zod.dev/)**: Schema-Validierung für Umgebungsvariablen (Fail-Fast-Prinzip).
- **cross-env**: Plattformunabhängige Verwaltung von Umgebungsvariablen.

## 🏗️ Architektur & Konzepte

Das Framework folgt strikt dem **Page Object Model (POM)** Pattern in Kombination mit **Behavior-Driven Development (BDD)**.

Die wichtigsten architektonischen Merkmale umfassen:
1. **Typsichere Umgebungen (`src/config`)**: Bevor ein Test ausgeführt wird, validiert `Zod` die `.env` Variablen. Fehlt eine benötigte Variable (wie `BASE_URL`) oder ist sie ungültig, bricht das Framework sofort mit einem klaren Fehler ab, anstatt später während des Tests unvorhersehbar abzustürzen.
2. **Dependency Injection (`src/steps/fixtures.ts`)**: Anstatt Page Objects manuell in den Step Definitions zu instanziieren, nutzen wir das native Fixture-System von Playwright. Dieses injiziert genau die Seiten, die für einen Step benötigt werden. Das hält die Step Definitions extrem sauber und speichereffizient.
3. **Externe Testdaten (`src/data`)**: Hardcodierte Daten werden vermieden. Testdaten (z. B. User, Produkte) werden dynamisch über eine eigene `DataReader` Klasse aus JSON-Dateien gelesen.
4. **Lesbare Step Definitions**: Die Geschäftslogik (Gherkin) ist strikt von den UI-Interaktionen (Playwright-Code) getrennt.

## 🚀 Erste Schritte

### 1. Installation
Klone das Repository und installiere die Abhängigkeiten:
```bash
npm install
```

### 2. Playwright Browser
Installiere die benötigten Playwright Browser-Binärdateien:
```bash
npx playwright install chromium
```

### 3. Umgebungsvariablen
Lokale Umgebungsdateien werden zur Verwaltung von Konfigurationen verwendet (z. B. `.env.development`, `.env.staging`).
Stelle sicher, dass diese Dateien im Hauptverzeichnis vorhanden sind (siehe `.env.development` als Vorlage).

### 4. Tests ausführen
Wir nutzen `cross-env` über NPM-Skripte, um dynamisch zwischen den Umgebungen zu wechseln.

Tests in der **Development** Umgebung ausführen:
```bash
npm run test:dev
```

Tests in der **Staging** Umgebung ausführen:
```bash
npm run test:stage
```

Den HTML-Report nach der Ausführung anzeigen:
```bash
npm run report
```

## 📁 Ordnerstruktur
Erkunde die Unterordner für detaillierte Erklärungen zu jedem Modul:
- [`src/config/README.md`](src/config/README.md) - Erfahre mehr über die Zod Validierung.
- [`src/data/README.md`](src/data/README.md) - Erfahre mehr über den DataReader.
- [`src/features/README.md`](src/features/README.md) - Erfahre mehr über Gherkin Feature Files.
- [`src/pages/README.md`](src/pages/README.md) - Erfahre mehr über die Page Object Model Struktur.
- [`src/steps/README.md`](src/steps/README.md) - Erfahre mehr über Fixtures und Dependency Injection.
- [`src/utils/README.md`](src/utils/README.md) - Allgemeine Hilfsfunktionen.
