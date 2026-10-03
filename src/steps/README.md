# 👣 Step Definitions & Fixtures

Dieser Ordner enthält den eigentlichen TypeScript-Code, der ausgeführt wird, wenn ein Gherkin-Step (z. B. `Given der Nutzer ist auf der Login-Seite`) während eines Testlaufs gefunden wird.

### Dependency Injection mit Fixtures (`fixtures.ts`)
In traditionellen Frameworks sieht man oft, dass Page Objects manuell innerhalb jedes Steps instanziiert werden:
```typescript
const loginPage = new LoginPage(page);
await loginPage.login(user, pass);
```

Wir vermeiden dies, indem wir das leistungsstarke **Fixture**-System von Playwright nutzen. Wir erweitern das Basis `test`-Objekt um unsere Page Objects. 
Dadurch können unsere Step Definitions einfach genau die Seite anfordern (destrukturieren), die sie benötigen:
```typescript
When('der Nutzer loggt sich ein', async ({ loginPage }) => {
  await loginPage.login(user, pass);
});
```

Dies ist ein **Senior-Level Pattern**, das folgende Vorteile bietet:
1. Reduziert Boilerplate-Code drastisch.
2. Nutzt Lazy Loading (Page Objects werden nur erstellt, wenn ein Step sie tatsächlich anfordert).
3. Hält den Speicherverbrauch gering.
