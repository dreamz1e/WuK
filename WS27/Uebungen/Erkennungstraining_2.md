# 🧭 Erkennungstraining 2 — Kombinatorik und Wahrscheinlichkeit (Ende Woche 5)

> Wie Training 1: pro Aufgabe **nur zwei Zeilen** — (1) Modell, (2) Ansatz mit eingesetzten Zahlen.
> Nicht ausrechnen. Ziel: unter 15 Minuten, **≥ 16/20**. Diesmal sind die Paare bewusst so gebaut,
> dass sich benachbarte Aufgaben nur in einem Wort unterscheiden — genau dieses Wort entscheidet.

1. Ein Blumenladen führt 8 Sorten. Wie viele Sträuße aus 5 Blumen gibt es, wenn Sorten mehrfach vorkommen dürfen?
2. Derselbe Laden: Wie viele Sträuße aus 5 Blumen mit lauter verschiedenen Sorten?
3. Derselbe Laden: 5 Blumen werden nacheinander in eine Reihe von 5 Vasen gestellt, Sorten dürfen mehrfach vorkommen. Wie viele Reihen?
4. 8 Läufer, wie viele mögliche Belegungen der Plätze 1 bis 3?
5. Wie viele Zahlen zwischen 1 und 400 sind durch 6 oder 10 teilbar?
6. Wie viele Zahlen zwischen 1 und 400 sind weder durch 6 noch durch 10 teilbar?
7. Von 60 Befragten lesen 35 Zeitung A, 28 Zeitung B und 9 keine von beiden. Wie viele lesen beide?
8. Wie viele Anordnungen der Buchstaben von STATISTIK gibt es?
9. In einer Schublade liegen Handschuhe in 6 Farben. Wie viele muss man im Dunkeln greifen, um sicher 3 gleichfarbige zu haben?
10. Bei einem Turnier spielt jeder gegen jeden genau einmal, es finden 66 Spiele statt. Wie viele Teilnehmer?
11. 5 Briefe werden zufällig in 5 adressierte Umschläge gesteckt. Wie viele Möglichkeiten, bei denen kein Brief richtig liegt?
12. Koeffizient von x⁵ in (3 + x)⁸?
13. Ein Kartenspiel hat 32 Karten, darunter 4 Asse. Man zieht 5 Karten. P(genau 2 Asse)?
14. Man zieht 5-mal mit Zurücklegen eine Karte aus dem Spiel. P(genau 2 Asse)?
15. Zwei Würfel werden geworfen. P(Augensumme mindestens 10)?
16. Fünf Gäste hängen ihre Jacken an 9 Haken, jeder wählt zufällig einen Haken (Mehrfachbelegung möglich). P(alle Jacken an verschiedenen Haken)?
17. 30 % der Kunden kaufen online. Von den Online-Käufern reklamieren 8 %, von den übrigen 3 %. Ein Kunde reklamiert. P(er hat online gekauft)?
18. Derselbe Händler: Wie groß ist der Anteil der Reklamationen insgesamt?
19. Zwei Alarmanlagen lösen unabhängig mit 0,9 und 0,7 aus. P(mindestens eine löst aus)?
20. Aus einer Urne mit 6 roten und 4 blauen Kugeln zieht man nacheinander ohne Zurücklegen zwei Kugeln. P(erste rot und zweite blau)?

<details><summary>Lösungen (Modell + Ansatz)</summary>

1. **Kombination mit Wdh.** (Reihenfolge egal, Wdh. ja) → C(8+5−1, 5) = C(12,5)
2. **Kombination ohne Wdh.** → C(8,5)
3. **Variation mit Wdh.** (Reihenfolge zählt) → 8⁵
4. **Variation ohne Wdh.** → 8·7·6
5. **Siebformel, 2 Mengen** → ⌊400/6⌋ + ⌊400/10⌋ − ⌊400/30⌋ (kgV(6,10) = 30, nicht 60!)
6. **Siebformel + Komplement** → 400 − (Ergebnis von 5)
7. **Siebformel rückwärts** → |A∪B| = 60 − 9 = 51 → |A∩B| = 35 + 28 − 51
8. **Multimengen-Permutation** (S 2, T 3, I 2, A 1, K 1) → 9!/(2!·3!·2!)
9. **Schubfachprinzip** → (3−1)·6 + 1
10. **„Jeder gegen jeden" = C(n,2)** → n(n−1)/2 = 66
11. **Derangement (Siebformel)** → D₅ = 5!·(1 − 1 + 1/2 − 1/6 + 1/24 − 1/120)
12. **Binomischer Lehrsatz** → C(8,5)·3³
13. **Hypergeometrisch** (ohne Zurücklegen) → C(4,2)·C(28,3)/C(32,5)
14. **Binomial** (mit Zurücklegen, p = 1/8) → C(5,2)·(1/8)²·(7/8)³
15. **Laplace, abzählen** → günstige Paare (4,6),(5,5),(6,4),(5,6),(6,5),(6,6) → 6/36
16. **Laplace, Belegungsmodell „alle verschieden"** → 9·8·7·6·5/9⁵
17. **Bayes** → 0,3·0,08/(0,3·0,08 + 0,7·0,03)
18. **Totale Wahrscheinlichkeit** → 0,3·0,08 + 0,7·0,03
19. **Unabhängige Ereignisse, „mindestens eines" = Gegenereignis** → 1 − 0,1·0,3
20. **Multiplikationssatz** → 6/10 · 4/9
</details>

**Auswertung:** Jede falsch klassifizierte Aufgabe in die Fehlerliste — mit dem Wort, das du
überlesen hast („mehrfach", „nacheinander", „ohne Zurücklegen", „reklamiert" …).
