# 🏋️ Drillset 2 — WK (#3 Laplace inkl. Fahrstuhl & Urne, #4 Binomial) · Runde 2

> **Komplett frische Aufgaben** (02.07.), klausurnah: Würfel, **Fahrstuhl** (in beiden modernen
> Klausuren 16–18 Pkt!), Urne, Münze, Schützen, Tennis, „Wie oft schießen?".
> Alle Lösungen rechnerisch verifiziert (Fahrstuhl/Würfel per Enumeration). **Erst selbst rechnen!**
> Umfang: ~75–90 min. Zum Festigen gern auf 2 Sitzungen verteilen.

## Aufgaben

### D2.1 — Zwei Würfel (Laplace-Grundlagen)
Zwei faire Würfel werden geworfen (Grundraum 36).
- a) P(Augensumme = 9)?
- b) P(Augensumme ≥ 10)?
- c) P(mindestens eine **5**)? *(Gegenereignis!)*
- d) P(Produkt der Augenzahlen ist **durch 3 teilbar**)?

### D2.2 — Drei Würfel (Produkt-Teilbarkeit, SoSe-Stil)
Drei faire Würfel werden geworfen.
- a) P(**keine** 6)?
- b) P(**höchstens eine** 6)?
- c) P(Produkt der Augenzahlen ist **ungerade**)?
- d) P(Produkt ist **weder durch 2 noch durch 3** teilbar)?

### D2.3 — Fahrstuhl I (Klausur-Klassiker!)
**Vier** unabhängig entscheidende Personen (darunter A und B) besteigen einen Fahrstuhl und
fahren in eines von **fünf** Stockwerken (alle gleich wahrscheinlich).
- a) P(alle 4 steigen im **selben** Stockwerk aus)?
- b) P(alle 4 steigen in **verschiedenen** Stockwerken aus)?
- c) P(**A und B** steigen gemeinsam aus — egal wo die anderen)?
- d) P(**A** verlässt den Fahrstuhl **allein**)?
- e) P(der Fahrstuhl hält **genau zweimal** und es steigen **jedes Mal zwei** Personen aus)?

### D2.4 — Fahrstuhl II (Verteilung mit ungleichen Gruppen)
**Drei** Personen, **vier** Stockwerke.
- a) P(der Fahrstuhl hält **nur einmal**)?
- b) P(der Fahrstuhl hält **genau zweimal**)? *(Tipp: Verteilung 2+1 → Faktor M!)*
- c) P(der Fahrstuhl hält **dreimal**)?
- d) Kontrolle: Addieren sich a)–c) zu 1?

### D2.5 — Urne ohne Zurücklegen
Urne mit **6 roten, 4 blauen und 2 grünen** Kugeln (12 gesamt). Es werden **3** ohne Zurücklegen gezogen.
- a) P(alle 3 rot)?
- b) P(**genau 2** rote)?
- c) P(**mindestens eine** grüne)? *(Gegenereignis!)*
- d) P(alle 3 **gleichfarbig**)?

### D2.6 — Dieselbe Urne, mit Zurücklegen
Aus derselben Urne werden **3** Kugeln **mit** Zurücklegen gezogen (p(rot) = 6/12 = 1/2).
- a) P(genau 2 rote)?
- b) P(mindestens eine rote)?

### D2.7 — Unfaire Münze (SoSe20-Stil)
Eine unfaire Münze zeigt mit p = **1/4** Kopf, mit **3/4** Zahl. Sie wird **6-mal** geworfen.
- a) P(**nur Zahl**)?
- b) P(**genau 2-mal** Kopf)?
- c) P(**mindestens 2-mal** Kopf)? *(Gegenereignis: P(0) und P(1) abziehen!)*

### D2.8 — Drei Schützen (21SoSe-Stil)
Drei Schützen treffen unabhängig mit p(A) = **0,6**, p(B) = **0,5**, p(C) = **0,4**. Jeder schießt **einmal**.
- a) P(**alle drei** treffen)?
- b) P(**keiner** trifft)?
- c) P(die Zielscheibe wird getroffen, d.h. **mindestens einer** trifft)?
- d) P(**genau einer** trifft)?

### D2.9 — Tennis (WS0607-Stil)
Anne gewinnt jeden Satz gegen Ben unabhängig mit p = **3/5**.
- a) P(Anne gewinnt **genau 3 von 5** Sätzen)?
- b) P(Anne gewinnt **mindestens 4 von 5** Sätzen)?

### D2.10 — „Wie oft schießen?" (Schützenkönig-Stil)
Ein Schütze trifft pro Schuss mit p = **1/3**.
- Wie oft muss er **mindestens** schießen, damit er mit **mindestens 95 %** Wahrscheinlichkeit
  **wenigstens einmal** trifft?

### D2.11 — Binomial-Kennzahlen (Schnellrechner)
X ~ Binomial mit n = **20**, p = **0,3**.
- Berechne **E[X]**, **Var(X)** und **σ**.

---
## ✅ Lösungen

### D2.1
- a) günstig: (3,6)(4,5)(5,4)(6,3) = 4 → 4/36 = **1/9**
- b) Summe 10: 3, Summe 11: 2, Summe 12: 1 → 6/36 = **1/6**
- c) 1 − P(keine 5) = 1 − (5/6)² = 1 − 25/36 = **11/36 ≈ 0,306**
- d) Gegenereignis „keine 3 und keine 6 dabei": (4/6)² = 4/9 → 1 − 4/9 = **5/9 ≈ 0,556**

### D2.2
- a) (5/6)³ = **125/216 ≈ 0,579**
- b) P(0) + P(1) = 125/216 + 3·(1/6)·(5/6)² = 125/216 + 75/216 = 200/216 = **25/27 ≈ 0,926**
- c) alle drei ungerade: (3/6)³ = **1/8**
- d) nur Augenzahlen {1, 5} erlaubt: (2/6)³ = **1/27 ≈ 0,037**

### D2.3  (Grundraum 5⁴ = 625)
- a) 5 günstige → 5/625 = **1/125 = 0,008**
- b) 5·4·3·2 = 120 → 120/625 = **24/125 = 0,192**
- c) 5 Stockwerke fürs Paar · 5² für die anderen = 125 → 125/625 = **1/5 = 0,2**
- d) A: 5 Möglichkeiten · die anderen 3 je nur 4 übrige: 5·4³ = 320 → 320/625 = **64/125 = 0,512**
- e) Stockwerks-Paar: C(5,2) = 10 · Personen aufteilen: 4!/(2!·2!) = 6 → 60/625 = **12/125 = 0,096**

### D2.4  (Grundraum 4³ = 64)
- a) 4/64 = **1/16 = 0,0625**
- b) C(4,2)·**M**·3!/(2!·1!) / 64 mit M = 2 (welches der beiden Stockwerke bekommt die 2er-Gruppe)
  = 6·2·3/64 = 36/64 = **9/16 = 0,5625**
- c) 4·3·2/64 = 24/64 = **3/8 = 0,375**
- d) 1/16 + 9/16 + 6/16 = 16/16 = **1 ✓** (4 + 36 + 24 = 64 Fälle)

### D2.5  (Grundraum C(12,3) = 220)
- a) C(6,3)/220 = 20/220 = **1/11 ≈ 0,091**
- b) C(6,2)·C(6,1)/220 = 15·6/220 = 90/220 = **9/22 ≈ 0,409**
- c) 1 − C(10,3)/220 = 1 − 120/220 = 100/220 = **5/11 ≈ 0,455**
- d) [C(6,3) + C(4,3) + C(2,3)]/220 = (20 + 4 + 0)/220 = 24/220 = **6/55 ≈ 0,109**

### D2.6  (Binomial, n=3, p=1/2)
- a) C(3,2)·(1/2)²·(1/2) = **3/8 = 0,375**
- b) 1 − (1/2)³ = **7/8 = 0,875**

### D2.7  (n=6, p=1/4)
- a) (3/4)⁶ = 729/4096 ≈ **0,178**
- b) C(6,2)·(1/4)²·(3/4)⁴ = 15·81/4096 = 1215/4096 ≈ **0,297**
- c) 1 − (3/4)⁶ − 6·(1/4)·(3/4)⁵ = 1 − 729/4096 − 1458/4096 = 1909/4096 ≈ **0,466**

### D2.8
- a) 0,6·0,5·0,4 = **0,12**
- b) 0,4·0,5·0,6 = **0,12**
- c) 1 − P(keiner) = 1 − 0,12 = **0,88**
- d) nur A + nur B + nur C = 0,6·0,5·0,6 + 0,4·0,5·0,6 + 0,4·0,5·0,4 = 0,18 + 0,12 + 0,08 = **0,38**

### D2.9  (Binomial, p=3/5)
- a) C(5,3)·(3/5)³·(2/5)² = 10·(27/125)·(4/25) = 216/625 ≈ **0,346**
- b) C(5,4)·(3/5)⁴·(2/5) + (3/5)⁵ = 810/3125 + 243/3125 = 1053/3125 ≈ **0,337**

### D2.10
1 − (2/3)ⁿ ≥ 0,95  ⇔  (2/3)ⁿ ≤ 0,05  ⇔  n ≥ ln(0,05)/ln(2/3) ≈ 7,39 → **n = 8**
*(Probe: 1 − (2/3)⁸ ≈ 0,961 ✓ · 1 − (2/3)⁷ ≈ 0,941 ✗)*

### D2.11
E[X] = n·p = **6** · Var = n·p·(1−p) = 20·0,3·0,7 = **4,2** · σ = √4,2 ≈ **2,049**
