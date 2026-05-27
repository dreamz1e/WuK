# 🏋️ Übungsset Woche 6 — Generalprobe (Mini-Mock, gemischt)

> Passt zu Woche 6. **Zusätzlich** zu den echten Probeklausuren (SoSe20/21SoSe/WS0809).
> Eine Aufgabe je Kerntyp. **Unter Zeit rechnen: 60 min. Punkte gesamt 50, Bestehen 25.** Erst selbst!

## Aufgaben

### M1 — Permutation mit Wiederholung (8 Pkt)
Buchstaben des Wortes **KASSEL**.
- a) Wie viele unterscheidbare Anordnungen? (4)
- b) In wie vielen stehen die beiden **S** nebeneinander? (4)

### M2 — Auswahl-Kombinatorik (6 Pkt)
Aus **8 Spielern** werden **5** aufgestellt.
- a) Wie viele Aufstellungen? (3)
- b) Ein bestimmter Spieler (Kapitän) muss dabei sein — wie viele? (3)

### M3 — Binomialverteilung (8 Pkt)
Ein fairer Würfel wird **6-mal** geworfen.
- Wahrscheinlichkeit für **genau zwei Sechsen**?

### M4 — Bayes (10 Pkt)
Eine Krankheit tritt mit Wahrscheinlichkeit **1/1000** auf. Ein Test erkennt Kranke
zu **98 %** (Sensitivität) und liefert bei Gesunden **3 %** falsch-positive Ergebnisse.
- Eine Person wird **positiv** getestet — wie groß ist die Wahrscheinlichkeit, dass sie **krank** ist?

### M5 — Zahlentheorie (8 Pkt)
Berechne **7¹⁰⁰ mod 12**.

### M6 — RSA (10 Pkt)
Öffentlicher Schlüssel **n = 21**, **e = 5**, Chiffrat **c = 10**.
- Bestimme **d** und entschlüssele zu **m**.

---
## ✅ Lösungen

### M1  (KASSEL: 1K,1A,2S,1E,1L → n=6)
- a) 6!/2! = 720/2 = **360**
- b) beide S als Block → (SS),K,A,E,L (5 Elemente, alle verschieden): 5! = **120**

### M2
- a) C(8,5) = C(8,3) = **56**
- b) Kapitän fix → 4 aus 7: C(7,4) = **35**

### M3
P(genau 2) = C(6,2)·(1/6)²·(5/6)⁴ = 15·(1/36)·(625/1296) = 3125/15552 ≈ **0,201 (20,1 %)**

### M4
P(K)=0,001 · P(+|K)=0,98 · P(+|G)=0,03:
P(+) = 0,98·0,001 + 0,03·0,999 = 0,00098 + 0,02997 = 0,03095.
P(K|+) = 0,00098 / 0,03095 = **98/3095 ≈ 0,032 (3,2 %)**
*(Lehre: trotz gutem Test ist die Trefferwahrscheinlichkeit niedrig, weil die Krankheit selten ist.)*

### M5
ggT(7,12)=1; φ(12)=4; 7⁴ ≡ 1 (mod 12); 100 = 4·25 → 7¹⁰⁰ = (7⁴)²⁵ ≡ 1²⁵ = **1 (mod 12)**.

### M6
21 = 3·7 → φ = 2·6 = **12**. d = 5⁻¹ mod 12: 5·5 = 25 ≡ 1 → **d = 5**.
m = 10⁵ mod 21: 10²≡16; 10⁴≡16²=256≡4; 10⁵ = 10⁴·10 ≡ 40 ≡ **19 (mod 21)**.  **→ m = 19**

---
### Auswertung
≥ 25 Pkt = bestanden. < 25? → Schwachstellen-Typ identifizieren und das jeweilige Wochen-Übungsset + die Probeklausur-Aufgaben dieses Typs nochmal rechnen.
