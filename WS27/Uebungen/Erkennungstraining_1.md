# 🧭 Erkennungstraining 1 — Modell erkennen, NICHT rechnen

> **Die Übung, die SS26 gefehlt hat.** Für jede Aufgabe schreibst du nur 2 Zeilen:
> **(1) Modell/Aufgabentyp, (2) anzusetzende Formel** (mit eingesetzten Größen, ohne
> auszurechnen). Ziel: 20/20 in unter 15 Minuten. Erst Teil A (nach Phase 1–2 lösbar),
> Teil B ab Phase 3–4. **Bestanden ab 18/20** (→ Definition of Ready).

## Teil A

1. Ein Codeschloss hat 4 Stellen, jede aus 26 Buchstaben, Wiederholung erlaubt. Wie viele Codes?
2. Eine Eisdiele bietet 12 Sorten; du wählst 3 Kugeln, Reihenfolge egal, Sorten dürfen doppelt sein. Wie viele Bestellungen?
3. Wie viele Zahlen von 1 bis 500 sind durch 3 oder 7 teilbar?
4. Auf ein Regal kommen 8 Bücher, davon sind 3 identische Exemplare desselben Romans. Wie viele erkennbare Anordnungen?
5. Aus einer Lieferung von 20 Teilen (davon 6 defekt) werden 5 ohne Zurücklegen geprüft. P(genau 1 defekt)?
6. Eine Maschine produziert mit 2 % Ausschuss. Von 50 Teilen: P(höchstens 1 defekt)?
7. Ein Virenscanner erkennt 95 % der infizierten Dateien, meldet aber 2 % der sauberen fälschlich. 1 % der Dateien ist infiziert. P(infiziert | Alarm)?
8. Wie oft muss man würfeln, damit mit mindestens 90 % Wahrscheinlichkeit mindestens eine 6 fällt?
9. 3 Gäste nehmen beim Gehen zufällig je einen Mantel. Wie viele Verteilungen, bei denen niemand den eigenen erwischt?
10. 5 Personen steigen in einen Fahrstuhl mit 8 Stockwerken; jede wählt zufällig. P(alle verschieden)?
11. In einer WG mit 13 Bewohnern: Begründe, dass zwei im selben Monat Geburtstag haben.
12. Aus 15 Studierenden wird ein 3er-Team gebildet (keine Rollen). Wie viele Teams?

## Teil B

13. RSA mit φ = 40 und e = 7: Bestimme d.
14. 3 Torschützen schießen je auf eines von n Toren (zufällig, unabhängig, treffen immer). X = Anzahl getroffener Tore. Verteilung von X?
15. P(erster Treffer erst im 4. Versuch) bei p = 0,3?
16. A führt im Wettschießen 5:3. Beide haben noch 4 Schüsse (p_A = 0,5, p_B = 0,7). P(B gewinnt noch)?
17. Koeffizient von x⁴ in (1+x)⁹?
18. Zeige: 7 teilt a⁷ − a für jedes ganze a.
19. Von einer affinen Chiffre kennt man zwei Klartext-Geheimtext-Buchstabenpaare. Bestimme a und b.
20. Dichte f(x) = C·x auf [0,4], sonst 0. Bestimme C und E[X].

---

<details><summary>Lösungen (nur Modell + Ansatz — genau so viel musst du liefern)</summary>

1. **Variation mit Wdh.** → 26⁴
2. **Kombination mit Wdh.** (Reihenfolge egal + Wdh!) → C(12+3−1, 3) = C(14,3)
3. **Siebformel** → ⌊500/3⌋ + ⌊500/7⌋ − ⌊500/21⌋
4. **Multimengen-Permutation** → 8!/3!
5. **Hypergeometrisch** (ohne Zurücklegen!) → C(6,1)·C(14,4)/C(20,5)
6. **Binomial** → P(X=0) + P(X=1) mit n=50, p=0,02
7. **Bayes** → 0,95·0,01/(0,95·0,01 + 0,02·0,99)
8. **Mindest-n-Ungleichung** → (5/6)ⁿ ≤ 0,1 → n ≥ ln 0,1/ln(5/6) (aufrunden)
9. **Derangement (Siebformel)** → D₃ = 3!·(1 − 1 + 1/2 − 1/6) = 2
10. **Laplace, Fahrstuhl-Muster** → 8·7·6·5·4/8⁵
11. **Schubfachprinzip** → 13 Objekte, 12 Fächer
12. **Kombination ohne Wdh.** → C(15,3)
13. **Inverse mod φ, Euklid-Tableau** → d = 7⁻¹ mod 40 (= 23)
14. **Verteilung aufstellen (Baukasten)** → Ω = n³; P(X=1)=1/n², P(X=2)=3(n−1)/n², P(X=3)=(n−1)(n−2)/n²
15. **Geometrische Verteilung** → 0,7³·0,3
16. **Wettkampf (2 Binomials)** → X~Bin(4; 0,5), Y~Bin(4; 0,7); P(3+Y > 5+X) = Σₓ P(X=x)·P(Y ≥ x+3)
17. **Binomischer Lehrsatz** → C(9,4)
18. **Kleiner Fermat** → a⁷ ≡ a (mod 7)
19. **Affine Chiffre** → 2 Gleichungen a·xᵢ+b ≡ yᵢ (mod 26), subtrahieren, ggT-Check, Inverse
20. **Stetige ZV** → ∫₀⁴ Cx dx = 1 → C = 1/8; E[X] = ∫₀⁴ x·x/8 dx = 8/3
</details>

**Auswertung:** < 18 richtig → für jede falsch klassifizierte Aufgabe das zugehörige
Themen-Modul (T1–T4) aufschlagen und 2 Aufgaben desselben Typs nachrechnen.
