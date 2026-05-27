# Lösungen SoSe20 Klausur WuK (Spickzettel-Stil)

**Struktur:** 109 Punkte (9 Bonuspunkte) | 120 Minuten | 9 Aufgaben

---

## **Aufgabe 1: Permutation mit Wiederholung** (12 Punkte)

**Gegeben:** Ziffern 4, 4, 4, 7, 7, 9, 9

### (a) Verschiedene Anordnungen
**Formel:** n! / (n₁! × n₂! × ... × nₖ!)
- n = 7 (Gesamtzahl), n₁ = 3 (Dreien), n₂ = 2 (Siebener), n₃ = 2 (Neunen)
- **Lösung:** 7! / (3! × 2! × 2!) = 5040 / (6 × 2 × 2) = 5040 / 24 = **210**

### (b) Beginnt mit 9, endet mit 7
**Strategie:** Erste und letzte Position fixiert → Permutation der restlichen 5 Elemente
- Verbleibend: 4, 4, 4, 7, 9 (5 Elemente)
- **Lösung:** 5! / (3! × 1! × 1!) = 120 / 6 = **20**

### (c) Beide Neunen direkt nebeneinander
**Strategie:** Neunen als Block behandeln
- Elemente: (99), 4, 4, 4, 7, 7 → 6 Elemente
- **Lösung:** 6! / (1! × 3! × 2!) = 720 / (1 × 6 × 2) = 720 / 12 = **60**

---

## **Aufgabe 2: Kombinatorik - Auswahl** (12 Punkte)

**Gegeben:** 13 Autos, 10 auswählen

### (a) Beliebige Auswahl
**Formel:** C(n,k) = n! / (k! × (n-k)!)
- **Lösung:** C(13,10) = C(13,3) = 13! / (3! × 10!) = (13 × 12 × 11) / (3 × 2 × 1) = 1716 / 6 = **286**

### (b) Erste beiden müssen dabei sein
**Strategie:** Erste 2 fixiert → 8 aus verbleibenden 11 auswählen
- **Lösung:** C(11,8) = C(11,3) = 11! / (3! × 8!) = (11 × 10 × 9) / 6 = 990 / 6 = **165**

### (c) Genau 3 der ersten 5 Autos
**Strategie:** 3 aus ersten 5 + 7 aus letzten 8
- **Lösung:** C(5,3) × C(8,7) = 10 × 8 = **80**

### (d) Mindestens 3 der ersten 5 Autos
**Strategie:** Summe von: genau 3, genau 4, genau 5
- Genau 3: C(5,3) × C(8,7) = 10 × 8 = 80
- Genau 4: C(5,4) × C(8,6) = 5 × 28 = 140
- Genau 5: C(5,5) × C(8,5) = 1 × 56 = 56
- **Lösung:** 80 + 140 + 56 = **276**

---

## **Aufgabe 3: Würfel-Kombinatorik** (9 Punkte)

**Gegeben:** 3 Würfel mit 6 Seiten

### (a) Nicht unterscheidbare Würfel
**Strategie:** Partitionen von 3 in max. 6 Teile (Würfelaugen 1-6)
- Systematische Aufzählung aller Kombinationen (a,b,c) mit a ≤ b ≤ c
- **Lösung:** **56** verschiedene Ergebnisse

### (b) Unterscheidbare Würfel (rot, gelb, blau)
**Strategie:** Jeder Würfel kann 6 Werte annehmen
- **Lösung:** 6³ = **216**

---

## **Aufgabe 4: Binomialverteilung** (14 Punkte)

**Gegeben:** 8 Münzwürfe, unfaire Münze mit P(Kopf) = 1/3, P(Zahl) = 2/3

### (a) Nur Kopf
**Formel:** P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
- **Lösung:** P(X = 8) = C(8,8) × (1/3)^8 × (2/3)^0 = 1 × (1/3)^8 = **1/6561**

### (b) Genau 4 mal Kopf
- **Lösung:** P(X = 4) = C(8,4) × (1/3)^4 × (2/3)^4 = 70 × (1/81) × (16/81) = 70 × 16/6561 = **1120/6561**

### (c) Mindestens 2 mal Zahl
**Strategie:** Gegenereignis: 0 oder 1 mal Zahl
- P(0 Zahl) = P(8 Kopf) = (1/3)^8 = 1/6561
- P(1 Zahl) = P(7 Kopf) = C(8,1) × (1/3)^7 × (2/3)^1 = 8 × (1/2187) × (2/3) = 16/6561
- **Lösung:** 1 - (1/6561 + 16/6561) = 1 - 17/6561 = **6544/6561**

---

## **Aufgabe 5: Hypergeometrische Verteilung** (16 Punkte)

**Gegeben:** 4 Personen, 10 Stockwerke, gleiche Wahrscheinlichkeiten

### (a) Alle 4 im selben Stockwerk
**Strategie:** 10 Möglichkeiten für das Stockwerk
- **Lösung:** P = 10 × (1/10)^4 = 10/10000 = **1/1000**

### (b) Fahrstuhl hält 2 mal, je 2 Personen
**Strategie:** 2 Stockwerke auswählen × Personen zuordnen
- Stockwerke: C(10,2) = 45
- Personen aufteilen: C(4,2) = 6
- **Lösung:** P = (45 × 6) / 10^4 = 270/10000 = **27/1000**

---

## **Aufgabe 6: Bayes-Theorem** (12 Punkte)

**Gegeben:** P(krank) = 10^(-5), P(positiv|krank) = 0,99, P(positiv|gesund) = 0,005

**Gesucht:** P(krank|positiv)

**Bayes-Formel:** P(A|B) = P(B|A) × P(A) / P(B)

**Berechnung:**
- P(B) = P(positiv) = P(positiv|krank) × P(krank) + P(positiv|gesund) × P(gesund)
- P(B) = 0,99 × 10^(-5) + 0,005 × (1 - 10^(-5))
- P(B) = 0,99 × 10^(-5) + 0,005 × 0,99999
- P(B) ≈ 0,99 × 10^(-5) + 0,005 ≈ 0,005

**Lösung:** P(krank|positiv) = (0,99 × 10^(-5)) / 0,005 = **0,00198 ≈ 0,2%**

---

## **Aufgabe 7: Zahlentheorie** (14 Punkte)

### (a) Eulersches Theorem: 8^242 mod 25
**Vorbereitung:** 
- φ(25) = 25 × (1 - 1/5) = 20
- ggT(8, 25) = 1

**Eulerisches Theorem:** a^φ(n) ≡ 1 (mod n)
- 8^20 ≡ 1 (mod 25)
- 242 = 20 × 12 + 2
- **Lösung:** 8^242 ≡ 8^2 = 64 ≡ **14** (mod 25)

### (b) Erweiterte Euklidische Algorithmus: 582x + 123y = 6
**Schritt 1:** ggT(582, 123)
- 582 = 4 × 123 + 90
- 123 = 1 × 90 + 33
- 90 = 2 × 33 + 24
- 33 = 1 × 24 + 9
- 24 = 2 × 9 + 6
- 9 = 1 × 6 + 3
- 6 = 2 × 3 + 0

**ggT = 6** ✓ (teilt 6)

**Rückwärts:**
- 6 = 24 - 2 × 9
- 6 = 24 - 2 × (33 - 24) = 3 × 24 - 2 × 33
- 6 = 3 × (90 - 2 × 33) - 2 × 33 = 3 × 90 - 8 × 33
- 6 = 3 × 90 - 8 × (123 - 90) = 11 × 90 - 8 × 123
- 6 = 11 × (582 - 4 × 123) - 8 × 123 = 11 × 582 - 52 × 123

**Lösung:** x = 11, y = -52
**Allgemeine Lösung:** x = 11 + 123t/6 = 11 + 20.5t, y = -52 - 582t/6 = -52 - 97t

### (c) Warum keine Lösung für 582x + 123y = 11?
**Grund:** ggT(582, 123) = 6, aber 6 teilt 11 nicht
**Lösung:** **Keine ganzzahlige Lösung möglich**

---

## **Aufgabe 8: Monoalphabetische Verschlüsselung** (10 Punkte)

**Gegeben:** f(x) = (ax + b) mod 26, E → K, K → E

**Übersetzung:** E = 4, K = 10

**Gleichungssystem:**
- f(4) = 10: (4a + b) mod 26 = 10
- f(10) = 4: (10a + b) mod 26 = 4

**Lösung:**
- 4a + b ≡ 10 (mod 26)
- 10a + b ≡ 4 (mod 26)

Subtraktion: 6a ≡ -6 ≡ 20 (mod 26)

**Inverse von 6 mod 26:** 6 × 22 = 132 ≡ 2 (mod 26) → Keine Inverse!

**Korrektur:** ggT(6, 26) = 2, 20 ist durch 2 teilbar
- 3a ≡ 10 (mod 13)
- 3 × 9 = 27 ≡ 1 (mod 13) → Inverse von 3 ist 9
- a ≡ 9 × 10 ≡ 90 ≡ 12 (mod 13)

**Mögliche Werte:** a ∈ {12, 25}

**Für a = 12:** b ≡ 10 - 48 ≡ -38 ≡ 14 (mod 26)
**Für a = 25:** b ≡ 10 - 100 ≡ -90 ≡ 14 (mod 26)

**Lösung:** (a,b) = (12,14) oder (25,14)

---

## **Aufgabe 9: RSA-Entschlüsselung** (10 Punkte)

**Gegeben:** c = 10, e = 5, m = 35

**Schritt 1:** Faktorisierung von m
- 35 = 5 × 7

**Schritt 2:** φ(35) = φ(5) × φ(7) = 4 × 6 = 24

**Schritt 3:** Privater Schlüssel d
- e × d ≡ 1 (mod 24)
- 5 × d ≡ 1 (mod 24)
- d = 5 (da 5 × 5 = 25 ≡ 1 (mod 24))

**Schritt 4:** Entschlüsselung
- p = c^d mod m = 10^5 mod 35
- 10^2 = 100 ≡ 30 (mod 35)
- 10^4 = 30^2 = 900 ≡ 25 (mod 35)
- 10^5 = 25 × 10 = 250 ≡ 5 (mod 35)

**Lösung:** Klarnachricht = **5**

---

## **Punkteverteilung & Strategie**

| Aufgabe | Punkte | Schwierigkeit | Zeitaufwand |
|---------|---------|---------------|-------------|
| 1 | 12 | Leicht | 12 min |
| 2 | 12 | Leicht | 12 min |
| 3 | 9 | Mittel | 10 min |
| 4 | 14 | Leicht | 12 min |
| 5 | 16 | Mittel | 15 min |
| 6 | 12 | Schwer | 15 min |
| 7 | 14 | Schwer | 20 min |
| 8 | 10 | Schwer | 12 min |
| 9 | 10 | Mittel | 12 min |

**Empfohlene Reihenfolge:** 1 → 2 → 4 → 3 → 9 → 5 → 6 → 7 → 8

**Minimum für Bestehen:** 50 Punkte (aus 100 regulären)
**Realistisches Ziel:** 70-80 Punkte mit Bonuspunkten
