# 🏋️ Drill: Laplace · UND/ODER · Bäume · Bayes (Wochen 4–5)

> Methode: T2. Laplace-Aufgaben sind Kombinatorik im Bruch — **Zähler und Nenner getrennt
> hinschreiben**. Bei Bayes immer zuerst den Baum. Mehrere Aufgaben stammen aus den
> Übungsaufgaben des Skripts (3.2.x). Alle Ergebnisse numerisch verifiziert.

## Teil A — Laplace, UND/ODER (Woche 4)

1. Ein dreibuchstabiges Wort wird zufällig aus 26 Buchstaben gebildet (Wiederholung möglich). P(alle drei Buchstaben verschieden)?
2. Eine zufällige Bitfolge der Länge 8: P(genau 4 Nullen)?
3. Ein Sack enthält 4 weiße, 3 rote und 2 blaue Kugeln. Zwei werden blind gezogen. P(gleiche Farbe)?
4. Aus einem Skatblatt (32 Karten, 4 Asse) werden 3 Karten gezogen. P(genau ein Ass)? P(mindestens ein Ass)?
5. Aus einem Skatblatt werden 4 Karten gezogen. (a) P(die Werte 7, 8, 9, 10 in beliebigen Farben)? (b) P(4 Bilder — König, Dame, Bube)?
6. Vier Würfel werden geworfen. (a) P(Produkt der Augenzahlen durch 5 teilbar)? (b) P(Produkt endet auf die Ziffer 5)?
7. Lotto 6 aus 49: P(genau 4 Richtige)?
8. 4 Personen steigen in einen Fahrstuhl mit 6 Stockwerken. P(alle steigen verschieden aus)? P(alle im selben Stockwerk)? P(genau zwei Stockwerke mit je zwei Personen)?
9. Aus einem Kartenspiel mit 52 Karten werden nacheinander 3 Karten ohne Zurücklegen gezogen. P(alle drei sind Herz)? *(Multiplikationssatz)*
10. Drei Sicherungssysteme sprechen unabhängig mit 0,9, 0,8 und 0,5 an. P(mindestens eines spricht an)? P(alle drei)?
11. P(A) = 0,5, P(B) = 0,4, P(A∩B) = 0,2. Sind A und B unabhängig? P(A∪B)? P(A|B)?

## Teil B — Bäume, totale Wahrscheinlichkeit, Bayes (Woche 5)

12. Drei gezinkte Münzen zeigen „Kopf" mit Wahrscheinlichkeit 1/3, 2/3 und 1. Eine wird zufällig gewählt und geworfen: Kopf. Mit welchen Wahrscheinlichkeiten war es Münze 1, 2, 3?
13. 2 % einer Bevölkerung haben eine Krankheit. Der Test erkennt Kranke zu 95 % und schlägt bei 10 % der Gesunden fälschlich an. P(krank | Test positiv)?
14. 40 % aller Mails sind Spam. Das Wort „Gewinn" steht in 30 % der Spam-Mails und in 2 % der übrigen. P(Spam | Mail enthält „Gewinn")?
15. Urne 1 enthält 3 rote und 2 blaue Kugeln, Urne 2 enthält 1 rote und 4 blaue. Eine Urne wird zufällig gewählt, die gezogene Kugel ist rot. P(sie stammt aus Urne 1)?
16. 1 % krank, Sensitivität 99 %, Fehlalarmrate 5 %. Der Test wird zweimal unabhängig durchgeführt, beide Male positiv. P(krank)?
17. Drei Maschinen fertigen 50 %, 30 % und 20 % der Teile mit 1 %, 2 % und 3 % Ausschuss. (a) Wie groß ist der Ausschussanteil insgesamt? (b) Ein Teil ist in Ordnung — mit welcher Wahrscheinlichkeit kommt es von Maschine 1?

<details><summary>Lösungen</summary>

1. 26·25·24/26³ = **150/169 ≈ 0,888**.
2. C(8,4)/2⁸ = 70/256 = **35/128 ≈ 0,273**.
3. (C(4,2)+C(3,2)+C(2,2))/C(9,2) = (6+3+1)/36 = **5/18**.
4. C(4,1)·C(28,2)/C(32,3) = 1512/4960 = **189/620 ≈ 0,305** · 1 − C(28,3)/C(32,3) = 1 − 3276/4960 = **421/1240 ≈ 0,340**.
5. (a) je Wert eine von 4 Farben: 4⁴/C(32,4) = 256/35960 = **32/4495 ≈ 0,0071** · (b) C(12,4)/C(32,4) = 495/35960 = **99/7192 ≈ 0,0138**.
6. (a) mindestens eine 5: 1 − (5/6)⁴ = **671/1296 ≈ 0,518** · (b) alle ungerade (3⁴) und nicht „keine 5" (2⁴): (81−16)/1296 = **65/1296 ≈ 0,050**.
7. C(6,4)·C(43,2)/C(49,6) = 13 545/13 983 816 ≈ **0,00097**.
8. 6·5·4·3/6⁴ = **5/18** · 6/6⁴ = **1/216** · C(6,2)·C(4,2)/6⁴ = 90/1296 = **5/72**.
9. 13/52 · 12/51 · 11/50 = **11/850 ≈ 0,0129**.
10. 1 − 0,1·0,2·0,5 = **0,99** · 0,9·0,8·0,5 = **0,36**.
11. P(A)·P(B) = 0,2 = P(A∩B) → **unabhängig** · P(A∪B) = 0,5+0,4−0,2 = **0,7** · P(A|B) = 0,2/0,4 = **0,5** (= P(A), passt zur Unabhängigkeit).
12. P(Kopf) = (1/3)·(1/3 + 2/3 + 1) = 2/3 → **1/6, 1/3, 1/2** (Σ = 1 ✓).
13. 0,02·0,95/(0,02·0,95 + 0,98·0,10) = 0,019/0,117 = **0,162**.
14. 0,4·0,3/(0,4·0,3 + 0,6·0,02) = 0,12/0,132 = **10/11 ≈ 0,909**.
15. 0,5·0,6/(0,5·0,6 + 0,5·0,2) = 0,3/0,4 = **0,75**.
16. 0,01·0,99²/(0,01·0,99² + 0,99·0,05²) = 0,009801/0,012276 = **0,798**.
17. (a) 0,005 + 0,006 + 0,006 = **0,017** · (b) P(ok) = 0,983; P(M1 | ok) = 0,5·0,99/0,983 = **0,5036**.
</details>
