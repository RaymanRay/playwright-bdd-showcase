import { Page, Locator } from '@playwright/test';

/**
 * Die BasePage ist die Basis für alle unsere Page Objects (Seiten).
 * Sie bündelt allgemeine Aktionen, damit wir nicht auf jeder Seite
 * denselben Code neu schreiben müssen.
 */
export class BasePage {
  // Das Playwright "Page" Objekt steht allen abgeleiteten Klassen zur Verfügung
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigiert zu einem bestimmten Pfad.
   * Da in der playwright.config.ts die BASE_URL gesetzt ist, 
   * reicht hier z.B. "/login".
   */
  async goto(path: string) {
    await this.page.goto(path);
  }

  /**
   * Klickt auf ein Element und stellt sicher, dass es vorher sichtbar ist.
   * @param locator Das Element, auf das geklickt werden soll.
   */
  async clickElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  /**
   * Füllt ein Textfeld aus, wartet aber erst darauf, dass es sichtbar ist.
   */
  async fillText(locator: Locator, text: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }
}
