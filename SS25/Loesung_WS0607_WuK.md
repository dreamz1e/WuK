# Lösungen WS0607 Klausur WuK (Spickzettel-Stil)

**Struktur:** 60 Punkte (5 Zusatzpunkte) | Bestehen: 28 Punkte | Note 1: 55 Punkte

---

## **Aufgabe 1: Turm-Anordnung** (4 Punkte)

**Problem:** n Türme auf n×n Brett, kein Turm bedroht anderen

**Lösung:** Dies ist das klassische n-Damen-Problem für Türme
- In jeder Reihe und Spalte max. 1 Turm
- **Antwort:** n! (Permutationen der n Reihen)

**Begründung:** 
- 1. Turm: n Möglichkeiten
- 2. Turm: (n-1) Möglichkeiten (eine Reihe/Spalte belegt)
- ...
- n. Turm: 1 Möglichkeit

**Lösung:** **n!**

---

## **Aufgabe 2: Permutation mit Wiederholung** (7 Punkte)

**Gegeben:** 6 Kärtchen mit 1, 1, 2, 2, 2, 3 → 5 auswählen

**Strategie:** Fallunterscheidung nach weggelassener Karte

**Fall 1:** Eine 1 weglassen → verbleibend: 1, 2, 2, 2, 3
- Permutationen: 5! / (1! × 3! × 1!) = 120 / 6 = 20

**Fall 2:** Eine 2 weglassen → verbleibend: 1, 1, 2, 2, 3
- Permutationen: 5! / (2! × 2! × 1!) = 120 / 4 = 30

**Fall 3:** Die 3 weglassen → verbleibend: 1, 1, 2, 2, 2
- Permutationen: 5! / (2! × 3!) = 120 / 12 = 10

**Lösung:** 20 + 30 + 10 = **60**

---

## **Aufgabe 3: Urne mit farbigen Bällen** (6 Punkte)

**Gegeben:** 3 blaue, 2 rote, 5 grüne Bälle (total: 10)

### (a) Ohne Zurücklegen (3 Punkte)
**P(2 gleichfarbige) = P(2 blaue) + P(2 rote) + P(2 grüne)**

- P(2 blaue) = (3/10) × (2/9) = 6/90
- P(2 rote) = (2/10) × (1/9) = 2/90
- P(2 grüne) = (5/10) × (4/9) = 20/90

**Lösung:** 6/90 + 2/90 + 20/90 = **28/90 = 14/45**

### (b) Mit Zurücklegen (3 Punkte)
- P(2 blaue) = (3/10)² = 9/100
- P(2 rote) = (2/10)² = 4/100
- P(2 grüne) = (5/10)² = 25/100

**Lösung:** 9/100 + 4/100 + 25/100 = **38/100 = 19/50**

---

## **Aufgabe 4: Zwei Würfel** (7 Punkte)

**Grundlage:** 6 × 6 = 36 mögliche Ergebnisse

### (a) Mindestens eine 6 (2 Punkte)
**Gegenereignis:** Keine 6
- P(keine 6) = (5/6)² = 25/36
- **Lösung:** 1 - 25/36 = **11/36**

### (b) Summe = 7 (2 Punkte)
**Möglichkeiten:** (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)
- **Lösung:** 6/36 = **1/6**

### (c) Produkt ist Vielfaches von 10 (3 Punkte)
**Bedingung:** Produkt durch 2 UND 5 teilbar
- Durch 5: mindestens eine 5
- Durch 2: mindestens eine gerade Zahl

**Systematische Aufzählung:**
- (2,5), (4,5), (6,5), (5,2), (5,4), (5,6)
- **Lösung:** 6/36 = **1/6**

---

## **Aufgabe 5: Tennismatch** (8 Punkte)

**Gegeben:** P(Anne gewinnt Satz) = 2/3, P(Britta gewinnt) = 1/3

### (a) Anne gewinnt alle 4 Sätze (2 Punkte)
**Lösung:** (2/3)⁴ = 16/81

### (b) Anne gewinnt genau 2 Sätze (3 Punkte)
**Binomialverteilung:** C(4,2) × (2/3)² × (1/3)²
- **Lösung:** 6 × (4/9) × (1/9) = 24/81 = **8/27**

### (c) Anne gewinnt mindestens 2 Sätze (3 Punkte)
**Strategie:** 1 - P(0 oder 1 Satz)
- P(0 Sätze) = (1/3)⁴ = 1/81
- P(1 Satz) = C(4,1) × (2/3)¹ × (1/3)³ = 4 × (2/3) × (1/27) = 8/81
- **Lösung:** 1 - (1/81 + 8/81) = 1 - 9/81 = **72/81 = 8/9**

---

## **Aufgabe 6: Stetige Verteilung** (8 Punkte)

**Gegeben:** f(x) = C(1-x²) für -1 ≤ x ≤ 1, sonst 0

### (a) Konstante C bestimmen (2 Punkte)
**Normierungsbedingung:** ∫₋₁¹ f(x) dx = 1

∫₋₁¹ C(1-x²) dx = C[x - x³/3]₋₁¹ = C[(1 - 1/3) - (-1 + 1/3)] = C[2/3 + 2/3] = 4C/3

**Lösung:** 4C/3 = 1 → **C = 3/4**

### (b) Standardabweichung (3 Punkte)
**Erwartungswert:** E[X] = 0 (symmetrisch um 0)

**Varianz:** Var(X) = E[X²] - (E[X])² = E[X²]

E[X²] = ∫₋₁¹ x² × (3/4)(1-x²) dx = (3/4) ∫₋₁¹ (x² - x⁴) dx
= (3/4)[x³/3 - x⁵/5]₋₁¹ = (3/4)[2/3 - 2/5] = (3/4) × (4/15) = 1/5

**Lösung:** σ = √(1/5) = **1/√5 = √5/5**

### (c) P(|X| < 1/2) (3 Punkte)
P(|X| < 1/2) = P(-1/2 < X < 1/2) = ∫₋₁/₂¹/² (3/4)(1-x²) dx

= (3/4)[x - x³/3]₋₁/₂¹/² = (3/4)[(1/2 - 1/24) - (-1/2 + 1/24)]
= (3/4)[1 - 1/12] = (3/4) × (11/12) = **11/16**

---

## **Aufgabe 7: Unvollständige Aufgabe** (nicht lesbar)

**Hinweis:** Text scheint beschädigt/unleserlich zu sein

---

## **Aufgabe 8: Monoalphabetische Verschlüsselung** (7 Punkte)

**Gegeben:** f(x) = (ax + b) mod 26, E → Y, N → K

**Übersetzung:** E = 4, Y = 24, N = 13, K = 10

**Gleichungssystem:**
- f(4) = 24: 4a + b ≡ 24 (mod 26)
- f(13) = 10: 13a + b ≡ 10 (mod 26)

**Lösung durch Subtraktion:**
- (13a + b) - (4a + b) ≡ 10 - 24 (mod 26)
- 9a ≡ -14 ≡ 12 (mod 26)

**Inverse von 9 mod 26:**
- Erweiterte Euklid: 26 = 2×9 + 8, 9 = 1×8 + 1
- 1 = 9 - 1×8 = 9 - 1×(26 - 2×9) = 3×9 - 1×26
- 9⁻¹ ≡ 3 (mod 26)

**Berechnung:**
- a ≡ 3 × 12 ≡ 36 ≡ 10 (mod 26)
- b ≡ 24 - 4×10 ≡ 24 - 40 ≡ -16 ≡ 10 (mod 26)

**Lösung:** a = 10, b = 10

---

## **Aufgabe 9: RSA-Entschlüsselung** (8 Punkte)

**Gegeben:** c = 60, e = 43, m = 77

**Schritt 1:** Faktorisierung von m
- 77 = 7 × 11

**Schritt 2:** φ(77) = φ(7) × φ(11) = 6 × 10 = 60

**Schritt 3:** Privater Schlüssel d
- e × d ≡ 1 (mod 60)
- 43 × d ≡ 1 (mod 60)

**Erweiterte Euklid für 43 und 60:**
- 60 = 1×43 + 17
- 43 = 2×17 + 9
- 17 = 1×9 + 8
- 9 = 1×8 + 1

**Rückwärts:**
- 1 = 9 - 1×8 = 9 - 1×(17 - 1×9) = 2×9 - 1×17
- 1 = 2×(43 - 2×17) - 1×17 = 2×43 - 5×17
- 1 = 2×43 - 5×(60 - 1×43) = 7×43 - 5×60

**Also:** d = 7

**Schritt 4:** Entschlüsselung
- z = c^d mod m = 60^7 mod 77

**Schnelle Exponentiation:**
- 60² = 3600 ≡ 60 (mod 77) [da 3600 = 46×77 + 60]
- 60⁴ ≡ 60² ≡ 60 (mod 77)
- 60⁷ = 60⁴ × 60² × 60¹ ≡ 60 × 60 × 60 ≡ 60 (mod 77)

**Lösung:** z = **60**

---

## **Punkteverteilung & Strategie**

| Aufgabe | Punkte | Schwierigkeit | Zeitaufwand |
|---------|---------|---------------|-------------|
| 1 | 4 | Leicht | 4 min |
| 2 | 7 | Mittel | 8 min |
| 3 | 6 | Leicht | 6 min |
| 4 | 7 | Leicht | 7 min |
| 5 | 8 | Mittel | 10 min |
| 6 | 8 | Schwer | 12 min |
| 7 | ? | ? | ? |
| 8 | 7 | Schwer | 10 min |
| 9 | 8 | Schwer | 12 min |

**Empfohlene Reihenfolge:** 1 → 3 → 4 → 2 → 5 → 9 → 8 → 6

**Bestehen:** 28 Punkte (aus 55 regulären)
**Note 1:** 55 Punkte + Zusatzpunkte
