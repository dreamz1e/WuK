# ✅ Lösung — Probeklausur N3 (alle Zahlen rechnerisch verifiziert)

> Zugehörige Klausur: [Probeklausur_N3.md](../Probeklausuren/Probeklausur_N3.md) · Erst selbst rechnen!

## A1 — Permutation · 1,1,3,3,3,3,7 (n=7: 2×1, 4×3, 1×7)
- a) **7!/(2!·4!·1!) = 5040/48 = 105**
- b) beginnt 3, endet 3 → 2 der 4 Dreien fixieren, Rest 1,1,3,3,7: **5!/(2!·2!) = 30**
- c) beide 1 zusammen → Block (11),3,3,3,3,7 = 6 Elemente: **6!/4! = 30**

## A2 — Auswahl 9 aus 14
- a) **C(14,9) = C(14,5) = 2002**
- b) erste 2 Pflicht → 7 aus 12: **C(12,7) = 792**
- c) genau 3 der ersten 5: C(5,3)·C(9,6) = 10·84 = **840**
- d) höchstens 1 der ersten 5: j=0: C(9,9) = 1 · j=1: C(5,1)·C(9,8) = 5·9 = 45 → **46**

## A3 — 5 Würfel
- a) nicht unterscheidbar (Stars & Bars): **C(5+5, 5) = C(10,5) = 252**
- b) unterscheidbar: 6⁵ = **7776**

## A4 — Binomialverteilung, n=5, p(Kopf)=2/5
- a) nur Kopf: (2/5)⁵ = **32/3125 ≈ 0,0102**
- b) genau 3× Kopf: C(5,3)·(2/5)³·(3/5)² = 10·(8/125)·(9/25) = **144/625 ≈ 0,2304**
- c) mind. 1× Zahl = 1 − P(nur Kopf) = 1 − 32/3125 = **3093/3125 ≈ 0,9898**

## A5 — Fahrstuhl, 3 Personen, 6 Stockwerke (Grundraum 6³ = 216)
- a) hält nur 1×: 6/216 = **1/36**
- b) hält 3× (alle verschieden): 6·5·4/216 = 120/216 = **5/9**
- c) A und B gemeinsam (Rest egal): 6·6/216 = 36/216 = **1/6** (Paar-Stockwerk: 6 Wege · dritte Person: 6 Wege)

## A6 — Bayes (Spam-Filter)
P(S)=0,20 · P(M|S)=0,95 · P(M|S̄)=0,02:
**P(S|M) = (0,95·0,20) / (0,95·0,20 + 0,02·0,80) = 0,19/0,206 = 95/103 ≈ 0,922 (92,2 %)**

## A7 — Zahlentheorie
**a) 2¹⁰⁰ mod 9:** φ(9) = φ(3²) = 3·2 = **6** (⚠️ p²!); ggT(2,9)=1 ✓. 100 = 16·6 + 4 → 2¹⁰⁰ ≡ 2⁴ = 16 ≡ **7 (mod 9)**
**b) 322x + 70y = 14:** Euklid: 322 = 4·70 + 42; 70 = 1·42 + 28; 42 = 1·28 + 14; 28 = 2·14 + 0 → **ggT = 14** ✓
Rückwärts: 14 = 42 − 28 = 42 − (70 − 42) = 2·42 − 70 = 2(322 − 4·70) − 70 = **2·322 − 9·70**
→ **x = 2, y = −9** (Probe: 644 − 630 = 14 ✓)
**c) a⁷ − a durch 7 teilbar:** Kleiner Fermat (7 prim): **a⁷ ≡ a (mod 7)** für jedes ganze a
⇒ a⁷ − a ≡ 0 (mod 7) ⇒ 7 | a⁷−a. ∎ *(Alternativ Fallunterscheidung a ≡ 0,…,6 wie 21SoSe A7b.)*

## A8 — Affine, H→R, M→Q
a) H=7→R=17, M=12→Q=16: 7a+b ≡ 17, 12a+b ≡ 16 (mod 26). Subtraktion: −5a ≡ 1 → **5a ≡ −1 ≡ 25 (mod 26)**.
ggT(5,26)=1 → eindeutig: 5⁻¹ ≡ 21 (mod 26, da 105 = 4·26+1) → a ≡ 21·25 = 525 ≡ **5 (mod 26)**.
b aus 7·5+b ≡ 17 → b ≡ 17−35 = −18 ≡ **8**. **→ (a,b) = (5, 8)**, ggT(5,26)=1 ✓
(Probe: f(7)=43≡17=R ✓, f(12)=68≡16=Q ✓)
b) Entschlüsseln: x = a⁻¹·(y−b) mod 26 = 21·(3−8) = 21·(−5) = −105 ≡ **25 = Z** (Probe: f(25) = 133 ≡ 3 = D ✓)

## A9 — RSA, n=51, e=5, c=26
- 51 = 3·17 → **φ = 2·16 = 32**. ggT(5,32)=1 ✓
- d = 5⁻¹ mod 32: (1+32k)/5 → k=2: 65/5 = 13 → **d = 13** (Probe: 5·13 = 65 = 2·32+1 ✓)
- Quadrier-Kette mod 51: 26² = 676 ≡ **13** (13·51=663) · 26⁴ ≡ 13² = 169 ≡ **16** · 26⁸ ≡ 16² = 256 ≡ **1** (5·51=255)
- d = 13 = 8+4+1 → m ≡ 1·16·26 = 416 ≡ **8 (mod 51)** (416 − 8·51 = 8)
- **→ Klarnachricht m = 8** (End-Probe: 8⁵ mod 51 = 26 ✓)

---
### Tier-1-Bilanz (Bestehen ≈ 50 Pkt)
A1(12) + A2(12) + A4(14) + A6(12) + A9(10) = **60 Pkt** → Tier 1 allein reicht.
