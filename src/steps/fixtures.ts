import { test as base } from 'playwright-bdd';
import { FcHomePage } from '../pages/FcHomePage';

// Hier legen wir fest, welche "Objekte" wir in unseren Steps zur Verfügung haben wollen.
type MyFixtures = {
  fcHomePage: FcHomePage;
};

// Wir erweitern das Basis-"test" Objekt um unsere Page Objects.
// Das ist ein geniales Konzept von Playwright (Dependency Injection).
export const test = base.extend<MyFixtures>({
  // Immer wenn ein Step "{ fcHomePage }" anfordert, wird dieser Block ausgeführt
  fcHomePage: async ({ page }, use) => {
    const fcHomePage = new FcHomePage(page);
    await use(fcHomePage);
  },
});
