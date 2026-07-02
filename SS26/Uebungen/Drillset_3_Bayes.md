# 🏋️ Drillset 3 — Bayes (#5) + Bonus ZV (#6) · Runde 2

> **Komplett frische Aufgaben** (02.07.), klausurnah: Test-Aufgaben in allen Varianten
> (auch die Umkehrung „P(gesund | negativ)"), Maschinen/Lieferanten, Schachtel-Wahl.
> Schema immer gleich: **erst die 4 Größen aus dem Text lesen**, dann einsetzen. Baum hilft!
> Alle Lösungen rechnerisch verifiziert. **Erst selbst rechnen!** Umfang: ~60–75 min.

**Das Einsetz-Schema (auf den Spicker!):**
P(A|B) = P(B|A)·P(A) / [ P(B|A)·P(A) + P(B|Ā)·P(Ā) ]

## Aufgaben

### D3.1 — Krankheitstest (Standard)
Eine Krankheit tritt mit Wahrscheinlichkeit **0,1 %** auf. Ein Test erkennt Kranke zu **98 %**;
Gesunde erhalten zu **1 %** fälschlich ein positives Ergebnis.
- Mit welcher Wahrscheinlichkeit ist eine **positiv getestete** Person tatsächlich **krank**?

### D3.2 — Seltene Infektion (SoSe20-Stil, extreme Prävalenz)
Eine Infektion tritt mit Wahrscheinlichkeit **10⁻⁴** auf. Ein Antikörpertest erkennt Infizierte
zu **99 %**; Gesunde bekommen zu **0,2 %** ein (falsch) positives Ergebnis.
- Wie groß ist P(**infiziert** | **positiv**)?

### D3.3 — Qualitätsprüfung (21SoSe-Stil, mit Umkehrung!)
**4 %** der produzierten Teile sind defekt. Ein Prüfgerät schlägt bei defekten Teilen zu **95 %**
Alarm, bei intakten fälschlich zu **3 %**.
- a) Mit welcher Wahrscheinlichkeit schlägt das Gerät bei einem zufälligen Teil **Alarm**?
- b) P(**defekt** | **Alarm**)?
- c) P(**intakt** | **kein Alarm**)?

### D3.4 — Zwei Schachteln (Baum-Klassiker)
Schachtel 1 enthält **3 rote und 7 weiße** Kugeln, Schachtel 2 enthält **6 rote und 4 weiße**.
Per fairem Münzwurf wird eine Schachtel gewählt, daraus eine Kugel gezogen. Sie ist **rot**.
- Mit welcher Wahrscheinlichkeit stammt sie aus **Schachtel 2**?

### D3.5 — Drei Lieferanten (totale W. + Bayes)
Ein Werk bezieht Bauteile von drei Lieferanten: **L1** 40 % (davon 1 % defekt),
**L2** 35 % (2 % defekt), **L3** 25 % (4 % defekt).
- a) Mit welcher Wahrscheinlichkeit ist ein zufälliges Teil **defekt**?
- b) Ein Teil ist defekt — mit welcher Wahrscheinlichkeit stammt es von **L3**?
- c) Ein Teil ist **intakt** — mit welcher Wahrscheinlichkeit stammt es von **L1**?

### D3.6 — Alkoholkontrolle
**2 %** der kontrollierten Fahrer sind alkoholisiert. Der Schnelltest zeigt bei Alkoholisierten
zu **99 %** an, bei Nüchternen fälschlich zu **5 %**.
- P(**alkoholisiert** | **Test positiv**)? *(Überrascht das Ergebnis?)*

### D3.7 — Bedingte Wahrscheinlichkeit pur (Aufwärmer/Verständnis)
Zwei faire Würfel werden geworfen.
- a) P(Augensumme = 8 | **der erste Würfel zeigt eine gerade Zahl**)?
- b) P(der erste Würfel zeigt eine gerade Zahl | **Augensumme = 8**)?

### D3.8 — 🎁 Bonus ZV (Festigung #6)
- a) Diskret: X nimmt die Werte 0, 1, 2, 3 mit P = 0,2 / 0,4 / 0,3 / 0,1 an.
  Berechne **E[X]**, **Var(X)**, **σ**.
- b) Stetig: f(x) = **C·(1 − x²)** für −1 ≤ x ≤ 1 (sonst 0).
  Bestimme **C**, **E[X]**, **Var(X)** und **P(0 < X < 1)**.
- c) Zwei Würfel, X = **Maximum** der Augenzahlen: Berechne **P(X = 4)** und **E[X]**.

---
## ✅ Lösungen

### D3.1
4 Größen: P(K)=0,001 · P(K̄)=0,999 · P(+|K)=0,98 · P(+|K̄)=0,01
P(K|+) = 0,98·0,001 / (0,98·0,001 + 0,01·0,999) = 0,00098/0,01097 ≈ **0,0893 (≈ 8,9 %)**
*(Typisch: trotz gutem Test klein, weil die Krankheit selten ist.)*

### D3.2
P(I|+) = 0,99·10⁻⁴ / (0,99·10⁻⁴ + 0,002·0,9999) = 0,000099/0,00209880 ≈ **0,0472 (≈ 4,7 %)**

### D3.3
- a) P(Alarm) = 0,04·0,95 + 0,96·0,03 = 0,038 + 0,0288 = **0,0668**
- b) P(def|Alarm) = 0,038/0,0668 ≈ **0,569 (≈ 56,9 %)**
- c) P(intakt|kein Alarm) = 0,96·0,97 / (1 − 0,0668) = 0,9312/0,9332 ≈ **0,9979 (≈ 99,8 %)**

### D3.4
P(S2|rot) = 0,5·0,6 / (0,5·0,3 + 0,5·0,6) = 0,3/0,45 = **2/3 ≈ 0,667**

### D3.5
- a) P(def) = 0,40·0,01 + 0,35·0,02 + 0,25·0,04 = 0,004 + 0,007 + 0,010 = **0,021**
- b) P(L3|def) = 0,010/0,021 = **10/21 ≈ 0,476**
- c) P(L1|intakt) = 0,40·0,99 / (1 − 0,021) = 0,396/0,979 ≈ **0,4045**

### D3.6
P(A|+) = 0,02·0,99 / (0,02·0,99 + 0,98·0,05) = 0,0198/0,0688 ≈ **0,288 (≈ 29 %)**
*(Ja: über 70 % der positiven Tests sind Fehlalarme!)*

### D3.7
- a) Grundraum „erster gerade" = 18 Fälle; günstig (2,6),(4,4),(6,2) = 3 → 3/18 = **1/6**
- b) Grundraum „Summe 8" = 5 Fälle: (2,6),(3,5),(4,4),(5,3),(6,2); erster gerade: 3 → **3/5**

### D3.8
- a) E[X] = 0·0,2 + 1·0,4 + 2·0,3 + 3·0,1 = **1,3**
  E[X²] = 0 + 1·0,4 + 4·0,3 + 9·0,1 = 2,5 → Var = 2,5 − 1,3² = **0,81** → σ = **0,9**
- b) ∫₋₁¹ C(1−x²)dx = C·4/3 = 1 → **C = 3/4**
  E[X] = **0** (f symmetrisch um 0!)
  Var = E[X²] = (3/4)·(2/3 − 2/5) = **1/5 = 0,2** → σ ≈ 0,447
  P(0<X<1) = (3/4)·(1 − 1/3) = **1/2** (Symmetrie!)
- c) P(Max=4) = [4² − 3²]/36 = **7/36 ≈ 0,194**
  E[Max] = Σ k·[k²−(k−1)²]/36 = (1·1+2·3+3·5+4·7+5·9+6·11)/36 = **161/36 ≈ 4,47**
