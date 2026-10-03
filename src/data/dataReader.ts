import * as fs from 'fs';
import * as path from 'path';

/**
 * Der DataReader ist dafür zuständig, unsere Testdaten sicher aus Dateien zu lesen.
 * Anstatt Testdaten direkt in den Code zu schreiben, halten wir sie in JSON-Dateien.
 */
export class DataReader {
  //Liest eine JSON-Datei aus dem "data" Ordner.
  static readJson(fileName: string) {
    const filePath = path.resolve(__dirname, fileName);

    // Wir prüfen vorher, ob die Datei überhaupt existiert. 
    // Das spart uns unübersichtliche Fehlermeldungen.
    if (!fs.existsSync(filePath)) {
      throw new Error(`Die Testdaten-Datei '${fileName}' wurde im Pfad '${filePath}' nicht gefunden.`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }
  //Hilfsmethode, um direkt auf unsere User-Daten zuzugreifen.
  static getUsers() {
    const data = this.readJson('testData.json');
    return data.users;
  }
}
