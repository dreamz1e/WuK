# ✅ Verifizierte Lösung — WS0809 (klassisch, ~55 Pkt, Bestehen 28)

> **⚠️ = Korrektur ggü. SS25-Lösung.** Geeignet als 3. Probeklausur (Tempo, Woche 6).

## A1 — Permutation · BANANEN (B,A,A,N,N,N,E → n=7: 1×B, 2×A, 3×N, 1×E)
- a) alle: **7!/(1!·2!·3!·1!) = 5040/12 = 420**
- b) beginnt & endet mit A → Rest B,N,N,N,E: **5!/3! = 20**
- c) drei N zusammen → Block B,A,A,(NNN),E: **5!/2! = 60**

## A2 — 4 Farben, Strauß aus 6 Rosen (Kombinationen mit Wiederholung)
- a) genau 2 rote + 2 gelbe → restliche 2 aus den anderen 2 Farben: C(2+2−1,2) = **C(3,2) = 3**
- b) jede der 4 Farben ≥1 → restliche 2 auf 4 Farben verteilen: C(4+2−1,2) = **C(5,2) = 10**
- c) beliebig: C(4+6−1,6) = **C(9,6) = C(9,3) = 84**

## A3 — 3 Jungen, 3 Mädchen, 6 Plätze (6! = 720)
- a) 3 Mädchen zusammen: (4!·3!)/6! = 144/720 = **1/5**
- b) abwechselnd (JMJMJM oder MJMJMJ): (2·3!·3!)/6! = 72/720 = **1/10**

## A4 — Dreimaliger Würfelwurf (216)
- a) keine 6: (5/6)³ = **125/216**
- b) höchstens eine 6: 125/216 + C(3,1)·(1/6)·(5/6)² = 125/216 + 75/216 = 200/216 = **25/27**
- c) Produkt nicht durch 2 oder 3 teilbar (alle ∈ {1,5}): (2/6)³ = 8/216 = **1/27**

## A5 — Schützenkönig, P(Treffer)=1/3, gesucht n mit P(≥1 Treffer) ≥ 0,9
(2/3)ⁿ ≤ 0,1 → n ≥ ln(0,1)/ln(2/3) ≈ 5,68 → **n = 6 Schüsse**

## A6 — Stetige Dreiecksverteilung f = cx auf [0,a], c(2a−x) auf [a,2a]
- a) Skizze: Dreieck (0,0)→(a,ca)→(2a,0)
- b) Normierung → c·a² = 1 → **c = 1/a²**
- c) E[X] = **a** (symmetrisch um a)
- d) E[X²] = **7a²/6**; Var = 7a²/6 − a² = **a²/6**; **σ = a/√6**

## A7 — Zahlentheorie
**a) letzte Ziffer von 7²²² = 7²²² mod 10:** Zyklus 7,9,3,1 (Periode 4); 222 = 4·55 + 2 → 7² ≡ **9**.
**b) 322x + 189y = 7:** ggT(322,189) = **7** (322=1·189+133; 189=1·133+56; 133=2·56+21; 56=2·21+14; 21=1·14+7; 14=2·7+0). Rückwärts: **x = 10, y = −17** (10·322 − 17·189 = 7 ✓).
**c) =6 unlösbar:** ggT = 7 ∤ 6.

## A8 — Affine Chiffre, E→C, M→M
E=4,C=2,M=12. 4a+b≡2, 12a+b≡12 → 8a≡10 → 4a≡5 (mod 13). 4⁻¹≡10 → a≡50≡11 (mod 13) → a∈{11,24}.
Gültig nur ggT(a,26)=1: **a=11**, b ≡ 2 − 44 ≡ **10**. **→ (a,b) = (11,10)**.

## A9 — RSA, c=24, e=11, m=77   ⚠️ (SS25: z=59 — FALSCH)
- 77 = 7·11 → φ = **60**.  d = 11⁻¹ mod 60: 11·11 = 121 = 2·60+1 → **d = 11**.
- z = 24¹¹ mod 77: 24²≡37; 24⁴≡37²≡60; 24⁸≡60²≡58; 24¹¹ = 24⁸·24²·24 ≡ 58·37·24 ≡ 67·24 ≡ **68 (mod 77)**.
- **→ Klarnachricht z = 68**
