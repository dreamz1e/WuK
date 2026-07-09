# 📄 A4-Spickzettel WS27 — Vorlage (1 Seite, handschriftlich)

> **Neuaufbau 09.07.2026 nach der SS26-Klausur.** Was neu ist gegenüber SS26:
> **⓪ Entscheidungsbaum** (Erkennung zuerst!), **①b Entscheidungsmatrix** mit allen
> 4 Grundaufgaben, **①c Siebformel**, **⑥ Verteilungs-Baukasten** (aufstellen + Indikator),
> **④b Ungleichung & ④c Wettkampf**, Krypto: **Euklid-Tableau als Standard**,
> Faktorisierung **bis √n**, Probierformel nur mit **Abbruch bei k=10**.
>
> **Kürzungs-Reihenfolge, falls die Seite nicht reicht** (von zuerst streichen → nie streichen):
> 🧮-TR-Zeilen eindampfen → ⑦ stetige Zeile → ③b Details → …
> **NIE streichen: ⓪, ①b, ①c, ⑥, ⑨-Tableau.** Genau deren Fehlen hat SS26 gekostet.

---

## ⓪ ERKENNUNG — vor jeder Aufgabe 10 Sekunden klassifizieren!

- **„Wie viele Möglichkeiten/Anordnungen…?"** → Kombinatorik → Matrix ①b
- **„…durch A ODER B ODER C / mindestens eine Eigenschaft"** (überlappend) → **Siebformel ①c**
- **„Wahrscheinlichkeit, dass…"** + endlich & gleichwahrscheinlich → Laplace ③
- **feste Anzahl n unabhängiger Versuche, Treffer/Niete** → Binomial ④
- **„Wie oft mindestens, damit P ≥ …?"** → Ungleichung ④b
- **zwei Spieler/Serien im Vergleich** → Wettkampf ④c
- **Ziehen ohne Zurücklegen aus 2 Sorten** → hypergeometrisch ③c
- **„Test/Diagnose/Ursache gegeben Wirkung"** → Bayes ⑤
- **„Verteilung von X aufstellen / E[X] / Var(X)"** ohne Standardnamen → **Baukasten ⑥**
- **mod n, Schlüssel, verschlüsselt** → Krypto ⑦–⑨

## ①a Permutationen
- n verschiedene: **n!** · Multimenge: **n!/(n₁!·…·nₖ!)**
- „beginnt mit X": Plätze fixieren, Rest permutieren · „zusammen": als Block zählen

## ①b Auswahl: k aus n — DIE MATRIX (erst 2 Fragen, dann Formel!)
| | **mit Wdh.** | **ohne Wdh.** |
|---|---|---|
| **Reihenfolge wichtig** (Wort, PIN, Tupel, „nacheinander") | **nᵏ** | **n!/(n−k)!** |
| **Reihenfolge egal** (Auswahl, Gremium, Hand, „gleichzeitig") | **C(n+k−1, k)** ⚠️Eis! | **C(n, k)** |

- C(n,k)=n!/(k!(n−k)!) · C(n,k)=C(n,n−k) · C(n,0)=C(n,n)=1 · C(n,2)=n(n−1)/2
- „erste m Pflicht" → C(n−m,k−m) · „genau j aus Gruppe p" → C(p,j)·C(n−p,k−j)
- „mindestens j" → summieren oder Gegenereignis
- **Eis-Merker:** 3 Kugeln, 10 Sorten, Reihenfolge egal, Wdh. ja → C(12,3)=220 (**nicht** 10³!)

## ①c Siebformel (Inklusion–Exklusion) ⭐NEU
- 2 Mengen: **|A∪B| = |A|+|B| − |A∩B|**
- 3 Mengen: **|A∪B∪C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|**
- allgemein: einzeln + · Paare − · Tripel + · … (Vorzeichen wechseln)
- Teilbarkeit 1..N: |durch t| = **⌊N/t⌋**; Schnitt = durch **kgV** teilbar
- „keine der Eigenschaften" = N − |A∪B∪C| · gilt identisch für **P**: P(A∪B)=P(A)+P(B)−P(A∩B)
- Derangement (kein Element am Platz): **Dₙ = n!·Σₖ₌₀ⁿ (−1)ᵏ/k!** (D₃=2, D₄=9)
- **Schubfach:** n+1 Objekte in n Fächer → 1 Fach doppelt; allg. ⌈n/m⌉

## ③ Laplace: P = günstige/mögliche
- 2 Würfel: 36 · 3 Würfel: 216 · **„mindestens ein" → 1 − P(kein)**
- UND (unabh.): P(A)·P(B) · ODER: Siebformel ①c
### ③b Fahrstuhl (n Pers., k Stockw., Ω=kⁿ)
- hält nur 1×: k/kⁿ · alle einzeln: k·(k−1)·…·(k−n+1)/kⁿ · A+B zusammen: 1/k
- genau r Stopps, Gruppen n₁..nᵣ: **C(k,r)·M·n!/(n₁!…nᵣ!)/kⁿ** (M = Zuordnungen der Größen)
### ③c Urne/Hypergeometrisch (N gesamt, r „gut", m gezogen, ohne Zurückl.)
- **P(X=k) = C(r,k)·C(N−r,m−k)/C(N,m)** · E[X] = m·r/N · mit Zurückl. → Binomial p=r/N
- 2 gleichfarbig: Σcᵢ(cᵢ−1)/(N(N−1))

## ④ Binomial: X~Bin(n,p), feste n, unabhängig, 2 Ausgänge
- **P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ** · **E=np** · **Var=np(1−p)** · σ=√Var
- „mindestens/höchstens" → summieren (kürzere Seite!) oder Gegenereignis
### ④b Mindest-n-Ungleichung ⭐ („wie oft, damit ≥ s mind. 1 Treffer")
- **1−(1−p)ⁿ ≥ s ⇔ (1−p)ⁿ ≤ 1−s ⇔ n ≥ ln(1−s)/ln(1−p)** → aufrunden!
- ⚠️ ln(1−p) < 0 → beim Teilen **dreht sich die Ungleichung** · Probe mit n−1 und n!
- z.B. p=0,2, s=0,955: n ≥ ln 0,045/ln 0,8 = 13,9 → **14**
### ④c Wettkampf / Vergleich zweier Serien ⭐NEU
1. Reste bestimmen: X~Bin(n_A,p_A), Y~Bin(n_B,p_B) (nur **verbleibende** Versuche!)
2. Gewinnbedingung als Ungleichung: Stand_A + X > Stand_B + Y ⇔ **X ≥ Y + Δ**
3. **P = Σ_y P(Y=y)·P(X ≥ y+Δ)** — über die kleinere Serie summieren
4. „Gleichstand" ggf. separat · Ansatz hinschreiben = Großteil der Punkte

## ⑤ Bayes (Test/Ursache)
- **P(A|B) = P(B|A)·P(A) / [P(B|A)·P(A) + P(B|Ā)·P(Ā)]**
- erst 4 Größen aus dem Text: P(A), P(Ā)=1−P(A), P(B|A), P(B|Ā) · Baum zeichnen

## ⑥ Verteilungs-Baukasten (X ohne Standardnamen) ⭐NEU — Jäger/Hasen-Typ!
1. **Ω und |Ω|** festlegen (oft Laplace: Möglichkeiten^Akteure, z.B. n³ bei 3 Jägern)
2. **Werte von X** auflisten (X ∈ {…})
3. je Wert **Fälle abzählen** (Kombinatorik ①!) → P(X=k) = günstige/|Ω|
4. **Kontrolle: Σ P(X=k) = 1** (Pflicht — findet Zählfehler sofort!)
5. **E[X] = Σ k·P(X=k)** · **E[X²] = Σ k²·P(X=k)** · **Var = E[X²] − (E[X])²**
- **Indikator-Trick** (E ohne Verteilung!): X = Σ Iᵢ → **E[X] = Σ P(Iᵢ=1)** (Linearität, gilt immer)
  z.B. n Hasen, 3 Jäger: P(Hase i getroffen) = 1−((n−1)/n)³ → E[X] = n·(1−((n−1)/n)³)
- Jäger-Muster: P(X=1)=1/n² · P(X=2)=3(n−1)/n² · P(X=3)=(n−1)(n−2)/n²
- Min/Max n Würfel: P(Max ≤ k)=(k/6)ⁿ → P(Max=k)=(kⁿ−(k−1)ⁿ)/6ⁿ; Min analog (7−k)
- geometrisch (1. Treffer im k-ten Versuch): P=(1−p)ᵏ⁻¹p · E=1/p

## ⑦ Stetige ZV
- **C aus ∫f=1** · E[X]=∫x·f · E[X²]=∫x²·f · Var=E[X²]−E² · P(a<X<b)=∫ₐᵇf

---

## ⑧ KRYPTO-WERKZEUGKASTEN
**🧮 CASIO:** ÷R = Teilen mit Rest (Rest in Ans) · GGT(a;b) · FORMAT→Primfaktorzerlegung · negativer Rest → +Modul

### ⑧a Erweiterter Euklid als TABLEAU ⭐ Standardmethode (statt Rückwärtseinsetzen!)
Ziel: x, y mit a·x + b·y = ggT. Zeilen: (Rest | x | y), Start: (a|1|0), (b|0|1);
je Schritt q = ⌊oben/unten⌋, **neue Zeile = obere − q·untere** (alle 3 Spalten!). Letzte Zeile mit Rest ≠ 0 ⇒ ggT, x, y.
```
Beispiel 396, 317:   396 |  1 |  0
                     317 |  0 |  1     q=1
                      79 |  1 | −1     q=4
                       1 | −4 |  5  ← ggT=1: −4·396 + 5·317 = 1 ✓
```
- **Probe (Pflicht): a·x + b·y ausrechnen = ggT?** · Lösbar ⇔ ggT | c; skalieren ×(c/ggT)
- ggT ∤ c → „keine Lösung" hinschreiben (fertig, Punkte!)

### ⑧b Inverse a⁻¹ mod m (existiert ⇔ ggT(a,m)=1)
- Tableau mit (m, a) → y-Spalte der ggT-Zeile = Kandidat → **Inverse = Wert mod m** (negativ → +m)
- oben: 317⁻¹ mod 396 = 5 · **Probe: a·a⁻¹ ÷R m → Rest 1?** ✓
- Schnelltest (nur wenn a klein!): **(1+m·k)/a** für k=1..10 — ⚠️ **k=10 ohne Treffer → STOPP:
  Modul falsch? (φ statt n!) Faktorisierung falsch? → Tableau rechnen!**

### ⑧c φ & Euler & schnelle Exponentiation
- φ(p)=p−1 · **φ(p·q)=(p−1)(q−1)** · φ(p²)=p(p−1) ⚠️nicht (p−1)²! · allg. φ(n)=n·∏(1−1/p)
- ggT(a,n)=1 ⇒ **a^φ(n) ≡ 1 (mod n)** · Exponent: e = q·φ + r (🧮 e ÷R φ) → aᵉ ≡ aʳ
- **Quadrier-Kette:** a², a⁴, a⁸, … je mod n, **jeden Rest notieren + mit TR prüfen**;
  Exponent als Summe von Zweierpotenzen → zugehörige Reste multiplizieren, je mod n
- Fermat (p prim): aᵖ ≡ a (mod p) ⇒ p | aᵖ−a (Beweisaufgabe!)

### ⑨ RSA — stur abarbeiten
**0)** c gegeben → entschlüsseln (1–5) · nur m gegeben → Einzeiler c = mᵉ mod n
**1) Faktorisieren bis √n!** Primzahlen **2,3,5,7,11,13,17,19** (reicht für n<529; √n ausrechnen!)
   🧮 FORMAT→Primfaktorzerl. · ⚠️ „sieht prim aus" täuscht: 437=19·23, 91=7·13
**2) φ=(p−1)(q−1)** · ⚠️ nie n−1, nie n · **ab hier nur noch mit φ rechnen!**
**2b)** mehrere e? nur ggT(e,φ)=1 gültig
**3) d = e⁻¹ mod φ** → **Tableau ⑧a/⑧b mit (φ, e)** · Probe: e·d ÷R φ → Rest 1 ✓
   (Schnelltest (1+φk)/e nur bis k=10, dann STOPP→Tableau)
**4) m = cᵈ mod n** → Quadrier-Kette ⑧c (jetzt wieder Modul n!)
**5) Endprobe: mᵉ mod n = c?** ✓ · Formeln immer hinschreiben (Teilpunkte!)

### ⑩ Affine Chiffre f(x)=(a·x+b) mod 26 · A=0!…Z=25
1. 2 Paare → 2 Gleichungen · 2. subtrahieren: **a·(x₁−x₂) ≡ y₁−y₂** (negativ→+26)
3. g=ggT(Koeff.,26): g=1→weiter · g|rechts→**alles ÷g, auch Modul!** · sonst „keine Lösung"
4. a = Koeff.⁻¹·rechts (Inverse via ⑧b, im kleinen Modul) · g Kandidaten a₀, a₀+26/g,… → nur **ggT(a,26)=1** gültig
5. b ≡ y₁ − a·x₁ (mod 26) · 6. **Probe mit beiden Paaren!** · Entschlüsseln: x = a⁻¹(y−b) mod 26
### ⑩b Klassiker: Caesar = Verschiebung y=x+k mod 26 · Vigenère = Caesar mit Schlüsselwort
  spaltenweise · Diffie-Hellman: öffentlich p, g; A: a geheim, α=gᵃ; B: b, β=gᵇ; Schlüssel K=βᵃ=αᵇ=g^(ab) mod p

---
**Konstanten:** 2¹⁰=1024 · Primzahlen bis 30: 2,3,5,7,11,13,17,19,23,29 · Quadrate: 17²=289, 19²=361, 23²=529
**Checkliste je Aufgabe:** klassifiziert? ✓ Formel notiert? ✓ (mod …) dabei? ✓ Σ P=1 / Probe? ✓ „mindestens"→Gegenereignis? ✓
**Abbruchdisziplin: 3 min kein Fortschritt → markieren, nächste Aufgabe, später zurück.**
