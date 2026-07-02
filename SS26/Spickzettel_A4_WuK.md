# 📄 A4-Spickzettel WuK — Vorlage (1 Seite, handschriftlich)

> **So nutzen:** Diese Vorlage **per Hand** auf **eine A4-Seite** übertragen (Pflicht laut Klausurregel).
> Das Abschreiben ist Teil des Lernens. Tipp: 2 Spalten, klein & sauber schreiben, Reihenfolge = Klausur.
> **Merge 02.07.:** um die besten Blöcke des handschriftlichen WS-Spickers ergänzt
> (Fahrstuhl, Urne, Min/Max, Euklid-Tableau, Fermat). Wird es eng: zuerst bei ⑥ die
> stetige Zeile kürzen, dann ③ Urne — **nie** Fahrstuhl oder den Krypto-Block.

---

## ① Permutation mit Wiederholung (Multimengen)
- Alle Anordnungen: **n! / (n₁!·n₂!·…·nₖ!)**  (nᵢ = Häufigkeit je Element)
- „beginnt mit X / endet mit Y": Plätze **fixieren**, Rest neu permutieren
- „X stehen zusammen": die X als **einen Block** zählen (Block = 1 Element)

## ② Auswahl-Kombinatorik (k aus n)
- **C(n,k) = n!/(k!(n−k)!)**,  C(n,k)=C(n,n−k),  C(n,0)=C(n,n)=1
- „erste m Pflicht" → C(n−m, k−m)   ·   „genau j von ersten p" → C(p,j)·C(n−p,k−j)
- „mindestens j" = Summe (j, j+1, …)   ·   „X ODER Y, nicht beide" = Fälle addieren
- mit Wiederholung (Multimengen-Auswahl): **C(n+k−1, k)**

## ③ Laplace-Wahrscheinlichkeit
- **P = günstige / mögliche**;  2 Würfel: 36, 3 Würfel/Würfe: 216
- **Gegenereignis:** P(mind. ein …) = **1 − P(kein …)**
- UND (unabh.): P(A∩B)=P(A)·P(B)   ·   ODER: P(A∪B)=P(A)+P(B)−P(A∩B)

### ③b Fahrstuhl (n Pers., k Stockw.; Grundraum kⁿ) ⟵ 16–18 Pkt in modernen Klausuren!
- hält **nur 1×**: k/kⁿ   ·   hält **n-mal** (alle einzeln): k·(k−1)·…·(k−n+1)/kⁿ
- **A+B gemeinsam** (Rest egal): k·kⁿ⁻²/kⁿ = **1/k**   ·   **A allein**: k·(k−1)ⁿ⁻¹/kⁿ
- **genau r Stopps** mit Verteilung n₁,…,nᵣ: **C(k,r) · M · n!/(n₁!·…·nᵣ!) / kⁿ**
  M = Zuordnungen der Gruppengrößen auf die r Stockwerke (alle Größen gleich → M=1; z.B. Größen 1+3 → M=2)
- Würfel-Ergebnisse ununterscheidbar („Stars & Bars"): **C(n+5, 5)** bei n Würfeln

### ③c Urne (N Kugeln, r Treffer-Farbe, m gezogen)
- ohne Zurücklegen (hypergeom.): **P(X=k) = C(r,k)·C(N−r,m−k)/C(N,m)** · mit Zurücklegen: Binomial mit p=r/N
- **2 gleichfarbig** (ohne Zurückl.): **Σ cᵢ(cᵢ−1) / (N(N−1))**   ·   „mindestens" → Gegenereignis!

## ④ Binomialverteilung
- **P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ**
- „mindestens/höchstens": summieren oder Gegenereignis;  E[X]=n·p,  Var=n·p·(1−p)
- „min. 1 Treffer ≥ Schwelle" → (1−p)ⁿ ≤ (1−Schwelle) → n ≥ ln(…)/ln(1−p)

## ⑤ Bayes  ⟵ Punkte-Goldgrube, schematisch
- **P(A|B) = P(B|A)·P(A) / [ P(B|A)·P(A) + P(B|Ā)·P(Ā) ]**
- Erst die 4 Größen aus Text lesen: P(A), P(Ā)=1−P(A), P(B|A), P(B|Ā). Baum hilft.

## ⑥ Zufallsvariable (Tier 3)
- diskret: **E[X]=Σ k·P(X=k)**,  **Var=E[X²]−(E[X])²**,  σ=√Var
- **Min/Max 2 Würfel:** P(Min=k)=**[(7−k)²−(6−k)²]/36** · P(Max=k)=**[k²−(k−1)²]/36** (n Würfel: Exponent n)
- stetig: **C** aus **∫f dx = 1**;  E[X]=∫x·f dx;  E[X²]=∫x²·f dx;  P(a<X<b)=∫ₐᵇ f dx

---

## ⑦/⑧/⑨ KRYPTO-Werkzeugkasten (gemeinsame Basis!)
**ggT & erw. Euklid:** ggT = letzter Rest ≠ 0. Rückwärts einsetzen → `a·x+b·y=ggT`.
`a·x+b·y=c` lösbar ⇔ **ggT(a,b) | c**.
**Euklid-Tableau** (schneller als Rückwärts-Einsetzen): Zeilen `a = q·b + r` untereinander;
unterste Zeile **x=0, y=1**, dann hoch: **x = y_unten**, **y = x_unten − q·y_unten** → oben gilt a·x+b·y=ggT (bei d=e⁻¹ mod φ: **d = y (mod φ)**).
**Kleiner Fermat** (p prim): **aᵖ ≡ a (mod p)** — Teilbarkeitsbeweise (z.B. a⁵−a durch 5: p=5 ✓).
**φ-Funktion:**  φ(p)=p−1 ·  **φ(p·q)=(p−1)(q−1)** ·  **φ(p²)=p·(p−1)**  ⚠️ (z.B. φ(25)=20!)
**Inverse a⁻¹ mod m:** erw. Euklid mit `a·x+m·y=1` → x mod m  (nur falls ggT(a,m)=1).
**Euler-Theorem:** ggT(a,n)=1 ⇒ **aᵠ⁽ⁿ⁾ ≡ 1 (mod n)** ⇒ Exponent **mod φ(n)** reduzieren.
**Schnelle Exponentiation:** a², a⁴, a⁸ … durch wiederholtes Quadrieren — **jeden Schritt mit TR prüfen!**

### ⑨ RSA-Entschlüsselung (Rezept)
1) n = p·q faktorisieren   2) φ = (p−1)(q−1)   3) **d = e⁻¹ mod φ** (erw. Euklid)
4) **m = c^d mod n** (schnelle Exp.).  (Verschlüsseln: c = m^e mod n.)

### ⑧ Affine Chiffre  f(x) = (a·x + b) mod 26   (A=0,B=1,…,Z=25)
- 2 bekannte Paare → 2 Gleichungen → **subtrahieren** → `c·a ≡ d (mod 26)`.
- ggT(c,26)=g: falls g>1 und g|d → **durch g teilen** (Modul wird 26/g), sonst keine Lösung.
- danach **b** aus einer Gleichung.  ⚠️ Gültiger Schlüssel nur, wenn **ggT(a,26)=1**.
- Entschlüsseln: x = a⁻¹·(y − b) mod 26.

---
**Konstanten griffbereit:** 2³=8, 2⁴=16, 2⁵=32 · kleine Primzahlen: 2,3,5,7,11,13 · C(n,2)=n(n−1)/2
**Mini-Checkliste:** Formel hinschreiben ✓ · „(mod …)" notieren ✓ · Bruch kürzen ✓ · Gegenereignis prüfen ✓
