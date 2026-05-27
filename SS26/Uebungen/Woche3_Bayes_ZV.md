# 🏋️ Übungsset Woche 3 — #5 Bayes + #6 Zufallsvariable

> Passt zu Woche 3. Bayes = reines Einsetz-Schema (4 Größen aus Text lesen!). ZV: E[X], Var, σ.
> Ziel ~45 min. Erst selbst rechnen!

## Aufgaben

### Ü3.1 — Bayes (Spam-Filter)
**40 %** aller Mails sind Spam. Ein bestimmtes Wort kommt in **80 %** der Spam-Mails und in
**10 %** der erwünschten Mails vor. Eine Mail enthält das Wort.
- Wie groß ist die Wahrscheinlichkeit, dass sie **Spam** ist?

### Ü3.2 — Bayes (drei Maschinen)
Drei Maschinen produzieren ein Bauteil: **M1** 50 % der Stückzahl (2 % Ausschuss),
**M2** 30 % (3 % Ausschuss), **M3** 20 % (5 % Ausschuss).
- a) Wie groß ist die Wahrscheinlichkeit, dass ein zufälliges Teil **defekt** ist?
- b) Ein Teil ist defekt — mit welcher Wahrscheinlichkeit stammt es von **M2**?

### Ü3.3 — Diskrete Zufallsvariable (Glücksspiel)
Eine Zufallsvariable X hat die Werte mit folgenden Wahrscheinlichkeiten:

| x | −1 | 2 | 5 |
|---|----|---|---|
| P(X=x) | 0,5 | 0,3 | 0,2 |

- Berechne **E[X]**, **Var(X)** und die Standardabweichung **σ**.

### Ü3.4 — Stetige Zufallsvariable
Dichtefunktion: **f(x) = C·x²** für 0 ≤ x ≤ 2, sonst 0.
- a) Bestimme die Konstante **C**.
- b) Berechne **E[X]**.
- c) Berechne **Var(X)** und **σ**.
- d) Berechne **P(X < 1)**.

---
## ✅ Lösungen

### Ü3.1
P(S)=0,4 · P(W|S)=0,8 · P(W|H)=0,1:
P(S|W) = (0,8·0,4)/(0,8·0,4 + 0,1·0,6) = 0,32/0,38 = **16/19 ≈ 0,842 (84,2 %)**

### Ü3.2
- a) P(def) = 0,5·0,02 + 0,3·0,03 + 0,2·0,05 = 0,01 + 0,009 + 0,01 = **0,029**
- b) P(M2|def) = (0,3·0,03)/0,029 = 0,009/0,029 = **9/29 ≈ 0,310 (31,0 %)**

### Ü3.3
- E[X] = (−1)·0,5 + 2·0,3 + 5·0,2 = −0,5 + 0,6 + 1,0 = **1,1**
- E[X²] = 1·0,5 + 4·0,3 + 25·0,2 = 0,5 + 1,2 + 5,0 = **6,7**
- Var = 6,7 − 1,1² = 6,7 − 1,21 = **5,49**;  σ = √5,49 ≈ **2,343**

### Ü3.4
- a) ∫₀² C·x² dx = C·8/3 = 1 → **C = 3/8**
- b) E[X] = ∫₀² x·(3/8)x² dx = (3/8)·(2⁴/4) = (3/8)·4 = **3/2 = 1,5**
- c) E[X²] = ∫₀² x²·(3/8)x² dx = (3/8)·(2⁵/5) = 12/5 = 2,4 → Var = 2,4 − 1,5² = **0,15**; σ = √0,15 ≈ **0,387**
- d) P(X<1) = ∫₀¹ (3/8)x² dx = (3/8)·(1/3) = **1/8 = 0,125**
