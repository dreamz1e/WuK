# 🏋️ Übungsset Woche 4 — #7 Zahlentheorie (der Werkzeugkasten)

> Passt zu Woche 4 — die **wichtigste** Woche (Basis für #7, #8, #9). ggT/erw. Euklid, φ, Inverse, Euler.
> Ziel ~50 min. Erst selbst rechnen!

## Aufgaben

### Ü4.1 — Erweiterter Euklid
- a) Bestimme **ggT(240, 46)** mit dem Euklid-Algorithmus.
- b) Stelle den ggT als ganzzahlige Kombination **240x + 46y = ggT** dar.
- c) Hat **240x + 46y = 5** ganzzahlige Lösungen? Begründe.

### Ü4.2 — Euler'sche φ-Funktion
Berechne **φ(36)**, **φ(49)** und **φ(60)**.
*(Tipp: φ(p·q)=(p−1)(q−1), φ(p²)=p(p−1).)*

### Ü4.3 — Multiplikative Inverse
- a) Bestimme **7⁻¹ (mod 26)**.
- b) Bestimme **11⁻¹ (mod 30)**.

### Ü4.4 — Euler-Theorem / schnelle Reduktion
- a) Berechne **3¹⁰⁰ mod 7**.
- b) Berechne **2²⁰²⁶ mod 11**.
- c) Was ist die **letzte Dezimalziffer** von **3²⁰²⁶**?

### Ü4.5 — Teilbarkeit (Beweis)
Zeige: Für jede ganze Zahl n ist **n³ − n durch 6 teilbar**.

---
## ✅ Lösungen

### Ü4.1
- a) 240=5·46+10; 46=4·10+6; 10=1·6+4; 6=1·4+2; 4=2·2+0 → **ggT = 2** (letzter Rest ≠ 0).
- b) Rückwärts: 2 = 6−4; 2 = 2·6−10; 2 = 2·46−9·10; 2 = 47·46 − 9·240. → **x = −9, y = 47** (240·(−9)+46·47 = 2 ✓).
- c) **Nein** — ggT = 2 teilt 5 nicht (2 ∤ 5).

### Ü4.2
- φ(36) = 36·(1−1/2)(1−1/3) = **12**
- φ(49) = 7·(7−1) = **42**
- φ(60) = 60·(1−1/2)(1−1/3)(1−1/5) = 60·½·⅔·⅘ = **16**

### Ü4.3
- a) 7·15 = 105 = 4·26 + 1 → **7⁻¹ ≡ 15 (mod 26)**
- b) 11·11 = 121 = 4·30 + 1 → **11⁻¹ ≡ 11 (mod 30)**

### Ü4.4
- a) φ(7)=6; 100 = 6·16 + 4 → 3¹⁰⁰ ≡ 3⁴ = 81 ≡ **4 (mod 7)**
- b) φ(11)=10; 2026 = 10·202 + 6 → 2²⁰²⁶ ≡ 2⁶ = 64 ≡ **9 (mod 11)**
- c) 3ⁿ mod 10 hat Zyklus 3,9,7,1 (Periode 4); 2026 = 4·506 + 2 → 3² ≡ **9** → letzte Ziffer **9**

### Ü4.5
n³ − n = n(n²−1) = (n−1)·n·(n+1) = drei **aufeinanderfolgende** ganze Zahlen.
Darunter ist stets eine durch 2 und eine durch 3 teilbar ⇒ das Produkt ist durch 2·3 = **6 teilbar**. ∎
