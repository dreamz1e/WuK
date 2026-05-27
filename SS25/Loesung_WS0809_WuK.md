# Lösungen WS0809 Klausur WuK (Spickzettel-Stil)

**Struktur:** 60 Punkte (5 Zusatzpunkte) | Bestehen: 28 Punkte | Note 1: 55 Punkte

---

## **Aufgabe 1: Permutation BANANEN** (6 Punkte)

**Gegeben:** BANANEN = B, A, N, A, N, E, N (7 Buchstaben)
**Häufigkeiten:** B(1), A(2), N(3), E(1)

### (a) Alle Permutationen (2 Punkte)
**Formel:** n! / (n₁! × n₂! × ... × nₖ!)
- **Lösung:** 7! / (1! × 2! × 3! × 1!) = 5040 / (1 × 2 × 6 × 1) = 5040 / 12 = **420**

### (b) Beginnt und endet mit A (2 Punkte)
**Strategie:** Beide A's an festen Positionen
- Verbleibend: B, N, N, N, E (5 Buchstaben)
- **Lösung:** 5! / (1! × 3! × 1!) = 120 / 6 = **20**

### (c) Drei N's direkt hintereinander (2 Punkte)
**Strategie:** N's als Block behandeln
- Elemente: B, A, A, (NNN), E → 5 Elemente
- **Lösung:** 5! / (1! × 2! × 1! × 1!) = 120 / 2 = **60**

---

## **Aufgabe 2: Rosensträuße** (7 Punkte)

**Gegeben:** 4 Farben, 6 Rosen

### (a) Genau 2 rote, 2 gelbe Rosen (2 Punkte)
**Strategie:** 2 rote, 2 gelbe, 2 aus verbleibenden 2 Farben
- Verbleibende 2 Rosen: beliebig aus 2 Farben
- **Lösung:** Anzahl Möglichkeiten für 2 Rosen aus 2 Farben = 2² = 4
- **Aber:** Kombinationen mit Wiederholung: C(2+2-1, 2) = C(3,2) = **3**

### (b) Jede der 4 Farben vorkommen (2 Punkte)
**Strategie:** Mindestens 1 von jeder Farbe → 4 Rosen fest, 2 beliebig verteilen
- **Lösung:** Anzahl Möglichkeiten 2 Rosen auf 4 Farben zu verteilen = C(4+2-1, 2) = C(5,2) = **10**

### (c) Beliebige Farbzusammenstellung (3 Punkte)
**Strategie:** 6 Rosen aus 4 Farben mit Wiederholung
- **Lösung:** C(4+6-1, 6) = C(9,6) = C(9,3) = (9 × 8 × 7) / (3 × 2 × 1) = 504/6 = **84**

---

## **Aufgabe 3: Sitzplätze** (6 Punkte)

**Gegeben:** 3 Jungen, 3 Mädchen, 6 Sitzplätze

**Gesamtanzahl:** 6! = 720

### (a) Drei Mädchen sitzen zusammen (3 Punkte)
**Strategie:** Mädchen als Block behandeln
- Blöcke: (MMM), J, J, J → 4 Elemente
- Anordnung der Blöcke: 4! = 24
- Anordnung innerhalb Mädchen-Block: 3! = 6
- **Lösung:** P = (4! × 3!) / 6! = (24 × 6) / 720 = 144/720 = **1/5**

### (b) Jungen und Mädchen wechseln sich ab (3 Punkte)
**Strategie:** Zwei Muster möglich: JMJMJM oder MJMJMJ
- Pro Muster: 3! × 3! = 36 Anordnungen
- **Lösung:** P = (2 × 36) / 720 = 72/720 = **1/10**

---

## **Aufgabe 4: Dreimaliger Wurf** (7 Punkte)

**Grundlage:** 6³ = 216 mögliche Ergebnisse

### (a) Keine 6 (2 Punkte)
**Lösung:** P = (5/6)³ = 125/216

### (b) Höchstens eine 6 (2 Punkte)
**Strategie:** 0 oder 1 Sechser
- 0 Sechser: (5/6)³ = 125/216
- 1 Sechser: C(3,1) × (1/6)¹ × (5/6)² = 3 × (1/6) × (25/36) = 75/216
- **Lösung:** P = 125/216 + 75/216 = **200/216 = 25/27**

### (c) Produkt nicht durch 2 oder 3 teilbar (3 Punkte)
**Bedingung:** Alle Augenzahlen sind 1 oder 5
- **Lösung:** P = (2/6)³ = 8/216 = **1/27**

---

## **Aufgabe 5: Schützenkönig Müller** (6 Punkte)

**Gegeben:** P(Treffer) = 1/3, P(mindestens 1 Treffer) ≥ 0,9

**Gesucht:** Anzahl Schüsse n

**Gegenereignis:** Alle Schüsse verfehlen
- P(alle verfehlen) = (2/3)ⁿ
- P(mindestens 1 Treffer) = 1 - (2/3)ⁿ ≥ 0,9
- (2/3)ⁿ ≤ 0,1
- n × ln(2/3) ≤ ln(0,1)
- n ≥ ln(0,1) / ln(2/3) = ln(10) / ln(3/2) ≈ 2,303 / 0,405 ≈ 5,68

**Lösung:** n = **6** Schüsse

---

## **Aufgabe 6: Stetige Verteilung** (7 Punkte)

**Gegeben:** f(x) = cx für 0 ≤ x ≤ a, f(x) = c(2a-x) für a < x ≤ 2a

### (a) Skizze (1 Punkt)
**Beschreibung:** Dreieck von (0,0) über (a,ca) zu (2a,0)

### (b) Konstante c (2 Punkte)
**Normierung:** ∫₀^{2a} f(x) dx = 1

∫₀^a cx dx + ∫_a^{2a} c(2a-x) dx = 1

c[x²/2]₀^a + c[2ax - x²/2]_a^{2a} = 1

c(a²/2) + c[(4a² - 2a²) - (2a² - a²/2)] = 1

c(a²/2) + c[2a² - 3a²/2] = 1

c(a²/2) + c(a²/2) = 1

ca² = 1

**Lösung:** c = **1/a²**

### (c) Erwartungswert (2 Punkte)
**Symmetrie:** Die Verteilung ist symmetrisch um x = a
- **Lösung:** E[X] = **a**

### (d) Standardabweichung (2 Punkte)
**Berechnung:** E[X²] = ∫₀^{2a} x² f(x) dx

E[X²] = (1/a²)[∫₀^a x³ dx + ∫_a^{2a} x²(2a-x) dx]

Nach Integration und Vereinfachung:
E[X²] = 7a²/6

Var(X) = E[X²] - (E[X])² = 7a²/6 - a² = a²/6

**Lösung:** σ = **a/√6**

---

## **Aufgabe 7: Zahlentheorie** (8 Punkte)

### (a) Letzte Dezimalstelle von 7²²² (3 Punkte)
**Strategie:** 7²²² mod 10

**Zyklusanalyse:**
- 7¹ ≡ 7 (mod 10)
- 7² ≡ 49 ≡ 9 (mod 10)
- 7³ ≡ 7 × 9 ≡ 63 ≡ 3 (mod 10)
- 7⁴ ≡ 7 × 3 ≡ 21 ≡ 1 (mod 10)

**Zyklus:** 7, 9, 3, 1 (Periode 4)
- 222 = 4 × 55 + 2
- **Lösung:** 7²²² ≡ 7² ≡ **9** (mod 10)

### (b) Erweiterte Euklid: 322x + 189y = 7 (4 Punkte)
**Schritt 1:** ggT(322, 189)
- 322 = 1 × 189 + 133
- 189 = 1 × 133 + 56
- 133 = 2 × 56 + 21
- 56 = 2 × 21 + 14
- 21 = 1 × 14 + 7
- 14 = 2 × 7 + 0

**ggT = 7** ✓

**Rückwärts:**
- 7 = 21 - 1 × 14
- 7 = 21 - 1 × (56 - 2 × 21) = 3 × 21 - 1 × 56
- 7 = 3 × (133 - 2 × 56) - 1 × 56 = 3 × 133 - 7 × 56
- 7 = 3 × 133 - 7 × (189 - 1 × 133) = 10 × 133 - 7 × 189
- 7 = 10 × (322 - 1 × 189) - 7 × 189 = 10 × 322 - 17 × 189

**Lösung:** x = 10, y = -17

### (c) Warum keine Lösung für 322x + 189y = 6? (1 Punkt)
**Grund:** ggT(322, 189) = 7, aber 7 teilt 6 nicht

---

## **Aufgabe 8: Monoalphabetische Verschlüsselung** (7 Punkte)

**Gegeben:** f(x) = (ax + b) mod 26, E → C, M → M

**Übersetzung:** E = 4, C = 2, M = 12

**Gleichungssystem:**
- f(4) = 2: 4a + b ≡ 2 (mod 26)
- f(12) = 12: 12a + b ≡ 12 (mod 26)

**Lösung:**
- 8a ≡ 10 (mod 26)
- 4a ≡ 5 (mod 13)

**Inverse von 4 mod 13:**
- 4 × 10 = 40 ≡ 1 (mod 13)
- a ≡ 10 × 5 ≡ 50 ≡ 11 (mod 13)

**Mögliche Werte:** a ∈ {11, 24} (aber 24 ist nicht teilerfremd zu 26)

**Für a = 11:** b ≡ 2 - 44 ≡ -42 ≡ 10 (mod 26)

**Lösung:** (a,b) = **(11,10)**

---

## **Aufgabe 9: RSA-Entschlüsselung** (6 Punkte)

**Gegeben:** c = 24, e = 11, m = 77

**Schritt 1:** Faktorisierung
- 77 = 7 × 11

**Schritt 2:** φ(77) = 6 × 10 = 60

**Schritt 3:** Privater Schlüssel
- 11d ≡ 1 (mod 60)
- Erweiterte Euklid: d = 11 (da 11 × 11 = 121 ≡ 1 (mod 60))

**Schritt 4:** Entschlüsselung
- z = 24¹¹ mod 77

**Schnelle Exponentiation:**
- 24² = 576 ≡ 37 (mod 77)
- 24⁴ = 37² = 1369 ≡ 60 (mod 77)
- 24⁸ = 60² = 3600 ≡ 53 (mod 77)
- 24¹¹ = 24⁸ × 24² × 24¹ = 53 × 37 × 24 mod 77

**Berechnung:**
- 53 × 37 = 1961 ≡ 60 (mod 77)
- 60 × 24 = 1440 ≡ 59 (mod 77)

**Lösung:** z = **59**

---

## **Punkteverteilung & Strategie**

| Aufgabe | Punkte | Schwierigkeit | Zeitaufwand |
|---------|---------|---------------|-------------|
| 1 | 6 | Leicht | 6 min |
| 2 | 7 | Mittel | 8 min |
| 3 | 6 | Mittel | 8 min |
| 4 | 7 | Mittel | 8 min |
| 5 | 6 | Mittel | 8 min |
| 6 | 7 | Schwer | 10 min |
| 7 | 8 | Schwer | 12 min |
| 8 | 7 | Schwer | 10 min |
| 9 | 6 | Schwer | 10 min |

**Empfohlene Reihenfolge:** 1 → 4 → 5 → 2 → 3 → 7 → 9 → 8 → 6

**Bestehen:** 28 Punkte (aus 55 regulären)
**Note 1:** 55 Punkte + Zusatzpunkte
