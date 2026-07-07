# ✅ Lösung — Probeklausur N2 (alle Zahlen rechnerisch verifiziert)

> Zugehörige Klausur: [Probeklausur_N2.md](../Probeklausuren/Probeklausur_N2.md) · Erst selbst rechnen!

## A1 — Permutation · ANANAS (n=6: 3×A, 2×N, 1×S)
- a) **6!/(3!·2!·1!) = 720/12 = 60**
- b) beginnt A, endet A → 2 der 3 A fixieren, Rest A,N,N,S: **4!/2! = 12**
- c) beide N zusammen → Block (NN),A,A,A,S = 5 Elemente: **5!/3! = 20**

## A2 — Auswahl 7 aus 11
- a) **C(11,7) = C(11,4) = 330**
- b) erste 3 Pflicht → 4 aus 8: **C(8,4) = 70**
- c) genau 2 der ersten 4: C(4,2)·C(7,5) = 6·21 = **126**
- d) erste ODER zweite (nicht beide): 2 Fälle, je 6 aus den 9 übrigen: 2·C(9,6) = 2·84 = **168**

## A3 — 2 Würfel (Grundraum 36)
- a) Summe 9: (3,6),(4,5),(5,4),(6,3) → 4/36 = **1/9**
- b) mind. eine 6: 1 − (5/6)² = 1 − 25/36 = **11/36**
- c) Produkt ungerade ⇔ beide ungerade: (3/6)² = **1/4**

## A4 — Schützen p = 0,6 / 0,4 / 0,5
- a) B schießt 4×, genau 2 Treffer: C(4,2)·0,4²·0,6² = 6·0,16·0,36 = **0,3456**
- b) Zielscheibe getroffen = mind. einer trifft: 1 − (0,4·0,6·0,5) = 1 − 0,12 = **0,88**
- c) 1 − (1/2)ⁿ ≥ 0,9 ⇔ (1/2)ⁿ ≤ 0,1 ⇔ n ≥ ln 0,1 / ln 0,5 ≈ 3,32 → **n = 4**

## A5 — Fahrstuhl, 4 Personen, 5 Stockwerke (Grundraum 5⁴ = 625)
- a) hält nur 1×: 5/625 = **1/125**
- b) hält 2×, je 2 Personen: C(5,2)·[4!/(2!·2!)]/625 = 10·6/625 = 60/625 = **12/125**
- c) erste Person allein: 5·4³/625 = 320/625 = **64/125**

## A6 — ZV: Maximum zweier Würfel
a) P(X=k) = [k² − (k−1)²]/36 = **(2k−1)/36**:

| k | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| P | 1/36 | 3/36 | 5/36 | 7/36 | 9/36 | 11/36 |

- b) **E[X] = Σ k·(2k−1)/36 = 161/36 ≈ 4,472**
- c) E[X²] = Σ k²·(2k−1)/36 = **791/36** → **Var = 791/36 − (161/36)² = 2555/1296 ≈ 1,97** · **σ ≈ 1,404**
*(Gleiche Varianz wie beim Minimum — Symmetrie!)*

## A7 — Zahlentheorie
**a) letzte Dezimalstelle von 7²⁰¹⁴ = 7²⁰¹⁴ mod 10:** φ(10) = 4; ggT(7,10)=1 ✓. 2014 = 503·4 + 2 → 7²⁰¹⁴ ≡ 7² = 49 ≡ **9 (mod 10)** → letzte Ziffer **9**
**b) 273x + 119y = 7:** Euklid: 273 = 2·119 + 35; 119 = 3·35 + 14; 35 = 2·14 + 7; 14 = 2·7 + 0 → **ggT = 7** ✓
Rückwärts: 7 = 35 − 2·14 = 35 − 2(119 − 3·35) = 7·35 − 2·119 = 7(273 − 2·119) − 2·119 = **7·273 − 16·119**
→ **x = 7, y = −16** (Probe: 1911 − 1904 = 7 ✓)
**c) = 12 unlösbar:** ggT = 7, aber 7 ∤ 12 → keine ganzzahlige Lösung.

## A8 — Affine, E→V, K→J   ⚠️ ggT-Tücke!
E=4→V=21, K=10→J=9: 4a+b ≡ 21, 10a+b ≡ 9 (mod 26). Subtraktion: −6a ≡ 12 → **6a ≡ −12 ≡ 14 (mod 26)**.
ggT(6,26) = 2 und 2 | 14 → **durch 2 teilen: 3a ≡ 7 (mod 13)**. 3⁻¹ ≡ 9 (mod 13) → a ≡ 9·7 = 63 ≡ **11 (mod 13)** → Kandidaten **a ∈ {11, 24} (mod 26)**.
Gültiger Schlüssel nur mit ggT(a,26)=1: a=24 ✗ (ggT=2), **a=11 ✓**. b: 4·11+b ≡ 21 → b ≡ 21−44 = −23 ≡ **3**.
**→ (a,b) = (11, 3)** (Probe: f(4)=47≡21=V ✓, f(10)=113≡9=J ✓)

## A9 — RSA, n=33, e ∈ {4, 5, 7}, c=7
- a) 33 = 3·11 → **φ = 2·10 = 20**. ggT(4,20)=4 ✗, ggT(5,20)=5 ✗, ggT(7,20)=1 ✓ → **e = 7**
- b) d = 7⁻¹ mod 20: (1+20k)/7 → k=1: 21/7 = 3 → **d = 3** (Probe: 7·3 = 21 ≡ 1 ✓)
- c) m = 7³ mod 33 = 343 mod 33: 343 = 10·33 + 13 → **m = 13** (End-Probe: 13⁷ mod 33 = 7 ✓)

---
### Tier-1-Bilanz (Bestehen ≈ 50 Pkt)
A1(12) + A2(12) + A4(14) + A9(10) = 48 — hier braucht es zusätzlich Bayes-Ersatz A6 oder Tier 2 (A3/A5/A7): schon **A3a–c (9)** drüber. *(N2 hat wie 21SoSe kein klassisches Bayes — ZV ersetzt es.)*
