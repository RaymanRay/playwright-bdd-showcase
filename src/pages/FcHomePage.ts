import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FcHomePage extends BasePage {
  private cookieAcceptButton: Locator;
  private searchInput: Locator;
  private fanShopLink: Locator;
  private noResultsMessage: Locator;

  constructor(page: Page) {
    super(page);
    // Best-Practice Locators: Wir nutzen Aria-Roles und Texte, anstatt brüchiger CSS-Klassen.
    // Hinweis: Diese Locators sind Beispiele und müssten je nach exaktem DOM der fc.de Seite feingetunt werden.
    this.cookieAcceptButton = page.getByRole('button', { name: /akzeptieren|zustimmen/i });
    this.searchInput = page.getByPlaceholder(/suche/i).first();
    this.fanShopLink = page.getByRole('link', { name: /fanshop|shop/i }).first();
    this.noResultsMessage = page.getByText(/keine ergebnisse|nicht gefunden/i);
  }

  async navigateToHome() {
    await this.goto('/');
  }

  async acceptCookiesIfVisible() {
    // Wenn ein Cookie-Banner auftaucht, klicke es weg. Timeout niedrig, damit der Test nicht hängt, falls keins da ist.
    try {
      await this.cookieAcceptButton.waitFor({ state: 'visible', timeout: 3000 });
      await this.cookieAcceptButton.click();
    } catch (e) {
      // Kein Banner gefunden, Test kann normal weiterlaufen
    }
  }

  async searchFor(term: string) {
    await this.searchInput.waitFor({ state: 'visible' });
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }

  async getNoResultsText() {
    return await this.noResultsMessage.textContent();
  }

  async goToFanShop() {
    await this.fanShopLink.waitFor({ state: 'visible' });
    await this.fanShopLink.click();
  }
}
