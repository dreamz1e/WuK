# ✅ Verifizierte Lösung — SS14 (klassisch, ~55 Pkt, Bestehen 28)

> **⚠️ = Korrektur/Präzisierung ggü. SS25-Lösung.**

## A1 — Permutation mit Wiederholung · 1,1,2,2,3,3,3 (n=7: 2×1, 2×2, 3×3)
- a) **7!/(2!·2!·3!) = 5040/24 = 210**
- b) beginnt 1, endet 2 → Rest 1,2,3,3,3: **5!/3! = 20**
- c) beide 1 zusammen → Block (11),2,2,3,3,3: **6!/(2!·3!) = 60**

## A2 — Auswahl 10 aus 13 (Fragen)
- a) **C(13,10) = 286**  · b) erste 2 Pflicht → **C(11,8) = 165**
- c) genau 3 der ersten 5: C(5,3)·C(8,7) = **80**
- d) mindestens 3 der ersten 5: 80 + C(5,4)·C(8,6) + C(5,5)·C(8,5) = **276**

## A3 — 8 Bälle (je 2 in 4 Farben), 3 ziehen · Grundraum C(8,3) = 56
- a) alle verschiedenfarbig: C(4,3)·2³ = 4·8 = 32 → 32/56 = **4/7**
- b) genau 2 gleich + 1 anders: 4·C(2,2)·3·C(2,1) = 4·1·3·2 = 24 → 24/56 = **3/7**
- c) mindestens 1 roter: 1 − C(6,3)/C(8,3) = 1 − 20/56 = **9/14**

## A4 — Zwei Würfel (36)
- a) häufigste Augensumme: **Summe 7**, P = 6/36 = **1/6**
- b) mindestens eine 1 oder 2: 1 − (4/6)² = 1 − 16/36 = 20/36 = **5/9**

## A5 — Bayes
P(krank)=10⁻⁵ · P(+|krank)=0,95 · P(+|gesund)=0,005:
**P(krank|+) = (0,95·10⁻⁵)/(0,95·10⁻⁵ + 0,005·(1−10⁻⁵)) ≈ 0,0019 (≈ 0,19 %)**

## A6 — Stetige Verteilung f(x) = C·x auf [0,a]
- a) Skizze: Gerade von (0,0) bis (a, C·a) (Dreieck)
- b) Normierung ∫₀ᵃ Cx dx = C·a²/2 = 1 → **C = 2/a²**
- c) **E[X] = ∫₀ᵃ x·(2x/a²) dx = 2a/3**
- d) E[X²] = ∫₀ᵃ x²·(2x/a²) dx = **a²/2**; Var = a²/2 − (2a/3)² = **a²/18**; **σ = a/(3√2) = a√2/6**

## A7 — Zahlentheorie
**a) 529² mod 16:** 529 = 33·16 + 1 → 529 ≡ 1 → 529² ≡ **1 (mod 16)**.
**b) 482x + 192y = 4:** ggT(482,192) = **2** (482=2·192+98; 192=1·98+94; 98=1·94+4; 94=23·4+2; 4=2·2+0). 2 | 4 → lösbar. Für „=2": 118·192 − 47·482 = 2 → für „=4" ×2: **x = −94, y = 236**.
**c) =3 unlösbar:** ggT = 2 ∤ 3.

## A8 — Affine Chiffre, E→O, O→W   ⚠️ (nur ein gültiger Schlüssel)
E=4,O=14,W=22. 4a+b≡14, 14a+b≡22 → 10a≡8 → 5a≡4 (mod 13). 5⁻¹≡8 → a≡32≡6 (mod 13) → a∈{6,19}.
Gültig nur ggT(a,26)=1: a=6 ✗, **a=19 ✓**. b ≡ 14 − 76 ≡ **16**. **→ (a,b) = (19,16)**.

## A9 — RSA, c=10, e=5, m=35
35 = 5·7 → φ = **24**; d = 5⁻¹ mod 24 = **5**; 10⁵ mod 35: 10²≡30; 10⁴≡25; 10⁵≡**5**. **→ Klar = 5**
