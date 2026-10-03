import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from './fixtures';
import { Logger } from '../utils/logger';

const { Given, When, Then } = createBdd(test);

Given('ich navigiere zur Webseite des besten Fußballclubs der Welt', async ({ fcHomePage }) => {
  Logger.step('Rufe die FC Köln Homepage auf');
  await fcHomePage.navigateToHome();
});

When('ich das Cookie-Banner akzeptiere', async ({ fcHomePage }) => {
  Logger.step('Versuche Cookie-Banner zu akzeptieren');
  await fcHomePage.acceptCookiesIfVisible();
});

Then('enthält der Titel der Seite {string}', async ({ page }, expectedTitle: string) => {
  Logger.step(`Prüfe, ob Seitentitel "${expectedTitle}" enthält`);
  // Sucht im Titel der Webseite nach dem Text (Groß-/Kleinschreibung wird ignoriert dank "i")
  await expect(page).toHaveTitle(new RegExp(expectedTitle, 'i'));
});

When('ich nach dem Spieler {string} suche', async ({ fcHomePage }, searchTerm: string) => {
  Logger.step(`Suche nach: ${searchTerm}`);
  await fcHomePage.searchFor(searchTerm);
});

Then('erhalte ich eine Meldung, dass keine Ergebnisse gefunden wurden', async ({ fcHomePage }) => {
  Logger.step('Prüfe auf "Keine Ergebnisse" Meldung');
  const text = await fcHomePage.getNoResultsText();
  expect(text).toBeTruthy();
});

When('ich im Menü auf den Fanshop klicke', async ({ fcHomePage }) => {
  Logger.step('Klicke auf Fanshop-Link');
  await fcHomePage.goToFanShop();
});

Then('werde ich zum offiziellen Shop weitergeleitet', async ({ page }) => {
  Logger.step('Prüfe Shop-URL');
  // Wir prüfen, ob die URL das Wort "shop" beinhaltet
  await expect(page).toHaveURL(/.*shop.*/i);
});
