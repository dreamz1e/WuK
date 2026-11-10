# T2 — Wahrscheinlichkeitsrechnung (Wochen 4–5)

> Skript: Kap. 3.1–3.2 (S. 126–186). Baut direkt auf T1 auf: **Laplace-Wahrscheinlichkeit
> ist Kombinatorik im Bruch.** Neu betont: die ODER-Regel **ist** die Siebformel.

---

## 1. Grundbegriffe (Formalia, die Punkte bringen)

- **Ergebnismenge Ω**, Ereignis A ⊆ Ω. In Klausuren oft verlangt: „Geben Sie Ω an."
  → z.B. 2 Würfel: Ω = {(i,j) : 1 ≤ i,j ≤ 6}, |Ω| = 36.
- Axiome: P(A) ≥ 0 · P(Ω) = 1 · A∩B = ∅ ⇒ P(A∪B) = P(A)+P(B).
- Folgerungen: **P(Ā) = 1 − P(A)** · P(∅) = 0 · A ⊆ B ⇒ P(A) ≤ P(B).

**Laplace** (alle Ergebnisse gleichwahrscheinlich): P(A) = |A|/|Ω| — zählen mit T1!

## 2. UND / ODER

- **ODER = Siebformel:** P(A∪B) = P(A) + P(B) − P(A∩B) (drei Mengen analog zu T1 §5).
  Nur bei **disjunkten** Ereignissen darf man einfach addieren!
- **UND:** allgemein P(A∩B) = P(A)·P(B|A) (Multiplikationssatz).
  Nur bei **Unabhängigkeit** gilt P(A∩B) = P(A)·P(B).
- **Gegenereignis-Reflex:** „mindestens ein …" → 1 − P(kein …). Immer zuerst prüfen,
  ob das Komplement leichter zu zählen ist.

## 3. Die Klassiker (SS26-Stärken — behalten und variieren)

### Fahrstuhl / Kugeln auf Fächer (n Akteure, k Ziele, Ω = kⁿ)
- hält nur 1× (alle dasselbe Ziel): k/kⁿ · alle verschieden: k·(k−1)·…·(k−n+1)/kⁿ
- A und B dasselbe Ziel (Rest egal): 1/k
- genau r Ziele mit Gruppengrößen n₁..nᵣ: C(k,r)·M·n!/(n₁!…nᵣ!)/kⁿ
- **Dasselbe Modell in anderer Kleidung:** Geburtstage, Hashkollisionen, Würfelserien —
  und die **Jäger/Hasen-Aufgabe der SS26-Klausur** (3 Akteure, n Ziele)! → T3 §2

### Urne (N Kugeln, r „gute", m gezogen, ohne Zurücklegen)
P(X=k) = C(r,k)·C(N−r,m−k)/C(N,m) — das ist bereits die **hypergeometrische Verteilung** (T3).

## 4. Bedingte Wahrscheinlichkeit

$$P(A\mid B) = \frac{P(A\cap B)}{P(B)}$$

- **Ereignisbaum:** Pfade multiplizieren, passende Pfade addieren. Bei jeder mehrstufigen
  Aufgabe zuerst den Baum zeichnen — er ist der halbe Lösungsweg und gibt Teilpunkte.
- **Totale Wahrscheinlichkeit** (B über Zerlegung A₁,…,Aₙ):
  P(B) = Σ P(B|Aᵢ)·P(Aᵢ)

## 5. Bayes (Ursache aus Wirkung)

$$P(A\mid B) = \frac{P(B\mid A)\,P(A)}{P(B\mid A)\,P(A) + P(B\mid \bar A)\,P(\bar A)}$$

**Rezept:** Die 4 Größen aus dem Text ziehen — P(A) (Prävalenz/Anteil), P(Ā) = 1−P(A),
P(B|A) (Sensitivität/Trefferquote), P(B|Ā) (Falsch-Positiv-Rate) — Baum, einsetzen.

**Geeichtes Beispiel (verifiziert):** Krankheit 1 %, Test erkennt Kranke zu 99 %,
Fehlalarm bei Gesunden 5 %. P(krank | positiv) = 0,0099/(0,0099 + 0,0495) = **1/6 ≈ 16,7 %**.
*Intuition für die Probe: bei seltener Ursache dominieren die Fehlalarme.*

**Varianten drillen:** defekte Teile von 2–3 Lieferanten · Spam-Filter · 2 Urnen, Farbe
gezogen, „aus welcher Urne?" — alles dieselbe Formel mit anderen Wörtern.

## 6. Mini-Drill (Antworten unten)

1. 3 Würfel: P(mindestens eine 6)?
2. 2 Würfel: P(Summe 7 oder beide gleich)?
3. Fahrstuhl, 4 Personen, 7 Stockwerke: P(alle verschieden)?
4. Karte aus 52: P(Dame oder Herz)?
5. Maschinen A/B/C produzieren 50/30/20 % mit Ausschuss 1/2/3 %. Teil ist defekt — P(von C)?
6. Urne 5 rot / 3 blau, 2 ohne Zurücklegen: P(beide gleichfarbig)?

<details><summary>Lösungen</summary>

1. 1 − (5/6)³ = 91/216 ≈ 0,4213.
2. P(7) = 6/36, P(Pasch) = 6/36, disjunkt → 12/36 = 1/3.
3. 7·6·5·4/7⁴ = 840/2401 ≈ 0,3499.
4. 4/52 + 13/52 − 1/52 = 16/52 = 4/13 (Siebformel!).
5. P(def) = 0,005+0,006+0,006 = 0,017 → P(C|def) = 0,006/0,017 = 6/17 ≈ 0,353.
6. [5·4 + 3·2]/(8·7) = 26/56 = 13/28 ≈ 0,464.
</details>

---

# Ergänzungen November 2026

## 7. Die Skript-Klassiker (alle nachgerechnet)

- **Unabhängige Treffer, „wird die Scheibe getroffen?"** p = 0,5 / 0,3 / 0,2 →
  1 − 0,5·0,7·0,8 = **0,72**. Genau einer trifft: 0,5·0,7·0,8 + 0,5·0,3·0,8 + 0,5·0,7·0,2 = **0,47**.
- **Wort aus 3 Buchstaben, alle verschieden:** 26·25·24/26³ = **150/169**. Allgemein k Kugeln auf n Urnen,
  höchstens eine pro Urne: n!/(n−k)!/nᵏ (Fahrstuhl „alle verschieden").
- **Bitfolge der Länge 8 mit genau 4 Nullen:** C(8,4)/2⁸ = **35/128**.
- **Sack 4 weiß, 3 rot, 2 blau, zwei gleichfarbige:** (C(4,2)+C(3,2)+C(2,2))/C(9,2) = 10/36 = **5/18**.
- **Skat (32 Karten), 3 Karten:** genau ein Ass C(4,1)·C(28,2)/C(32,3) = **189/620** ·
  mindestens ein Ass 1 − C(28,3)/C(32,3) = **421/1240**.
- **Skat, 4 Karten:** Werte 7, 8, 9, 10 in beliebigen Farben 4⁴/C(32,4) = **32/4495** ·
  4 Bilder (12 Stück) C(12,4)/C(32,4) = **99/7192**.
- **4 Würfel, Produkt durch 5 teilbar** ⇔ mindestens eine 5: 1 − (5/6)⁴ = **671/1296**.
  **Produkt endet auf 5** ⇔ alle ungerade und mindestens eine 5: (3⁴ − 2⁴)/6⁴ = **65/1296**.
- **Lotto, genau 4 Richtige:** C(6,4)·C(43,2)/C(49,6) = 13 545/13 983 816.
- **Bayes mit 3 Ursachen** (gezinkte Münzen 1/3, 2/3, 1): P(Kopf) = 2/3 → Posterior 1/6, 1/3, 1/2.
- **Zwei unabhängige positive Tests** (1 % krank, 99 % Sensitivität, 5 % Fehlalarm):
  0,01·0,99²/(0,01·0,99² + 0,99·0,05²) = **0,798** — nach einem Test waren es nur 16,7 %.

**Unabhängigkeit prüfen:** A und B sind unabhängig ⇔ P(A∩B) = P(A)·P(B). „Disjunkt" ist etwas anderes
(disjunkte Ereignisse mit positiver Wahrscheinlichkeit sind sogar abhängig).
