# 📅 6-Wochen-Lernplan — WuK SS26

**Heute:** Mi 27.05.2026 · **Klausur:** Do 09.07.2026 · **Budget:** ~3 h/Woche (2 Einheiten à ~90 min)

**Prinzip:** Jede Woche **ein** Lernblock. Reihenfolge = sanfter Einstieg → größter Hebel → Generalprobe.
Reihenfolge der Blöcke: KOMB → WK → **KRYPTO** (Werkzeugkasten + Anwendung) → Probeklausuren.

**Goldene Regel jeder Einheit:**
> 1. Schema im Skript/Spicker anschauen (15 min) → 2. **selbst rechnen** an echten Klausuraufgaben (60 min) → 3. den neuen Block auf den **A4-Spicker** übertragen (15 min).
> Der Spicker wächst jede Woche mit — so schreibst du ihn faktisch 6× und kannst ihn am Ende auswendig.

**Übungssets pro Woche:** `SS26/Uebungen/WocheX_*.md` — frische Aufgaben + verifizierte Lösungen zum Selbsttest am Ende jeder Woche (zusätzlich zu den echten Probeklausuren).
Lösungen der Probeklausuren: **`SS26/Loesungen/`** (verifiziert!).
Skript-Seiten beziehen sich auf `VFHWUK.pdf`.

---

## Woche 1 — Block KOMB (#1 Permutationen, #2 Auswahl) · Mi 27.05 – Di 02.06
**Ziel:** Die zwei sichersten Aufgabentypen sitzen blind. (≈ 26 Pkt in modernen Klausuren)

- **Skript:** S. 41–48 (Binomialkoeffizient), S. 61–89 (4 Grundaufgaben), S. 90–100 (Multimengen).
- **Einheit 1 — Permutation mit Wiederholung (#1):**
  Formel `n!/(n₁!·n₂!·…)`. Drei Standard-Varianten üben: (a) alle Anordnungen, (b) „beginnt mit X, endet mit Y" (Plätze fixieren), (c) „Buchstaben X nebeneinander" (Block bilden).
  **Drill:** 21SoSe A1, SoSe20 A1, SS14 A1, **WS0809 A1 (BANANEN)**.
- **Einheit 2 — Auswahl-Kombinatorik (#2):**
  `C(n,k)=n!/(k!(n−k)!)`. Nebenbedingungen: „erste 2 Pflicht" (fixieren), „genau 3 von 5" (`C(5,3)·C(…)`), „mindestens 3" (Summe), „erste ODER zweite" (Fälle addieren).
  **Drill:** 21SoSe A2, SoSe20 A2, SS14 A2.
- ✅ **Meilenstein W1:** #1 und #2 je in < 8 min lösbar. Spicker-Block KOMB steht.

---

## Woche 2 — Block WK I (#4 Binomial, #3 Laplace) · Mi 03.06 – Di 09.06
**Ziel:** Binomialverteilung als Reflex; Abzähl-Wahrscheinlichkeiten sicher.

- **Skript:** S. 135–158 (Ereignisse, UND/ODER), S. 241–248 (Binomialverteilung).
- **Einheit 1 — Binomialverteilung (#4):**
  `P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ`. „genau k" direkt; „mindestens/höchstens" über Summe oder **Gegenereignis** `1−P(…)`.
  **Drill:** SoSe20 A4 (Münze), WS0607 A5 (Tennis), 21SoSe A4 (Schützen), WS0809 A4.
- **Einheit 2 — Laplace / Abzählen (#3):**
  `P = günstige/mögliche`. Gegenereignis bei „mindestens ein …". Würfel (36 bzw. 216 Fälle), Fahrstuhl (`Stockwerke^Personen`).
  **Drill:** WS0607 A4, SS14 A4, 21SoSe A3 (Fahrstuhl), SoSe20 A5.
- ✅ **Meilenstein W2:** „mindestens-ein"-Reflex (Gegenereignis) sitzt.

---

## Woche 3 — Block WK II (#5 Bayes) + Einstieg ZV (#6) · Mi 10.06 – Di 16.06
**Ziel:** Bayes als reines Einsetz-Schema; E[X]/Var-Formeln kennen.

- **Skript:** S. 159–174 (bedingte W., totale W., Bayes), S. 196–209 (Erwartungswert/Varianz).
- **Einheit 1 — Bayes (#5):** *Höchste Punktausbeute pro Lernminute.*
  `P(A|B)= P(B|A)·P(A) / [P(B|A)·P(A) + P(B|Ā)·P(Ā)]`. Immer erst die 4 Größen aus dem Text auslesen (Baumdiagramm hilft).
  **Drill:** 21SoSe A5 (Defekte), SoSe20 A6, SS14 A5.
- **Einheit 2 — Zufallsvariable (#6, Tier 3):**
  `E[X]=Σ k·P(X=k)`, `Var=E[X²]−(E[X])²`, `σ=√Var`. Bei stetiger Dichte: `C` aus `∫f=1`, dann `E[X]`, `Var` per Integral.
  **Drill:** 21SoSe A6 (Würfel-Min, diskret), WS0607 A6 / SS14 A6 (stetig).
- ✅ **Meilenstein W3:** Bayes ohne Spicker lösbar. Halbzeit-Check: Tier 1 zu ~80 %.

---

## Woche 4 — KRYPTO-Werkzeugkasten (#7 Zahlentheorie) · Mi 17.06 – Di 23.06
**Ziel:** Die Modulo-Mathematik, auf der #7, #8 UND #9 beruhen. **Wichtigste Woche.**

- **Skript:** S. 386–412 (Primzahlen, ggT, φ, Modulo, Inverse), S. 409 (Euler-Theorem).
- **Einheit 1 — ggT & erweiterter Euklid:**
  Euklid-Algorithmus (ggT = letzter Rest ≠ 0), Rückwärtseinsetzen für `ax+by=ggT`. Lösbarkeit von `ax+by=c` ⇔ `ggT | c`.
  **Drill:** SoSe20 A7b, SS14 A7b, WS0809 A7b.
- **Einheit 2 — φ-Funktion, Inverse, Euler-Theorem:**
  `φ(p)=p−1`, `φ(p·q)=(p−1)(q−1)`, **`φ(p²)=p(p−1)`**. Inverse mod m via erw. Euklid. Euler: `aᵠ⁽ⁿ⁾≡1`, Exponent reduzieren `mod φ(n)`. Schnelle Exponentiation (Quadrieren).
  **Drill:** 21SoSe A7 (8²⁴³ mod 25), SoSe20 A7a, WS0809 A7a (Endziffer).
- ✅ **Meilenstein W4:** ggT/Euklid/Inverse/φ/Euler sicher. (Damit ist RSA fast geschenkt.)

---

## Woche 5 — KRYPTO-Anwendung (#9 RSA, #8 Affine) + 1. Probeklausur · Mi 24.06 – Di 30.06
**Ziel:** Die zwei Krypto-Anwendungen + erste Generalprobe.

- **Skript:** S. 423–427 (RSA), S. 356–367 (monoalphabetisch/affin/Vigenère).
- **Einheit 1 — RSA (#9):** Rezept: (1) `n=p·q` faktorisieren → (2) `φ=(p−1)(q−1)` → (3) `d=e⁻¹ mod φ` (erw. Euklid) → (4) `m=c^d mod n` (schnelle Exp.). **Jeden Quadrierschritt mit TR prüfen!**
  **Drill:** SoSe20 A9, SS14 A9, **21SoSe A9 (richtig: m=82!)**, WS0607 A9 (=25), WS0809 A9 (=68).
  **Affine (#8):** zwei Gleichungen `a·x+b≡y (mod 26)` aufstellen, subtrahieren, nach `a` lösen (ggT-Tücke!), dann `b`. Nur `ggT(a,26)=1` ist gültiger Schlüssel.
  **Drill:** SS14 A8, WS0809 A8, 21SoSe A8.
- **Einheit 2 — 🧪 1. komplette Probeklausur unter Zeit (120 min): SoSe20.**
  Danach mit `Loesungen/Loesung_SoSe20.md` korrigieren, Fehler notieren.
- ✅ **Meilenstein W5:** Erste Vollklausur ≥ 50 %. Alle Tier-1/2-Schemata abgedeckt.

---

## Woche 6 — Generalprobe & Festigung · Mi 01.07 – Di 07.07
**Ziel:** Routine, Tempo, Lücken schließen, Spicker finalisieren.

- **Einheit 1 — 🧪 2. Probeklausur unter Zeit: 21SoSe** (modern, anspruchsvollster Satz). Korrigieren, **Top-3-Schwachstellen** identifizieren.
- **Einheit 2 — gezielt die 3 Schwachstellen nachdrillen** + (optional) 🧪 3. Klausur (WS0809) für Tempo. **A4-Spicker final reinschreiben** (handschriftlich, einseitig — Vorlage: `Spickzettel_A4_WuK.md`).
- ✅ **Meilenstein W6:** 2–3 Vollklausuren ≥ 60 %, Spicker fertig & verinnerlicht.

---

## Endspurt · Mi 08.07 (Tag vor der Klausur)
- **Nur leichte Wiederholung:** Spicker einmal durchgehen, je 1 Aufgabe #1/#5/#9 zum Warmhalten.
- **Kein neuer Stoff.** Material packen: **Spicker, Taschenrechner (Funktion prüfen!), Ausweis, Stifte.**
- Früh schlafen.

## Klausurtag · Do 09.07
- Reihenfolge & Taktik aus `00_Strategie_WuK.md §4`: **Tier 1 zuerst, Formeln immer hinschreiben, Gegenereignis-Reflex, letzte 15 min Kontrolle.**

---

## Wenn die Zeit knapp wird (Notfall-Priorität)
Fällt eine Woche aus, **niemals Tier 1 opfern**. Streiche in dieser Reihenfolge:
**#6 (Tier 3) → #8 Affine → #3 Laplace.** Halte #1, #2, #4, #5, #9 + #7 unbedingt.

## Fortschritt
- [ ] W1 KOMB · [ ] W2 WK I · [ ] W3 Bayes+ZV · [ ] W4 Werkzeugkasten · [ ] W5 RSA/Affine + PK1 · [ ] W6 PK2/3 + Spicker
