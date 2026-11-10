# 🧭 Erkennungstraining 3 — alles gemischt (Ende Woche 9, Wiederholung in Woche 11)

> Die Generalprobe für den ersten Klausurschritt. Pro Aufgabe **nur Modell + Ansatz**, nicht
> ausrechnen. Ziel: unter 15 Minuten, **≥ 18/20** (Definition of Ready).
> Wenn du das Training schon kennst: stattdessen eine alte Klausur aus `../../SS25/Probeklausuren/`
> nehmen und nur an den Rand schreiben, welches Modell jede Aufgabe verlangt.

1. In einer Konditorei gibt es 6 Sorten Pralinen. Wie viele verschiedene Schachteln mit 10 Pralinen kann man füllen?
2. Von 120 Mitarbeitenden sprechen 70 Englisch, 45 Spanisch, 30 Französisch; 20 Englisch und Spanisch, 15 Englisch und Französisch, 10 Spanisch und Französisch; 12 sprechen keine der drei Sprachen. Wie viele sprechen alle drei?
3. Zwei Basketballer werfen Freiwürfe. A hat bisher 5 Treffer und noch 4 Würfe (Quote 60 %), B hat 6 Treffer und noch 3 Würfe (Quote 50 %). Mit welcher Wahrscheinlichkeit liegt A am Ende vorn?
4. Ein Rauchmelder erkennt einen Brand mit 98 %. Wie viele unabhängige Melder braucht man, damit ein Brand mit mindestens 99,99 % von mindestens einem erkannt wird?
5. Vier Kunden wählen unabhängig und zufällig eine von n Kassen. X = Anzahl der benutzten Kassen. Bestimme P(X = 1) und P(X = 4).
6. Eine Fabrik bezieht 60 % ihrer Chips von Lieferant A (2 % defekt) und 40 % von B (5 % defekt). Ein Chip ist defekt. Von wem stammt er wahrscheinlich?
7. n = 589, e = 133, c = 2. Bestimme den Klartext.
8. Ein Geheimtext entstand durch y = (a·x + b) mod 26. Bekannt: K → B und R → K. Bestimme den Schlüssel.
9. Aus 15 Losen (darunter 4 Gewinne) zieht jemand 3 Lose. Verteilung der Anzahl der Gewinne?
10. Zeige, dass unter 11 ganzen Zahlen stets zwei sind, deren Differenz durch 10 teilbar ist.
11. Berechne 5²⁰² mod 21.
12. Alice und Bob vereinbaren öffentlich p = 31 und g = 3. Alice sendet 3⁴ mod 31, Bob sendet 3⁶ mod 31. Welchen Schlüssel haben beide?
13. Ein Dartspieler trifft das Bullseye mit 10 %. Mit welcher Wahrscheinlichkeit gelingt ihm der erste Treffer genau beim 5. Wurf?
14. Eine Zufallsvariable hat die Dichte f(x) = C·x³ auf [0, 2]. Bestimme C und die Varianz.
15. Auf wie viele Arten können sich 4 Ehepaare in eine Reihe setzen, wenn jedes Paar nebeneinandersitzen will?
16. Zwei Würfel werden geworfen, X = kleinere der beiden Augenzahlen. Erwartungswert von X?
17. Löse 15x + 51y = 9 in ganzen Zahlen.
18. Der Geheimtext eines deutschen Textes wurde durch Verschieben des Alphabets erzeugt; am häufigsten kommt der Buchstabe Q vor. Wie wurde verschoben?
19. Bei einer Tombola gewinnt jedes Los unabhängig mit 15 %. Jemand kauft 12 Lose. Erwartungswert und Varianz der Anzahl der Gewinne? P(höchstens ein Gewinn)?
20. Wie viele Wege führen in einem Straßengitter von der Kreuzung (0,0) zur Kreuzung (5,3), wenn man nur nach Osten oder Norden gehen darf?

<details><summary>Lösungen (Modell + Ansatz)</summary>

1. **Kombination mit Wdh.** → C(6+10−1, 10) = C(15,10)
2. **Siebformel rückwärts, 3 Mengen** → |A∪B∪C| = 120 − 12 = 108 → x = 108 − 70 − 45 − 30 + 20 + 15 + 10
3. **Wettkampf zweier Binomialserien** → X ~ Bin(4; 0,6), Y ~ Bin(3; 0,5); 5+X > 6+Y ⇔ X ≥ Y+2 → Σ_y P(Y=y)·P(X ≥ y+2)
4. **Mindest-n-Ungleichung** → 0,02ⁿ ≤ 0,0001 → n ≥ ln 0,0001/ln 0,02 (aufrunden)
5. **Verteilung aufstellen (Belegungsmodell)** → |Ω| = n⁴; P(X=1) = n/n⁴ = 1/n³; P(X=4) = n(n−1)(n−2)(n−3)/n⁴
6. **Bayes** → P(A|def) = 0,6·0,02/(0,6·0,02 + 0,4·0,05), P(B|def) = Rest
7. **RSA entschlüsseln** → 589 = 19·31 (bis √589 ≈ 24 testen), φ = 18·30 = 540, d = 133⁻¹ mod 540 per Tableau, m = 2ᵈ mod 589
8. **Affine Chiffre** → 10a + b ≡ 1, 17a + b ≡ 10 → 7a ≡ 9 (mod 26) → Inverse von 7 per Tableau
9. **Hypergeometrisch** → P(X=k) = C(4,k)·C(11,3−k)/C(15,3), k = 0..3
10. **Schubfachprinzip** → Fächer = die 10 Reste mod 10, 11 Zahlen
11. **Satz von Euler** → φ(21) = 12, 202 = 16·12 + 10 → 5¹⁰ mod 21 (Quadrier-Kette)
12. **Diffie-Hellman** → K = (3⁶)⁴ mod 31 = 3²⁴ mod 31
13. **Geometrische Verteilung** → 0,9⁴·0,1
14. **Stetige Zufallsvariable** → ∫₀² C·x³ dx = 1 → C = 1/4; E = ∫x·f, E[X²] = ∫x²·f, Var = E[X²] − E²
15. **Permutation mit Blöcken** → 4! · 2⁴
16. **Verteilung aufstellen (Minimum)** → P(Min = k) = (13−2k)/36, E = Σ k·P
17. **Diophantische Gleichung / erweiterter Euklid** → ggT(15,51) = 3 teilt 9 → Tableau, Ergebnis mal 3
18. **Caesar, Häufigkeitsanalyse** → Q (16) steht für E (4) → Verschiebung 12
19. **Binomial** → E = 12·0,15, Var = 12·0,15·0,85, P(X≤1) = 0,85¹² + 12·0,15·0,85¹¹
20. **Gitterwege / Binomialkoeffizient** → C(8,3)
</details>

<details><summary>Kontrollwerte, falls du doch rechnen willst</summary>

1. 3003 · 2. 8 · 3. 0,3294 · 4. n ≥ 2,35 → 3 · 6. P(A|def) = 0,375 · 7. d = 337, m = 345 · 8. 7⁻¹ = 15 → a = 5, b = 3 ·
11. 16 · 12. K = 2 · 13. 0,0656 · 14. C = 1/4, E = 8/5, Var = 8/75 · 15. 384 · 16. 91/36 · 17. z. B. x = 21, y = −6 · 19. E = 1,8, Var = 1,53, P = 0,4435 · 20. 56
</details>
