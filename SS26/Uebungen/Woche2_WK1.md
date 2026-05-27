# 🏋️ Übungsset Woche 2 — Block WK I (#4 Binomialverteilung, #3 Laplace)

> Passt zu Woche 2. Fokus: `P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ`, **Gegenereignis** bei „mindestens".
> Ziel ~45 min. Taschenrechner erlaubt. Erst selbst rechnen!

## Aufgaben

### Ü2.1 — Binomialverteilung (Multiple-Choice raten)
Ein Test hat **10 Fragen** mit je 4 Antworten; du **rätst** (p = 1/4 richtig).
- a) Wahrscheinlichkeit für **genau 3** richtige?
- b) Wahrscheinlichkeit für **keine** richtige?
- c) Wahrscheinlichkeit für **mindestens eine** richtige?

### Ü2.2 — Binomialverteilung (Qualitätskontrolle)
Eine Maschine produziert **5 % Ausschuss**. Stichprobe: **8 Teile** (unabhängig).
- a) Wahrscheinlichkeit für **genau 1** defektes Teil?
- b) Wahrscheinlichkeit für **höchstens 1** defektes Teil?
- c) Wahrscheinlichkeit für **mindestens 2** defekte Teile?

### Ü2.3 — Laplace (zwei Würfel)
Zwei faire Würfel (Grundraum 36).
- a) P(Augensumme = 8)?
- b) P(Betrag der Differenz der Augenzahlen = 2)?
- c) P(Produkt der Augenzahlen ist gerade)?

### Ü2.4 — Laplace (Urne ohne Zurücklegen)
Urne: **5 rote, 3 blaue, 2 grüne** Kugeln. Es werden **2** ohne Zurücklegen gezogen.
- a) P(beide rot)?
- b) P(genau eine rote)?
- c) P(keine grüne)?

---
## ✅ Lösungen

### Ü2.1  (n=10, p=1/4)
- a) C(10,3)·(1/4)³·(3/4)⁷ = 32805/131072 ≈ **0,2503**
- b) (3/4)¹⁰ ≈ **0,0563**
- c) 1 − (3/4)¹⁰ ≈ **0,9437**

### Ü2.2  (n=8, p=0,05)
- a) C(8,1)·0,05·0,95⁷ ≈ **0,2793**
- b) 0,95⁸ + 0,2793 ≈ 0,6634 + 0,2793 ≈ **0,9428**
- c) Gegenereignis: 1 − (b) ≈ **0,0572**

### Ü2.3
- a) günstige (2,6)(3,5)(4,4)(5,3)(6,2) = 5 → **5/36**
- b) |Diff|=2: (1,3)(2,4)(3,5)(4,6) und umgekehrt = 8 → 8/36 = **2/9**
- c) Gegenereignis „Produkt ungerade" = beide ungerade = (3/6)² = 1/4 → 1 − 1/4 = **3/4**

### Ü2.4  (Grundraum C(10,2)=45)
- a) C(5,2)/45 = 10/45 = **2/9**
- b) C(5,1)·C(5,1)/45 = 25/45 = **5/9**
- c) keine grüne = C(8,2)/45 = 28/45 ≈ **0,622**
