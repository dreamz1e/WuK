# 🗓️ Lernplan WS27 — Juli 2026 bis Winterklausur

> **Klausurtermin: noch offen** (Wiederholung im Winter, erfahrungsgemäß Ende Jan/Anfang
> Feb 2027). **Sobald der Termin feststeht: hier eintragen und Phase 5 rückwärts davon
> terminieren.** Der Plan ist bewusst in Phasen statt Kalenderwochen gebaut — er
> verkraftet Urlaub, andere Module und Verschiebungen.

**Budget-Annahme:** 2 Sessions/Woche à 60–90 min + 15 min Kurzwiederholung
(≈ 3 h/Woche). Über ~28 Wochen sind das **~80–90 h** — mehr als das Vierfache der
SS26-Vorbereitung (~20 h). Deshalb ist Vollabdeckung diesmal realistisch.

**Fester Wochenrhythmus (ab Phase 1):**
- **Session 1 (Neues):** Thema nach Plan — Skript-Abschnitt lesen, Herleitung nachvollziehen, 3–5 Aufgaben.
- **Session 2 (Festigen):** Drills zum aktuellen Thema **+ 2 gemischte Altaufgaben** (Erkennung!).
- **Kurzwiederholung (15 min, anderer Tag):** Trainer-App / Lernkarten / Spickzettel-Abschnitt laut erklären.

---

## Phase 0 — Sofort (Juli 2026, ~2 h, dann Pause erlaubt)

- [ ] `00_Postmortem_SS26.md` lesen — einmal, gründlich, ohne Selbstkasteiung.
- [ ] `Klausuren/Klausur_SS26_Rekonstruktion.md` **nur lesen** (noch nicht rechnen) —
      du sollst sehen: jede dieser Aufgaben ist mit dem richtigen Werkzeug klein.
- [ ] Klausurtermin/Anmeldefrist der Wiederholungsklausur recherchieren und oben eintragen.
- [ ] **Danach: bewusst 4–6 Wochen WuK-Pause** (Sommermodule, Erholung). Der Frust darf raus.
      Optional: 1× pro Woche 10 min Trainer-App, damit nichts komplett einrostet.

## Phase 1 — Fundament Kombinatorik & Mengen (Sept 2026, ~5 Wochen)

Modul: `Themen/T1_Kombinatorik_komplett.md` · Skript Kap. 1–2 (S. 9–121)

- [ ] W1: Mengenlehre-Basics + Binomialkoeffizienten (Rechenregeln, Pascal, binomischer Lehrsatz).
- [ ] W2: **Die 4 Grundaufgaben als 2×2-Matrix** — alle vier, mit je 3 Einkleidungen.
      ⭐ inkl. Kombination **mit** Zurücklegen (Eis-Aufgabe!).
- [ ] W3: Permutationen von Multimengen + Skript-Aufgaben S. 82–89, 100.
- [ ] W4: **Siebformel** — 2 und 3 Mengen, Anwendungen (Teilbarkeit, Derangements) +
      `Uebungen/Drill_Siebformel.md`. **Schubfachprinzip** (klein, 1 Session-Hälfte).
- [ ] W5: Gemischter Abschluss: `Uebungen/Erkennungstraining_1.md` Teil A +
      alle Kombinatorik-Aufgaben der SS26-Rekonstruktion rechnen.

**Meilenstein M1:** Eis-Aufgabe & Siebformel-Aufgabe der Rekonstruktion fehlerfrei.

## Phase 2 — Wahrscheinlichkeit & Bayes (Okt 2026, ~4 Wochen)

Modul: `Themen/T2_Wahrscheinlichkeit.md` · Skript Kap. 3.1–3.2 (S. 126–186)

- [ ] W1: Ergebnisräume, Laplace, UND/ODER-Regeln (**ODER = Siebformel für P** — Brücke zu Phase 1).
- [ ] W2: Fahrstuhl-/Urnen-/Würfel-Klassiker (SS26-Stärken auffrischen, neue Einkleidungen).
- [ ] W3: Bedingte W., Ereignisbäume, totale W., **Bayes**.
- [ ] W4: Skript-Aufgaben S. 177–186 + gemischtes Set (Kombinatorik + WK).

**Meilenstein M2:** Bayes + eine unbekannte Laplace-Einkleidung sicher.

## Phase 3 — Zufallsvariablen & Verteilungen ⭐ Schwerpunkt (Nov 2026, ~5 Wochen)

Modul: `Themen/T3_Verteilungen_Zufallsvariablen.md` · Skript Kap. 3.3–3.5

Der Block, der die Klausur entschieden hat — bekommt die meiste Zeit.

- [ ] W1: ZV-Begriff, **Verteilung aufstellen** (Schema: Werte → Fälle zählen → Σ=1),
      E[X] und Var(X) aus der Definition.
- [ ] W2: **Indikator-Trick + Linearität von E** · Jäger/Hasen-Aufgabe komplett selbst,
      dann `Uebungen/Drill_Verteilung_aufstellen.md`.
- [ ] W3: Binomialverteilung inkl. **Herleitung** · Ungleichungs-Aufgaben (Mindest-n,
      Logarithmus-Flip!) in 3 Einkleidungen.
- [ ] W4: **Wettkampf-/Vergleichsaufgaben** (2 Binomials, Doppelsumme) —
      Schützen-Aufgabe der Rekonstruktion + 2 Varianten. Hypergeometrisch + geometrische Verteilung (kurz).
- [ ] W5: Stetige ZV (C bestimmen, E, Var, P(a<X<b)) + Skript-Aufgaben S. 262–271.

**Meilenstein M3:** Jäger- und beide Schützen-Aufgaben der Rekonstruktion fehlerfrei unter 12 min/Stück.

## Phase 4 — Kryptographie (Dez 2026, ~4 Wochen, Feiertage einkalkuliert)

Modul: `Themen/T4_Krypto_Werkzeugkasten.md` · Skript Kap. 4

- [ ] W1: ggT & **erweiterter Euklid als Tableau** — `Uebungen/Drill_Euklid_Inverse.md`
      bis < 3 min pro Inverse. Faktorisierung **bis √n**.
- [ ] W2: φ-Funktion, Euler-Theorem, schnelle Exponentiation (Quadrier-Kette mit Protokoll).
- [ ] W3: **RSA komplett** — Rekonstruktions-Aufgabe (437er) + 3 frische; Probierformel
      nur noch als 10-Schritte-Schnelltest. Affine Chiffre auffrischen.
- [ ] W4: Diffie-Hellman + Caesar/Vigenère/monoalphabetisch (Verfahren verstehen,
      1 Übungsaufgabe je) + Skript-Aufgaben S. 435–438.

**Meilenstein M4:** RSA-Rekonstruktion in < 15 min inkl. aller Proben.

## Phase 5 — Transfer & Generalprobe (Jan 2027 bis Klausur, ~4–5 Wochen)

- [ ] W1: `Uebungen/Erkennungstraining_1.md` komplett (Ziel: 18/20) — Lücken → zurück ins Modul.
- [ ] W2: **Probeklausur 1** (alte Klausur, lange nicht gesehen, unter Zeit) → Fehleranalyse.
- [ ] W3: **Spickzettel schreiben** (aus `03_Spickzettel_A4_WS27.md`, per Hand,
      Abschreiben = Lernen) · **Probeklausur 2** (SS26-Rekonstruktion unter Zeit, Ziel ≥ 85 %).
- [ ] W4: **Probeklausur 3 ohne Spicker** (Ziel ≥ 60 %) · schwächste 2 Themen nachdrillen.
- [ ] Klausurwoche: nur noch Kurzwiederholung + Proben-Rituale; keine neuen Themen.

**Meilenstein M5 = Definition of Ready** aus `01_Strategie_WS27.md` — alle Haken gesetzt.

---

## Puffer- und Anpassungsregeln

- **Eine Woche ausgefallen?** Phase verlängern, nichts überspringen — der Plan hat
  ~4 Wochen Luft bis Ende Januar.
- **Thema sitzt früher?** Zeit in Phase 3 und Phase 5 stecken (dort ist die Rendite am höchsten).
- **Klausurtermin früher als erwartet?** Phase-5-Inhalte sind unantastbar (4 Wochen);
  gekürzt wird zuerst P2-Stoff in Phase 4 W4.
- **Material-Lücken** (weitere Drills, neue Probeklausuren im WS27-Stil, Trainer-App-Update
  auf die neuen Themen): jeweils zu Phasenbeginn in einer Claude-Session nachgenerieren lassen.
