# 🏋️ Drill: Euklid-Tableau & Inverse (Ziel: < 3 min pro Inverse inkl. Probe)

> Phase 4, Woche 1. Methode: T4 §2 (Tableau!). **Jede Aufgabe endet mit der Probe
> a·a⁻¹ mod m = 1** — ohne Probe gilt die Aufgabe als nicht gelöst.
> Stoppuhr benutzen: Die SS26-Klausur ist an genau dieser Fertigkeit gescheitert.

**A — Inverse berechnen (Tableau):**
1. 5⁻¹ mod 17
2. 7⁻¹ mod 26
3. 11⁻¹ mod 50
4. 23⁻¹ mod 120
5. 317⁻¹ mod 396  *(die Klausuraufgabe — 2 Euklid-Zeilen!)*
6. 121⁻¹ mod 196

**B — Gleichungen a·x + b·y = c:**
7. Finde x, y mit 391x + 253y = ggT(391, 253).
8. Löse 12x + 42y = 6.
9. Löse 12x + 42y = 8 — oder begründe, warum nicht lösbar.

**C — Modulare Gleichungen (Affine-Vorstufe):**
10. Löse 8x ≡ 4 (mod 12). *(ggT-Fallunterscheidung! Alle Lösungen mod 12 angeben.)*
11. Löse 6a ≡ 20 (mod 26). *(Die klassische Affine-Tücke.)*

**D — Tempo-Runde:** Aufgaben 1–4 erneut, gemischt, unter 12 Minuten gesamt.

<details><summary>Lösungen</summary>

1. **7** (5·7 = 35 = 2·17+1 ✓)
2. **15** (7·15 = 105 = 4·26+1 ✓)
3. **41** (11·41 = 451 = 9·50+1 ✓)
4. **47** (23·47 = 1081 = 9·120+1 ✓)
5. **5** (317·5 = 1585 = 4·396+1 ✓) — Tableau: 396|1|0 · 317|0|1 · (q=1) 79|1|−1 · (q=4) 1|−4|5
6. **81** (121·81 = 9801 = 50·196+1 ✓)
7. ggT = **23**, 23 = 2·391 − 3·253 (Probe: 782−759 = 23 ✓)
8. ggT(12,42) = 6, 6 | 6 ✓ · 6 = 42 − 3·12 → **x = −3, y = 1** (Probe: −36+42 = 6 ✓)
9. **Nicht lösbar:** ggT = 6 teilt 8 nicht. (Hinschreiben — volle Punkte.)
10. g = ggT(8,12) = 4, 4 | 4 → ÷4: 2x ≡ 1 (mod 3) → x ≡ 2 (mod 3) →
    **x ∈ {2, 5, 8, 11} (mod 12)** (g = 4 Lösungen).
11. g = ggT(6,26) = 2, 2 | 20 → ÷2: 3a ≡ 10 (mod 13) → 3⁻¹ mod 13 = 9 (3·9=27≡1) →
    a ≡ 90 ≡ 12 (mod 13) → **a ∈ {12, 25} (mod 26)**. *(Als Affine-Schlüssel wäre nur
    a = 25 gültig, da ggT(25,26)=1, ggT(12,26)=2.)*
</details>
