# ✅ Lösung Probeklausur W1

> Alle Ergebnisse numerisch (Python) verifiziert. Aufbau je Aufgabe: **Erkennung → Weg → Punkte → typische Falle**.
> Zeitrichtwerte stehen in der Überschrift (Summe ≈ 105 min + 15 min Proben).

---

## Aufgabe 1 (10 P, ~8 min) — die vier Grundaufgaben

**Erkennung:** „Wie viele…", k = 5 aus n = 8 → Matrix: *Reihenfolge wichtig? Wiederholung erlaubt?*
Tüte = Reihenfolge egal · Protokoll Kunde 1, 2, … = Reihenfolge wichtig.

| | Frage 1: Reihenfolge | Frage 2: Wdh. | Formel | Ergebnis | P |
|---|---|---|---|---|---|
| (a) | egal | ja | C(n+k−1, k) = C(12,5) | **792** | 3 |
| (b) | egal | nein | C(8,5) | **56** | 2 |
| (c) | wichtig | ja | 8⁵ | **32 768** | 2 |
| (d) | wichtig | nein | 8·7·6·5·4 | **6 720** | 3 |

**Typische Falle:** (a) mit 8⁵ beantworten — genau der Eis-Fehler der SS26-Klausur. Kontrolle: (d) = (b)·5! = 56·120 = 6720 ✓.

---

## Aufgabe 2 (12 P, ~12 min) — Siebformel + Schubfach

**Erkennung:** „durch 2, 3 **oder** 7" = überlappende Mengen → Siebformel. Schnitte = Teilbarkeit durch das kgV.

**(a) [6 P]** ⌊300/t⌋:

| durch | 2 | 3 | 7 | 6 | 14 | 21 | 42 |
|---|---|---|---|---|---|---|---|
| Anzahl | 150 | 100 | 42 | 50 | 21 | 14 | 7 |

|A∪B∪C| = 150 + 100 + 42 − 50 − 21 − 14 + 7 = **214** (Einzelmengen 2 P, Schnitte 2 P, Formel+Ergebnis 2 P)

**(b) [2 P]** 300 − 214 = **86**

**(c) [2 P]** „genau eine" = Einzelne − 2·Paare + 3·Tripel = 292 − 2·85 + 3·7 = **143** → P = **143/300 ≈ 0,477**
(Warum? Ein Element in genau 2 Mengen wird in „Einzelne" 2× gezählt → 2× abziehen; in allen 3: 3 − 6 + 3 = 0 ✓.)

**(d) [2 P]** Schubfachprinzip: Fächer = die 7 möglichen Reste 0…6, Objekte = 8 Zahlen. 8 > 7 ⇒ ein Rest kommt mindestens zweimal vor. ∎

**Typische Falle:** ⌊300/7⌋ = 42 (nicht 43), ⌊300/42⌋ = 7. Bei (c) nur „Einzelne − Paare" rechnen.

---

## Aufgabe 3 (14 P, ~15 min) — Wettkampf zweier Binomialserien

**Erkennung:** Zwischenstand + zwei unabhängige Restserien + „gewinnt noch?" → Wettkampf-Schema (genau der Schützen-Typ der SS26-Klausur).

**(a) [5 P]** A hat noch 3 Würfe: **X ~ Bin(3; 0,7)**; B hat noch 2 Würfe: **Y ~ Bin(2; 0,5)**.

| k | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X=k) | 0,027 | 0,189 | 0,441 | 0,343 |
| P(Y=k) | 0,25 | 0,5 | 0,25 | – |

**(b) [6 P]** A gewinnt ⇔ 4 + X > 5 + Y ⇔ **X ≥ Y + 2**. Über die kürzere Serie (Y) summieren:

P = P(Y=0)·P(X≥2) + P(Y=1)·P(X=3) = 0,25·0,784 + 0,5·0,343 = 0,196 + 0,1715 = **0,3675**
(Y = 2 bräuchte X ≥ 4 — unmöglich.) Ungleichung 2 P, Summenansatz 2 P, Zahlen 2 P.

**(c) [3 P]** Unentschieden ⇔ X = Y + 1:
0,25·0,189 + 0,5·0,441 + 0,25·0,343 = 0,04725 + 0,2205 + 0,08575 = **0,3535**
(Kontrolle: P(B gewinnt) = 1 − 0,3675 − 0,3535 = 0,279.)

**Typische Falle:** mit allen 10 Würfen statt mit den **Rest**würfen rechnen; „>" und „≥" verwechseln (Gleichstand ist kein Sieg).

---

## Aufgabe 4 (10 P, ~10 min) — Mindest-n, Binomial, geometrisch

**Erkennung:** (a) „wie viele mindestens, damit P ≥ …" → Gegenereignis-Ungleichung · (b) feste Anzahl, Treffer/Niete → Binomial · (c) „erst im k-ten Versuch" → geometrisch.

**(a) [4 P]** 1 − 0,85ⁿ ≥ 0,9 ⇔ 0,85ⁿ ≤ 0,1 ⇔ n ≥ ln 0,1 / ln 0,85 = 14,17 (⚠️ ln 0,85 < 0 → Ungleichung dreht sich) → **n = 15**
Probe: n = 14: 0,897 (reicht nicht) · n = 15: 0,913 ✓

**(b) [4 P]** X ~ Bin(10; 0,15): P(X=2) = C(10,2)·0,15²·0,85⁸ = 45·0,0225·0,2725 = **0,2759**
E[X] = np = **1,5** · Var(X) = np(1−p) = **1,275**

**(c) [2 P]** 0,85³·0,15 = **0,0921**

**Typische Falle:** in (a) abrunden auf 14; Probe mit n−1 und n zeigt es sofort.

---

## Aufgabe 5 (16 P, ~18 min) — Verteilung selbst aufstellen

**Erkennung:** X hat keinen Standardnamen, „Akteure wählen zufällig Ziele" → Baukasten (Jäger/Hasen-Typ). |Ω| = n³.

**(a) [8 P]** X ∈ {1, 2, 3}.
- X = 1: alle drei dasselbe Restaurant: n Fälle → **P(X=1) = 1/n²**
- X = 3: alle verschieden: n(n−1)(n−2) Fälle → **P(X=3) = (n−1)(n−2)/n²**
- X = 2: zwei Restaurants wählen C(n,2), die 3 Gäste so verteilen, dass keins leer bleibt: 2³ − 2 = 6 → C(n,2)·6 = 3n(n−1) Fälle → **P(X=2) = 3(n−1)/n²**

**(b) [2 P]** [1 + 3(n−1) + (n−1)(n−2)]/n² = [1 + 3n − 3 + n² − 3n + 2]/n² = n²/n² = 1 ✓

**(c) [3 P]** E[X] = [1 + 6(n−1) + 3(n−1)(n−2)]/n² = **(3n² − 3n + 1)/n² = 3 − 3/n + 1/n²**
Kontrolle per Indikator-Trick: E[X] = n·(1 − ((n−1)/n)³) — gleicher Ausdruck ✓

**(d) [3 P]** n = 4: P = 1/16, 9/16, 6/16 (Fälle 4, 36, 24 von 64).
E[X] = (1 + 18 + 18)/16 = **37/16 = 2,3125** · E[X²] = (1 + 36 + 54)/16 = 91/16
Var(X) = 91/16 − (37/16)² = 1456/256 − 1369/256 = **87/256 ≈ 0,340**

**Typische Falle:** bei X = 2 nur C(n,2)·3 zählen (die Zuordnung „wer geht mit wem" vergessen) — der Σ=1-Check deckt das auf.

---

## Aufgabe 6 (12 P, ~10 min) — totale Wahrscheinlichkeit + Bayes

**Erkennung:** Anteil (Prior) + zwei bedingte Trefferquoten + „gegeben Wirkung, wie wahrscheinlich Ursache" → Bayes.

S = Spam, M = markiert: P(S) = 0,2 · P(M|S) = 0,95 · P(M|S̄) = 0,04.

**(a) [5 P]** Baum (2 P): S (0,2) → M 0,95 / M̄ 0,05 · S̄ (0,8) → M 0,04 / M̄ 0,96.
P(M) = 0,2·0,95 + 0,8·0,04 = 0,19 + 0,032 = **0,222**

**(b) [4 P]** P(S|M) = 0,19/0,222 = **0,8559** (= 95/111)

**(c) [3 P]** P(S|M̄) = 0,2·0,05/(1 − 0,222) = 0,01/0,778 = **0,0129**

**Typische Falle:** P(M|S) = 0,95 als Antwort auf (b) hinschreiben (Bedingung vertauscht).

---

## Aufgabe 7 (16 P, ~20 min) — RSA entschlüsseln

**Erkennung:** c gegeben → volle Kette n → p, q → φ → d → m.

**1) Faktorisieren bis √n [3 P]:** √391 ≈ 19,8 → testen 2, 3, 5, 7, 11, 13, **17**: 391 = **17 · 23** ✓

**2) φ [2 P]:** φ = 16 · 22 = **352** (ab hier Modul 352!)

**3) d = 235⁻¹ mod 352 per Tableau [5 P]:**

| Rest | x | y | q |
|---|---|---|---|
| 352 | 1 | 0 | |
| 235 | 0 | 1 | 1 |
| 117 | 1 | −1 | 2 |
| **1** | −2 | **3** | ← ggT = 1 |

Probe: −2·352 + 3·235 = −704 + 705 = 1 ✓ → **d = 3** (Probe: 235·3 = 705 = 2·352 + 1 ✓)

**4) m = c^d mod n = 118³ mod 391 [4 P]:**
118² = 13 924 = 35·391 + 239 → **239** · 239·118 = 28 202 = 72·391 + 50 → **m = 50**

**5) Endprobe [2 P]:** 50²³⁵ mod 391 = 118 ✓ (verifiziert; in der Klausur mindestens die Probe e·d mod φ = 1 hinschreiben).

**Typische Falle:** bei 13 aufhören zu teilen („391 ist prim") — exakt der SS26-Fehler. Oder d mod 391 statt mod 352 suchen.

---

## Aufgabe 8 (10 P, ~10 min) — affine Chiffre + Brute-Force

**Erkennung:** zwei Klartext-Geheimtext-Paare → 2 Gleichungen mod 26.

**(a) [6 P]** E=4 → F=5, N=13 → Q=16:
4a + b ≡ 5, 13a + b ≡ 16 → subtrahieren: **9a ≡ 11 (mod 26)**. ggT(9,26) = 1 ✓
9⁻¹ mod 26 per Tableau: 26|1|0 · 9|0|1 · (q=2) 8|1|−2 · (q=1) 1|−1|3 → **9⁻¹ = 3** (27 ≡ 1 ✓)
a ≡ 3·11 = 33 ≡ **7** · b ≡ 5 − 4·7 = −23 ≡ **3**
Gültig, da ggT(7,26) = 1. Probe: 7·4+3 = 31 ≡ 5 ✓ · 7·13+3 = 94 ≡ 16 ✓

**(b) [2 P]** x = a⁻¹·(y − b) mod 26 mit 7⁻¹ = 15 (105 = 4·26+1): K=10 → 15·(10−3) = 105 ≡ 1 → **B**

**(c) [2 P]** 10 Bit mehr ⇒ 2¹⁰ = 1024-mal so viele Schlüssel ⇒ **1024 Stunden** (≈ 42,7 Tage).

**Typische Falle:** A=1 statt A=0; Probe nur mit einem Paar.

---

## Notenschlüssel & Auswertung

| Punkte | ≥ 90 | 80–89 | 70–79 | 60–69 | 50–59 | < 50 |
|---|---|---|---|---|---|---|
| Note (Richtwert) | 1 | 2 | 3 | 3–4 | 4 (bestanden) | nicht bestanden |

**Ziel für W1:** ≥ 70 P. Danach den [Auswertungsbogen](Auswertungsbogen.md) ausfüllen — jede Aufgabe mit < 60 % der Punkte führt zurück ins Modul:
A1, A2 → T1 · A6 → T2 · A3, A4, A5 → T3 · A7, A8 → T4.
