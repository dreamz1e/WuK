# 🏋️ Drill: Binomial · Mindest-n · Wettkampf · geometrisch · hypergeometrisch (Woche 7)

> Methode: T3 §4–§7. Zwei der Juli-Aufgaben (Schützen-Vergleich, Schützen-Ungleichung) gehören
> hierher. **Pflicht bei jeder Aufgabe:** Zufallsvariable definieren („X = …, X ~ Bin(n; p)"),
> dann erst rechnen. Alle Ergebnisse numerisch verifiziert.

## Teil A — Binomial

1. Ein Bogenschütze trifft mit 30 %. Wie groß ist die Wahrscheinlichkeit für genau 4 Treffer bei 10 Schüssen?
2. Spielerin A gewinnt jeden Satz mit Wahrscheinlichkeit 2/3. Es werden 4 Sätze gespielt. P(A gewinnt mehr als die Hälfte)?
3. Eine Partei hat 40 % Anhänger. 5 Personen werden zufällig befragt. Wahrscheinlichkeit für
   (a) keinen, (b) genau 2, (c) höchstens 3, (d) mindestens 2 Anhänger?
4. Eine Familie hat 6 Kinder (Junge/Mädchen je ½). (a) P(3 Jungen und 3 Mädchen)? (b) P(weniger Jungen als Mädchen)?
5. Ein Server fällt pro Tag mit 5 % aus. X = Ausfalltage in 20 Tagen. E[X], Var(X), P(X = 0)?

## Teil B — Mindest-n

6. Wie oft muss ein Schütze mit Trefferwahrscheinlichkeit 0,2 schießen, um mit mindestens 95,5 % mindestens einmal zu treffen?
7. Aus einem Skatblatt (32 Karten) wird mit Zurücklegen gezogen. Wie oft, damit die Wahrscheinlichkeit für mindestens einen schwarzen Buben größer als ½ ist?
8. Wie viele Würfel muss man werfen, damit mit Wahrscheinlichkeit > ½ mindestens eine Sechs dabei ist?
9. 3 % der Teile sind defekt. Wie viele muss man prüfen, um mit mindestens 90 % mindestens ein defektes zu finden?
10. Trefferwahrscheinlichkeit 0,4. Wie viele Schüsse, damit mit mindestens 90 % **mindestens zwei** Treffer fallen?

## Teil C — Wettkampf

11. Wettschießen: A hat 6 Treffer und noch 3 Schüsse (p = 0,5). B hat 7 Treffer und noch 2 Schüsse (p = 0,3). Berechne P(A gewinnt), P(Gleichstand), P(B gewinnt).
12. Elfmeterschießen: A führt 3:2. A hat noch einen Schuss (p = 0,8), B noch zwei (p = 0,7). P(B gewinnt noch)? P(Unentschieden)?
13. Die Juli-Aufgabe: A (p = 0,4) hat 8 Treffer, noch 10 Schüsse. B (p = 0,2) hat 10 Treffer, noch 5 Schüsse. Schreibe den vollständigen Ansatz für P(A gewinnt) auf (Zufallsvariablen, Ungleichung, Summe).

## Teil D — geometrisch, hypergeometrisch, unabhängige Treffer

14. Ein Schütze trifft mit 40 % und schießt, bis er zum ersten Mal trifft. (a) P(er braucht mehr als 3 Schüsse)? (b) erwartete Schusszahl?
15. Drei Schützen treffen mit 0,5, 0,3 und 0,2 und schießen gleichzeitig. (a) P(die Scheibe wird getroffen)? (b) P(genau einer trifft)?
16. Von 10 Glühbirnen sind 3 defekt. 3 werden ohne Zurücklegen entnommen, X = Anzahl defekter. Verteilung und E[X]?
17. Lieferung mit 50 Teilen, 5 defekt. 4 Teile werden geprüft. P(genau 1 defekt), wenn (a) ohne Zurücklegen, (b) mit Zurücklegen gezogen wird?

<details><summary>Lösungen</summary>

1. X ~ Bin(10; 0,3): C(10,4)·0,3⁴·0,7⁶ = **0,2001**.
2. X ~ Bin(4; 2/3): P(X≥3) = 4·(2/3)³·(1/3) + (2/3)⁴ = 32/81 + 16/81 = **16/27 ≈ 0,593**.
3. X ~ Bin(5; 0,4): (a) 0,6⁵ = **0,0778** · (b) C(5,2)·0,4²·0,6³ = **0,3456** ·
   (c) 1 − P(4) − P(5) = 1 − 0,0768 − 0,0102 = **0,9130** · (d) 1 − P(0) − P(1) = 1 − 0,0778 − 0,2592 = **0,6630**.
4. (a) C(6,3)/2⁶ = 20/64 = **5/16** · (b) Symmetrie: P(weniger) = P(mehr) → (1 − 5/16)/2 = **11/32**.
5. E = 20·0,05 = **1** · Var = 20·0,05·0,95 = **0,95** · P(X=0) = 0,95²⁰ = **0,3585**.
6. 0,8ⁿ ≤ 0,045 → n ≥ ln 0,045/ln 0,8 = 13,9 → **14** (Probe: 1−0,8¹³ = 0,945 ✗ · 1−0,8¹⁴ = 0,956 ✓).
7. p = 2/32 = 1/16: (15/16)ⁿ < 0,5 → n > ln 0,5/ln(15/16) = 10,74 → **11**.
8. (5/6)ⁿ < 0,5 → n > 3,80 → **4**.
9. 0,97ⁿ ≤ 0,1 → n ≥ ln 0,1/ln 0,97 = 75,6 → **76**.
10. P(X ≤ 1) = 0,6ⁿ + n·0,4·0,6ⁿ⁻¹ ≤ 0,1 — durchprobieren: n = 8 → 0,1064 ✗ · n = 9 → 0,0705 ✓ → **9**.
11. X ~ Bin(3; 0,5), Y ~ Bin(2; 0,3). A gewinnt ⇔ 6+X > 7+Y ⇔ X ≥ Y+2.
    P(Y=0) = 0,49 · P(Y=1) = 0,42 · P(Y=2) = 0,09 · P(X≥2) = 0,5 · P(X≥3) = 0,125.
    **P(A) = 0,49·0,5 + 0,42·0,125 = 0,2975** · Gleichstand (X = Y+1): 0,49·0,375 + 0,42·0,375 + 0,09·0,125 = **0,3525** ·
    **P(B) = 1 − 0,2975 − 0,3525 = 0,35**.
12. X ~ Bin(1; 0,8), Y ~ Bin(2; 0,7). B gewinnt ⇔ 2+Y > 3+X ⇔ Y ≥ X+2 → nur X=0, Y=2: 0,2·0,49 = **0,098**.
    Unentschieden ⇔ Y = X+1: 0,2·0,42 + 0,8·0,49 = **0,476**. (A gewinnt: 0,426.)
13. X ~ Bin(10; 0,4), Y ~ Bin(5; 0,2). A gewinnt ⇔ 8+X > 10+Y ⇔ X ≥ Y+3.
    P = Σ_{y=0}^{5} P(Y=y)·P(X ≥ y+3) ≈ **0,61** (Gleichstand ≈ 0,19).
14. (a) mehr als 3 Schüsse = 3 Fehlschüsse: 0,6³ = **0,216** · (b) E = 1/p = **2,5**.
15. (a) 1 − 0,5·0,7·0,8 = **0,72** · (b) 0,5·0,7·0,8 + 0,5·0,3·0,8 + 0,5·0,7·0,2 = 0,28 + 0,12 + 0,07 = **0,47**.
16. Hypergeometrisch (N=10, r=3, m=3): P(0) = 35/120 = 7/24 · P(1) = 63/120 = 21/40 · P(2) = 21/120 = 7/40 · P(3) = 1/120 (Σ = 1 ✓) · E = 3·3/10 = **0,9**.
17. (a) hypergeometrisch: C(5,1)·C(45,3)/C(50,4) = **0,3081** · (b) binomial p = 0,1: 4·0,1·0,9³ = **0,2916**.
</details>
