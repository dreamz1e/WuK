# 🏋️ Übungsset Woche 1 — Block KOMB (#1 Permutation, #2 Auswahl)

> Passt zu `01_Lernplan_6Wochen.md`, Woche 1. **Frische** Aufgaben (andere Zahlen als die Probeklausuren).
> Ziel: in ~45 min lösen, dann unten kontrollieren. Taschenrechner erlaubt. **Erst selbst rechnen!**

## Aufgaben

### Ü1.1 — Permutation mit Wiederholung (Wort „LOTTO")
Gegeben die Buchstaben des Wortes **LOTTO** (L, O, T, T, O).
- a) Wie viele unterscheidbare Anordnungen gibt es?
- b) Wie viele beginnen mit **L** und enden mit **O**?
- c) In wie vielen stehen die beiden **T** direkt nebeneinander?

### Ü1.2 — Permutation mit Wiederholung (Ziffern)
Gegeben die Ziffern **2, 2, 5, 5, 5, 8**.
- a) Wie viele unterscheidbare sechsstellige Zahlen lassen sich bilden?
- b) Wie viele enden auf **8**?
- c) In wie vielen stehen die beiden **2** direkt nebeneinander?

### Ü1.3 — Auswahl-Kombinatorik (Bücher)
Aus **12 Büchern** sollen **5** für den Urlaub ausgewählt werden.
- a) Wie viele Auswahlen gibt es ohne Einschränkung?
- b) Die ersten 3 Bücher (Krimis) müssen dabei sein. Wie viele Möglichkeiten?
- c) Genau **2** der ersten **4** Bücher sollen dabei sein. Wie viele?
- d) Mindestens **4** der ersten **6** Bücher sollen dabei sein. Wie viele?

### Ü1.4 — Auswahl-Kombinatorik (Team)
Aus **10 Personen** wird ein **4er-Team** gebildet.
- a) Wie viele Teams sind möglich?
- b) Eine bestimmte Person muss dabei sein. Wie viele Teams?
- c) Zwei bestimmte Personen dürfen **nicht gemeinsam** im Team sein. Wie viele Teams?

---
## ✅ Lösungen

### Ü1.1  (L:1, O:2, T:2 → n=5)
- a) 5!/(1!·2!·2!) = 120/4 = **30**
- b) L vorn, O hinten fixiert → Rest O,T,T: 3!/2! = **3**
- c) beide T als Block → (TT),L,O,O (4 Elemente, 2×O): 4!/2! = **12**

### Ü1.2  (2:2, 5:3, 8:1 → n=6)
- a) 6!/(2!·3!·1!) = 720/12 = **60**
- b) 8 ans Ende fixiert → Rest 2,2,5,5,5: 5!/(2!·3!) = **10**
- c) beide 2 als Block → (22),5,5,5,8: 5!/3! = **20**

### Ü1.3
- a) C(12,5) = **792**
- b) 3 fix → 2 aus 9: C(9,2) = **36**
- c) C(4,2)·C(8,3) = 6·56 = **336**
- d) genau 4: C(6,4)·C(6,1)=15·6=90; genau 5: C(6,5)·C(6,0)=6 → **96**

### Ü1.4
- a) C(10,4) = **210**
- b) 1 fix → 3 aus 9: C(9,3) = **84**
- c) alle Teams − Teams mit beiden = C(10,4) − C(8,2) = 210 − 28 = **182**
