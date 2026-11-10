# ✅ Lösung Probeklausur W4 (Überraschungsklausur)

> Alle Ergebnisse numerisch (Python, großteils per Brute-Force-Abzählen) verifiziert.
> Aufbau je Aufgabe: **Erkennung → Weg → Punkte → typische Falle**. In Klammern: die Skript-Aufgabe, deren Variante das ist —
> **genau diese Aufgabenabschnitte des Skripts sind der Pool, aus dem Überraschungen kommen.**

---

## Aufgabe 1 (12 P, ~12 min) — Grundaufgaben in Verkleidung

**(a) [4 P]** *(Skript 2.2.6 „Kling")* **Erkennung:** jedes **Paar** stößt einmal an → Kombination ohne Wdh., k = 2, n gesucht.
C(n,2) = n(n−1)/2 = 496 → n(n−1) = 992 = 32·31 → **n = 32**
(oder: n² − n − 992 = 0 → n = (1 + √3969)/2 = (1 + 63)/2 = 32)

**(b) [3 P]** *(Skript 2.2.5 Domino)* **Erkennung:** 2 Augenzahlen aus 7, Reihenfolge egal, Wiederholung erlaubt (Pasch-Steine!) → Kombination **mit** Wdh.
C(7+2−1, 2) = C(8,2) = **28** (= 21 gemischte + 7 Pasch)

**(c) [5 P]** *(Skript 2.2.11)* **Erkennung:** Sobald die Buchstaben-Auswahl feststeht, gibt es **genau eine** alphabetische Anordnung → es wird nur die **Auswahl** gezählt (Reihenfolge „egal").
(i) mit Wiederholung: C(26+4−1, 4) = C(29,4) = **23 751**
(ii) ohne Wiederholung: C(26,4) = **14 950**

**Typische Falle:** (c) mit 26⁴ bzw. 26·25·24·23 beantworten — „Wort" klingt nach Reihenfolge, aber die Sortier-Bedingung nimmt sie wieder weg.

---

## Aufgabe 2 (12 P, ~14 min) — Multimengen-Permutationen in Verkleidung

**Erkennung (alle vier):** Anordnungen mit Gruppen gleicher Objekte → n!/(n₁!·n₂!·…).

**(a) [2 P]** *(Skript 2.3.2)* 5!/(2!·1!·2!) = **30**

**(b) [3 P]** *(Skript 2.3.4 a)* 5 Züge „rechts" (R) und 5 Züge „hoch" (H) in beliebiger Reihenfolge: 10!/(5!·5!) = C(10,5) = **252**

**(c) [4 P]** *(Skript 2.3.4 b)* Bei i Diagonalzügen braucht er noch 3−i R und 3−i H, also 6−i Züge: (6−i)!/(i!·(3−i)!·(3−i)!)

| i | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Wege | 6!/(3!3!) = 20 | 5!/(1!2!2!) = 30 | 4!/(2!1!1!) = 12 | 3!/3! = 1 |

Summe: **63**

**(d) [3 P]** *(Skript 2.3.3)* Kartenreihe mit „Spieler-Etiketten" 1,1,2,2,3,3: 6!/(2!·2!·2!) = **90** (= C(6,2)·C(4,2)·C(2,2))

**Typische Falle:** (b) mit 6 statt 5 Zügen pro Richtung rechnen (von Feld 1 zu Feld 6 sind es **5** Schritte); in (d) zusätzlich durch 3! teilen (die Spieler sind unterscheidbar!).

---

## Aufgabe 3 (10 P, ~10 min) — Schubfachprinzip

**Erkennung:** „mindestens … um **mit Sicherheit** …", „zeigen Sie, dass es stets zwei gibt" → Fächer und Objekte benennen, Worst Case.

**(a) [3 P]** *(Skript 2.4.1)* Fächer = 4 Farben. Worst Case: von jeder Farbe 2 → 8 Socken ohne 3 gleiche. Die **9.** Socke erzwingt 3 gleichfarbige → **9**. (Die Stückzahlen sind irrelevant, solange jede Farbe ≥ 2 Socken hat.)

**(b) [4 P]** *(Skript 2.4.2)* Fächer = die 6 Paare {1,12}, {2,11}, {3,10}, {4,9}, {5,8}, {6,7}. Mit 6 Zahlen kann man aus jedem Fach genau eine nehmen (z. B. 1–6) — keine Summe 13. Bei **7** Zahlen liegen zwei im selben Fach → Summe 13. Antwort: **7**

**(c) [3 P]** *(Skript 2.4.3, vereinfacht)* Fächer = Reste 0, 1, 2, 3, 4 bei Division durch 5; 6 Zahlen auf 5 Fächer ⇒ zwei Zahlen x, y mit gleichem Rest ⇒ x − y ≡ 0 (mod 5). ∎

**Typische Falle:** bei (a) 3·4 = 12 antworten; die Formel ist (k−1)·Fächer + 1 = 2·4 + 1.

---

## Aufgabe 4 (12 P, ~12 min) — Siebformel in drei Varianten

**(a) [4 P]** *(Skript 2.5.1, rückwärts)* **Erkennung:** Vereinigung, Einzelmengen und Paarschnitte gegeben → Formel nach dem Dreierschnitt umstellen.
45 = 28 + 20 + 25 − 9 − 14 − 8 + x = 42 + x → **x = 3**

**(b) [4 P]** *(Skript 4.3.1 b)* **Erkennung:** „mindestens eine Ziffer **und** mindestens ein Buchstabe" → Gegenereignis „nur Buchstaben **oder** nur Ziffern" (disjunkt).
36³ − 26³ − 10³ = 46 656 − 17 576 − 1 000 = **28 080**

**(c) [4 P]** *(Skript 2.5.4.1 Derangements)* **Erkennung:** „niemand das eigene" = fixpunktfreie Permutation.
D₅ = 5!·(1 − 1 + 1/2 − 1/6 + 1/24 − 1/120) = 60 − 20 + 5 − 1 = **44** · P = 44/120 = **11/30 ≈ 0,367**

**Typische Falle:** (b) als 36³ − 26³ (nur „mindestens eine Ziffer"); (c) mit 4! = 24 oder 5!/2.

---

## Aufgabe 5 (14 P, ~14 min) — UND/ODER, Gegenereignis, Laplace

**(a) [5 P]** *(Skript 3.2.10)* **Erkennung:** „wird getroffen" = mindestens einer trifft → Gegenereignis, Unabhängigkeit → Produkte.
P(getroffen) = 1 − 0,4·0,6·0,75 = 1 − 0,18 = **0,82**
P(genau einer) = 0,6·0,6·0,75 + 0,4·0,4·0,75 + 0,4·0,6·0,25 = 0,27 + 0,12 + 0,06 = **0,45**

**(b) [5 P]** *(Skript 3.2.14)* Durch 5 teilbar ⇔ mindestens eine 5: 1 − (5/6)³ = **91/216 ≈ 0,421**
Endziffer 5 ⇔ Produkt ungerade **und** durch 5 teilbar ⇔ alle Würfel ∈ {1,3,5} und nicht alle ∈ {1,3}:
(3/6)³ − (2/6)³ = (27 − 8)/216 = **19/216 ≈ 0,088**

**(c) [4 P]** *(Skript 3.2.8)* **Erkennung:** Ziehen ohne Zurücklegen, zwei Sorten → hypergeometrisch.
C(4,2)·C(28,2)/C(32,4) = 6·378/35 960 = **567/8990 ≈ 0,0631**

**Typische Falle:** (a) die drei Wahrscheinlichkeiten addieren (1,25!); (b) „Endziffer 5" mit „durch 5 teilbar" gleichsetzen (auch 10, 20, 30 … sind durch 5 teilbar).

---

## Aufgabe 6 (10 P, ~10 min) — Bayes mit drei Ursachen

*(Skript 3.2.12)* **Erkennung:** Ursache zufällig gewählt, Wirkung beobachtet, „welche Ursache?" → totale W. im Nenner über **alle drei** Zweige.

**(a) [6 P]** P(K) = (1/3)·(1/4 + 1/2 + 1) = **7/12**
P(M₁|K) = (1/12)/(7/12) = **1/7** · P(M₂|K) = (2/12)/(7/12) = **2/7** · P(M₃|K) = (4/12)/(7/12) = **4/7** (Σ = 1 ✓)

**(b) [4 P]** P(KK) = (1/3)·(1/16 + 1/4 + 1) = (1/3)·(21/16) = **7/16**
P(M₃|KK) = (1/3)/(7/16) = **16/21 ≈ 0,762**

**Typische Falle:** in (b) die Posterior-Werte aus (a) einfach quadrieren; richtig ist: Likelihoods quadrieren (p², da zwei unabhängige Würfe **derselben** Münze), dann neu normieren.

---

## Aufgabe 7 (16 P, ~20 min) — Verteilungen aufstellen & Indikator-Trick

**(a) [7 P]** *(Skript 3.3.7)* **Erkennung:** X ohne Standardnamen → Baum aller Spielverläufe, Abbruchregel in jedem Knoten prüfen. p = 0,6, q = 0,4.

| X | Verläufe | Wahrscheinlichkeit | Wert |
|---|---|---|---|
| 2 | AA, BB | p² + q² | **0,52** |
| 3 | ABB, BAA | pq² + qp² = pq | **0,24** |
| 4 | ABAA, BABB | pq·p² + pq·q² = pq(p²+q²) | **0,1248** |
| 5 | ABAB·, BABA· (5. Satz beliebig — danach hat jemand 3 Sätze) | 2·(pq)² | **0,1152** |

Σ = 0,52 + 0,24 + 0,1248 + 0,1152 = 1 ✓
E[X] = 2·0,52 + 3·0,24 + 4·0,1248 + 5·0,1152 = 1,04 + 0,72 + 0,4992 + 0,576 = **2,8352**
(Verläufe 3 P, Wahrscheinlichkeiten 2 P, Σ-Kontrolle 1 P, E 1 P)

**(b) [4 P]** *(Skript 3.3.8)* **Erkennung:** jede Position gleich wahrscheinlich → **diskrete Gleichverteilung** auf {1,…,n}: P(X=k) = 1/n.
E[X] = (1 + 2 + … + n)/n = **(n+1)/2** · Var(X) = (n²−1)/12
n = 9: E[X] = **5** · Var(X) = 80/12 = **20/3 ≈ 6,67**

**(c) [3 P]** *(Skript 3.3.12, Variante)* **Erkennung:** X **zählt** Plätze → Indikator-Trick, keine Verteilung nötig.
P(Platz i bleibt leer) = ((n−1)/n)ⁿ → **E[X] = n·(1 − 1/n)ⁿ** · n = 4: 4·(3/4)⁴ = 4·81/256 = **81/64 ≈ 1,27**

**(d) [2 P]** *(Skript 3.3.11)* Linearität: jede gezogene Kugel hat im Mittel den Wert (1+10)/2 = 5,5 → E[Summe] = 3·5,5 = **16,5** (gilt auch ohne Zurücklegen — Linearität braucht keine Unabhängigkeit).

**Typische Falle:** (a) nach „ABA" abbrechen (A hat 2 Sätze, aber nicht hintereinander und nicht 3); (c) versuchen, die ganze Verteilung aufzustellen.

---

## Aufgabe 8 (14 P, ~18 min) — Zahlentheorie & klassische Chiffre

**(a) [3 P]** *(Skript 4.4.1)* **Erkennung:** φ = (p−1)(q−1) = n − (p+q) + 1 → Summe und Produkt bekannt → quadratische Gleichung.
p + q = n − φ + 1 = 4087 − 3960 + 1 = 128, p·q = 4087 → z² − 128z + 4087 = 0 → z = 64 ± √(4096 − 4087) = 64 ± 3
→ **p = 61, q = 67** (Probe: 61·67 = 4087 ✓, 60·66 = 3960 ✓)

**(b) [4 P]** *(Skript 4.4.2)* Tableau:

| Rest | x | y | q |
|---|---|---|---|
| 255 | 1 | 0 | |
| 111 | 0 | 1 | 2 |
| 33 | 1 | −2 | 3 |
| 12 | −3 | 7 | 2 |
| 9 | 7 | −16 | 1 |
| **3** | **−10** | **23** | 3 → Rest 0 |

ggT = 3: −10·255 + 23·111 = −2550 + 2553 = 3 ✓ → ×2: **x = −20, y = 46** (Probe: −5100 + 5106 = 6 ✓)
255x + 111y ist stets ein Vielfaches von 3; 7 ist keines → **keine Lösung**.

**(c) [2 P]** *(Skript 4.4.3, Variante)* a = 2k+1 ⇒ a² − 1 = (a−1)(a+1) = 2k·(2k+2) = 4·k(k+1). k(k+1) ist als Produkt zweier aufeinanderfolgender Zahlen gerade ⇒ a² − 1 ist durch 8 teilbar. ∎

**(d) [3 P]** *(Skript 4.4.7, Variante)* ggT(9,23) = 1 → eindeutig lösbar. 9⁻¹ mod 23 per Tableau:
23|1|0 · 9|0|1 · (q=2) 5|1|−2 · (q=1) 4|−1|3 · (q=1) 1|2|−5 → 9⁻¹ ≡ −5 ≡ **18** (9·18 = 162 = 7·23 + 1 ✓)
x ≡ 18·4 = 72 ≡ **3** (mod 23). Probe: 9·3 = 27 ≡ 4 ✓

**(e) [2 P]** Schlüssel periodisch darunter schreiben und addieren mod 26:

| Klartext | M 12 | A 0 | T 19 | H 7 | E 4 |
|---|---|---|---|---|---|
| Schlüssel | K 10 | E 4 | Y 24 | K 10 | E 4 |
| Summe mod 26 | 22 **W** | 4 **E** | 17 **R** | 17 **R** | 8 **I** |

→ **WERRI** (T und H werden hier zufällig beide zu R — polyalphabetisch: gleiche Geheimbuchstaben ≠ gleiche Klarbuchstaben).

**Typische Falle:** (a) losdividieren (√4087 ≈ 64 → 18 Primzahlen testen) statt die φ-Information zu nutzen; (b) die gefundenen x, y nicht mit 2 skalieren.

---

## Bonus (+4 P) — Poisson

*(Skript 3.4.8)* 90 pro Stunde → **λ = 1,5 pro Minute** (auf den gefragten Zeitraum umrechnen!).
P(X = 0) = e^(−1,5) = **0,2231** · P(X ≥ 1) = 1 − 0,2231 = **0,7769**

*(Poisson und geometrische Verteilung sind in der offiziellen Auswahl nicht markiert — deshalb nur Bonus. Die Formel passt in eine Spicker-Zeile.)*

---

## Notenschlüssel & Auswertung

| Punkte | ≥ 90 | 80–89 | 70–79 | 60–69 | 50–59 | < 50 |
|---|---|---|---|---|---|---|
| Note (Richtwert) | 1 | 2 | 3 | 3–4 | 4 (bestanden) | nicht bestanden |

**Ziel für W4:** ≥ 55 P beim ersten Versuch sind gut — die Klausur ist absichtlich ungewohnt. Entscheidend ist die Auswertung:
Bei jeder verlorenen Teilaufgabe im [Auswertungsbogen](Auswertungsbogen.md) notieren, ob **Erkennung** oder **Rechnung** gefehlt hat, die genannte
Skript-Aufgabe im Original nachrechnen und das Signalwort in den Erkennungsteil ⓪ des Spickers aufnehmen.
Rückverweise: A1–A4 → T1 · A5, A6 → T2 · A7 → T3 · A8 → T4.
