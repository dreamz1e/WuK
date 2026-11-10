# ✅ Lösung Probeklausur W3

> Alle Ergebnisse numerisch (Python) verifiziert. Aufbau je Aufgabe: **Erkennung → Weg → Punkte → typische Falle**.

---

## Aufgabe 1 (12 P, ~10 min) — Kombination ohne Wiederholung mit Bedingungen

**Erkennung:** Auswahl, Reihenfolge egal, keine Wiederholung → C(n,k); Bedingungen → Gruppen getrennt wählen und multiplizieren.

**(a) [2 P]** C(10,6) = **210**
**(b) [3 P]** 2 fest, noch 4 aus 8: C(8,4) = **70**
**(c) [3 P]** C(5,3)·C(5,3) = 10·10 = **100**
**(d) [4 P]** genau 4 + genau 5: C(5,4)·C(5,2) + C(5,5)·C(5,1) = 50 + 5 = **55**

**Typische Falle:** in (d) „mindestens" nicht in Fälle zerlegen; in (c) die zweite Gruppe vergessen (die restlichen 3 Fragen kommen aus den **letzten** 5).

---

## Aufgabe 2 (10 P, ~10 min) — Binomischer Lehrsatz, Teilmengen, Kombination mit Wdh., Mengen

**(a) [3 P]** *Erkennung: binomischer Lehrsatz.* Term mit x³: C(5,3)·(2x)³·1² = 10·8·x³ → **80**
**(b) [2 P]** 2⁶ = **64** Teilmengen; gerade Elementzahl: C(6,0)+C(6,2)+C(6,4)+C(6,6) = 1+15+15+1 = **32** (stets die Hälfte)
**(c) [3 P]** *Erkennung: Reihenfolge egal + Wiederholung → Kombination mit Zurücklegen.* C(6+4−1, 4) = C(9,4) = **126**
**(d) [2 P]** A = {2,4,6,8,10}, B = {3,6,9} → A ∩ B = **{6}** · A ∪ B = **{2,3,4,6,8,9,10}** · Komplement = **{1,5,7}**
(Kontrolle Siebformel: 5 + 3 − 1 = 7 ✓)

**Typische Falle:** (a) den Faktor 2³ vergessen (Antwort 10); (c) mit 6⁴ rechnen.

---

## Aufgabe 3 (14 P, ~14 min) — Laplace, Fahrstuhl-Modell

**Erkennung:** n = 4 Akteure wählen je eines von k = 5 Zielen → |Ω| = 5⁴ = **625**, Laplace.

**(a) [3 P]** 5/625 = **1/125 = 0,008**
**(b) [3 P]** 5·4·3·2/625 = 120/625 = **24/125 = 0,192**
**(c) [3 P]** A beliebig, B muss dasselbe wählen: **1/5** (= 125/625)
**(d) [5 P]** 2 Stockwerke wählen: C(5,2) = 10; 4 Personen in zwei Zweiergruppen auf diese (unterscheidbaren) Stockwerke: C(4,2) = 6 → 60/625 = **12/125 = 0,096**

**Typische Falle:** in (d) zusätzlich durch 2 teilen (die beiden Stockwerke sind verschieden — kein Doppeltzählen) oder C(4,2) vergessen.

---

## Aufgabe 4 (12 P, ~12 min) — Binomialverteilung + Mindest-n

**Erkennung:** feste Anzahl unabhängiger Versuche, p = 1/4 konstant → X ~ Bin(8; 0,25).

**(a) [3 P]** C(8,2)·0,25²·0,75⁶ = 28·0,0625·0,17798 = **0,3115**
**(b) [3 P]** 1 − P(0) − P(1) = 1 − 0,75⁸ − 8·0,25·0,75⁷ = 1 − 0,1001 − 0,2670 = **0,6329**
**(c) [3 P]** E = np = **2** · Var = np(1−p) = **1,5** · σ = √1,5 ≈ **1,225**
**(d) [3 P]** 1 − 0,75ⁿ ≥ 0,95 ⇔ 0,75ⁿ ≤ 0,05 ⇔ n ≥ ln 0,05/ln 0,75 = 10,41 → **n = 11**
Probe: n = 10: 0,9437 ✗ · n = 11: 0,9578 ✓

**Typische Falle:** (b) direkt von 2 bis 8 summieren (7 Terme statt 2) — Gegenereignis!

---

## Aufgabe 5 (12 P, ~10 min) — totale Wahrscheinlichkeit + Bayes

**Erkennung:** Anteile der Ursachen + bedingte Fehlerquoten, Frage „gegeben Wirkung → Ursache".

**(a) [4 P]** P(D) = 0,6·0,03 + 0,4·0,05 = 0,018 + 0,020 = **0,038**
**(b) [4 P]** P(B|D) = 0,020/0,038 = **10/19 ≈ 0,5263**
**(c) [4 P]** P(A|D̄) = 0,6·0,97/(1 − 0,038) = 0,582/0,962 = **0,6050**

**Typische Falle:** in (c) mit 0,03 statt 0,97 rechnen; Baum zeichnen verhindert das.

---

## Aufgabe 6 (14 P, ~14 min) — E/Var diskret und stetig

**Erkennung:** Verteilung/Dichte gegeben → stur die Definitionen; diskret Σ, stetig ∫.

**(a) [7 P]**
E[X] = 0·0,1 + 1·0,3 + 2·0,4 + 3·0,2 = **1,7**
E[X²] = 0,3 + 1,6 + 1,8 = 3,7 → Var(X) = 3,7 − 1,7² = **0,81** · σ = **0,9**
P(1 ≤ X < 3) = 0,3 + 0,4 = **0,7**
E[2X+3] = 2·1,7 + 3 = **6,4** · Var(2X+3) = 4·0,81 = **3,24**

**(b) [7 P]**
∫₀² C·y dy = C·2 = 1 → **C = 1/2**
E[Y] = ∫₀² y·(y/2) dy = (1/2)·(8/3) = **4/3**
E[Y²] = ∫₀² y²·(y/2) dy = (1/2)·4 = 2 → Var(Y) = 2 − 16/9 = **2/9 ≈ 0,222**
P(Y > 1) = ∫₁² y/2 dy = (4 − 1)/4 = **3/4**

**Typische Falle:** Var(2X+3) = 2·Var + 3 (richtig: a²·Var, die Konstante fällt weg); bei (a) „< 3" als „≤ 3" lesen.

---

## Aufgabe 7 (10 P, ~12 min) — Zahlentheorie-Werkzeuge, Caesar

**(a) [3 P]** Tableau (60, 19): 60|1|0 · 19|0|1 · (q=3) 3|1|−3 · (q=6) **1|−6|19** → 19⁻¹ ≡ **19** (mod 60). Probe: 19·19 = 361 = 6·60 + 1 ✓
**(b) [2 P]** 13 prim → Fermat: 2¹² ≡ 1. 100 = 8·12 + 4 → 2¹⁰⁰ ≡ 2⁴ = 16 ≡ **3** (mod 13)
**(c) [1 P]** 13 prim → kleiner Fermat: a¹³ ≡ a (mod 13) ⇒ a¹³ − a ≡ 0 ⇒ 13 | a¹³ − a. ∎
**(d) [2 P]** φ(45) = φ(9)·φ(5) = 6·4 = **24** · φ(49) = 7·6 = **42** · φ(77) = 6·10 = **60**
**(e) [2 P]** Häufigster deutscher Buchstabe ist E (4); H = 7 → **k = 3**. Jeden Buchstaben um 3 zurück: N→K, O→L, D→A, X→U, V→S, X→U, U→R → **KLAUSUR**

**Typische Falle:** φ(49) = 6² = 36 (richtig: p·(p−1)); φ(45) = 44.

---

## Aufgabe 8 (16 P, ~20 min) — RSA

**Erkennung:** c gegeben → n faktorisieren → φ → d (Tableau) → m (Quadrier-Kette) → Proben.

**(a) [12 P]**
1) √143 ≈ 11,96 → 143 = **11 · 13** [2 P]
2) φ = 10·12 = **120** [1 P]
3) d = 103⁻¹ mod 120 [4 P]:

| Rest | x | y | q |
|---|---|---|---|
| 120 | 1 | 0 | |
| 103 | 0 | 1 | 1 |
| 17 | 1 | −1 | 6 |
| **1** | −6 | **7** | ← ggT = 1 |

Probe: −720 + 721 = 1 ✓ → **d = 7** (103·7 = 721 = 6·120 + 1 ✓)
4) m = 125⁷ mod 143, 7 = 4 + 2 + 1 [4 P]:
125² = 15 625 ≡ **38** · 125⁴ ≡ 38² = 1444 ≡ **14** · 125⁶ ≡ 14·38 = 532 ≡ 103 · 125⁷ ≡ 103·125 = 12 875 = 90·143 + 5 → **m = 5**
(Tipp: 125 ≡ −18 (mod 143) macht die Zahlen kleiner.)
5) Endprobe: 5¹⁰³ mod 143 = 125 ✓ (verifiziert) [1 P]

**(b) [2 P]** ggT(9, 120) = 3 ≠ 1 → 9 hat kein Inverses mod φ, es gäbe keinen geheimen Schlüssel d.

**(c) [2 P]** e·d = 1 + k·φ(n), also cᵈ = m^(ed) = m·(m^φ(n))ᵏ ≡ m·1ᵏ = m (mod n) nach dem Satz von Euler.

**Typische Falle:** d mod 143 statt mod 120 bestimmen; bei der Quadrier-Kette einen Rest falsch und alles Folgende wertlos — jeden Rest mit dem TR gegenprüfen.

---

## Notenschlüssel & Auswertung

| Punkte | ≥ 90 | 80–89 | 70–79 | 60–69 | 50–59 | < 50 |
|---|---|---|---|---|---|---|
| Note (Richtwert) | 1 | 2 | 3 | 3–4 | 4 (bestanden) | nicht bestanden |

**Ziel für W3:** ohne Spicker ≥ 60 P, mit Spicker ≥ 80 P. Rückverweise: A1, A2 → T1 · A3, A5 → T2 · A4, A6 → T3 · A7, A8 → T4.
**Jede Formel, die dir ohne Spicker gefehlt hat, kommt auf den Spicker — aber erst nachdem du sie einmal aus dem Kopf hingeschrieben hast.**
