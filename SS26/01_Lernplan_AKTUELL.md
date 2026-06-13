# 📅 Lernplan AKTUELL — „Vollgas" (WuK SS26)

> **Reevaluiert am Sa, 13.06.2026.** Der ursprüngliche 6-Wochen-Plan (`01_Lernplan_6Wochen.md`)
> ging von Start am 27.05 aus — tatsächlich beginnt das Lernen erst am **13.06**. Dieser Plan
> verdichtet den Stoff auf die **verbleibenden ~3,7 Wochen** bei **~8 h/Woche (≈ 30 h gesamt)**.
> Der 6-Wochen-Plan bleibt als Referenz bestehen.

**Heute:** Sa 13.06.2026 · **Klausur:** Do 09.07.2026 · **Restzeit:** 26 Tage

---

## Die Lage in einem Satz

Drei Lernblöcke (KOMB → WK → **KRYPTO**) in 3,7 Wochen, danach 3 Tage Generalprobe.
Reihenfolge bleibt: **sanfter Einstieg → größter Hebel → Probeklausuren.** Falls es eng wird,
**niemals Tier 1 opfern** — streiche in dieser Reihenfolge: **#6 → #8 → #3.**

**Begleitend zu jedem Block: die interaktiven Lernkarten in [`Lernkarten/`](./Lernkarten/).**
Goldene Regel pro Einheit: **1.** Lernkarte durcharbeiten (Rechenwege durchklicken, Rechner ausprobieren)
→ **2.** echte Klausuraufgaben selbst rechnen → **3.** den Block auf den A4-Spicker übertragen.

---

## Block KOMB — #1 Permutation, #2 Auswahl · **Sa 13.06 – Di 16.06** (4 Tage)
**Ziel:** Die zwei sichersten Bank-Aufgaben sitzen blind (≈ 26 Pkt).
**Lernkarte:** [`Lernkarte_1_KOMB.html`](./Lernkarten/Lernkarte_1_KOMB.html)

- **#1 Permutation mit Wiederholung:** `n!/(n₁!·n₂!·…)`. Drei Varianten: alle / „beginnt-endet" (fixieren) / „zusammen" (Block).
  **Drill:** 21SoSe A1, SoSe20 A1, SS14 A1, WS0809 A1 (BANANEN).
- **#2 Auswahl:** `C(n,k)`. Nebenbedingungen: „erste m Pflicht", „genau j von p", „mindestens j", „X oder Y".
  **Drill:** 21SoSe A2, SoSe20 A2, SS14 A2.
- **Übungsset:** [`Uebungen/Woche1_KOMB.md`](./Uebungen/Woche1_KOMB.md)
- ✅ **Meilenstein:** #1 und #2 je in < 8 min ohne Spicker. Spicker-Block ① + ② steht.

---

## Block WK — #4 Binomial, #3 Laplace, #5 Bayes, #6 ZV · **Mi 17.06 – Do 25.06** (9 Tage)
**Ziel:** Binomial als Reflex, Bayes als Einsetz-Schema; Laplace sicher, ZV als Puffer.
**Lernkarte:** [`Lernkarte_2_WK.html`](./Lernkarten/Lernkarte_2_WK.html)

- **#4 Binomial (Tier 1):** `P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ`; „mind./höchstens" über Gegenereignis/Summe.
  **Drill:** SoSe20 A4, WS0607 A5 (Tennis), 21SoSe A4, WS0809 A4/A5.
- **#3 Laplace (Tier 2):** `P = günstige/mögliche`; **Gegenereignis-Reflex** bei „mindestens ein".
  **Drill:** 21SoSe A3 (Fahrstuhl), WS0607 A4, SS14 A4, SoSe20 A5.
- **#5 Bayes (Tier 1, Goldgrube):** erst die 4 Größen auslesen, dann einsetzen. Baum hilft.
  **Drill:** 21SoSe A5, SoSe20 A6, SS14 A5.
- **#6 Zufallsvariable (Tier 3):** diskret `E[X]/Var=E[X²]−(E[X])²`; stetig `C` aus `∫f=1`.
  **Drill:** 21SoSe A6 (diskret), SS14 A6 / WS0607 A6 (stetig).
- **Übungssets:** [`Uebungen/Woche2_WK1.md`](./Uebungen/Woche2_WK1.md), [`Uebungen/Woche3_Bayes_ZV.md`](./Uebungen/Woche3_Bayes_ZV.md)
- ✅ **Meilenstein:** „mindestens-ein"-Reflex + Bayes ohne Spicker. Tier 1 zu ~80 %.

---

## Block KRYPTO — #7 Werkzeugkasten, #9 RSA, #8 Affine · **Fr 26.06 – So 05.07** (10 Tage)
**Ziel:** Die Modulo-Mathematik einmal lernen → drei Aufgaben freischalten. **Wichtigste Phase.**
**Lernkarte:** [`Lernkarte_3_KRYPTO.html`](./Lernkarten/Lernkarte_3_KRYPTO.html) *(mit RSA-, Affine-, Euklid- und Exponentiations-Rechner)*

- **#7 Werkzeugkasten (Fr 26.06 – Mo 30.06):** ggT/erw. Euklid, φ-Funktion (**φ(p²)=p(p−1)!**), Euler-Theorem, schnelle Exponentiation, modulare Inverse.
  **Drill:** SoSe20 A7b, SS14 A7b, WS0809 A7b; 21SoSe A7a (8²⁴³ mod 25), SoSe20 A7a.
- **🧪 1. Probeklausur (Di 01.07): SoSe20** unter Zeit (120 min) → mit `Loesungen/Loesung_SoSe20.md` korrigieren.
- **#9 RSA (Mi 02.07 – Do 03.07, Tier 1):** Rezept n→φ→d→c^d. **Jeden Quadrierschritt mit TR prüfen!**
  **Drill:** SoSe20 A9 (=5), WS0607 A9 (=25), WS0809 A9 (=68), 21SoSe A9 (=82).
- **#8 Affine (Fr 04.07 – So 05.07):** 2 Paare → subtrahieren → a lösen (ggT-Tücke!) → b. Gültig nur ggT(a,26)=1.
  **Drill:** 21SoSe A8, SoSe20 A8, SS14 A8, WS0809 A8.
- **Übungssets:** [`Uebungen/Woche4_Krypto_Werkzeugkasten.md`](./Uebungen/Woche4_Krypto_Werkzeugkasten.md), [`Uebungen/Woche5_RSA_Affine.md`](./Uebungen/Woche5_RSA_Affine.md)
- ✅ **Meilenstein:** ggT/Euklid/Inverse/φ/Euler sicher; RSA + Affine je in < 12 min.

---

## Generalprobe & Festigung · **Mo 06.07 – Mi 08.07** (3 Tage)
**Ziel:** Routine, Tempo, Lücken schließen, Spicker finalisieren.

- **Mo 06.07 — 🧪 2. Probeklausur: 21SoSe** (anspruchsvollster Satz) unter Zeit. Korrigieren, **Top-3-Schwachstellen** notieren.
- **Di 07.07 —** die 3 Schwachstellen gezielt nachdrillen + optional **🧪 3. Probeklausur WS0809** für Tempo.
- **Mi 08.07 (Tag davor) —** Spicker einmal sauber per Hand schreiben (Vorlage: `Spickzettel_A4_WuK.md`), je 1 Aufgabe #1/#5/#9 zum Warmhalten. **Kein neuer Stoff.** Material packen: Spicker, TR, Ausweis, Stifte. Früh schlafen.
- **Übungsset:** [`Uebungen/Woche6_Generalprobe.md`](./Uebungen/Woche6_Generalprobe.md)
- ✅ **Meilenstein:** 2–3 Vollklausuren ≥ 60 %, Spicker fertig & verinnerlicht.

---

## Klausurtag · **Do 09.07**
Taktik aus `00_Strategie_WuK.md §4`: **Tier 1 zuerst** (#1 → #2 → #9 → #4 → #5), dann Tier 2 (#7 → #3 → #8), #6 nur mit Restzeit. **Formel immer hinschreiben** (Teilpunkte), Gegenereignis-Reflex, letzte 15 min Kontrolle (v.a. Modulo-Rechnungen & Brüche).

---

## Zeitvergleich alt → neu
| | 6-Wochen-Plan | Vollgas-Plan (aktuell) |
|---|---|---|
| Start | 27.05 | **13.06** |
| Dauer | 6 Wochen | **3,7 Wochen** |
| Budget | ~3 h/Woche (~20 h) | **~8 h/Woche (~30 h)** |
| KOMB | 1 Woche | 4 Tage |
| WK (alle) | 2 Wochen | 9 Tage |
| KRYPTO | 2 Wochen | 10 Tage (größter Hebel) |
| Probeklausuren | W5/W6 | 01.07 / 06.07 / (07.07) |

## Fortschritt
- [ ] Block KOMB (#1, #2) · Lernkarte 1
- [ ] Block WK (#4, #3, #5, #6) · Lernkarte 2
- [ ] Block KRYPTO (#7, #9, #8) · Lernkarte 3
- [ ] 1. Probeklausur (SoSe20) ≥ 50 %
- [ ] 2. Probeklausur (21SoSe) ≥ 60 %
- [ ] A4-Spicker fertig & verinnerlicht
