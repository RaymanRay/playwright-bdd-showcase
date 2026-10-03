# language: de
Funktionalität: 1. FC Köln Webseite
  Als treuer Fan des 1. FC Köln
  Möchte ich sicherstellen, dass die Webseite des besten Clubs der Welt funktioniert,
  damit ich immer auf dem neuesten Stand bleibe.

  Szenario: Homepage erfolgreich aufrufen (Happy Path)
    Angenommen ich navigiere zur Webseite des besten Fußballclubs der Welt
    Wenn ich das Cookie-Banner akzeptiere
    Dann enthält der Titel der Seite "FC Köln"

  Szenario: Suche nach einem nicht existierenden Spieler (Negativ)
    Angenommen ich navigiere zur Webseite des besten Fußballclubs der Welt
    Wenn ich das Cookie-Banner akzeptiere
    Und ich nach dem Spieler "Max Mustermann" suche
    Dann erhalte ich eine Meldung, dass keine Ergebnisse gefunden wurden

  Szenario: Navigieren zum Fan-Shop (Etwas komplexer)
    Angenommen ich navigiere zur Webseite des besten Fußballclubs der Welt
    Wenn ich das Cookie-Banner akzeptiere
    Und ich im Menü auf den Fanshop klicke
    Dann werde ich zum offiziellen Shop weitergeleitet
