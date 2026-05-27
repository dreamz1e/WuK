# Lösungen SS14 Klausur WuK (Spickzettel-Stil)

**Struktur:** 60 Punkte (5 Zusatzpunkte) | Bestehen: 28 Punkte | Note 1: 55 Punkte

---

## **Aufgabe 1: Permutation mit Wiederholung** (6 Punkte)

**Gegeben:** Ziffern 1, 1, 2, 2, 3, 3, 3

### (a) Verschiedene Anordnungen (2 Punkte)
**Formel:** n! / (n₁! × n₂! × ... × nₖ!)
- n = 7, n₁ = 2 (Einsen), n₂ = 2 (Zweien), n₃ = 3 (Dreien)
- **Lösung:** 7! / (2! × 2! × 3!) = 5040 / (2 × 2 × 6) = 5040 / 24 = **210**

### (b) Beginnt mit 1, endet mit 2 (2 Punkte)
**Strategie:** Erste und letzte Position fixiert
- Verbleibend: 1, 2, 3, 3, 3 (5 Elemente)
- **Lösung:** 5! / (1! × 1! × 3!) = 120 / 6 = **20**

### (c) Beide Einsen nebeneinander (2 Punkte)
**Strategie:** Einsen als Block behandeln
- Elemente: (11), 2, 2, 3, 3, 3 → 6 Elemente
- **Lösung:** 6! / (1! × 2! × 3!) = 720 / (1 × 2 × 6) = 720 / 12 = **60**

---

## **Aufgabe 2: Kombinatorik - Prüfung** (8 Punkte)

**Gegeben:** 13 Fragen, 10 beantworten

### (a) Beliebige Auswahl (1 Punkt)
**Lösung:** C(13,10) = C(13,3) = (13 × 12 × 11) / (3 × 2 × 1) = **286**

### (b) Erste beiden Fragen Pflicht (2 Punkte)
**Strategie:** Erste 2 fixiert → 8 aus verbleibenden 11
- **Lösung:** C(11,8) = C(11,3) = (11 × 10 × 9) / 6 = **165**

### (c) Genau 3 der ersten 5 Fragen (2 Punkte)
**Strategie:** 3 aus ersten 5 + 7 aus letzten 8
- **Lösung:** C(5,3) × C(8,7) = 10 × 8 = **80**

### (d) Mindestens 3 der ersten 5 Fragen (3 Punkte)
**Strategie:** Summe von genau 3, 4, 5
- Genau 3: C(5,3) × C(8,7) = 10 × 8 = 80
- Genau 4: C(5,4) × C(8,6) = 5 × 28 = 140
- Genau 5: C(5,5) × C(8,5) = 1 × 56 = 56
- **Lösung:** 80 + 140 + 56 = **276**

---

## **Aufgabe 3: Farbige Bälle** (8 Punkte)

**Gegeben:** 2 rote, 2 blaue, 2 gelbe, 2 weiße Bälle → 8 total, 3 ziehen

**Gesamtanzahl:** C(8,3) = 56

### (a) Alle verschiedenfarbig (2 Punkte)
**Strategie:** 3 verschiedene Farben aus 4 auswählen, dann je 1 Ball
- C(4,3) = 4 Möglichkeiten für Farbauswahl
- Pro Farbauswahl: 2 × 2 × 2 = 8 Möglichkeiten
- **Lösung:** P = (4 × 8) / 56 = 32/56 = **4/7**

### (b) Genau 2 gleichfarbige + 1 andersfarbiger (3 Punkte)
**Strategie:** 
- 1 Farbe für das Paar: 4 Möglichkeiten
- 2 Bälle dieser Farbe: C(2,2) = 1
- 1 andere Farbe: 3 Möglichkeiten
- 1 Ball dieser Farbe: C(2,1) = 2
- **Lösung:** P = (4 × 1 × 3 × 2) / 56 = 24/56 = **3/7**

### (c) Mindestens 1 roter Ball (3 Punkte)
**Gegenereignis:** Kein roter Ball (3 aus 6 nicht-roten)
- P(kein rot) = C(6,3) / C(8,3) = 20/56 = 5/14
- **Lösung:** P = 1 - 5/14 = **9/14**

---

## **Aufgabe 4: Zwei Würfel** (6 Punkte)

**Grundlage:** 36 mögliche Ergebnisse

### (a) Häufigste Augensumme (3 Punkte)
**Systematische Aufzählung:**
- Summe 2: (1,1) → 1 Weg
- Summe 3: (1,2), (2,1) → 2 Wege
- Summe 4: (1,3), (2,2), (3,1) → 3 Wege
- ...
- Summe 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 Wege
- ...
- Summe 12: (6,6) → 1 Weg

**Lösung:** Summe 7 mit P = 6/36 = **1/6**

### (b) Mindestens eine 1 oder 2 (3 Punkte)
**Gegenereignis:** Beide Würfel zeigen 3, 4, 5, oder 6
- P(beide ≥ 3) = (4/6)² = 16/36 = 4/9
- **Lösung:** P = 1 - 4/9 = **5/9**

---

## **Aufgabe 5: Bayes-Theorem** (5 Punkte)

**Gegeben:** P(krank) = 10⁻⁵, P(positiv|krank) = 0,95, P(positiv|gesund) = 0,005

**Gesucht:** P(krank|positiv)

**Bayes-Formel:**
P(krank|positiv) = P(positiv|krank) × P(krank) / P(positiv)

**Berechnung:**
- P(positiv) = P(positiv|krank) × P(krank) + P(positiv|gesund) × P(gesund)
- P(positiv) = 0,95 × 10⁻⁵ + 0,005 × (1 - 10⁻⁵)
- P(positiv) ≈ 0,95 × 10⁻⁵ + 0,005 ≈ 0,005

**Lösung:** P(krank|positiv) = (0,95 × 10⁻⁵) / 0,005 = **0,0019 ≈ 0,19%**

---

## **Aufgabe 6: Stetige Verteilung** (7 Punkte)

**Gegeben:** f(x) = Cx für 0 ≤ x ≤ a, sonst 0

### (a) Skizze (1 Punkt)
**Beschreibung:** Dreieck von (0,0) bis (a, Ca)

### (b) Konstante C (1 Punkt)
**Normierung:** ∫₀ᵃ Cx dx = 1
- C[x²/2]₀ᵃ = C × a²/2 = 1
- **Lösung:** C = **2/a²**

### (c) Erwartungswert (2 Punkte)
E[X] = ∫₀ᵃ x × (2x/a²) dx = (2/a²) ∫₀ᵃ x² dx = (2/a²) × [x³/3]₀ᵃ = (2/a²) × (a³/3)
- **Lösung:** E[X] = **2a/3**

### (d) Standardabweichung (3 Punkte)
E[X²] = ∫₀ᵃ x² × (2x/a²) dx = (2/a²) ∫₀ᵃ x³ dx = (2/a²) × [x⁴/4]₀ᵃ = (2/a²) × (a⁴/4) = a²/2

Var(X) = E[X²] - (E[X])² = a²/2 - (2a/3)² = a²/2 - 4a²/9 = (9a² - 8a²)/18 = a²/18

**Lösung:** σ = √(a²/18) = **a/(3√2) = a√2/6**

---

## **Aufgabe 7: Zahlentheorie** (8 Punkte)

### (a) 529² mod 16 mit Euler-Theorem (3 Punkte)
**Vorbereitung:** 529 ≡ 1 (mod 16), da 529 = 33 × 16 + 1
- **Lösung:** 529² ≡ 1² ≡ **1** (mod 16)

### (b) Erweiterte Euklid: 482x + 192y = 4 (4 Punkte)
**Schritt 1:** ggT(482, 192)
- 482 = 2 × 192 + 98
- 192 = 1 × 98 + 94
- 98 = 1 × 94 + 4
- 94 = 23 × 4 + 2
- 4 = 2 × 2 + 0

**ggT = 2** → Da 2 teilt 4: lösbar

**Erst für 482x + 192y = 2:**
- 2 = 94 - 23 × 4
- 2 = 94 - 23 × (98 - 94) = 24 × 94 - 23 × 98
- 2 = 24 × (192 - 98) - 23 × 98 = 24 × 192 - 47 × 98
- 2 = 24 × 192 - 47 × (482 - 2 × 192) = 118 × 192 - 47 × 482

**Für 482x + 192y = 4:** Alle Koeffizienten × 2
- **Lösung:** x = -94, y = 236

### (c) Warum keine Lösung für 482x + 192y = 3? (1 Punkt)
**Grund:** ggT(482, 192) = 2, aber 2 teilt 3 nicht
- **Lösung:** **Keine ganzzahlige Lösung möglich**

---

## **Aufgabe 8: Monoalphabetische Verschlüsselung** (7 Punkte)

**Gegeben:** f(x) = (ax + b) mod 26, E → O, O → W

**Übersetzung:** E = 4, O = 14, W = 22

**Gleichungssystem:**
- f(4) = 14: 4a + b ≡ 14 (mod 26)
- f(14) = 22: 14a + b ≡ 22 (mod 26)

**Lösung durch Subtraktion:**
- 10a ≡ 8 (mod 26)
- 5a ≡ 4 (mod 13)

**Inverse von 5 mod 13:**
- 5 × 8 = 40 ≡ 1 (mod 13)
- a ≡ 8 × 4 ≡ 32 ≡ 6 (mod 13)

**Mögliche Werte:** a ∈ {6, 19}

**Für a = 6:** b ≡ 14 - 24 ≡ -10 ≡ 16 (mod 26)
**Für a = 19:** b ≡ 14 - 76 ≡ -62 ≡ 16 (mod 26)

**Lösung:** (a,b) = (6,16) oder (19,16)

---

## **Aufgabe 9: RSA-Entschlüsselung** (5 Punkte)

**Gegeben:** C = 10, e = 5, m = 35

**Schritt 1:** Faktorisierung
- 35 = 5 × 7

**Schritt 2:** φ(35) = 4 × 6 = 24

**Schritt 3:** Privater Schlüssel
- 5d ≡ 1 (mod 24)
- d = 5 (da 5 × 5 = 25 ≡ 1 (mod 24))

**Schritt 4:** Entschlüsselung
- Z = 10⁵ mod 35
- 10² = 100 ≡ 30 (mod 35)
- 10⁴ = 30² = 900 ≡ 25 (mod 35)
- 10⁵ = 25 × 10 = 250 ≡ 5 (mod 35)

**Lösung:** Z = **5**

---

## **Punkteverteilung & Strategie**

| Aufgabe | Punkte | Schwierigkeit | Zeitaufwand |
|---------|---------|---------------|-------------|
| 1 | 6 | Leicht | 6 min |
| 2 | 8 | Leicht | 8 min |
| 3 | 8 | Mittel | 10 min |
| 4 | 6 | Leicht | 6 min |
| 5 | 5 | Schwer | 8 min |
| 6 | 7 | Mittel | 10 min |
| 7 | 8 | Schwer | 12 min |
| 8 | 7 | Schwer | 10 min |
| 9 | 5 | Mittel | 8 min |

**Empfohlene Reihenfolge:** 1 → 2 → 4 → 9 → 3 → 6 → 7 → 8 → 5

**Bestehen:** 28 Punkte (aus 55 regulären)
**Note 1:** 55 Punkte + Zusatzpunkte
