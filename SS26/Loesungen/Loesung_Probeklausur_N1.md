# ✅ Lösung — Probeklausur N1 (alle Zahlen rechnerisch verifiziert)

> Zugehörige Klausur: [Probeklausur_N1.md](../Probeklausuren/Probeklausur_N1.md) · Erst selbst rechnen!

## A1 — Permutation · 2,2,5,5,5,8 (n=6: 2×2, 3×5, 1×8)
- a) **6!/(2!·3!·1!) = 720/12 = 60**
- b) beginnt 5, endet 2 → beide fixieren, Rest 2,5,5,8: **4!/2! = 12**
- c) drei 5en zusammen → Block (555),2,2,8 = 4 Elemente: **4!/2! = 12**

## A2 — Auswahl 8 aus 12
- a) **C(12,8) = C(12,4) = 495**
- b) erste 2 Pflicht → 6 aus 10: **C(10,6) = 210**
- c) genau 2 der ersten 4: C(4,2)·C(8,6) = 6·28 = **168**
- d) mindestens 2 der ersten 4: Σ über j=2,3,4: 168 + C(4,3)·C(8,5) + C(4,4)·C(8,4) = 168 + 4·56 + 1·70 = **462**
  *(Gegenprobe: 495 − j=0: C(8,8)=1 − j=1: 4·C(8,7)=32 → 495−33 = 462 ✓)*

## A3 — 4 Würfel
- a) nicht unterscheidbar (Stars & Bars): C(n+5, 5) mit n=4 Würfeln → **C(9,5) = C(9,4) = 126**
- b) unterscheidbar: 6⁴ = **1296**

## A4 — Binomialverteilung, n=6, p(Kopf)=1/4
- a) nur Zahl: (3/4)⁶ = **729/4096 ≈ 0,178**
- b) genau 2× Kopf: C(6,2)·(1/4)²·(3/4)⁴ = 15·81/4096 = **1215/4096 ≈ 0,297**
- c) mind. 2× Kopf = 1 − P(0 K) − P(1 K) = 1 − 729/4096 − 6·(1/4)·(3/4)⁵ = 1 − 729/4096 − 1458/4096 = **1909/4096 ≈ 0,466**

## A5 — Fahrstuhl, 3 Personen, 4 Stockwerke (Grundraum 4³ = 64)
- a) alle im selben Stockwerk: 4/64 = **1/16**
- b) hält 3× (alle verschieden): 4·3·2/64 = 24/64 = **3/8**
- c) erste Person allein: 4·3²/64 = 36/64 = **9/16** (ihr Stockwerk: 4 Wege, die anderen beiden je 3 übrige)

## A6 — Bayes
P(K)=0,002 · P(+|K)=0,98 · P(+|G)=0,03:
**P(K|+) = (0,98·0,002) / (0,98·0,002 + 0,03·0,998) = 0,00196/0,03190 = 98/1595 ≈ 0,0614 (6,1 %)**
*(Klassiker: trotz „98 % Erkennung" nur ~6 % — seltene Krankheit dominiert.)*

## A7 — Zahlentheorie
**a) 12³⁴⁷ mod 25:** φ(25) = 5·4 = **20** (⚠️ p²!); ggT(12,25)=1 ✓. 347 = 17·20 + 7 → 12³⁴⁷ ≡ 12⁷.
12² = 144 ≡ 19 · 12⁴ ≡ 19² = 361 ≡ 11 · 12⁷ = 12⁴·12²·12 ≡ 11·19·12 = 209·12 ≡ 9·12 = 108 ≡ **8 (mod 25)**
**b) 434x + 154y = 14:** Euklid: 434 = 2·154 + 126; 154 = 1·126 + 28; 126 = 4·28 + 14; 28 = 2·14 + 0 → **ggT = 14** ✓ (14 | 14 → lösbar).
Rückwärts: 14 = 126 − 4·28 = 126 − 4(154 − 126) = 5·126 − 4·154 = 5(434 − 2·154) − 4·154 = **5·434 − 14·154**
→ **x = 5, y = −14** (Probe: 2170 − 2156 = 14 ✓)
**c) = 25 unlösbar:** lösbar ⇔ ggT(434,154) | c. ggT = 14, aber 14 ∤ 25 → keine ganzzahlige Lösung.

## A8 — Affine Chiffre, A→L, D→G
A=0→L=11, D=3→G=6: **b ≡ 11** (aus f(0)=11), dann 3a + 11 ≡ 6 → 3a ≡ −5 ≡ 21 (mod 26).
ggT(3,26)=1 → eindeutig: 3⁻¹ ≡ 9 (mod 26, da 27≡1) → a ≡ 9·21 = 189 ≡ **7 (mod 26)**.
**→ (a,b) = (7, 11)** · Gültigkeit: ggT(7,26)=1 ✓ (Probe: f(0)=11=L ✓, f(3)=32≡6=G ✓)

## A9 — RSA, n=55, e=7, c=8
- 55 = 5·11 → **φ = 4·10 = 40**. ggT(7,40)=1 ✓
- d = 7⁻¹ mod 40: (1+40k)/7 testen → k=4: 161/7 = 23 → **d = 23** (Probe: 7·23 = 161 = 4·40+1 ✓)
- Quadrier-Kette mod 55: 8² = 64 ≡ **9** · 8⁴ ≡ 9² = 81 ≡ **26** · 8⁸ ≡ 26² = 676 ≡ **16** · 8¹⁶ ≡ 16² = 256 ≡ **36**
- d = 23 = 16+4+2+1 → m ≡ 36·26·9·8: 36·26 = 936 ≡ **1** (17·55=935) · 1·9·8 = 72 ≡ **17 (mod 55)**
- **→ Klarnachricht m = 17** (End-Probe: 17⁷ mod 55 = 8 ✓)

---
### Tier-1-Bilanz (Bestehen ≈ 50 Pkt)
A1(12) + A2(12) + A4(14) + A6(12) + A9(10) = **60 Pkt** → Tier 1 allein reicht.
