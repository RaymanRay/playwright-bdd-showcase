# 🥒 BDD Feature Files

Dieser Ordner enthält alle `.feature` Dateien.

### Gherkin Syntax
Wir nutzen die Gherkin-Sprache (`Given`, `When`, `Then`), um Tests aus der Perspektive des Endnutzers zu schreiben.
Das hat mehrere Vorteile:
- **Lebende Dokumentation**: Die Tests lesen sich wie ein Handbuch.
- **Kommunikation**: Nicht-technische Kollegen (Product Owner, QA-Tester ohne Programmierkenntnisse) können die Tests lesen und sogar selbst spezifizieren.
- **Struktur**: Es zwingt uns, Tests logisch in Vorbedingungen (`Given`), Aktionen (`When`) und erwartete Ergebnisse (`Then`) zu unterteilen.

Das Tool `playwright-bdd` liest diese Dateien und verbindet jeden Satz automatisch mit dem entsprechenden TypeScript-Code im `steps` Ordner.
