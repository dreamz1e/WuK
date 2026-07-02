# 🏋️ Drillset 1 — KOMB (#1 Permutation, #2 Auswahl) · Runde 2

> **Komplett frische Aufgaben** (02.07.), klausurnah formuliert wie in den echten Prüfungen
> (Ziffern-/Buchstaben-Anordnungen, „Polizist wählt aus"-Stil, Multimengen).
> Alle Lösungen rechnerisch verifiziert (inkl. Brute-Force-Gegencheck). **Erst selbst rechnen!**
> Umfang: ~60–75 min. Zum Festigen gern auf 2 Sitzungen verteilen.

## Aufgaben

### D1.1 — Buchstaben „ANANAS"
Gegeben die Buchstaben **A, N, A, N, A, S**.
- a) Wie viele unterscheidbare Anordnungen gibt es?
- b) Wie viele davon beginnen mit **S**?
- c) Wie viele beginnen **und** enden mit einem **A**?
- d) In wie vielen stehen **alle drei A direkt nebeneinander**?
- e) In wie vielen stehen **die beiden N direkt nebeneinander**?

### D1.2 — Ziffern 1, 1, 3, 3, 3, 7, 7
Gegeben die Ziffern **1, 1, 3, 3, 3, 7, 7** (wie „4,4,4,7,7,9,9" in SoSe20 A1).
- a) Wie viele verschiedene siebenstellige Zahlen lassen sich bilden?
- b) Wie viele beginnen mit einer **7** und enden mit einer **3**?
- c) In wie vielen stehen die beiden **1** direkt nebeneinander?
- d) ⭐ **Gemeinheit:** Wie viele verschiedene **fünfstellige** Zahlen lassen sich aus dem Vorrat bilden? *(Tipp: Fallunterscheidung, welche zwei Ziffern übrig bleiben.)*

### D1.3 — Wort „SEMESTER"
Gegeben die Buchstaben von **SEMESTER** (S:2, E:3, M:1, T:1, R:1 → n=8).
- a) Wie viele unterscheidbare Anordnungen gibt es?
- b) Wie viele beginnen mit **M** und enden mit **R**?
- c) In wie vielen stehen **alle drei E** direkt nebeneinander?
- d) Wie viele beginnen **und** enden mit einem **E**?

### D1.4 — Zoll-Kontrolle (Auswahl, Klausur-Klassiker)
Ein Zöllner steht vor **14 Containern** und möchte **9** davon prüfen.
- a) Auf wie viele Weisen kann er 9 Container auswählen?
- b) Auf wie viele Weisen, wenn die **ersten drei** auf jeden Fall geprüft werden sollen?
- c) Auf wie viele Weisen, wenn **genau 2 der ersten 5** geprüft werden sollen?
- d) Auf wie viele Weisen, wenn **mindestens 3 der ersten 5** geprüft werden sollen?

### D1.5 — Gremium (Auswahl mit Gruppen)
Aus **9 Frauen und 7 Männern** wird ein **6er-Gremium** gebildet.
- a) Wie viele Gremien sind möglich?
- b) Wie viele mit **genau 4 Frauen**?
- c) Wie viele mit **mindestens 5 Frauen**?
- d) Anna und Ben (2 bestimmte Personen) wollen **nicht gemeinsam** ins Gremium. Wie viele Gremien?

### D1.6 — Klausuraufgaben (ODER-Bedingung, 21SoSe-Stil)
In einer Klausur mit **11 Aufgaben** sind **8** zu bearbeiten.
- a) Wie viele Auswahlen gibt es ohne Einschränkung?
- b) Wie viele, wenn **genau eine** der Aufgaben 1 und 2 bearbeitet werden soll (**nicht beide**)?
- c) Wie viele, wenn **mindestens eine** der Aufgaben 1 und 2 bearbeitet werden soll?

### D1.7 — Auswahl mit Wiederholung (Multimengen)
- a) An einer Eisdiele gibt es **5 Sorten**. Du kaufst **8 Kugeln** (Sorten dürfen sich wiederholen, Reihenfolge egal). Wie viele Möglichkeiten?
- b) **4 nicht unterscheidbare Würfel** werden geworfen. Wie viele verschiedene Ergebnisse sind möglich?
- c) Und wenn die 4 Würfel (z.B. durch Farbe) **unterscheidbar** sind?

---
## ✅ Lösungen

### D1.1  (A:3, N:2, S:1 → n=6)
- a) 6!/(3!·2!·1!) = 720/12 = **60**
- b) S vorn fixiert → Rest A,A,A,N,N: 5!/(3!·2!) = **10**
- c) je ein A vorn und hinten fixiert (A:3→1 übrig) → Rest A,N,N,S: 4!/2! = **12**
- d) (AAA) als Block → (AAA),N,N,S = 4 Elemente, 2×N: 4!/2! = **12**
- e) (NN) als Block → (NN),A,A,A,S = 5 Elemente, 3×A: 5!/3! = **20**

### D1.2  (1:2, 3:3, 7:2 → n=7)
- a) 7!/(2!·3!·2!) = 5040/24 = **210**
- b) 7 vorn, 3 hinten fixiert → Rest 1,1,3,3,7: 5!/(2!·2!) = **30**
- c) (11) als Block → (11),3,3,3,7,7 = 6 Elemente: 6!/(3!·2!) = **60**
- d) ⭐ Fallunterscheidung nach den **übrig bleibenden** 2 Ziffern:
  | übrig | verwendet | Anordnungen |
  |---|---|---|
  | 1,1 | 3,3,3,7,7 | 5!/(3!·2!) = 10 |
  | 1,3 | 1,3,3,7,7 | 5!/(2!·2!) = 30 |
  | 1,7 | 1,3,3,3,7 | 5!/3! = 20 |
  | 3,3 | 1,1,3,7,7 | 5!/(2!·2!) = 30 |
  | 3,7 | 1,1,3,3,7 | 5!/(2!·2!) = 30 |
  | 7,7 | 1,1,3,3,3 | 5!/(2!·3!) = 10 |

  Summe = 10+30+20+30+30+10 = **130** *(per Enumeration bestätigt)*

### D1.3  (S:2, E:3, M:1, T:1, R:1 → n=8)
- a) 8!/(2!·3!) = 40320/12 = **3360**
- b) M vorn, R hinten → Rest S,S,E,E,E,T: 6!/(2!·3!) = **60**
- c) (EEE) als Block → (EEE),S,S,M,T,R = 6 Elemente, 2×S: 6!/2! = **360**
- d) E vorn und hinten (E:3→1 übrig) → Rest S,S,E,M,T,R: 6!/2! = **360**

### D1.4
- a) C(14,9) = C(14,5) = **2002**
- b) 3 fix → 6 aus 11: C(11,6) = **462**
- c) C(5,2)·C(9,7) = 10·36 = **360**
- d) genau 3: C(5,3)·C(9,6) = 10·84 = 840 · genau 4: C(5,4)·C(9,5) = 5·126 = 630 · genau 5: C(5,5)·C(9,4) = 126 → Summe = **1596**

### D1.5
- a) C(16,6) = **8008**
- b) C(9,4)·C(7,2) = 126·21 = **2646**
- c) genau 5: C(9,5)·C(7,1) = 126·7 = 882 · genau 6: C(9,6) = 84 → **966**
- d) alle − (beide drin) = C(16,6) − C(14,4) = 8008 − 1001 = **7007**

### D1.6
- a) C(11,8) = C(11,3) = **165**
- b) Aufgabe 1 drin (2 nicht) ODER Aufgabe 2 drin (1 nicht): je 7 aus den restlichen 9 → 2·C(9,7) = 2·36 = **72**
- c) Gegenereignis „keine von beiden" = C(9,8) = 9 → 165 − 9 = **156**

### D1.7
- a) Multimengen-Formel C(n+k−1, k) mit n=5, k=8: C(12,8) = C(12,4) = **495**
- b) n=4 Würfel, k=6 Augenzahlen: C(4+6−1, 4) = C(9,4) = **126** *(per Enumeration bestätigt)*
- c) unterscheidbar: 6⁴ = **1296**
