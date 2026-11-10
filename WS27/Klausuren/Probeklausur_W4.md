# 🧪 Probeklausur W4 — die „Überraschungsklausur"

> **Zweck:** Die SS26-Klausur hat gezeigt, dass Aufgaben aus der **offiziellen Themen-Auswahl** kommen, die in
> keiner Altklausur standen. Diese Klausur besteht deshalb fast nur aus **Varianten der Übungsaufgaben des Skripts**
> (Kapitel-Enden „Aufgaben: …") in ungewohnter Einkleidung. Wenn du hier bestehst, überrascht dich nichts mehr.
> **Alle Ergebnisse numerisch (Python) verifiziert.**
>
> **Bearbeitungszeit: 120 Minuten** · **100 Punkte** (+ 4 Bonuspunkte) · bestanden ab 50 Punkten
> **Hilfsmittel:** 1 einseitiger, handschriftlicher A4-Spicker + Taschenrechner
> **Keine Themen-Überschriften.** Regel für diese Klausur: Bei jeder Teilaufgabe zuerst **Modell hinschreiben**,
> und wenn nach 3 Minuten kein Ansatz trägt → markieren, weiter.
> Lösung erst NACH der Bearbeitung öffnen: [Loesung_W4.md](Loesung_W4.md) · Auswertung: [Auswertungsbogen.md](Auswertungsbogen.md)

| Aufgabe | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Bonus | Summe |
|---|---|---|---|---|---|---|---|---|---|---|
| Punkte | 12 | 12 | 10 | 12 | 14 | 10 | 16 | 14 | (+4) | 100 |

---

## Aufgabe 1 (12 Punkte)

**(a)** Auf einer Feier stößt jeder Gast mit jedem anderen genau einmal an. Es klingt **496-mal**. Wie viele Gäste sind anwesend?
**(b)** Ein Dominostein besteht aus zwei Feldern, die jeweils eine Augenzahl von **0 bis 6** zeigen; die Steine (2; 5) und (5; 2) sind identisch. Wie viele verschiedene Steine gibt es?
**(c)** Betrachtet werden Wörter der **Länge 4** über dem Alphabet {A, …, Z}. Wie viele Wörter gibt es, deren Buchstaben in alphabetischer Reihenfolge stehen,
 (i) wenn Buchstaben mehrfach vorkommen dürfen (z. B. ABBK),
 (ii) wenn kein Buchstabe mehrfach vorkommen darf?

## Aufgabe 2 (12 Punkte)

**(a)** Welchen Koeffizienten hat **x²yz²** in **(x + y + z)⁵**?
**(b)** Ein Roboter fährt auf einem Gitter von der linken unteren Ecke eines **6 × 6-Felder-Bretts** in die rechte obere Ecke. Pro Zug bewegt er sich genau ein Feld nach rechts oder ein Feld nach oben. Wie viele verschiedene Wege gibt es?
**(c)** Auf einem **4 × 4-Felder-Brett** darf der Roboter zusätzlich diagonal (ein Feld nach rechts oben) ziehen. Wie viele Wege gibt es jetzt von links unten nach rechts oben? *(Hinweis: nach der Anzahl i der Diagonalzüge unterscheiden.)*
**(d)** Auf wie viele Weisen kann man **6 verschiedene Karten** so an 3 Spieler verteilen, dass jeder 2 Karten erhält?

## Aufgabe 3 (10 Punkte)

**(a)** In einer Schublade liegen 9 schwarze, 7 graue, 5 braune und 6 blaue Socken. Wie viele Socken muss man im Dunkeln mindestens herausnehmen, um mit Sicherheit **3 gleichfarbige** zu haben?
**(b)** Wie viele Zahlen muss man aus {1, 2, …, 12} mindestens auswählen, damit mit Sicherheit zwei darunter sind, deren Summe **13** ergibt? (Begründung mit Angabe der „Fächer"!)
**(c)** Zeigen Sie: Unter 6 beliebigen natürlichen Zahlen gibt es stets zwei, deren Differenz durch 5 teilbar ist.

## Aufgabe 4 (12 Punkte)

**(a)** **45** Studierende eines Jahrgangs haben mindestens eine der drei Prüfungen A, B, C bestanden. 28 haben A bestanden, 20 B und 25 C; 9 haben A und B bestanden, 14 A und C, 8 B und C. Wie viele haben alle drei Prüfungen bestanden?
**(b)** Ein System verlangt Passwörter aus genau **3 Zeichen**, jedes ein Kleinbuchstabe (a–z) oder eine Ziffer (0–9). Wie viele Passwörter enthalten **mindestens eine Ziffer und mindestens einen Buchstaben**?
**(c)** 5 Personen wichteln: Jede bringt ein Geschenk mit, die Geschenke werden zufällig verteilt (jede Person erhält genau eines). Bei wie vielen Verteilungen erhält **niemand** das eigene Geschenk? Wie groß ist die Wahrscheinlichkeit dafür?

## Aufgabe 5 (14 Punkte)

**(a)** Drei Schützen treffen eine Scheibe unabhängig voneinander mit den Wahrscheinlichkeiten **0,6**, **0,4** und **0,25**. Alle drei schießen gleichzeitig je einmal. Mit welcher Wahrscheinlichkeit wird die Scheibe getroffen? Mit welcher Wahrscheinlichkeit trifft **genau einer**?
**(b)** Drei Würfel werden geworfen. Mit welcher Wahrscheinlichkeit ist das Produkt der Augenzahlen durch 5 teilbar? Mit welcher Wahrscheinlichkeit endet das Produkt auf die Ziffer 5?
**(c)** Aus einem Skatblatt (32 Karten, darunter 4 Asse) werden 4 Karten gezogen. Mit welcher Wahrscheinlichkeit sind genau 2 Asse dabei?

## Aufgabe 6 (10 Punkte)

Drei gezinkte Münzen M₁, M₂, M₃ zeigen „Kopf" mit den Wahrscheinlichkeiten **1/4**, **1/2** bzw. **1**. Eine der drei Münzen wird zufällig gewählt.

**(a)** Die gewählte Münze wird einmal geworfen und zeigt Kopf. Mit welchen Wahrscheinlichkeiten war es M₁, M₂ bzw. M₃?
**(b)** Die gewählte Münze wird zweimal geworfen und zeigt beide Male Kopf. Mit welcher Wahrscheinlichkeit ist es M₃?

## Aufgabe 7 (16 Punkte)

**(a)** Zwei Tischtennisspieler A und B spielen ein Match. A gewinnt jeden Satz unabhängig mit Wahrscheinlichkeit **0,6**, B mit 0,4. Das Match endet, sobald ein Spieler **zwei Sätze hintereinander** oder **insgesamt drei Sätze** gewonnen hat. X sei die Anzahl der gespielten Sätze. Bestimmen Sie die Verteilung von X (mit Kontrolle) und E[X].
**(b)** In einem Array mit **n** verschiedenen Zahlen wird eine sicher vorhandene Zahl durch lineare Suche gesucht; jede Position ist gleich wahrscheinlich. X sei die Anzahl der nötigen Vergleiche. Geben Sie die Verteilung von X und E[X] an. Berechnen Sie E[X] und Var(X) für n = 9.
**(c)** Ein Hashverfahren verteilt **n Datensätze** zufällig und unabhängig auf **n Speicherplätze**. X sei die Anzahl der Plätze, die **leer** bleiben. Bestimmen Sie E[X] allgemein und für n = 4.
**(d)** Aus einer Urne mit den Kugeln 1, 2, …, 10 werden 3 Kugeln ohne Zurücklegen gezogen. Welchen Wert hat die Summe der gezogenen Nummern im Mittel?

## Aufgabe 8 (14 Punkte)

**(a)** Die Zahl **n = 4087** ist das Produkt zweier Primzahlen p und q, und es ist **φ(n) = 3960**. Bestimmen Sie p und q **ohne Probedivision**.
**(b)** Bestimmen Sie ganze Zahlen x, y mit **255x + 111y = 6**. Warum gibt es keine ganzen Zahlen x, y mit 255x + 111y = 7?
**(c)** Zeigen Sie: Für jede ungerade Zahl a ist a² − 1 durch 8 teilbar.
**(d)** Lösen Sie **9x ≡ 4 (mod 23)**.
**(e)** Verschlüsseln Sie das Wort **MATHE** nach Vigenère mit dem Schlüsselwort **KEY** (A = 0, …, Z = 25).

## Bonusaufgabe (+4 Punkte)

Die Anzahl der Anfragen an einen Server sei Poisson-verteilt mit im Mittel **90 Anfragen pro Stunde**. Mit welcher Wahrscheinlichkeit trifft in einer bestimmten Minute **keine** Anfrage ein? Mit welcher Wahrscheinlichkeit mindestens eine?
*(Poisson: P(X = k) = λᵏ·e^(−λ)/k!, λ = Erwartungswert im betrachteten Zeitraum.)*
