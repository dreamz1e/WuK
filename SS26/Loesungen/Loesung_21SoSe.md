# ✅ Verifizierte Lösung — 21SoSe (modern, 8 Aufgaben, 110 Pkt, 120 min)

> ℹ️ **Nummerierung korrigiert (02.07.26):** Die echte 21SoSe-Klausur hat **8 Aufgaben** und
> **keine Affine-Aufgabe** — A8 ist die RSA-Aufgabe. Die Affine-Aufgabe E↔K gehört zur
> **SoSe20-Klausur (dort A8)**; sie bleibt unten als Bonus-Übung stehen.

> Alle Zahlen mit Python/sympy gegenrechnet. **⚠️ = Korrektur ggü. SS25-Lösung.**
> Buchstaben-Konvention: A=0, B=1, …, Z=25.

## A1 — Permutation mit Wiederholung · A,T,T,T,E,E (n=6: 1×A, 3×T, 2×E)
- a) Anordnungen: **6!/(1!·3!·2!) = 720/12 = 60**
- b) Wenn alle unterscheidbar: **6! = 720**
- c) beginnt E, endet T → Rest A,T,T,E: **4!/2! = 12**
- d) alle drei T zusammen → Block (TTT),A,E,E: **4!/2! = 12**

## A2 — Auswahl 7 aus 10
- a) **C(10,7) = C(10,3) = 120**
- b) erste 2 Pflicht → 5 aus 8: **C(8,5) = 56**
- c) erste ODER zweite (nicht beide) → 2·C(8,6) = 2·28 = **56**
- d) genau 3 der ersten 5 → C(5,3)·C(5,4) = 10·5 = **50**

## A3 — Fahrstuhl, 3 Personen, 3 Stockwerke (Grundraum 3³ = 27)
- a) hält nur 1× (alle gleich): 3/27 = **1/9**
- b) hält 3× (alle verschieden): 3·2·1/27 = 6/27 = **2/9**
- c) A & B gemeinsam: 3·3/27 = 9/27 = **1/3**
- d) A allein: 3·2·2/27 = 12/27 = **4/9**

## A4 — Sportschützen, p = 0,5 / 0,3 / 0,2
- a) B schießt 3×, genau 2 Treffer: C(3,2)·0,3²·0,7 = 3·0,09·0,7 = **0,189**
- b) alle schießen 1× — „Zielscheibe wird getroffen" = mind. einer trifft: 1 − (0,5·0,7·0,8) = 1 − 0,28 = **0,72**

## A5 — Bayes, defekte Produkte
P(D)=0,03 · P(A|D)=0,90 · P(A|G)=0,02 · Gesucht P(G|A):
**P(G|A) = (0,02·0,97)/(0,02·0,97 + 0,90·0,03) = 0,0194/0,0464 = 97/232 ≈ 0,418 (41,8 %)**

## A6 — Minimum zweier Würfel
P(min=k) = [(7−k)² − (6−k)²]/36:

| k | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| P | 11/36 | 9/36 | 7/36 | 5/36 | 3/36 | 1/36 |

- **E[X] = 91/36 ≈ 2,528**
- **E[X²] = 301/36 ≈ 8,361**   ⚠️ (SS25 hatte 287/36 — falsch)
- **Var = 301/36 − (91/36)² = 2555/1296 ≈ 1,97**
- **σ = √1,97 ≈ 1,404**

## A7 — Zahlentheorie
**a) 8²⁴³ mod 25:** φ(25) = 5·4 = **20**; ggT(8,25)=1 ✓. 243 = 20·12 + 3 → 8²⁴³ ≡ 8³ = 512 ≡ **12 (mod 25)**.
**b) a⁵ − a durch 5 teilbar:** Fall a ≡ 0 (mod 5): a⁵−a ≡ 0. Fall a ≢ 0: Fermat a⁴ ≡ 1 ⇒ a⁵ = a·a⁴ ≡ a ⇒ a⁵−a ≡ 0. ✓

## A8 — RSA, n=91, e∈{12,15,17}, c=10   ⚠️ (SS25: m=87 — FALSCH)
- a) 91 = 7·13 → **φ = 6·12 = 72**. ggT(12,72)=12 ✗, ggT(15,72)=3 ✗, ggT(17,72)=1 ✓ → **e = 17**.
- b) d = 17⁻¹ mod 72: 17·17 = 289 = 4·72+1 → **d = 17**.
- c) m = 10¹⁷ mod 91 (schnelle Exp.): 10²≡9 · 10⁴≡81 · **10⁸≡81²=6561≡9** (nicht 20!) · 10¹⁶≡81 · 10¹⁷ = 10¹⁶·10 ≡ 81·10 = 810 ≡ **82 (mod 91)**.
- **→ Klarnachricht m = 82**

## Bonus (≙ SoSe20 A8) — Affine Chiffre, E→K, K→E   ⚠️ (SS25: „keine Lösung" — FALSCH)
4a+b ≡ 10, 10a+b ≡ 4 (mod 26). Subtraktion: 6a ≡ −6 ≡ 20 (mod 26).
ggT(6,26)=2 und 2 | 20 → durch 2 teilen: **3a ≡ 10 (mod 13)**. 3⁻¹ ≡ 9 (mod 13) → a ≡ 9·10 = 90 ≡ **12 (mod 13)** → a ∈ {12, 25} (mod 26).
Gültiger Schlüssel nur mit ggT(a,26)=1: a=12 ✗, **a=25 ✓**. b: 100+b ≡ 10 → **b = 14**.
**→ (a,b) = (25, 14)**, d.h. f(x) = 25x+14 ≡ 14 − x (Spiegelung; daher E↔K, denn 4+10=14). ✓

---
### Tier-1-Bilanz (Bestehen = 50 Pkt)
A1(12) + A2(14) + A4(16) + A5(10) + A8-RSA(18) ≈ **70 Pkt** → bestanden allein mit Tier 1.
