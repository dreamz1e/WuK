# ✅ Lösung Probeklausur W2

> Alle Ergebnisse numerisch (Python) verifiziert. Aufbau je Aufgabe: **Erkennung → Weg → Punkte → typische Falle**.

---

## Aufgabe 1 (10 P, ~10 min) — Multimengen-Permutation, Multinomialkoeffizient

**Erkennung:** „Umordnen von Buchstaben mit Wiederholungen" → n!/(n₁!·…·nₖ!). (d) ist dieselbe Formel: Koeffizient von xᵃyᵇzᶜ in (x+y+z)ⁿ = n!/(a!b!c!).

STATISTIK: 9 Buchstaben — **S 2, T 3, A 1, I 2, K 1**.

**(a) [3 P]** 9!/(2!·3!·2!) = 362 880/24 = **15 120**
**(b) [2 P]** Zwei T fixiert, Rest S 2, T 1, A, I 2, K (7 Buchstaben): 7!/(2!·2!) = **1 260**
**(c) [2 P]** Block (TTT) + S, S, A, I, I, K = 7 Objekte: 7!/(2!·2!) = **1 260**
**(d) [3 P]** 8!/(3!·3!·2!) = 40 320/72 = **560**

**Typische Falle:** in (b) die T-Gruppe im Nenner nicht anpassen (es bleibt nur **ein** T übrig → 1! statt 3!).

---

## Aufgabe 2 (12 P, ~10 min) — Siebformel rückwärts

**Erkennung:** drei überlappende Gruppen mit gegebenen Paarschnitten → Siebformel; gesucht ist diesmal der **Dreierschnitt** (Formel umstellen).

**(a) [6 P]** |L∪W∪M| = 120 − 10 = 110.
110 = 60 + 65 + 40 − 25 − 20 − 18 + x = 102 + x → **x = 8**

**(b) [3 P]** genau eines = Einzelne − 2·Paare + 3·Tripel = 165 − 126 + 24 = **63**

**(c) [3 P]** genau zwei = Paare − 3·Tripel = 63 − 24 = **39**

Kontrolle: 63 + 39 + 8 = 110 ✓ (Venn-Diagramm von innen nach außen füllen liefert dasselbe: nur L&W 17, nur L&M 12, nur W&M 10; nur L 23, nur W 30, nur M 10.)

**Typische Falle:** die 10 „keins" vergessen und mit 120 als Vereinigung rechnen (→ x = 18).

---

## Aufgabe 3 (16 P, ~18 min) — Verteilung aufstellen, Randverteilungen

**Erkennung:** (a)/(b) X ohne Standardnamen → Baukasten: |Ω| = 36, Werte, zählen, Σ = 1, E, Var. (c) gemeinsame Tabelle → Zeilen-/Spaltensummen; unabhängig ⇔ **jede** Zelle = Produkt der Ränder.

**(a) [6 P]** X ∈ {0,…,5}. Differenz 0: 6 Paare; Differenz k ≥ 1: 2·(6−k) Paare.

| k | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Fälle | 6 | 10 | 8 | 6 | 4 | 2 |
| P(X=k) | 6/36 | 10/36 | 8/36 | 6/36 | 4/36 | 2/36 |

Σ = 36/36 = 1 ✓

**(b) [5 P]** E[X] = (0 + 10 + 16 + 18 + 16 + 10)/36 = 70/36 = **35/18 ≈ 1,944**
E[X²] = (10 + 32 + 54 + 64 + 50)/36 = 210/36 = 35/6
Var(X) = 35/6 − (35/18)² = 1890/324 − 1225/324 = **665/324 ≈ 2,052**

**(c) [5 P]** Ränder: P(U=0) = 0,4, P(U=1) = 0,6 · P(V=0) = 0,3, P(V=1) = 0,4, P(V=2) = 0,3.
E[U] = **0,6** · E[V] = 0,4 + 0,6 = **1,0**
Unabhängig? P(U=0)·P(V=0) = 0,12 ≠ 0,1 = P(U=0, V=0) → **nicht unabhängig** (ein Gegenbeispiel genügt).

**Typische Falle:** bei (a) die Paare nur einfach zählen (z. B. Differenz 1: 5 statt 10) — Σ = 1 schlägt dann fehl.

---

## Aufgabe 4 (16 P, ~18 min) — Wettkampf zweier Binomialserien

**Erkennung:** Zwischenstand, Restserien, Vergleich → X ~ Bin(4; 0,6) (A hat noch 4 Pfeile), Y ~ Bin(3; 0,5) (B noch 3).

| k | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| P(X=k) | 0,0256 | 0,1536 | 0,3456 | 0,3456 | 0,1296 |
| P(Y=k) | 0,125 | 0,375 | 0,375 | 0,125 | – |

(Verteilungen 4 P)

**(a) [6 P]** A gewinnt ⇔ 3 + X > 5 + Y ⇔ **X ≥ Y + 3**:
P = P(Y=0)·P(X≥3) + P(Y=1)·P(X=4) = 0,125·0,4752 + 0,375·0,1296 = 0,0594 + 0,0486 = **0,108**

**(b) [4 P]** Unentschieden ⇔ X = Y + 2:
0,125·0,3456 + 0,375·0,3456 + 0,375·0,1296 = 0,0432 + 0,1296 + 0,0486 = **0,2214**
(P(B gewinnt) = 1 − 0,108 − 0,2214 = 0,6706.)

**(c) [2 P]** E[Endstand A] = 3 + 4·0,6 = **5,4** · E[Endstand B] = 5 + 3·0,5 = **6,5**

**Typische Falle:** Δ falsch (X ≥ Y + 2 statt + 3): „mehr Treffer" heißt strikt größer, Rückstand 2 ⇒ man braucht 3 mehr.

---

## Aufgabe 5 (10 P, ~8 min) — hypergeometrisch vs. binomial

**Erkennung:** Ziehen **ohne** Zurücklegen aus zwei Sorten → hypergeometrisch (N = 20, r = 5, m = 4). Mit Zurücklegen → Binomial mit p = 5/20.

**(a) [3 P]** C(5,1)·C(15,3)/C(20,4) = 5·455/4845 = **455/969 ≈ 0,4696**
**(b) [3 P]** 1 − C(15,4)/C(20,4) = 1 − 1365/4845 = **232/323 ≈ 0,7183**
**(c) [2 P]** E[X] = m·r/N = 4·5/20 = **1**
**(d) [2 P]** Bin(4; 0,25): 4·0,25·0,75³ = **0,4219**

**Typische Falle:** (a) mit der Binomialformel rechnen — „Stichprobe/Lieferung/entnimmt" bedeutet ohne Zurücklegen.

---

## Aufgabe 6 (12 P, ~14 min) — erweiterter Euklid, Euler

**Erkennung:** „x, y mit ax + by = …" → Euklid-Tableau; lösbar ⇔ ggT | rechte Seite. aᵉ mod n → Euler: Exponent mod φ(n).

**(a) [5 P]**

| Rest | x | y | q |
|---|---|---|---|
| 527 | 1 | 0 | |
| 341 | 0 | 1 | 1 |
| 186 | 1 | −1 | 1 |
| 155 | −1 | 2 | 1 |
| **31** | **2** | **−3** | 5 → Rest 0 |

ggT = **31**, **x = 2, y = −3**. Probe: 1054 − 1023 = 31 ✓

**(b) [2 P]** 62 = 2·31 → lösbar: x = 4, y = −6 (Probe: 2108 − 2046 = 62 ✓). 50 ist kein Vielfaches von 31 → **keine Lösung**.

**(c) [3 P]** ggT(3,34) = 1, φ(34) = φ(2)·φ(17) = 16 → 3¹⁶ ≡ 1. 200 = 12·16 + 8 → 3²⁰⁰ ≡ 3⁸.
3² = 9 · 3⁴ = 81 ≡ 13 · 3⁸ ≡ 13² = 169 = 4·34 + 33 → **33**

**(d) [2 P]** (m−1)² = m² − 2m + 1 = m·(m−2) + 1 ≡ 1 (mod m). Also (m−1)·(m−1) ≡ 1, d. h. (m−1)⁻¹ = m−1. ∎ (Kurz: m−1 ≡ −1 und (−1)² = 1.)

**Typische Falle:** in (a) nach dem ersten kleinen Rest aufhören; die ggT-Zeile ist die **letzte mit Rest ≠ 0**.

---

## Aufgabe 7 (16 P, ~22 min) — RSA mit e-Wahl

**Erkennung:** e-Kandidaten → zulässig ⇔ ggT(e, φ) = 1; dafür zuerst faktorisieren.

**1) Faktorisieren [3 P]:** √667 ≈ 25,8 → testen bis 23: 667 = **23 · 29** (2, 3, 5, 7, 11, 13, 17, 19 teilen nicht).
**2) φ [1 P]:** 22 · 28 = **616** = 2³·7·11

**(a) [3 P]** ggT(11, 616) = 11 ✗ · ggT(21, 616) = 7 ✗ · ggT(237, 616) = 1 ✓ (237 = 3·79) → **e = 237**

**(b) 3) d = 237⁻¹ mod 616 [5 P]:**

| Rest | x | y | q |
|---|---|---|---|
| 616 | 1 | 0 | |
| 237 | 0 | 1 | 2 |
| 142 | 1 | −2 | 1 |
| 95 | −1 | 3 | 1 |
| 47 | 2 | −5 | 2 |
| **1** | −5 | **13** | ← ggT = 1 |

Probe: −5·616 + 13·237 = −3080 + 3081 = 1 ✓ → **d = 13**

**4) m = 473¹³ mod 667 [3 P]:** 13 = 8 + 4 + 1
473² ≡ **284** · 473⁴ ≡ 284² ≡ **616** · 473⁸ ≡ 616² ≡ **600**
473¹² ≡ 600·616 ≡ 82 · 473¹³ ≡ 82·473 = 38 786 = 58·667 + 100 → **m = 100**

**5) Endprobe [1 P]:** 100²³⁷ mod 667 = 473 ✓ (verifiziert); e·d = 3081 = 5·616 + 1 ✓

**Typische Falle:** Tableau mit (667, 237) statt (616, 237) ansetzen; Quadrier-Kette ohne Zwischenreste zu notieren.

---

## Aufgabe 8 (8 P, ~8 min) — Diffie-Hellman

**Erkennung:** öffentlich p, g; geheim a, b → α = gᵃ, β = gᵇ, K = βᵃ = αᵇ (alles mod p).

**(a) [4 P]** α = 2⁵ = 32 ≡ **3** (mod 29) · β = 2¹²: 2⁵ ≡ 3, 2¹⁰ ≡ 9, 2¹² ≡ 9·4 = 36 ≡ **7**

**(b) [4 P]** Alice: K = β^a = 7⁵: 7² = 49 ≡ 20, 7⁴ ≡ 400 ≡ 23, 7⁵ ≡ 23·7 = 161 ≡ **16**
Bob: K = α^b = 3¹²: 3³ = 27 ≡ −2 → 3¹² = (−2)⁴ = **16** ✓

**Typische Falle:** die geheimen Exponenten a, b „austauschen" oder K = α·β rechnen.

---

## Notenschlüssel & Auswertung

| Punkte | ≥ 90 | 80–89 | 70–79 | 60–69 | 50–59 | < 50 |
|---|---|---|---|---|---|---|
| Note (Richtwert) | 1 | 2 | 3 | 3–4 | 4 (bestanden) | nicht bestanden |

**Ziel für W2:** ≥ 65 P. Rückverweise: A1, A2 → T1 · A3, A4, A5 → T3 (+ Drill „Verteilung aufstellen") · A6, A7, A8 → T4 (+ Drill „Euklid & Inverse").
