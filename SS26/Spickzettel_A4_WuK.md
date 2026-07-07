# 📄 A4-Spickzettel WuK — Vorlage (1 Seite, handschriftlich)

> **So nutzen:** Diese Vorlage **per Hand** auf **eine A4-Seite** übertragen (Pflicht laut Klausurregel).
> Das Abschreiben ist Teil des Lernens. Tipp: 2 Spalten, klein & sauber schreiben, Reihenfolge = Klausur.
> **Merge 02.07.:** um die besten Blöcke des handschriftlichen WS-Spickers ergänzt
> (Fahrstuhl, Urne, Min/Max, Euklid-Tableau, Fermat). **03.07.:** Block ⑦ als Klausur-Fahrplan
> umgebaut (was tun bei welcher Aufgabe) + 🧮 CASIO-Griffe — **regelkonform: keine Berechnungen,
> nur Konzepte & Formeln in Variablen** (Zahlen höchstens als „z.B."-Gedächtnisanker).
> Wird es beim Abschreiben eng: 🧮-Zeilen zuerst eindampfen (nur die Kürzel ÷R / GGT / (1+mk)/a
> behalten), dann bei ⑥ die stetige Zeile, dann ③c Urne — **nie** Fahrstuhl oder den Krypto-Block kürzen.

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

## ⑦ Werkzeugkasten — was tun bei welcher Aufgabe?
**🧮 CASIO-Basics:** ÷R = Teilen mit Rest (CATALOG → Num. Berechn.), **Rest landet in Ans** ·
GGT(a;b) ebenda · Primfaktoren: Zahl EXE → FORMAT → Primfaktorzerl. · negativer Rest → **+ Modul rechnen**

### ⑦a Aufgabentyp „Berechne aᵉ mod n" (Euler, schriftlich)
1) **φ(n):** φ(p)=p−1 · φ(p·q)=(p−1)(q−1) · **φ(p²)=p·(p−1)** ⚠️ nicht (p−1)²! (z.B. φ(25)=20)
   Mutterformel: **φ(n) = n·∏(1−1/p)** über die **verschiedenen** Primteiler p von n (Potenzen egal;
   z.B. φ(36)=36·(1−½)(1−⅓)=12)  🧮 Primteiler: FORMAT → Primfaktorzerl.
2) **ggT(a,n)=1 prüfen** → hinschreiben: „aᵠ⁽ⁿ⁾ ≡ 1 (mod n)" (Euler)
3) **Exponent zerlegen:** e = q·φ + r  🧮 `e ÷R φ` liefert q und r
4) **aᵉ = (aᵠ)^q · aʳ ≡ 1^q · aʳ = aʳ** → aʳ ausrechnen  🧮 `aʳ ÷R n` → Rest = Ergebnis
5) nur falls r groß bleibt (typisch RSA-d): **Quadrier-Kette** 🧮 `a x² ÷R n`, dann `Ans x² ÷R n`, …
   (= Reste von a², a⁴, a⁸, … — **jeden Rest notieren!**) · r als Summe von Zweierpotenzen
   schreiben → zugehörige Reste multiplizieren, je `÷R n`

### ⑦b Aufgabentyp „Finde x, y mit a·x + b·y = c" (erw. Euklid, alle Einzelschritte zeigen)
1) **Euklid vorwärts:** jede Zeile `groß = q·klein + Rest`  🧮 pro Zeile `groß ÷R klein`
2) **ggT = letzter Rest ≠ 0**  🧮 Kontrolle: GGT(a;b) · **Lösbar ⇔ ggT | c** —
   sonst als Antwort hinschreiben: „keine Lösung, da ggT ∤ c" (fertig, Punkte!)
3) **Rückwärts einsetzen:** ggT-Zeile nach dem ggT umstellen, dann wiederholt die **kleinste Zahl
   rechts** durch ihre umgestellte Zeile ersetzen; Produkte als Bausteine **stehen lassen** (nicht ausrechnen)
   ⚠️ Vorzeichen beim Ausklammern: **−(u − q·v) = −u + q·v**
   🧮 nach jedem Schritt Gleichung eintippen → muss wieder den ggT ergeben (Fehler sofort gefunden)
   *(Alternativ Tableau: Zeilen a=q·b+r; unten x=0, y=1; hoch: x=y_u, y=x_u−q·y_u)*
4) **auf c skalieren:** beide Werte ×(c/ggT) → x, y  🧮 Probe: a·x+b·y = c?

### ⑦c Aufgabentyp „Zeige: aᵖ−a ist durch p teilbar" (Beweis)
**Kleiner Fermat** (p prim): **aᵖ ≡ a (mod p)** für jedes a ⇒ aᵖ−a ≡ 0 (mod p) ⇒ teilbar.

### ⑦d Baustein Inverse a⁻¹ mod m (für ⑧+⑨; existiert nur falls ggT(a,m)=1)
Definition: **a·a⁻¹ ≡ 1 (mod m)** — Multiplizieren mit a⁻¹ ersetzt das (verbotene) Teilen durch a.
erw. Euklid mit `a·x+m·y=1` → **Inverse = x mod m**
🧮 Schnellsuche: **(1+m·k)/a** für k=1,2,… — der erste ganzzahlige Wert **ist** a⁻¹ · Probe: `a·a⁻¹ ÷R m` → Rest 1

### ⑨ RSA — idiotensicher, stur abarbeiten (Tier 1!)
**0) Richtung klären:** Kryptogramm **c gegeben → entschlüsseln**, Schritte 1–5 ·
nur m gegeben → Einzeiler **c = mᵉ mod n** (kein φ, kein d — nicht mehr rechnen als gefragt!)
**1) n faktorisieren:** stur durch 2, 3, 5, 7, 11, 13 teilen → **n = p·q**  🧮 FORMAT → Primfaktorzerl.
⚠️ „sieht prim aus" täuscht (z.B. 91 = 7·13)
**2) φ = (p−1)·(q−1)**  ⚠️ bei n = p²: **φ = p·(p−1)** · φ ist **nie** n−1 und **nie** n!
**2b) mehrere e-Kandidaten?** nur der mit **ggT(e, φ) = 1** ist gültig — andere haben keine Inverse, sofort streichen  🧮 GGT(e;φ)
**3) d = e⁻¹ mod φ** → ⑦d  🧮 (1+φ·k)/e für k=1,2,… bis ganzzahlig = d · **Probe: e·d ÷R φ → Rest 1?** ✓
⚠️ hier mit **φ** rechnen, nicht mit n!
**4) m = cᵈ mod n** → Quadrier-Kette ⑦a5: Reste von c², c⁴, c⁸, … **alle aufschreiben** ·
d als Summe von Zweierpotenzen zerlegen → zugehörige Reste multiplizieren, je 🧮 ÷R n
⚠️ **jeden Quadrier-Rest einzeln mit TR prüfen** — 1 Fehler macht alles danach wertlos
**5) End-Probe: mᵉ mod n = c?** ✓ → Ergebnis sicher. Formeln immer hinschreiben (Teilpunkte auch bei Zahlendreher!)

### ⑧ Affine Chiffre  f(x) = (a·x + b) mod 26   (A=0,B=1,…,Z=25)
- 2 bekannte Paare → 2 Gleichungen → **subtrahieren** → `c·a ≡ d (mod 26)`.
- ggT(c,26)=g: falls g>1 und g|d → **durch g teilen** (Modul wird 26/g), sonst keine Lösung.
- danach **b** aus einer Gleichung.  ⚠️ Gültiger Schlüssel nur, wenn **ggT(a,26)=1**.
- Entschlüsseln: x = a⁻¹·(y − b) mod 26 (Inverse → ⑦d).  🧮 Probe: `(a·x+b) ÷R 26` für beide Paare!

---
**Konstanten griffbereit:** 2³=8, 2⁴=16, 2⁵=32 · kleine Primzahlen: 2,3,5,7,11,13 · C(n,2)=n(n−1)/2
**Mini-Checkliste:** Formel hinschreiben ✓ · „(mod …)" notieren ✓ · Bruch kürzen ✓ · Gegenereignis prüfen ✓
