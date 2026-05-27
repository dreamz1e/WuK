# 🏋️ Übungsset Woche 5 — #9 RSA + #8 Affine Chiffre

> Passt zu Woche 5. Beides baut auf dem Werkzeugkasten (Woche 4) auf. **Jeden Quadrierschritt mit TR prüfen!**
> Buchstaben: A=0, …, Z=25. Ziel ~50 min. Erst selbst rechnen!

## Aufgaben

### Ü5.1 — RSA entschlüsseln
Öffentlicher Schlüssel **n = 55**, **e = 3**. Empfangenes Chiffrat **c = 17**.
- a) Bestimme den privaten Schlüssel **d**.
- b) Entschlüssele und gib die Klarnachricht **m** an.

### Ü5.2 — RSA, Exponent bestimmen + entschlüsseln
Es ist **n = 65** und der öffentliche Exponent **e ∈ {6, 9, 11}** (genau einer ist gültig). Chiffrat **c = 4**.
- a) Welches **e** ist gültig? Bestimme **d**.
- b) Entschlüssele **c = 4** zu **m**.

### Ü5.3 — Affine Chiffre rekonstruieren
Eine affine Chiffre f(x) = (a·x + b) mod 26 bildet **A → I** und **C → S** ab.
- a) Bestimme **a** und **b**.
- b) Verschlüssele damit den Buchstaben **E**.

### Ü5.4 — Affine Chiffre (mit ggT-Tücke)
Eine affine Chiffre bildet **D → Y** und **F → M** ab.
- Bestimme **a** und **b**. *(Achtung: beim Auflösen entsteht ein gerader Koeffizient!)*

---
## ✅ Lösungen

### Ü5.1
- a) 55 = 5·11 → φ = 4·10 = **40**. d = 3⁻¹ mod 40: 40 = 13·3 + 1 → 1 = 40 − 13·3 → d ≡ −13 ≡ **27**.
- b) m = 17²⁷ mod 55 (27 = 16+8+2+1): 17²≡14; 17⁴≡14²≡31; 17⁸≡31²≡26; 17¹⁶≡26²≡16.
  17²⁷ = 17¹⁶·17⁸·17²·17 ≡ 16·26·14·17 ≡ 31·14·17 ≡ 49·17 ≡ **8 (mod 55)**.
  **→ m = 8**  *(Probe: 8³ = 512 ≡ 17 mod 55 ✓)*

### Ü5.2
- a) 65 = 5·13 → φ = 4·12 = **48**. ggT(6,48)=6 ✗, ggT(9,48)=3 ✗, ggT(11,48)=1 ✓ → **e = 11**.
  d = 11⁻¹ mod 48: 48=4·11+4; 11=2·4+3; 4=1·3+1 → 1 = 3·48 − 13·11 → d ≡ −13 ≡ **35**.
- b) m = 4³⁵ mod 65 (35 = 32+2+1): 4²≡16; 4⁴≡61; 4⁸≡16; 4¹⁶≡61; 4³²≡16.
  4³⁵ = 4³²·4²·4 ≡ 16·16·4 ≡ 61·4 ≡ **49 (mod 65)**.  **→ m = 49**

### Ü5.3
A=0 → f(0)=b≡8 → **b = 8**. C=2 → 2a+8≡18 → 2a≡10 (mod 26).
ggT(2,26)=2 und 2|10 → a≡5 (mod 13) → a∈{5,18}. Gültig nur ggT(a,26)=1: **a = 5**.
- a) **(a, b) = (5, 8)**
- b) E=4: f(4) = 5·4 + 8 = 28 ≡ 2 (mod 26) → **C**

### Ü5.4
D=3 → 3a+b≡24; F=5 → 5a+b≡12. Subtraktion: 2a ≡ −12 ≡ 14 (mod 26).
ggT(2,26)=2 und 2|14 → **durch 2 teilen:** a ≡ 7 (mod 13) → a∈{7,20}. Gültig nur **a = 7** (ggT(7,26)=1; 20 nicht).
b ≡ 24 − 3·7 = **3**. → **(a, b) = (7, 3)**
