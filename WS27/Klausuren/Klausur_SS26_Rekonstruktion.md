# 📝 Klausur SS26 (09.07.2026) — Rekonstruktion mit Musterlösungen

> Aus dem Gedächtnis rekonstruiert direkt nach der Klausur. Wo Details unsicher sind,
> steht eine **[Annahme]** — das Lösungsschema bleibt davon unberührt.
> **Alle Zahlenergebnisse sind numerisch (Python) verifiziert.**
> Ziel: Diese Klausur wirst du am Ende der Vorbereitung **komplett und sicher** lösen können.

---

## Aufgabe 1 — Kombinatorik: Eis (Kombination **mit** Zurücklegen)

**3 Kugeln aus 10 Sorten, Reihenfolge egal, Sorten dürfen sich wiederholen. Wie viele Kombinationen?**

**Erkennung:** Reihenfolge egal + Wiederholung erlaubt → **Kombination mit Zurücklegen**
(„Multimengen-Auswahl", Stars & Bars).

$$\binom{n+k-1}{k} = \binom{10+3-1}{3} = \binom{12}{3} = \mathbf{220}$$

**Die klassische Falle (so ging es schief):** 10³ = 1000 zählt **geordnete** Tripel
(= Variation mit Zurücklegen). „Reihenfolge egal" schließt das aus.
Merksatz: *Erst die 2 Fragen stellen — Reihenfolge wichtig? Wiederholung erlaubt? —
dann erst die Formel wählen* (→ Entscheidungsmatrix auf dem Spicker).

---

## Aufgabe 2 — Siebformel

**[Annahme: genaue Aufgabenstellung unbekannt — typische Klausurform:]**
*Wie viele der Zahlen 1 bis 100 sind durch 2, 3 oder 5 teilbar?*

**Erkennung:** „durch A **oder** B **oder** C" / „mindestens eine Eigenschaft",
Mengen überlappen sich → **Siebformel (Inklusion–Exklusion)**:

$$|A\cup B\cup C| = |A|+|B|+|C| - |A\cap B| - |A\cap C| - |B\cap C| + |A\cap B\cap C|$$

| Menge | Anzahl (⌊100/…⌋) |
|---|---|
| durch 2 | 50 |
| durch 3 | 33 |
| durch 5 | 20 |
| durch 6 (2·3) | 16 |
| durch 10 (2·5) | 10 |
| durch 15 (3·5) | 6 |
| durch 30 (2·3·5) | 3 |

$$50+33+20-16-10-6+3 = \mathbf{74}$$

Schnittmengen bei Teilbarkeit = Teilbarkeit durch das **kgV** (hier: Produkte, da teilerfremd).

---

## Aufgabe 3 — Schützen-Wettschießen (Vergleich zweier Binomialverteilungen)

**Schütze A trifft mit p = 0,4 und hat bisher 8 Treffer aus 10 Schüssen.
Schütze B trifft mit p = 0,2 und hat bisher 10 Treffer aus 15 Schüssen.
Wie groß ist die Wahrscheinlichkeit, dass A noch gewinnt?**
**[Annahme: beide schießen insgesamt 20-mal → A hat noch 10, B noch 5 Schüsse.]**

**Erkennung:** Zwei unabhängige Restserien → X ~ Bin(10; 0,4), Y ~ Bin(5; 0,2).
A gewinnt, wenn Endstand 8 + X > 10 + Y, also **X ≥ Y + 3**.

**Schema (das ist der eigentliche Punktelieferant):**

$$P(A \text{ gewinnt}) = \sum_{y=0}^{5} P(Y=y)\cdot P(X \ge y+3)
= \sum_{y=0}^{5}\;\sum_{x=y+3}^{10} \binom{10}{x}0{,}4^x\,0{,}6^{10-x}\cdot\binom{5}{y}0{,}2^y\,0{,}8^{5-y}$$

Mit den Annahmezahlen: **≈ 0,61** (Gleichstand ≈ 0,19).

> In der Klausur zählt: **Zufallsvariablen definieren, Gewinnbedingung als Ungleichung
> aufschreiben, Doppelsumme ansetzen.** Selbst wenn du nicht alle Terme ausrechnest,
> holt der saubere Ansatz die meisten Punkte. Bei „nur wenige Restschüsse" (hier B: 5)
> über den **kleineren** Bereich summieren.

---

## Aufgabe 4 — Schützen-Ungleichung (Mindest-n für „mindestens 1 Treffer")

**Wie oft muss der Schütze mit p = 0,2 mindestens schießen, um mit Wahrscheinlichkeit
≥ 95,5 % mindestens einmal zu treffen?**

**Erkennung:** „mindestens 1 Treffer mit Mindestwahrscheinlichkeit" → **Gegenereignis + Ungleichung**.

$$1-(1-p)^n \ge 0{,}955 \;\Longleftrightarrow\; 0{,}8^n \le 0{,}045$$

Logarithmieren (⚠️ ln 0,8 < 0 → **Ungleichung dreht sich**):

$$n \ge \frac{\ln 0{,}045}{\ln 0{,}8} = 13{,}90 \;\Longrightarrow\; \mathbf{n = 14}$$

Probe: 1 − 0,8¹³ = 0,9450 (reicht nicht) · 1 − 0,8¹⁴ = 0,9560 ✓

---

## Aufgabe 5 — 3 Jäger, n Hasen: Verteilung aufstellen + E[X], Var(X)

**3 Jäger schießen gleichzeitig; jeder wählt zufällig (unabhängig, gleichverteilt) einen
von n Hasen und trifft. X = Anzahl der getroffenen (verschiedenen) Hasen.
Verteilung von X aufstellen, dann E[X] und Var(X).**

**Erkennung:** kein Standard-Verteilungsname → **Verteilung selbst aufstellen**.
Grundraum: jedes der 3 „Ziele" hat n Möglichkeiten → |Ω| = n³ (Laplace).

**Schritt 1 — Werte von X:** X ∈ {1, 2, 3}.

**Schritt 2 — Fälle zählen:**
- **X = 1** (alle wählen denselben Hasen): n Möglichkeiten →
  $P(X{=}1) = \dfrac{n}{n^3} = \dfrac{1}{n^2}$
- **X = 3** (alle verschieden): n(n−1)(n−2) →
  $P(X{=}3) = \dfrac{(n-1)(n-2)}{n^2}$
- **X = 2** (genau zwei verschiedene): 2 Hasen wählen C(n,2), die 3 Jäger auf beide
  verteilen, sodass keiner leer ausgeht: 2³ − 2 = 6 →
  $P(X{=}2) = \dfrac{\binom{n}{2}\cdot 6}{n^3} = \dfrac{3(n-1)}{n^2}$

**Schritt 3 — Kontrolle Σ = 1:**
$\dfrac{1 + 3(n-1) + (n-1)(n-2)}{n^2} = \dfrac{n^2}{n^2} = 1$ ✓

**Schritt 4 — Erwartungswert** (aus der Definition):

$$E[X] = \frac{1\cdot 1 + 2\cdot 3(n-1) + 3\cdot(n-1)(n-2)}{n^2} = \frac{3n^2-3n+1}{n^2} = 3 - \frac{3}{n} + \frac{1}{n^2}$$

*Eleganter Zweitweg (Indikator-Trick, als Kontrolle):* Hase i wird getroffen mit
$p_i = 1-\left(\frac{n-1}{n}\right)^3$ → $E[X] = n\left(1-\left(\frac{n-1}{n}\right)^3\right)$ — gleicher Wert.

**Schritt 5 — Varianz:**

$$E[X^2] = \frac{1 + 4\cdot 3(n-1) + 9\cdot(n-1)(n-2)}{n^2} = \frac{9n^2-15n+7}{n^2}$$

$$\operatorname{Var}(X) = E[X^2]-(E[X])^2 = \frac{(n-1)(3n^2-5n+1)}{n^4}$$

Zahlenkontrolle (verifiziert): n=3 → E = 19/9, Var = 26/81; n=10 → E = 2,71, Var = 0,2259.

---

## Aufgabe 6 — RSA: n = 437, e = 317, c = 300

**Erkennung:** c gegeben → volle Entschlüsselung (n → φ → d → m).

**1) Faktorisieren — bis √n testen!** √437 ≈ 20,9 → Primzahlen 2, 3, 5, 7, 11, 13, **17, 19**:
$$437 = 19 \cdot 23$$
*(Genau hier starb die Klausur: wer nur bis 13 testet, findet nichts.)*

**2) φ = 18 · 22 = 396** — und **ab jetzt nur noch mit 396 rechnen, nie mit 437** (außer in Schritt 4/5).

**3) d = 317⁻¹ mod 396 — erweiterter Euklid (2 Zeilen!):**

| Gleichung | |
|---|---|
| 396 = **1**·317 + 79 | |
| 317 = **4**·79 + **1** | ← ggT = 1 ✓ (Inverse existiert) |

Rückwärts: 1 = 317 − 4·79 = 317 − 4·(396 − 317) = **5·317 − 4·396**
→ **d = 5**. Probe: 317·5 = 1585 = 4·396 + 1 ✓

*Probierformel als Kontrolle: (1 + 396k)/317 → k = 4 liefert 1585/317 = 5. ✓
Mit **falschem** Modul 437 statt 396 käme der erste ganzzahlige Wert erst bei k = 140 —
deshalb: nach k = 10 ohne Treffer → STOPP, φ und Faktorisierung prüfen!*

**4) m = c^d mod n = 300⁵ mod 437 — Quadrier-Kette:**
- 300² = 90000 ≡ **415** (mod 437)
- 300⁴ ≡ 415² = 172225 ≡ **47** (mod 437)
- 300⁵ = 300⁴ · 300 ≡ 47 · 300 = 14100 ≡ **116** (mod 437)

$$\mathbf{m = 116}$$

**5) Endprobe:** 116³¹⁷ mod 437 = 300 ✓ (Quadrier-Kette oder TR-Schritte; verifiziert).

---

## Lehren aus dieser Klausur (Kurzfassung)

1. **Klassifiziere zuerst** — 2 der verlorenen Aufgaben standen auf dem Spicker.
2. **Siebformel & Kombination mit Zurücklegen** gehören ab jetzt zum Kernstoff.
3. **Faktorisieren bis √n**, Euklid-**Tableau** als Standard, Probierformel mit Abbruch bei k = 10.
4. **Verteilungen aufstellen** (Werte → Fälle zählen → Σ=1 → E → Var) ist ein eigener, drillbarer Aufgabentyp.
