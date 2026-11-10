# 🏋️ Drill: Schubfach · Binomialkoeffizienten & Lehrsatz · Mengen (Wochen 2–3)

> Die „kleinen" Themen der offiziellen Auswahl. Im Juli wurden sie gestrichen — diesmal sind sie
> schnelle Punkte. Methode: T1 §4, §7, §8. Alle Ergebnisse numerisch verifiziert.

## Teil A — Schubfachprinzip (Woche 3)

1. In einem Wäschesack liegen 10 rote, 8 weiße und 12 blaue Socken. Wie viele muss man blind herausnehmen, um sicher 4 gleichfarbige zu haben?
2. Dasselbe mit Socken in 5 Farben (von jeder genug): Wie viele für sicher 3 gleichfarbige?
3. Wie viele Zahlen muss man aus {1, 2, …, 20} wählen, damit sicher zwei darunter sind, deren Summe 21 ist?
4. Wie viele Personen braucht es, damit sicher drei im selben Monat Geburtstag haben?
5. Zeige: Unter 7 verschiedenen natürlichen Zahlen gibt es zwei, deren Summe oder Differenz durch 10 teilbar ist.
6. Stimmt die Aussage? „Unter 30 Studierenden haben mindestens zwei am selben Tag des Monats (1.–31.) Geburtstag."

## Teil B — Binomialkoeffizienten und binomischer Lehrsatz (Woche 2)

7. Berechne ohne Taschenrechner: C(8,7) · C(100,98) · C(6,3) · C(n+1, n−1).
8. Schreibe die 6. Zeile des Pascal-Dreiecks auf und damit (a+b)⁶ aus.
9. Koeffizient von (a) x³ in (2+x)⁵, (b) x⁴ in (1−2x)⁶, (c) x²y³ in (3x−y)⁵?
10. Koeffizient von (a) x³yz² in (x+y+z)⁶, (b) x²y²z in (x+y+z)⁵?
11. Wie viele Teilmengen hat eine 5-elementige Menge? Wie viele davon haben eine gerade Anzahl von Elementen?
12. Wie viele Wörter lassen sich aus den Buchstaben von RADAR bilden?
13. Ein König soll auf einem Schachbrett von links unten nach rechts oben wandern und darf nur ein Feld nach rechts oder nach oben gehen. Wie viele Wege gibt es (a) auf dem 8×8-Brett, (b) auf einem 5×5-Brett?
14. 8 verschiedene Karten werden an 4 Spieler verteilt, jeder bekommt 2. Wie viele Verteilungen?

## Teil C — Mengen (Woche 2)

15. X = {a, b, c}, Y = {c, d}. Bestimme X∪Y, X∩Y, X\Y, |P(X)|, |X×Y|.
16. A = [−3, 3), B = [0, 3]. Bestimme A∩B und A∪B.
17. In einer Grundmenge mit 50 Elementen ist |A| = 30, |B| = 25, |A∩B| = 12. Bestimme |A∪B|, |Ā∩B̄| und |A\B|.
18. Was ist der Unterschied zwischen der Menge {a, b} und der Multimenge {a, a, b}? Wie viele Anordnungen hat die Multimenge {a, a, b, b, b}?

<details><summary>Lösungen</summary>

1. Schlimmster Fall 3 je Farbe = 9, die nächste entscheidet → **10**. (Stückzahlen im Sack sind egal.)
2. (3−1)·5 + 1 = **11**.
3. Fächer = die 10 Paare {1,20}, {2,19}, …, {10,11}. 10 Zahlen können aus lauter verschiedenen Fächern stammen → **11**.
4. (3−1)·12 + 1 = **25**.
5. Fächer nach Rest bei Division durch 10: {0}, {1,9}, {2,8}, {3,7}, {4,6}, {5} — 6 Fächer, 7 Zahlen →
   zwei im selben Fach. Gleiche Reste → Differenz durch 10 teilbar; Reste r und 10−r → Summe durch 10 teilbar. ∎
6. **Nein.** 30 Objekte, 31 Fächer — das Schubfachprinzip greift erst ab 32 Personen.
7. C(8,7) = C(8,1) = **8** · C(100,98) = C(100,2) = **4950** · C(6,3) = **20** · C(n+1,2) = **(n+1)·n/2**.
8. 1 6 15 20 15 6 1 → a⁶ + 6a⁵b + 15a⁴b² + 20a³b³ + 15a²b⁴ + 6ab⁵ + b⁶.
9. (a) C(5,3)·2² = **40** · (b) C(6,4)·(−2)⁴ = 15·16 = **240** · (c) C(5,2)·3²·(−1)³ = **−90**.
10. (a) 6!/(3!·1!·2!) = **60** · (b) 5!/(2!·2!·1!) = **30**.
11. 2⁵ = **32** · gerade: C(5,0)+C(5,2)+C(5,4) = 1+10+5 = **16** (immer genau die Hälfte).
12. 5!/(2!·2!) = **30**.
13. (a) 7 rechts, 7 hoch → C(14,7) = **3432** · (b) 4 rechts, 4 hoch → C(8,4) = **70**.
14. 8!/(2!·2!·2!·2!) = **2520**.
15. X∪Y = {a,b,c,d} · X∩Y = {c} · X\Y = {a,b} · |P(X)| = 2³ = 8 · |X×Y| = 3·2 = 6.
16. A∩B = [0, 3) · A∪B = [−3, 3].
17. |A∪B| = 30+25−12 = **43** · |Ā∩B̄| = 50 − 43 = **7** (De Morgan) · |A\B| = 30 − 12 = **18**.
18. In einer Menge zählt jedes Element einmal; in einer Multimenge zählt die Vielfachheit. Anordnungen: 5!/(2!·3!) = **10**.
</details>
