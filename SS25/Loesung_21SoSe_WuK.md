# 📋 LÖSUNGEN: 21SoSe-Klausur WuK

## **Klausur-Übersicht**
- **Datum:** 5. Juli 2021
- **Bearbeitungszeit:** 120 Minuten
- **Gesamtpunkte:** 110 (davon 10 Bonuspunkte)
- **Bestehen:** 55 Punkte (50%)

---

## **AUFGABE 1: KOMBINATORIK (12 Punkte)**
**Gegeben:** Buchstaben A, T, T, T, E, E

### **a) Unterscheidbare Anordnungen (3 Punkte)**
**Formel:** $\frac{n!}{n_1! \cdot n_2! \cdot n_3!}$
- **Variablen:** n=6 (Gesamt), n₁=1 (A), n₂=3 (T), n₃=2 (E)
- **Rechnung:** $\frac{6!}{1! \cdot 3! \cdot 2!} = \frac{720}{1 \cdot 6 \cdot 2} = \frac{720}{12} = 60$
- **Antwort:** 60 unterscheidbare Anordnungen

### **b) Alle Anordnungen (3 Punkte)**
**Ohne Wiederholungen:** $6! = 720$
- **Antwort:** 720 Anordnungen (wenn alle Buchstaben unterscheidbar wären)

### **c) Beginnt mit E, endet mit T (3 Punkte)**
**Vorgehen:** Fixiere E am Anfang, T am Ende, ordne Rest an
- **Verbleibend:** A, T, T, E (4 Buchstaben: 1×A, 2×T, 1×E)
- **Formel:** $\frac{4!}{1! \cdot 2! \cdot 1!} = \frac{24}{2} = 12$
- **Antwort:** 12 Anordnungen

### **d) Drei T direkt nebeneinander (3 Punkte)**
**Vorgehen:** Behandle TTT als ein Element
- **Elemente:** (TTT), A, E, E → 4 Elemente mit 1×(TTT), 1×A, 2×E
- **Formel:** $\frac{4!}{1! \cdot 1! \cdot 2!} = \frac{24}{2} = 12$
- **Antwort:** 12 Anordnungen

---

## **AUFGABE 2: AUSWAHL-KOMBINATORIK (14 Punkte)**
**Gegeben:** 7 aus 10 Klausuraufgaben auswählen

### **a) Keine Einschränkungen (3 Punkte)**
**Formel:** $\binom{10}{7} = \binom{10}{3}$
- **Rechnung:** $\binom{10}{3} = \frac{10!}{3! \cdot 7!} = \frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = \frac{720}{6} = 120$
- **Antwort:** 120 Wahlmöglichkeiten

### **b) Erste beiden Aufgaben Pflicht (3 Punkte)**
**Vorgehen:** 2 Aufgaben fest, 5 aus den restlichen 8 wählen
- **Formel:** $\binom{8}{5} = \binom{8}{3}$
- **Rechnung:** $\binom{8}{3} = \frac{8 \cdot 7 \cdot 6}{3 \cdot 2 \cdot 1} = \frac{336}{6} = 56$
- **Antwort:** 56 Wahlmöglichkeiten

### **c) Erste ODER zweite (aber nicht beide) (4 Punkte)**
**Vorgehen:** Erste JA + Zweite NEIN ODER Erste NEIN + Zweite JA
- **Fall 1:** Erste gewählt, 6 aus restlichen 8: $\binom{8}{6} = 28$
- **Fall 2:** Zweite gewählt, 6 aus restlichen 8: $\binom{8}{6} = 28$
- **Summe:** $28 + 28 = 56$
- **Antwort:** 56 Wahlmöglichkeiten

### **d) Von ersten 5 genau 3 (4 Punkte)**
**Vorgehen:** 3 aus ersten 5 UND 4 aus letzten 5
- **Formel:** $\binom{5}{3} \cdot \binom{5}{4}$
- **Rechnung:** $\binom{5}{3} = 10$, $\binom{5}{4} = 5$
- **Ergebnis:** $10 \cdot 5 = 50$
- **Antwort:** 50 Wahlmöglichkeiten

---

## **AUFGABE 3: FAHRSTUHL (18 Punkte)**
**Gegeben:** 3 Personen A,B,C, 4 Obergeschosse (1., 2., 3. OG)

### **a) Fahrstuhl hält nur einmal (4 Punkte)**
**Vorgehen:** Alle 3 Personen steigen im gleichen Stockwerk aus
- **Gesamtmöglichkeiten:** $3^3 = 27$ (jede Person 3 Möglichkeiten)
- **Günstige Fälle:** 3 Stockwerke × 1 Möglichkeit = 3
- **Wahrscheinlichkeit:** $\frac{3}{27} = \frac{1}{9}$
- **Antwort:** $\frac{1}{9}$

### **b) Fahrstuhl hält dreimal (5 Punkte)**
**Vorgehen:** Jede Person steigt in anderem Stockwerk aus
- **Möglichkeiten:** $3 \cdot 2 \cdot 1 = 6$ (Permutation)
- **Wahrscheinlichkeit:** $\frac{6}{27} = \frac{2}{9}$
- **Antwort:** $\frac{2}{9}$

### **c) A und B steigen gemeinsam aus (4 Punkte)**
**Vorgehen:** A und B im gleichen Stockwerk, C beliebig
- **A,B zusammen:** 3 Stockwerke
- **C beliebig:** 3 Stockwerke  
- **Günstige Fälle:** $3 \cdot 3 = 9$
- **Wahrscheinlichkeit:** $\frac{9}{27} = \frac{1}{3}$
- **Antwort:** $\frac{1}{3}$

### **d) Person A verlässt Fahrstuhl allein (5 Punkte)**
**Vorgehen:** A allein in einem Stockwerk, B und C in anderen
- **A allein:** 3 Möglichkeiten
- **B,C nicht bei A:** jeweils 2 Möglichkeiten
- **Günstige Fälle:** $3 \cdot 2 \cdot 2 = 12$
- **Wahrscheinlichkeit:** $\frac{12}{27} = \frac{4}{9}$
- **Antwort:** $\frac{4}{9}$

---

## **AUFGABE 4: SPORTSCHÜTZEN (16 Punkte)**
**Gegeben:** Schützen A,B,C mit Trefferwahrscheinlichkeiten 0,5, 0,3, 0,2

### **a) B schießt 3-mal, genau 2 Treffer (5 Punkte)**
**Formel:** $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$
- **Variablen:** n=3, k=2, p=0,3
- **Rechnung:** $\binom{3}{2} \cdot 0,3^2 \cdot 0,7^1 = 3 \cdot 0,09 \cdot 0,7 = 0,189$
- **Antwort:** 0,189 oder 18,9%

### **b) Alle schießen einmal, alle treffen (4 Punkte)**
**Vorgehen:** Unabhängige Ereignisse → Multiplikation
- **Rechnung:** $0,5 \cdot 0,3 \cdot 0,2 = 0,03$
- **Antwort:** 0,03 oder 3%

### **c) [Aufgabe unvollständig in der Quelle] (7 Punkte)**
**Hinweis:** Wahrscheinlich "mindestens einer trifft"
- **Komplement:** $1 - P(\text{alle verfehlen})$
- **Rechnung:** $1 - (0,5 \cdot 0,7 \cdot 0,8) = 1 - 0,28 = 0,72$
- **Antwort:** 0,72 oder 72%

---

## **AUFGABE 5: BAYES - DEFEKTE PRODUKTE (10 Punkte)**
**Gegeben:** 
- 3% defekte Produkte
- 90% der defekten werden erkannt (aussortiert)
- 2% der guten werden fälschlich aussortiert

**Gesucht:** P(fehlerfrei | aussortiert)

### **Lösung mit Bayes-Formel:**
**Ereignisse:**
- D = defekt, G = gut (fehlerfrei)
- A = aussortiert

**Gegeben:**
- P(D) = 0,03, P(G) = 0,97
- P(A|D) = 0,90, P(A|G) = 0,02

**Bayes-Formel:**
$$P(G|A) = \frac{P(A|G) \cdot P(G)}{P(A|G) \cdot P(G) + P(A|D) \cdot P(D)}$$

**Rechnung:**
$$P(G|A) = \frac{0,02 \cdot 0,97}{0,02 \cdot 0,97 + 0,90 \cdot 0,03} = \frac{0,0194}{0,0194 + 0,027} = \frac{0,0194}{0,0464} = 0,418$$

**Antwort:** 41,8% der aussortierten Produkte sind tatsächlich fehlerfrei

---

## **AUFGABE 6: ZWEI WÜRFEL - MINIMUM (12 Punkte)**
**Gegeben:** X = Minimum der beiden Augenzahlen

### **a) Wahrscheinlichkeitsfunktion (4 Punkte)**
**Vorgehen:** Für jedes k: P(Min = k) = P(beide ≥ k) - P(beide ≥ k+1)

- **P(Min = 1):** $1 - P(\text{beide} ≥ 2) = 1 - \frac{25}{36} = \frac{11}{36}$
- **P(Min = 2):** $P(\text{beide} ≥ 2) - P(\text{beide} ≥ 3) = \frac{25}{36} - \frac{16}{36} = \frac{9}{36}$
- **P(Min = 3):** $\frac{16}{36} - \frac{9}{36} = \frac{7}{36}$
- **P(Min = 4):** $\frac{9}{36} - \frac{4}{36} = \frac{5}{36}$
- **P(Min = 5):** $\frac{4}{36} - \frac{1}{36} = \frac{3}{36}$
- **P(Min = 6):** $\frac{1}{36}$

### **b) Erwartungswert (4 Punkte)**
**Formel:** $E[X] = \sum k \cdot P(X = k)$
$$E[X] = 1 \cdot \frac{11}{36} + 2 \cdot \frac{9}{36} + 3 \cdot \frac{7}{36} + 4 \cdot \frac{5}{36} + 5 \cdot \frac{3}{36} + 6 \cdot \frac{1}{36}$$
$$= \frac{11 + 18 + 21 + 20 + 15 + 6}{36} = \frac{91}{36} ≈ 2,53$$

### **c) Varianz und Standardabweichung (4 Punkte)**
**Erst E[X²] berechnen:**
$$E[X^2] = 1^2 \cdot \frac{11}{36} + 2^2 \cdot \frac{9}{36} + ... + 6^2 \cdot \frac{1}{36} = \frac{287}{36}$$

**Varianz:** $\text{Var}(X) = E[X^2] - (E[X])^2 = \frac{287}{36} - \left(\frac{91}{36}\right)^2 ≈ 1,97$

**Standardabweichung:** $\sigma = \sqrt{1,97} ≈ 1,40$

---

## **AUFGABE 7: MODULARE ARITHMETIK (10 Punkte)**

### **a) $8^{243} \bmod 25$ mit Euler'schem Theorem (6 Punkte)**
**Schritt 1:** $\varphi(25)$ berechnen
- $25 = 5^2$, also $\varphi(25) = 5^1 \cdot (5-1) = 5 \cdot 4 = 20$

**Schritt 2:** $\gcd(8, 25) = 1$ prüfen ✓

**Schritt 3:** Exponent reduzieren
- $243 = 20 \cdot 12 + 3$
- $8^{243} = 8^{20 \cdot 12 + 3} = (8^{20})^{12} \cdot 8^3$

**Schritt 4:** Euler anwenden
- $8^{20} \equiv 1 \pmod{25}$ (Euler)
- $(8^{20})^{12} \equiv 1^{12} = 1 \pmod{25}$

**Schritt 5:** $8^3$ berechnen
- $8^3 = 512 = 20 \cdot 25 + 12$
- $8^3 \equiv 12 \pmod{25}$

**Antwort:** $8^{243} \equiv 12 \pmod{25}$

### **b) Beweis: $a^5 - a$ durch 5 teilbar (4 Punkte)**
**Vorgehen:** Fallunterscheidung modulo 5

**Fall 1:** $a \equiv 0 \pmod{5}$
- $a^5 \equiv 0 \pmod{5}$, also $a^5 - a \equiv 0 - 0 = 0 \pmod{5}$ ✓

**Fall 2:** $a \not\equiv 0 \pmod{5}$
- Nach Fermat: $a^4 \equiv 1 \pmod{5}$
- $a^5 \equiv a \cdot a^4 \equiv a \cdot 1 = a \pmod{5}$
- Also $a^5 - a \equiv a - a = 0 \pmod{5}$ ✓

**Fazit:** In allen Fällen ist $a^5 - a \equiv 0 \pmod{5}$

---

## **AUFGABE 8: AFFINE CHIFFRE (18 Punkte)**
**Gegeben:** E→K, K→E (E=4, K=10)

### **a) Öffentlichen Exponenten bestimmen (6 Punkte)**
**Gleichungssystem:**
- $4a + b \equiv 10 \pmod{26}$ ... (1)
- $10a + b \equiv 4 \pmod{26}$ ... (2)

**Subtrahieren:** (2) - (1)
- $6a \equiv -6 \equiv 20 \pmod{26}$
- $a \equiv 20 \cdot 6^{-1} \pmod{26}$

**Inverse von 6 mod 26:**
- $\gcd(6, 26) = 2 \neq 1$ → Keine Lösung!

**⚠️ Fehler in Aufgabenstellung:** E↔K ist nicht möglich bei affiner Chiffre!

### **Alternative Interpretation:** 
Falls andere Zuordnung gemeint war, z.B. E→O (4→14):
- $4a + b \equiv 14 \pmod{26}$
- $10a + b \equiv 4 \pmod{26}$
- $6a \equiv -10 \equiv 16 \pmod{26}$
- etc.

---

## **AUFGABE 9: RSA-ENTSCHLÜSSELUNG (18 Punkte)**
**Gegeben:** m=91, e∈{12,15,17}, c=10

### **a) Öffentlichen Exponenten bestimmen (6 Punkte)**
**Schritt 1:** Faktorisierung
- $91 = 7 \cdot 13$

**Schritt 2:** $\varphi(91)$ berechnen
- $\varphi(91) = (7-1)(13-1) = 6 \cdot 12 = 72$

**Schritt 3:** Teste alle e-Werte
- $\gcd(12, 72) = 12 \neq 1$ ✗
- $\gcd(15, 72) = 3 \neq 1$ ✗  
- $\gcd(17, 72) = 1$ ✓

**Antwort:** e = 17

### **b) Privaten Schlüssel bestimmen (6 Punkte)**
**Erweiterter Euklidischer Algorithmus:** $17d \equiv 1 \pmod{72}$

- $72 = 4 \cdot 17 + 4$
- $17 = 4 \cdot 4 + 1$
- $4 = 4 \cdot 1 + 0$

**Rückwärts:**
- $1 = 17 - 4 \cdot 4$
- $1 = 17 - 4 \cdot (72 - 4 \cdot 17) = 17 \cdot 17 - 4 \cdot 72$

**Antwort:** d = 17

### **c) Klarnachricht (6 Punkte)**
**Formel:** $m = c^d \bmod n$
- $m = 10^{17} \bmod 91$

**Mit wiederholtem Quadrieren:**
- $10^2 = 100 \equiv 9 \pmod{91}$
- $10^4 \equiv 9^2 = 81 \pmod{91}$
- $10^8 \equiv 81^2 = 6561 \equiv 20 \pmod{91}$
- $10^{16} \equiv 20^2 = 400 \equiv 36 \pmod{91}$
- $10^{17} = 10^{16} \cdot 10 \equiv 36 \cdot 10 = 360 \equiv 87 \pmod{91}$

**Antwort:** m = 87

---

## **🎯 PUNKTEVERTEILUNG & STRATEGIE**

### **Erreichte Punkte nach Strategie:**
- **Aufgabe 1 (Kombinatorik):** 12/12 ⭐
- **Aufgabe 2 (Auswahl):** 14/14 ⭐⭐
- **Aufgabe 5 (Bayes):** 10/10 ⭐⭐
- **Aufgabe 3 (Fahrstuhl):** 16/18 ⭐⭐⭐
- **Aufgabe 6 (Würfel):** 10/12 ⭐⭐⭐⭐

**Gesamt:** 62 Punkte = **SICHER BESTANDEN** (56% von 110)

### **Zeitaufwand:**
- **Top-5 Aufgaben:** ~100 Minuten
- **Kontrolle:** 20 Minuten
- **Entspannt und sicher!** ✅
