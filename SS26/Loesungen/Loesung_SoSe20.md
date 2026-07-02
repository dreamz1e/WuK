# ✅ Verifizierte Lösung — SoSe20 (modern, 9 Aufgaben, 120 min)

> **⚠️ = Korrektur ggü. SS25-Lösung.** Empfohlen als **1. Probeklausur** (Woche 5).

## A1 — Permutation mit Wiederholung · 4,4,4,7,7,9,9 (n=7: 3×4, 2×7, 2×9)
- a) **7!/(3!·2!·2!) = 5040/24 = 210**
- b) beginnt 9, endet 7 → Rest 4,4,4,7,9: **5!/3! = 20**
- c) beide 9 zusammen → Block (99),4,4,4,7,7: **6!/(3!·2!) = 60**

## A2 — Auswahl 10 aus 13
- a) **C(13,10) = C(13,3) = 286**
- b) erste 2 Pflicht → 8 aus 11: **C(11,8) = C(11,3) = 165**
- c) genau 3 der ersten 5: C(5,3)·C(8,7) = 10·8 = **80**
- d) mindestens 3 der ersten 5: 80 + C(5,4)·C(8,6) + C(5,5)·C(8,5) = 80+140+56 = **276**

## A3 — 3 Würfel
- a) nicht unterscheidbar (Multimengen) = C(6+3−1, 3) = **C(8,3) = 56**
- b) unterscheidbar = 6³ = **216**

## A4 — Binomialverteilung, n=8, p(Kopf)=1/3
- a) nur Kopf: (1/3)⁸ = **1/6561**
- b) genau 4× Kopf: C(8,4)·(1/3)⁴·(2/3)⁴ = 70·16/6561 = **1120/6561**
- c) mind. 2× Zahl = 1 − P(0 Z) − P(1 Z) = 1 − 1/6561 − 16/6561 = **6544/6561**

## A5 — Fahrstuhl, 4 Personen, **3** Stockwerke (Grundraum 3⁴ = 81)   ⚠️ (korrigiert 02.07.: vorher fälschlich mit 10 Stockwerken gerechnet, Teilaufgabe c fehlte)
- a) alle 4 im selben Stockwerk: 3/81 = **1/27**
- b) hält 2×, je 2 Personen: C(3,2)·[4!/(2!·2!)]/81 = 3·6/81 = 18/81 = **2/9**
- c) erste Person allein: 3·2³/81 = 24/81 = **8/27** (ihr Stockwerk: 3 Wege, die anderen 3 je auf die 2 übrigen)

## A6 — Bayes
P(krank)=10⁻⁵ · P(+|krank)=0,99 · P(+|gesund)=0,005:
**P(krank|+) = (0,99·10⁻⁵)/(0,99·10⁻⁵ + 0,005·(1−10⁻⁵)) = 22/11133 ≈ 0,00198 (≈ 0,2 %)**

## A7 — Zahlentheorie
**a) 8²⁴² mod 25:** φ(25)=20; 242 = 20·12 + 2 → 8²⁴² ≡ 8² = 64 ≡ **14 (mod 25)**.
**b) 582x + 123y = 6:**  ⚠️ **ggT(582,123) = 3** (SS25: fälschlich „6").
Euklid: 582=4·123+90; 123=1·90+33; 90=2·33+24; 33=1·24+9; 24=2·9+6; 9=1·6+**3**; 6=2·3+0 → ggT = 3.
Rückwärts: 3 = (−15)·582 + 71·123. Da Gleichung „=6" → ×2: **x = −30, y = 142** (582·(−30)+123·142 = 6 ✓; allg. Lösung x = −30 + 41t, y = 142 − 194t).
**c) =11 unlösbar:** ggT = 3, aber 3 ∤ 11 → keine ganzzahlige Lösung.

## A8 — Affine Chiffre, E→K, K→E   ⚠️ (ggT-Tücke! Diese Aufgabe gibt es nur hier — nicht in 21SoSe)
4a+b≡10, 10a+b≡4 (mod 26) → 6a≡20 → 3a≡10 (mod 13) → a∈{12,25}. **Nur a=25 gültig** (ggT(25,26)=1), b=14.
**→ (a,b) = (25, 14)**.  *(SS25 nannte {12,25} ohne Gültigkeitsprüfung.)*

## A9 — RSA, c=10, e=5, m=35
- 35 = 5·7 → φ = 4·6 = **24**.  d = 5⁻¹ mod 24: 5·5 = 25 ≡ 1 → **d = 5**.
- Klar = 10⁵ mod 35: 10²≡30; 10⁴≡30²=900≡25; 10⁵ = 10⁴·10 ≡ 250 ≡ **5 (mod 35)**.
- **→ Klarnachricht = 5**

---
### Tier-1-Bilanz: A1(12)+A2(12)+A4(14)+A6 Bayes(12)+A9(10) ≈ **60 Pkt** → bestanden.
