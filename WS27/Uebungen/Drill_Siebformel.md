# 🏋️ Drill: Siebformel (neu — kam SS26 dran!)

> Phase 1, Woche 4. Rezept: T1 §5. Immer hinschreiben: welche Mengen, welche Schnitte,
> dann Formel mit Vorzeichen. Bei Teilbarkeit: Schnitt = kgV.

1. Wie viele Zahlen von 1 bis 60 sind durch 4 oder 6 teilbar?
2. Wie viele Zahlen von 1 bis 1000 sind durch 2, 3 oder 5 teilbar? Wie viele durch keine der drei?
3. Von 100 Studierenden lernen 60 Englisch, 45 Französisch, 25 beides.
   (a) Wie viele lernen mindestens eine Sprache? (b) genau eine? (c) keine?
4. 4 Briefe werden zufällig auf 4 adressierte Umschläge verteilt.
   (a) Wie viele Verteilungen, bei denen kein Brief richtig steckt? (b) P(kein Brief richtig)?
5. Wie viele Wörter der Länge 2 über {a, b, c} enthalten mindestens ein „a"?
   (einmal per Siebformel/Gegenereignis, einmal direkt zählen)
6. P(A) = P(B) = P(C) = 0,5; P(A∩B) = P(A∩C) = P(B∩C) = 0,25; P(A∩B∩C) = 0,125.
   P(mindestens eines der drei Ereignisse)?
7. **Transfer:** 3 Jäger schießen je auf einen von n Hasen. Berechne P(„Hase Nr. 1 oder
   Hase Nr. 2 wird getroffen") mit der Siebformel. *(Brücke zur Klausuraufgabe!)*

<details><summary>Lösungen</summary>

1. kgV(4,6) = 12 → 15 + 10 − 5 = **20**.
2. 500 + 333 + 200 − 166 − 100 − 66 + 33 = **734** · keine: 1000 − 734 = **266**.
3. (a) 60 + 45 − 25 = **80** · (b) 80 − 25 = **55** · (c) 100 − 80 = **20**.
4. (a) D₄ = 4!·(1 − 1 + 1/2 − 1/6 + 1/24) = **9** · (b) 9/24 = **3/8**.
5. Gegenereignis: 3² − 2² = 9 − 4 = **5** · direkt: „a fest an Pos. 1" (3) + „a an Pos. 2" (3) − „aa" (1) = 5 ✓.
6. 3·0,5 − 3·0,25 + 0,125 = **0,875**.
7. A_i = „Hase i getroffen", P(A_i) = 1 − ((n−1)/n)³ · P(A₁∩A₂) = 1 − 2·((n−1)/n)³ + ((n−2)/n)³
   (Sieb über „1 nicht" ∪ „2 nicht") → P(A₁∪A₂) = P(A₁)+P(A₂)−P(A₁∩A₂) = 1 − ((n−2)/n)³.
   *(Eleganter direkt: „1 oder 2 getroffen" = 1 − „alle 3 Jäger meiden beide" = 1 − ((n−2)/n)³.)*
</details>
