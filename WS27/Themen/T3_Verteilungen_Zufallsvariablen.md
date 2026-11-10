# T3 — Zufallsvariablen & Verteilungen (Wochen 6–7) ⭐ Schwerpunkt

> Skript: Kap. 3.3–3.5 (S. 187–312). **Der Block, der die SS26-Klausur entschieden hat:**
> 2 von 3 Verteilungsaufgaben (Jäger, Schützen-Vergleich) waren nicht vorbereitet.
> Kernidee: **Nicht Verteilungen auswendig — Verteilungen BAUEN können.**

---

## 1. Zufallsvariable, E und Var — die Definitionen sind das Werkzeug

X ordnet jedem Ergebnis eine Zahl zu. Die **Verteilung** ist die Tabelle/Formel aller
P(X=k).

$$E[X] = \sum_k k\cdot P(X{=}k) \qquad E[X^2] = \sum_k k^2\cdot P(X{=}k)$$
$$\operatorname{Var}(X) = E[X^2] - (E[X])^2 \qquad \sigma = \sqrt{\operatorname{Var}(X)}$$

Rechenregeln: **E[aX+b] = a·E[X]+b** · **Var(aX+b) = a²·Var(X)** ·
**E[X+Y] = E[X]+E[Y] (immer!)** · Var(X+Y) = Var(X)+Var(Y) nur bei Unabhängigkeit.

## 2. ⭐⭐ Verteilung selbst aufstellen — das 5-Schritte-Schema

Für jede Aufgabe „Bestimmen Sie die Verteilung von X / berechnen Sie E und Var",
bei der keine Standardverteilung genannt ist:

1. **Grundraum:** Was passiert zufällig? |Ω| bestimmen (oft: Möglichkeiten^Akteure).
2. **Werte:** Welche Werte kann X annehmen? (X ∈ {…})
3. **Zählen:** Für jeden Wert die günstigen Fälle abzählen (Kombinatorik aus T1!)
   → P(X=k) = günstige/|Ω|.
4. **Pflicht-Kontrolle: Σₖ P(X=k) = 1.** Findet fast jeden Zählfehler sofort.
5. **E, E[X²], Var** stur nach Definition (Tabelle machen: k | P | k·P | k²·P).

### Durchgerechnet: die Jäger-Aufgabe der SS26-Klausur

3 Jäger schießen je auf einen zufällig gewählten von n Hasen (unabhängig, jeder trifft).
X = Anzahl getroffener Hasen.

1. |Ω| = n³ (jeder Jäger wählt eines von n Zielen).
2. X ∈ {1, 2, 3}.
3. Zählen:
   - X=1: alle wählen denselben → n Fälle → **P = 1/n²**
   - X=3: alle verschieden → n(n−1)(n−2) → **P = (n−1)(n−2)/n²**
   - X=2: 2 Hasen wählen C(n,2), 3 Jäger surjektiv auf 2 verteilen (2³−2=6) →
     **P = 3(n−1)/n²**
4. Σ = [1 + 3(n−1) + (n−1)(n−2)]/n² = n²/n² = 1 ✓
5. **E[X] = (3n²−3n+1)/n² = 3 − 3/n + 1/n²** ·
   E[X²] = (9n²−15n+7)/n² · **Var = (n−1)(3n²−5n+1)/n⁴**
   (Kontrolle n=3: E = 19/9, Var = 26/81 — numerisch verifiziert.)

**Verwandte Muster** (gleiches Schema): Min/Max von Würfeln
(P(Max ≤ k) = (k/6)ⁿ → P(Max=k) = (kⁿ−(k−1)ⁿ)/6ⁿ), Anzahl belegter Fächer,
Augensumme, Anzahl Fixpunkte.

## 3. ⭐ Der Indikator-Trick — E[X] ohne Verteilung

Wenn X „zählt", schreibe X = I₁ + … + Iₘ mit Indikatoren Iᵢ ∈ {0,1}. Dann:

$$E[X] = \sum_i P(I_i = 1)$$

**Gilt immer** (Linearität braucht keine Unabhängigkeit!). Jäger-Beispiel als Kontrolle:
P(Hase i getroffen) = 1 − ((n−1)/n)³ → E[X] = n·(1 − ((n−1)/n)³) — gleicher Wert wie oben.
In der Klausur: Schema §2 für die Verteilung, Indikator-Trick als **schnelle Probe für E**
(oder als Rettung, wenn die Verteilung nicht gelingt — Teilpunkte!).

## 4. Binomialverteilung — inkl. Herleitung

n unabhängige Versuche, Trefferwahrscheinlichkeit p, X = Trefferzahl:

$$P(X{=}k) = \binom{n}{k} p^k (1-p)^{n-k} \qquad E = np \qquad \operatorname{Var} = np(1-p)$$

**Herleitung (1× können):** eine feste Sequenz mit k Treffern hat P = pᵏ(1−p)ⁿ⁻ᵏ;
es gibt C(n,k) Positionen für die Treffer. E über Indikatoren: X = ΣIᵢ, E = n·p. ∎

**Erkennung:** feste Anzahl Versuche + unabhängig + „Treffer oder nicht" + p konstant.
(Ohne Zurücklegen? → hypergeometrisch §6. „Bis zum ersten Treffer"? → geometrisch §7.)

### 4b ⭐ Mindest-n-Ungleichungen (SS26: Schützen, 95,5 %)

„Wie viele Versuche, damit mit W. ≥ s mindestens 1 Treffer?"

$$1-(1-p)^n \ge s \iff (1-p)^n \le 1-s \iff n \ge \frac{\ln(1-s)}{\ln(1-p)}$$

⚠️ ln(1−p) ist **negativ** → beim Dividieren dreht sich die Ungleichung. Ergebnis aufrunden,
**Probe mit n−1 und n**.
- SS26: p = 0,2, s = 0,955 → n ≥ ln 0,045/ln 0,8 = 13,90 → **14** (0,8¹⁴: 1−0,956 ✓).
- Variante: p = 0,5, s = 0,99 → n ≥ ln 0,01/ln 0,5 = 6,64 → **7**.
- Auch für „mindestens k Treffer": P(X ≤ k−1) ≤ 1−s aufstellen und n probieren (Tabelle).

### 4c ⭐ Wettkampf: Vergleich zweier Binomialserien (SS26: Schützen)

Gegeben Zwischenstand, gesucht P(A gewinnt am Ende):
1. **Restserien** definieren: X ~ Bin(n_A, p_A), Y ~ Bin(n_B, p_B) — nur die **verbleibenden** Versuche!
2. Gewinnbedingung als Ungleichung: Stand_A + X > Stand_B + Y ⟺ **X ≥ Y + Δ**.
3. Bedingen auf die kürzere Serie:
   $$P(A) = \sum_{y=0}^{n_B} P(Y{=}y)\cdot P(X \ge y+\Delta)$$
4. „Unentschieden" ggf. separat ausweisen.

SS26-Zahlen (Annahme je 20 Schuss gesamt): X ~ Bin(10; 0,4), Y ~ Bin(5; 0,2), Δ = 3
→ P ≈ 0,61. **Der saubere Ansatz (Schritte 1–3 hingeschrieben) ist der Großteil der Punkte.**

## 5. Benannte Verteilungen im Überblick

| Verteilung | Situation | P(X=k) | E | Var |
|---|---|---|---|---|
| Gleichvert. | m gleichwahrsch. Werte | 1/m | (min+max)/2 | (m²−1)/12 |
| Bernoulli | 1 Versuch | p bzw. 1−p | p | p(1−p) |
| **Binomial** | n Versuche **mit** konst. p | C(n,k)pᵏ(1−p)ⁿ⁻ᵏ | np | np(1−p) |
| **Hypergeom.** | m Züge **ohne** Zurücklegen (N, davon r gut) | C(r,k)C(N−r,m−k)/C(N,m) | m·r/N | — (nicht nötig) |
| Geometrisch | Versuche **bis** 1. Treffer | (1−p)ᵏ⁻¹p | 1/p | (1−p)/p² |

## 6. Hypergeometrisch — die Urne mit Namen

**Beispiel (verifiziert):** 10 Kugeln, 4 rot; 3 ziehen ohne Zurücklegen, X = rote.
P(X=0)=1/6 · P(X=1)=1/2 · P(X=2)=3/10 · P(X=3)=1/30 (Σ=1 ✓) · E = 3·4/10 = 1,2.
**Abgrenzung zu Binomial:** ohne Zurücklegen ⇒ p ändert sich ⇒ hypergeometrisch.
Faustregel Klausurtext: „Stichprobe/Lieferung/Karten ziehen" = ohne Zurücklegen.

## 7. Geometrische Verteilung (klein)

„Erster Erfolg im k-ten Versuch": P(X=k) = (1−p)ᵏ⁻¹·p, E = 1/p.
Beispiel: erste 6 im 3. Wurf: (5/6)²·(1/6) = 25/216. „Erster Erfolg **nach spätestens** n
Versuchen" = 1−(1−p)ⁿ → Brücke zu §4b.

## 8. Stetige Zufallsvariablen

Dichte f(x) ≥ 0 mit ∫f = 1. Dann:
$$P(a<X<b)=\int_a^b f \qquad E[X]=\int x f(x)\,dx \qquad E[X^2]=\int x^2 f(x)\,dx$$

**Standard-Klausuraufgabe (verifiziert):** f(x) = C·x² auf [0,2], sonst 0.
1. C: ∫₀² Cx² dx = C·8/3 = 1 → **C = 3/8**.
2. E[X] = (3/8)·∫₀²x³ = (3/8)·4 = **3/2**.
3. E[X²] = (3/8)·∫₀²x⁴ = (3/8)·(32/5) = **12/5** → Var = 12/5 − 9/4 = **3/20 = 0,15**.
4. P(1<X<2) = (3/8)·(8−1)/3 = 7/8.

Gleichverteilung auf [a,b]: f = 1/(b−a), E = (a+b)/2, Var = (b−a)²/12.

## 9. Mini-Drill (Antworten unten)

1. 2 Würfel, X = Anzahl Sechsen: Verteilung, E, Var.
2. 2 Jäger, n Hasen (wie oben): Verteilung von X, E[X] — komplett nach Schema §2.
3. Server fällt pro Tag mit p = 0,1 aus (unabhängig). Wie viele Tage, bis mit ≥ 99 % mind. 1 Ausfall beobachtet wurde?
4. A braucht noch 2 Punkte, B noch 1; jede Runde gewinnt A mit 0,6, B mit 0,4 (kein Remis). P(A gewinnt das Match)? *(Tipp: höchstens 2 Runden nötig — Baum reicht.)*
5. f(x) = C·x auf [0,3]: C, E[X], P(X>2)?

<details><summary>Lösungen</summary>

1. Bin(2, 1/6): P = 25/36, 10/36, 1/36 · E = 1/3 · Var = 2·(1/6)(5/6) = 5/18.
2. |Ω| = n² · X∈{1,2}: P(X=1) = n/n² = 1/n, P(X=2) = (n−1)/n (Σ=1 ✓) · E = 2 − 1/n.
3. 0,9ⁿ ≤ 0,01 → n ≥ ln 0,01/ln 0,9 = 43,7 → 44 Tage.
4. A muss 2× in Folge gewinnen, bevor B 1× gewinnt: nur Pfad „A, A" = 0,6² = 0,36.
5. C·9/2 = 1 → C = 2/9 · E = (2/9)·∫₀³x² = (2/9)·9 = 2 · P(X>2) = (2/9)·(9−4)/2 = 5/9.
</details>

---

# Ergänzungen November 2026

## 10. Skript-Typen rund um Zufallsvariablen (alle nachgerechnet)

**Verteilung als Tabelle gegeben** (Skript 3.3.1): Werte 0,1,2,3 mit P = 0, 1/4, 1/2, 1/4.
E = 2 · E[X²] = 4,5 → Var = 1/2 · σ ≈ 0,707 · P(1 ≤ X < 3) = 1/4 + 1/2 = 3/4.
**Verteilungsfunktion** F(x) = P(X ≤ x): F = 0 für x < 1, 1/4 für 1 ≤ x < 2, 3/4 für 2 ≤ x < 3, 1 ab x ≥ 3.

**Maximum zweier Würfel** (3.3.2): P(Max = k) = (2k−1)/36 · E = 161/36 ≈ 4,47 · Var = 2555/1296 ≈ 1,97.

**Summe zweier Zahlen aus {1,2,3} mit Wiederholung** (3.3.5): P = 1/9, 2/9, 3/9, 2/9, 1/9 für 2..6 · E = 4 · Var = 4/3.

**Gezinkte Münze p = 3/4, drei Würfe** (3.3.6): Bin(3; 3/4) → 1/64, 9/64, 27/64, 27/64 · E = 9/4 · Var = 9/16.

**Match mit Abbruchregel** (3.3.7, Tischtennis): Match endet bei 2 Sätzen in Folge oder 3 Sätzen insgesamt, p = 1/2.
Baum zeichnen, Pfadlängen sammeln: P(X=2) = 1/2, P(X=3) = 1/4, P(X=4) = 1/8, P(X=5) = 1/8 (Σ = 1 ✓) · E = 23/8.
*Methode:* Bei „Spiel bis …" ist immer der Baum das Werkzeug, X ist die Pfadlänge.

**Lineare Suche** (3.3.8): Position gleichverteilt auf 1..n → P(X=k) = 1/n · E = (n+1)/2 · Var = (n²−1)/12.

**Geometrisch** (3.3.9, 3.4.7): p = 4/5: P(X=k) = (1/5)ᵏ⁻¹·(4/5), E = 5/4.
„Mehr als 3 Schüsse nötig" bei p = 0,4: 0,6³ = **0,216**. „Mindestens ein Treffer bei 3 Schüssen": 1 − (1−p)³.

**Zwei Zufallsvariablen, Tabelle** (3.3.10): Randverteilung = Zeilen- bzw. Spaltensummen.
Unabhängig ⇔ **jede** Zelle = Zeilensumme · Spaltensumme. Eine einzige abweichende Zelle genügt als Gegenbeweis.

**Summe von k gezogenen Kugelnummern aus 1..n** (3.3.11): Linearität → jede gezogene Kugel hat
Erwartungswert (n+1)/2 → **E = k·(n+1)/2** (gilt trotz Abhängigkeit der Züge).

**Hash / belegte Plätze** (3.3.12 — der Zwilling der Jäger-Aufgabe): n Datensätze zufällig auf n Plätze,
X = Plätze mit genau einem Datensatz → Indikator je Platz: P = n·(1/n)·(1−1/n)ⁿ⁻¹ →
**E[X] = n·(1−1/n)ⁿ⁻¹**, E/n → 1/e ≈ 0,368. Für n = 4: 27/16.

**Belegungs-Verteilung mit festen Zahlen:** 4 Personen, 3 Stockwerke, X = Anzahl Halte:
P(1) = 3/81, P(2) = C(3,2)·(2⁴−2)/81 = 42/81, P(3) = 36/81 (Σ = 1 ✓) · E = 65/27 · Var = 230/729.

**Binomial-Klassiker:** Tennis p = 2/3, 4 Sätze, mehr als die Hälfte: P(X≥3) = 32/81 + 16/81 = **16/27** ·
Partei 40 %, 5 Befragte: P(0) = 0,0778, P(2) = 0,3456, P(≤3) = 0,9130, P(≥2) = 0,6630 ·
6 Kinder: 3 und 3 → 5/16; weniger Jungen als Mädchen → (1 − 5/16)/2 = 11/32 (Symmetrie!).

**Poisson** (nicht in der markierten Auswahl, nur Formel kennen): P(X=k) = λᵏ·e^(−λ)/k!, E = Var = λ.
λ immer auf den gefragten Zeitraum umrechnen: 120 Aufträge/h → 2 pro Minute → P(0) = e⁻² ≈ 0,135.

**Stetig mit Parameter** (3.5.1): f(x) = C·(a−x) auf [0,a] → C = 2/a², E = a/3, Var = a²/18.
