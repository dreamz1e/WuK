# 📱 WuK Trainer WS27 — Übungs-App für die Wiederholungsklausur

**Klausur: Montag, 25.01.2027, 10:00–12:00.** Die App deckt die komplette offizielle
Themen-Auswahl ab und trainiert zuerst das, was SS26 gefehlt hat: **die Aufgabe erkennen,
bevor man rechnet.** Sie ersetzt den alten Trainer in `../../SS26/Trainer/` (eigener
Speicherstand, der alte Fortschritt wird nicht übernommen).

## Starten

- **PC:** `App.html` im Browser öffnen — kein Setup, kein Internet nötig.
- **Handy (GitHub Pages):** <https://dreamz1e.github.io/WuK/WS27/Trainer/App.html> öffnen →
  Browser-Menü → „Zum Startbildschirm hinzufügen“. Läuft danach offline.

Der Fortschritt liegt nur lokal im Browser (`localStorage`, Schlüssel `wuk-ws27-v1`),
also getrennt je Gerät und je Adresse (Datei vs. GitHub Pages).

## Die 8 Modi

| Tab | Wozu |
|---|---|
| 📅 **Heute** | Countdown, aktuelle Lernplan-Woche zum Abhaken, tägliche 10 Minuten (5 Erkennungsfragen + 1 Tableau), Ampel je Aufgabentyp, Definition of Ready |
| 🧭 **Erkennung** | Gemischte Aufgabentexte ohne Themenhinweis → Modell per Multiple Choice wählen (mit den typischen Verwechslern), danach Ansatz + Signalwörter. 92 handgeschriebene Texte plus generierte |
| 🎯 **Drill** | Zufallsaufgaben zu allen 24 Typen, Standard gemischt. Brüche (`13/28`), Dezimalzahlen (`0,464`) und Prozent werden akzeptiert. Rechenweg nach WS27-Methode, erste Zeile immer „Erkennung:“ |
| 🧮 **Tableau** | Erweiterten Euklid Zeile für Zeile selbst eintragen, Prüfung je Zeile, Stoppuhr, Ziel < 3 min inkl. Probe |
| 🔁 **Wdh.** | Leitner-System (5 Boxen) über alle Aufgabentypen und Karten |
| 🃏 **Karten** | 91 Karteikarten: Formeln, Theorie-Begriffe, Fallen aus dem Postmortem |
| ⏱️ **Klausur** | 7 Aufgaben quer durch alle Blöcke, 120 min (echt) oder 45 min (kurz), Auswertung mit Musterlösung und Verlauf |
| 📄 **Spicker** | Kompakte Nachschlageansicht der Blöcke ⓪–⑩ |

## Typ-Katalog (IDs wie im Lernplan)

- **Kombinatorik:** K1 Permutation/Multimenge · K2 Vier Grundaufgaben · K3 Auswahl mit Bedingungen · K4 Siebformel · K5 Schubfachprinzip · K6 Binomialkoeffizient/Lehrsatz/Gitterwege
- **Wahrscheinlichkeit:** W1 Laplace · W2 Fahrstuhl/Belegung · W3 Urne/hypergeometrisch · W4 Bayes/totale W. · W5 UND/ODER unabhängig
- **Verteilungen:** V1 Binomial · V2 Mindest-n-Ungleichung · V3 Wettkampf zweier Serien · V4 Verteilung aufstellen, E, Var · V5 geometrisch/Poisson · V6 stetige ZV
- **Krypto:** Z1 ggT/erweiterter Euklid · Z2 Inverse/Kongruenz · Z3 φ/Euler/Fermat · Z4 RSA · Z5 Affine Chiffre · Z6 Caesar/Vigenère · Z7 Diffie-Hellman

## Technik

- Eine Datei `App.html`, alles inline (kein Build, kein Framework, kein CDN). Zwei Skripte:
  `core` (Mathe, 24 Generatoren mit 113 Varianten, Inhalte — ohne DOM) und `ui` (Oberfläche).
- Alle Aufgaben und Lösungen werden berechnet, nicht aus einer Liste gezogen. Potenzen
  modulo n laufen über `BigInt`.
- `manifest.json` + `service-worker.js` (Cache `wuk-ws27-v1`, Netz zuerst) machen die App
  installierbar und offline-fähig — nur über http(s), nicht bei `file://`.

## Tests

```bash
node test_generators.js        # 2000 Läufe pro Typ
node test_generators.js 10000  # gründlicher
```

Der Test lädt den Kern direkt aus `App.html` und rechnet jeden Generator **unabhängig**
nach: Kombinatorik, Siebformel, Belegungsmodell und Verteilungen per Brute-Force-Enumeration,
hypergeometrisch per Zug-für-Zug-Rechnung, Wettkampf über alle Trefferfolgen, stetige ZV
per numerischer Integration, Krypto über naive Potenzen (RSA: `e·d mod φ = 1`, `mᵉ mod n = c`,
`cᵈ mod n = m`). Dazu: jede Musterlösung wird von der eigenen Antwortprüfung akzeptiert,
51 handgeschriebene Zahlen aus Erkennung/Karten/Spicker, Lernplan-Daten, Klausur-Zusammenstellung
und die Syntax des UI-Skripts.

Nach einer Änderung an `App.html` den Test laufen lassen und in `service-worker.js` den
Cache-Namen hochzählen (`wuk-ws27-v2` …), damit das Handy die neue Version lädt.

## Grenzen

- Geprüft werden Endergebnisse, nicht der Rechenweg — den vergleichst du mit der Musterlösung.
- Beweis- und Begründungsaufgaben (Schubfach „zeige, dass …“, Fermat-Beweis, Theoriefragen)
  kommen nur in Erkennung und Karten vor, nicht als eintippbare Drill-Aufgabe.
- Wahrscheinlichkeiten gelten als richtig bei höchstens 2 % relativer Abweichung
  (mindestens 3 gültige Ziffern eintippen).
