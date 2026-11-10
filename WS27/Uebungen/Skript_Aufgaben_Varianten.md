# 🎯 Skript-Aufgaben — der wahrscheinlichste Aufgabenpool

> **Warum diese Datei existiert:** Der Abgleich der Juli-Klausur mit dem Skript zeigt, dass die
> Klausuraufgaben Varianten der **Übungsaufgaben am Ende jedes Skript-Kapitels** waren:
>
> | Klausur 09.07.2026 | Skript-Aufgabe |
> |---|---|
> | Eis, 3 Kugeln aus 10 Sorten | 2.2.10 (Eisladen mit 10 Sorten) |
> | Siebformel | 2.5.1 / 2.5.2 |
> | Schützen mit festen Trefferquoten | 3.2.10, 3.4.2, 3.4.7 |
> | „Wie oft, damit mindestens …" | 3.4.5, 3.4.6 |
> | Jäger auf Hasen, E und Var | 3.3.12 (Hash-Belegung), 3.3.2 |
>
> Das Skript sagt es selbst vor jedem Aufgabenblock: *„Das sorgfältige Bearbeiten der nachfolgenden
> Aufgaben stellt eine wirkungsvolle Vorbereitung auf die Abschlussklausur dar."*
>
> **Arbeitsauftrag:** Jede Aufgabe der markierten Kapitel einmal selbst rechnen. Die meisten stecken
> bereits in den Drills (Verweis in Klammern) — hier stehen die übrigen, mit den Originalzahlen
> des Skripts (`../../SS26/VFHWUK.pdf`, Seitenangaben = PDF-Seiten „x / 457") und nachgerechneten Ergebnissen.
> Die Probeklausur W4 prüft dieselben Typen mit anderen Zahlen.

## Wo die Skript-Aufgaben schon stecken

| Skript-Abschnitt | Seiten | Abgedeckt in |
|---|---|---|
| 1.3.4 Binomialkoeffizienten | 49–51 | `Drill_Schubfach_Binomial_Mengen.md` Teil B |
| 2.2.6 Vier Grundaufgaben | 82–90 | `Drill_Vier_Grundaufgaben.md` |
| 2.3.4 Multimengen | 101–103 | `Drill_Schubfach_Binomial_Mengen.md` 10, 12–14 |
| 2.4.3 Schubfach | 108–110 | `Drill_Schubfach_Binomial_Mengen.md` Teil A |
| 2.5.5 Siebformel | 120–122 | `Drill_Siebformel.md`, T1 §8 |
| 3.2.6 Wahrscheinlichkeitsräume | 178–187 | `Drill_Bayes_Laplace.md` |
| 3.3.7 Diskrete Zufallsvariablen | 224–239 | T3 §10, `Drill_Verteilung_aufstellen.md` |
| 3.4.8 Wichtige Verteilungen | 263–272 | `Drill_Binomial_Ungleichung_Wettkampf.md` |
| 4.3.11 Symmetrische Verfahren | 379–382 | `Drill_RSA_Krypto.md` Teil C/D |
| 4.4.13 Asymmetrische Verfahren | 437–439 | `Drill_RSA_Krypto.md` Teil A |

---

## Block 1 — Kombinatorik (Woche 3)

1. *(2.2.1)* Jede(r) Studierende muss genau 4 von 7 Wahlpflichtfächern belegen. Die Hörerzahlen sind 11, 10, 10, 8, 5, 4, 2. Warum können sich nicht alle an die Regel gehalten haben?
2. *(2.2.4)* Auf wie viele Arten lassen sich 3 gleiche Türme auf ein 8×8-Brett stellen, sodass sich keine zwei schlagen können?
3. *(2.2.10 c)* 10 Eissorten. Zwei Waffeln mit je 4 verschiedenen Kugeln; die Waffeln dürfen gemeinsame Sorten haben, das Vertauschen der Waffeln zählt nicht neu. Wie viele Zusammenstellungen?
4. *(2.3.4 b)* Der König darf zusätzlich diagonal nach rechts oben ziehen. Wie viele Wege gibt es von Ecke zu Ecke auf dem 8×8-Brett? *(Ansatz reicht: Summe über die Anzahl i der Diagonalzüge.)*
5. *(2.5.2)* 60 % der Professoren spielen Tennis, 65 % Skat, 50 % Schach. Je zwei dieser Hobbys haben jeweils 45 % gemeinsam. Wie viele betreiben mindestens und höchstens alle drei?
6. *(2.5, Anwendung)* Wie viele Zahlen von 1 bis 200 sind teilerfremd zu 30?
7. *(2.4.4)* In einem gleichseitigen Dreieck der Kantenlänge 1 liegen 5 Punkte. Zeige, dass zwei davon höchstens den Abstand ½ haben.

## Block 2 — Wahrscheinlichkeit (Woche 5)

8. *(3.2.2)* k unterscheidbare Kugeln werden zufällig auf n Urnen verteilt (k ≤ n). P(in jeder Urne höchstens eine Kugel)?
9. *(3.2.5 a)* Lotto 6 aus 49: P(5 Richtige mit Zusatzzahl)?
10. *(3.2.11)* Mit welcher Wahrscheinlichkeit muss man mehr als dreimal würfeln, bis die erste Sechs fällt?
11. *(3.1.2.2, Ziegenproblem)* Drei Türen, hinter einer ein Auto. Du wählst eine, der Moderator öffnet eine andere mit Ziege. Wie groß ist die Gewinnwahrscheinlichkeit beim Wechseln?

## Block 3 — Zufallsvariablen (Woche 6)

12. *(3.3.10)* Gemeinsame Verteilung von X ∈ {1,2,3} und Y ∈ {0,1,2}:

    | | y=0 | y=1 | y=2 |
    |---|---|---|---|
    | x=1 | 1/16 | 1/8 | 1/16 |
    | x=2 | 1/8 | 1/4 | 1/8 |
    | x=3 | 1/16 | 1/8 | 1/16 |

    Randverteilungen, E und Var von X und Y, Unabhängigkeit?
13. *(3.3.11)* Kugeln mit den Nummern 1 bis n; k werden ohne Zurücklegen gezogen. Erwartungswert der Nummernsumme?
14. *(3.3.12)* n Datensätze werden zufällig auf n Speicherplätze verteilt. X = Anzahl der Plätze mit genau einem Datensatz. E[X]? Grenzwert von E[X]/n?
15. *(3.4.9, Bonus)* Zugriffe sind Poisson-verteilt, im Mittel 3 Zugriffe in 2 Sekunden. P(in einer Sekunde genau einer)? P(höchstens einer)? P(in 3 Sekunden keiner)?
16. *(3.4.10, Bonus)* 0,1 % der Bauelemente sind defekt. P(unter 150 kein defektes) — exakt und mit Poisson-Näherung.
17. *(3.5.1)* Dichte f(x) = C·(a−x) für 0 ≤ x ≤ a, sonst 0. Bestimme C, E[X] und die Standardabweichung.
18. *(3.5.2)* Dichte f(x) = C/√x für 0 < x ≤ a, sonst 0. Bestimme C und E[X].

## Block 4 — Kryptographie (Woche 9)

19. *(4.3.2)* Lässt sich statistisch unterscheiden, ob ein Geheimtext durch reine Substitution oder reine Transposition entstanden ist?
20. *(4.3.4 a)* Ein Verfahren bildet 4-Bit-Blöcke injektiv auf 4-Bit-Blöcke ab. Wie lang muss der Schlüssel sein, damit jede solche Abbildung realisierbar ist?
21. *(4.3.5)* One-Time-Pad mit „Schlüsselverkürzung": Der Schlüssel beginnt mit einem Schlüsselwort und wird dann mit dem Geheimtext fortgesetzt. Warum ist das unsicher?
22. *(4.4.1)* 94319 = p·q und φ(94319) = 93696. Bestimme p und q.

<details><summary>Lösungen</summary>

1. Abzählargument: Bei s Studierenden mit je 4 Fächern wäre die Summe der Hörerzahlen 4s, also durch 4 teilbar. 11+10+10+8+5+4+2 = **50** ist nicht durch 4 teilbar.
2. 3 Zeilen wählen C(8,3), 3 Spalten wählen C(8,3), Zuordnung 3! → 3!·C(8,3)² = 6·56² = **18 816**. Allgemein k!·C(n,k)².
3. Es gibt C(10,4) = 210 mögliche Waffeln. Gesucht sind ungeordnete Paare mit Wiederholung: C(210+2−1, 2) = C(211,2) = **22 155**. (Kombination mit Wiederholung, n = 210, k = 2!)
4. Bei i Diagonalzügen bleiben 7−i nach rechts und 7−i nach oben, zusammen 14−i Züge: (14−i)!/(i!·(7−i)!·(7−i)!). Summe über i = 0…7: **48 639**.
5. Auf 100 normieren. Siebformel: |A∩B∩C| = |A∪B∪C| − 175 + 135 = |A∪B∪C| − 40. Obergrenze: Dreierschnitt ≤ Paarschnitt = 45. Untergrenze: „nur Schach" = 50 − 45 − 45 + t ≥ 0 → t ≥ 40. Also **zwischen 40 % und 45 %**.
6. Nicht durch 2, 3 oder 5 teilbar: 200 − (100 + 66 + 40 − 33 − 20 − 13 + 6) = 200 − 146 = **54**.
7. Seitenmitten verbinden → 4 kleine gleichseitige Dreiecke mit Kantenlänge ½. 5 Punkte, 4 Fächer → zwei Punkte im selben Teildreieck, deren Abstand höchstens ½ ist. ∎
8. n·(n−1)·…·(n−k+1)/nᵏ = n!/((n−k)!·nᵏ). (Spezialfall n=26, k=3: 150/169.)
9. 5 der 6 Richtigen und die eine Zusatzzahl: C(6,5)·1/C(49,6) = 6/13 983 816 ≈ **4,29·10⁻⁷**.
10. Drei Würfe ohne Sechs: (5/6)³ = **125/216 ≈ 0,579**.
11. Die erste Wahl ist mit 1/3 richtig; in den übrigen 2/3 der Fälle führt der Wechsel zum Auto → **2/3**.
12. Zeilensummen: f_X = (1/4, 1/2, 1/4) · Spaltensummen: f_Y = (1/4, 1/2, 1/4). E[X] = 2, Var(X) = 1/2 · E[Y] = 1, Var(Y) = 1/2.
    Jede Zelle ist Produkt aus Zeilen- und Spaltensumme (z. B. 1/2·1/2 = 1/4, 1/4·1/4 = 1/16) → **unabhängig**.
13. Linearität: jede gezogene Kugel hat Erwartungswert (n+1)/2 → **k·(n+1)/2**.
14. Indikator je Platz: genau einer der n Datensätze landet dort: n·(1/n)·(1−1/n)ⁿ⁻¹ → **E[X] = n·(1−1/n)ⁿ⁻¹**, E[X]/n → **1/e ≈ 0,368**.
15. λ = 1,5 pro Sekunde: P(1) = 1,5·e^(−1,5) = **0,335** · P(≤1) = 2,5·e^(−1,5) = **0,558** · 3 Sekunden: λ = 4,5 → e^(−4,5) = **0,011**.
16. Exakt 0,999¹⁵⁰ = **0,8606** · Poisson λ = 150·0,001 = 0,15 → e^(−0,15) = **0,8607**.
17. C·a²/2 = 1 → **C = 2/a²** · E = (2/a²)·(a³/2 − a³/3) = **a/3** · E[X²] = a²/6 → Var = a²/6 − a²/9 = a²/18 → **σ = a/(3√2)**.
18. 2C√a = 1 → **C = 1/(2√a)** · E = C·(2/3)·a^(3/2) = **a/3**.
19. Ja: Bei Transposition bleiben die Buchstabenhäufigkeiten des Klartextes unverändert (E am häufigsten), bei Substitution gehört das Häufigkeitsprofil zu anderen Buchstaben.
20. Es gibt 16! ≈ 2,1·10¹³ Bijektionen; log₂(16!) ≈ 44,25 → **45 Bit**.
21. Der Geheimtext ist öffentlich — ab dem zweiten Abschnitt kennt der Angreifer also den Schlüsseltext und kann zurückrechnen; nur das kurze Schlüsselwort ist geheim.
22. p+q = 94319 − 93696 + 1 = 624 → x² − 624x + 94319 = 0 → x = 312 ± √(97344 − 94319) = 312 ± 55 → **257 und 367**.
</details>
