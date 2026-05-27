# ✅ Verifizierte Lösung — WS0607 (klassisch, ~55 Pkt, Bestehen 28)

> **⚠️ = Korrektur ggü. SS25-Lösung.**

## A1 — Türme auf n×n-Brett (keiner bedroht keinen)
Pro Zeile/Spalte max. 1 Turm → n·(n−1)·…·1 = **n!**

## A2 — Kärtchen 1,1,2,2,2,3 → 5 auswählen
Fallunterscheidung nach weggelassener Karte:
- „1" weg → 1,2,2,2,3: 5!/3! = 20
- „2" weg → 1,1,2,2,3: 5!/(2!·2!) = 30
- „3" weg → 1,1,2,2,2: 5!/(2!·3!) = 10
**Summe = 20 + 30 + 10 = 60**

## A3 — Urne 3 blau, 2 rot, 5 grün (10 Bälle), 2 ziehen, beide gleichfarbig
- a) **ohne** Zurücklegen: (3·2 + 2·1 + 5·4)/(10·9) = 28/90 = **14/45**
- b) **mit** Zurücklegen: (9 + 4 + 25)/100 = 38/100 = **19/50**

## A4 — Zwei Würfel (36)
- a) mindestens eine 6: 1 − (5/6)² = **11/36**
- b) Summe = 7: 6/36 = **1/6**
- c) Produkt Vielfaches von 10 (braucht 5 **und** gerade Zahl): (2,5)(4,5)(6,5)(5,2)(5,4)(5,6) = 6/36 = **1/6**

## A5 — Tennis, P(Anne)=2/3, 4 Sätze
- a) alle 4: (2/3)⁴ = **16/81**
- b) genau 2: C(4,2)·(2/3)²·(1/3)² = 6·4/81 = 24/81 = **8/27**
- c) mindestens 2: 1 − (1/3)⁴ − C(4,1)·(2/3)·(1/3)³ = 1 − 1/81 − 8/81 = 72/81 = **8/9**

## A6 — Stetige Verteilung f(x) = C(1−x²) auf [−1,1]
- a) Normierung ∫₋₁¹ C(1−x²) dx = C·4/3 = 1 → **C = 3/4**
- b) E[X]=0 (symmetrisch); Var = E[X²] = (3/4)·∫₋₁¹ x²(1−x²) dx = (3/4)·(4/15) = **1/5**; **σ = 1/√5 = √5/5 ≈ 0,447**
- c) P(|X|<1/2) = (3/4)·[x − x³/3]₋₁/₂^{1/2} = (3/4)·(11/12) = **11/16**

## A7 — (in der Vorlage unleserlich/beschädigt)
Nicht rekonstruierbar. In dieser Position erscheint sonst eine **Zahlentheorie-Aufgabe** (Euler-Theorem + erw. Euklid) — siehe SS14 A7 / WS0809 A7 als Übungsersatz.

## A8 — Affine Chiffre, E→Y, N→K   ⚠️ (Sonderfall!)
E=4,Y=24,N=13,K=10. 4a+b≡24, 13a+b≡10 → 9a≡−14≡12 (mod 26). 9⁻¹≡3 → a≡36≡**10**, b≡24−40≡**10**.
**→ (a,b) = (10,10)** — aber **ggT(10,26)=2 ≠ 1**, d.h. diese Chiffre ist **nicht eindeutig entschlüsselbar** (kein gültiger Affine-Schlüssel; vermutlich Fehler in der Aufgabe). Lösung des Gleichungssystems dennoch (10,10).

## A9 — RSA, c=60, e=43, m=77   ⚠️ (SS25: z=60 — FALSCH)
- 77 = 7·11 → φ = 6·10 = **60**.  d = 43⁻¹ mod 60: 7·43 = 301 = 5·60+1 → **d = 7**.
- z = 60⁷ mod 77: 60²≡**58** (nicht 60!); 60⁴≡58²≡53; 60⁷ = 60⁴·60²·60 ≡ 53·58·60 ≡ 71·60 ≡ **25 (mod 77)**.
- **→ Klarnachricht z = 25**
