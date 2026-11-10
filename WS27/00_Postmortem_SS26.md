# 🔍 Postmortem: Klausur SS26 (09.07.2026)

> **Zweck:** Ehrlich verstehen, *warum* die Klausur schiefging — damit der WS27-Plan
> genau diese Ursachen beseitigt. Kein Selbstvorwurf: Die Vorbereitung hat funktioniert
> **für das, wofür sie gebaut war**. Sie war nur für das Falsche gebaut.

---

## 1. Was in der Klausur tatsächlich drankam (aus dem Gedächtnis)

| # | Aufgabe | War vorbereitet? | Ergebnis |
|---|---|---|---|
| 1 | Kombinatorik (wie erwartet) | ✅ ja | ok |
| 2 | **Eis: 3 Kugeln, 10 Sorten, Reihenfolge egal** | ⚠️ Formel stand auf dem Spicker (②, „mit Wiederholung"), wurde aber nicht erkannt | falsch (10³ statt C(12,3)=220) |
| 3 | **Siebformel-Aufgabe** | ❌ Thema nie behandelt | keine Ahnung |
| 4 | **Schützen-Wettschießen** (p=0,4 vs. p=0,2, Zwischenstand gegeben, „gewinnt Schütze 1 noch?") | ❌ Aufgabentyp nie geübt (Vergleich zweier Binomialverteilungen) | keine Ahnung |
| 5 | **Schützen-Ungleichung** („wie viele Schüsse für ≥ 95,5 % mind. 1 Treffer?") | ⚠️ Formel stand auf dem Spicker (④, letzte Zeile!), im neuen Kontext nicht erkannt | keine Ahnung |
| 6 | **3 Jäger schießen auf n Hasen: Verteilung für k Treffer aufstellen, dann E[X], Var(X)** | ❌ „Verteilung selbst aufstellen" nie geübt — nur fertige Verteilungen einsetzen | keine Ahnung |
| 7 | **RSA: n=437, e=317, c=300** | ⚠️ Typ geübt, aber Werkzeuge versagten (s.u.) | verrechnet |

---

## 2. Die vier Grundursachen

### Ursache A — Abdeckungslücke: gelernt wurde das Klausur-*Template*, geprüft wurde die Themen-*Auswahl*

Die SS26-Strategie („Template-Mastery") basierte auf **5 alten Probeklausuren**:
9 wiederkehrende Aufgabentypen, alles andere gestrichen. Die Klausur SS26 hat sich
aber an der **offiziellen Themen-Auswahl** (`wk.vfhwuk.gliederung.auswahl.pdf`) orientiert
— und dort sind **markiert** (= prüfungsrelevant), aber im SS26-Material **nicht enthalten**:

- **Die Siebformel** (Abschnitte 25, 251–255, inkl. Anwendungen) ← kam dran!
- **Kombinationen mit Zurücklegen** (2234) ← kam dran (Eis)!
- **Das Schubfachprinzip** (24, 241–243)
- **Hypergeometrische Verteilung** (344)
- Vier Grundaufgaben der Kombinatorik **als System** (22) — nicht nur 2 davon

> **Lehre 1:** Maßstab für „vollständig vorbereitet" ist die **offizielle Themen-Auswahl**,
> nicht die Schnittmenge alter Klausuren. Alte Klausuren zeigen *Formate*, nicht *Grenzen*.

### Ursache B — Erkennungslücke: Formel auf dem Spicker ≠ Aufgabe erkannt

Zwei verlorene Aufgaben (Eis, Schützen-Ungleichung) standen **wortwörtlich auf dem
Spickzettel**. Das Problem war nie die Formel, sondern der Schritt davor:
*„Welches Modell ist das hier?"* Der SS26-Drill hat Aufgaben immer schon **vorsortiert**
geübt (Drillset 1 = Kombinatorik, Drillset 2 = WK, …) — die Einordnung wurde nie trainiert,
weil die Überschrift sie immer verraten hat.

> **Lehre 2:** Ab jetzt wird **Erkennung vor Rechnung** trainiert: gemischte Aufgaben,
> erster Pflichtschritt ist immer die Klassifikation (Modell + Formel benennen),
> erst dann rechnen.

### Ursache C — Werkzeuglücke RSA: drei konkrete Defekte im Spicker

Die Nachrechnung der Klausuraufgabe (n=437, e=317, c=300) zeigt, **wie klein** die
Aufgabe eigentlich war — und wo genau die Werkzeuge versagt haben:

1. **Faktorisierung:** Spicker sagte „stur durch 2, 3, 5, 7, 11, 13 teilen".
   **437 = 19 · 23.** Mit der Liste bis 13 ist n unfaktorisierbar. Richtig: Primzahlen
   bis **√n** testen (√437 ≈ 20,9 → auch 17 und 19).
2. **Probierformel ohne Abbruchkriterium:** Mit korrektem φ = 396 liefert
   (1 + 396k)/317 schon bei **k = 4** den Wert d = 5. Dass 100+ Versuche nicht
   ganzzahlig wurden, bedeutet: **der Modul war falsch** (mit 437 statt 396 käme der
   erste Treffer erst bei k = 140!). Die Probierformel *merkt nicht*, wenn φ falsch ist —
   sie läuft einfach ewig. Es fehlte die Regel: „nach ~10 k ohne Treffer → STOPP,
   Ansatz prüfen, Euklid rechnen."
3. **Euklid rückwärts war nicht drillsicher:** Mit φ = 396 ist der Euklid hier **2 Zeilen**
   (396 = 1·317 + 79; 317 = 4·79 + 1 → 1 = 5·317 − 4·396 → **d = 5**). Dass die Rechnung
   „ewig lang" wurde und beim Rückwärtseinsetzen nicht aufging, passt zu falschem φ —
   und das fehleranfällige Rückwärtseinsetzen war nie durch das robustere
   **Tableau-Verfahren** ersetzt worden.

   Komplette Lösung zum Nachvollziehen: d = 5 → m = 300⁵ mod 437:
   300² ≡ 415, 300⁴ ≡ 415² ≡ 47, 300⁵ ≡ 47·300 ≡ **116** (mod 437).
   Probe: 116³¹⁷ mod 437 = 300 ✓ (numerisch verifiziert).

> **Lehre 3:** Erweiterter Euklid (als **Tableau**) wird die Standardmethode und so lange
> gedrillt, bis er in < 3 min fehlerfrei sitzt. Probierformel nur noch als Schnelltest
> mit hartem Abbruch bei k = 10. Faktorisierung immer bis √n. Nach **jedem** Schritt Probe.

### Ursache D — Modellierungslücke: Verteilungen nur einsetzen, nie aufstellen

Die Jäger/Hasen-Aufgabe verlangt, eine Verteilung **selbst herzuleiten** (Werte von X
bestimmen, Fälle abzählen, P(X=k) als Formel, Summe = 1 prüfen, dann E und Var aus der
Definition). Im SS26-Material kamen Verteilungen nur als **fertige Formeln** vor
(Binomial-PMF einsetzen). Der Schritt „vom Text zum Wahrscheinlichkeitsmodell" — der
eigentliche Kern des Fachs — wurde übersprungen. Genauso fehlte der **Indikator-Trick**
(X = Summe von Indikatorvariablen → E[X] ohne Verteilung), der solche Aufgaben massiv abkürzt.

> **Lehre 4:** Verteilungen aufstellen wird ein eigenes Trainingsthema
> (→ `Themen/T3_Verteilungen_Zufallsvariablen.md`), inkl. Indikator-Trick.

---

## 3. Was funktioniert hat (behalten!)

- Die **Grundidee Spickzettel als Fahrplan** (was tun bei welcher Aufgabe) — nur war er zu schmal.
- **Drill bis zum Automatismus** — funktioniert, muss aber auf *Erkennung + Varianten* erweitert werden.
- **Numerisch verifizierte Musterlösungen** — kein einziger Fehler kam aus falschem Material.
- Kombinatorik-Basics saßen: die erwartete Aufgabe lief.

---

## 4. Konsequenz: die drei Regeln für WS27

1. **Vollständigkeit vor Effizienz.** Es wird die komplette offizielle Themen-Auswahl
   abgedeckt. Die 11 Wochen bis zum 25.01.2027 (≈ 55–60 h statt ≈ 20 h) reichen dafür.
2. **Erkennen → Ansetzen → Rechnen → Prüfen.** Jede Übungsaufgabe beginnt mit der
   Klassifikation. Gemischte Sets statt vorsortierter Drills.
3. **Werkzeuge müssen unter Stress funktionieren.** Jedes Rechenrezept braucht:
   robuste Standardmethode (nicht die schnellste!), Abbruchkriterien für Abkürzungen,
   und eine eingebaute Probe.

---

## 5. Nachtrag 10.11.2026 — woher die Klausuraufgaben kamen

Beim Durcharbeiten der Übungsaufgaben im Skript (`../SS26/VFHWUK.pdf`, jeweils der Abschnitt
„Aufgaben:" am Kapitelende) zeigt sich: **Die Juli-Klausur war keine Überraschung aus dem
Nichts, sondern eine Sammlung von Varianten dieser Aufgaben.**

| Klausuraufgabe | Vorbild im Skript |
|---|---|
| Eis: 3 Kugeln aus 10 Sorten | Aufgabe 2.2.10 — Eisladen mit 10 Sorten |
| Siebformel | Aufgaben 2.5.1 und 2.5.2 |
| Schützen mit Trefferquoten | Aufgaben 3.2.10 (3 Schützen), 3.4.2 und 3.4.7 (Bogenschütze) |
| Mindestanzahl Schüsse | Aufgaben 3.4.5 und 3.4.6 („Wie oft …, damit … größer als ½") |
| Jäger auf Hasen, Verteilung, E, Var | Aufgabe 3.3.12 (n Datensätze auf n Speicherplätze), 3.3.2 |
| RSA mit Faktorisierung | Abschnitt 4.4.8.2 und Aufgaben 4.4.x |

> **Lehre 5:** Der beste Prädiktor für die Klausur sind die Übungsaufgaben der markierten
> Skript-Kapitel — nicht die alten Klausuren. Sie sind jetzt vollständig in das WS27-Material
> eingearbeitet (`Uebungen/Skript_Aufgaben_Varianten.md` und die Drills).

→ Weiter mit `01_Strategie_WS27.md`.
