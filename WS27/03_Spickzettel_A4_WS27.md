# 📄 A4-Spickzettel WS27 — Vorlage (1 Seite, einseitig, handschriftlich)

> **Stand 10.11.2026 — Vollabdeckung der offiziellen Themen-Auswahl.**
> Jede Zeile ist in **[04_Spickzettel_erklaert.md](04_Spickzettel_erklaert.md)** erklärt
> (wann benutzen, warum gilt das, Mini-Beispiel, Falle). Erst dort verstehen, dann hier abschreiben.
>
> **Vor dem Schreiben prüfen:** Gilt weiterhin „1 A4-Seite, einseitig, handschriftlich"?
> (Stand SS26. Falls beidseitig erlaubt: Vorderseite ⓪–⑦, Rückseite ⑧–⑫ mit mehr Luft.)
>
> **Layout-Empfehlung:** Querformat, 3 Spalten, Fineliner 0,3 mm.
> Spalte 1 = ⓪–② Kombinatorik · Spalte 2 = ③–⑦ Wahrscheinlichkeit · Spalte 3 = ⑧–⑫ Krypto.
>
> **Prioritäten:** ● = Pflicht (nie streichen) · ○ = wenn Platz ist.
> Kürzen in dieser Reihenfolge: Beispiele in Klammern → ○-Zeilen → 🧮-Zeilen. **Nie: ⓪, ①, ②, ⑥, ⑧a, ⑨.**

---

## ⓪ ERKENNUNG — 10 Sekunden vor jeder Aufgabe ●

| Signal im Text | Modell |
|---|---|
| „Wie viele Möglichkeiten / Anordnungen / Auswahlen" | Kombinatorik → ① |
| „A **oder** B **oder** C", „mindestens eine Eigenschaft", überlappend | **Siebformel ②** |
| „mit Sicherheit", „mindestens zwei gleiche", „zeigen Sie, dass es … gibt" | Schubfach ②b |
| „Wahrscheinlichkeit", endlich viele gleich wahrscheinliche Fälle | Laplace ③ |
| „Test / Diagnose / stammt von / Ursache, gegeben Beobachtung" | Bayes ⑤ |
| feste Zahl n unabhängiger Versuche, Treffer ja/nein, p konstant | Binomial ④ |
| „ohne Zurücklegen", Stichprobe aus 2 Sorten | hypergeometrisch ③c |
| „wie oft mindestens, damit P ≥ …" | Mindest-n ④b |
| zwei Spieler/Serien, Zwischenstand, „gewinnt … noch?" | Wettkampf ④c |
| „bis zum ersten Treffer" | geometrisch ⑥ |
| „Verteilung von X", „E(X), Var(X)" ohne Standardnamen | **Baukasten ⑥** |
| Dichte f(x), Konstante C | stetig ⑦ |
| mod, Schlüssel, Chiffre, ggT | Krypto ⑧–⑫ |

## ① Zählen ●

**Permutation:** n! · Multimenge **n!/(n₁!·…·nₖ!)** · „zusammen" = Block (×Block intern) · Platz fix → Rest permutieren

**k aus n — erst 2 Fragen, dann Formel:**

| | **Wdh. ja** | **Wdh. nein** |
|---|---|---|
| **Reihenfolge wichtig** (Wort, PIN, Podium, „nacheinander") | **nᵏ** | **n!/(n−k)!** |
| **Reihenfolge egal** (Auswahl, Tüte, Gremium, „gleichzeitig") | **C(n+k−1, k)** ⚠ Eis, Domino | **C(n,k)** |

- C(n,k)=n!/(k!(n−k)!) = C(n,n−k) · C(n,1)=n · C(n,2)=n(n−1)/2 · Pascal: C(n,k)=C(n−1,k−1)+C(n−1,k)
- „genau j aus Gruppe g" → C(g,j)·C(n−g,k−j) · „mindestens" → Gegenereignis oder Summe · „Pflicht" → C(n−1,k−1)
- k gleiche Dinge auf n Empfänger = C(n+k−1,k); jeder ≥ 1: C(k−1,n−1)
- **(a+b)ⁿ = Σ C(n,k)·aᵏ·bⁿ⁻ᵏ** → Koeff. von xᵏ in (a+bx)ⁿ: C(n,k)·aⁿ⁻ᵏ·bᵏ · Σ C(n,k) = 2ⁿ = |P(M)|
- ○ Multinomial: Koeff. xᵃyᵇzᶜ in (x+y+z)ⁿ = n!/(a!b!c!) · Gitterwege r rechts/h hoch: C(r+h, r)
- ○ Mengen: |A∪B|=|A|+|B|−|A∩B| · |A×B|=|A|·|B| · A\B = A∩B̄ · De Morgan: (A∪B)‾ = Ā∩B̄

## ② Siebformel ●

- **|A∪B| = |A|+|B|−|A∩B|**
- **|A∪B∪C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|** (einzeln +, Paare −, Tripel +, …)
- Teilbarkeit in 1..N: **⌊N/t⌋**, Schnitt = **kgV** (⚠ nicht Produkt: kgV(4,6)=12)
- „keine" = N − |A∪B∪C| · **rückwärts:** Formel nach der fehlenden Größe umstellen
- gilt genauso für P · Derangement Dₙ = n!·Σ(−1)ᵏ/k! (D₃=2, D₄=9, D₅=44)
- **②b Schubfach:** n+1 Objekte, n Fächer → ein Fach ≥ 2 · sicher k gleiche bei n Fächern: **(k−1)·n+1**
  · Beweis-Schema: Fächer definieren → Objekte zählen → „mehr Objekte als Fächer"

## ③ Laplace: P = günstig/möglich ●

- **„mindestens ein" → 1 − P(kein)** · 2 Würfel 36, 3 Würfel 216 · Skat 32 = 4 Farben × 8 Werte
- UND unabhängig: P(A)·P(B) · allgemein P(A∩B)=P(A)·P(B|A) · ODER: ②
- unabhängige Treffer p₁,p₂,p₃, „mind. einer": **1−(1−p₁)(1−p₂)(1−p₃)**
- **③b Fahrstuhl** (n Pers., k Ziele, Ω=kⁿ): alle gleich k/kⁿ · alle verschieden k!/(k−n)!/kⁿ ·
  ○ genau r Ziele, Gruppen n₁..nᵣ: C(k,r)·M·n!/(n₁!…nᵣ!)/kⁿ
- **③c Hypergeometrisch** (N gesamt, r gut, m gezogen): **P(X=k)=C(r,k)·C(N−r,m−k)/C(N,m)** · E=m·r/N

## ④ Binomial X~Bin(n,p) ●

- **P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ** · **E=np** · **Var=np(1−p)**
- **④b Mindest-n:** 1−(1−p)ⁿ ≥ s ⇔ **n ≥ ln(1−s)/ln(1−p)** → aufrunden, ⚠ Ungleichung dreht (ln<0), Probe n−1 und n
  (p=0,2; s=0,955 → 13,9 → 14) · „mind. 2 Treffer": P(X≤1) ≤ 1−s, n probieren
- **④c Wettkampf:** ① Reste X~Bin(n_A,p_A), Y~Bin(n_B,p_B) ② Stand_A+X > Stand_B+Y ⇔ **X ≥ Y+Δ**
  ③ **P = Σ_y P(Y=y)·P(X ≥ y+Δ)** (über die kürzere Serie) ④ Gleichstand extra

## ⑤ Bayes ●

- total: **P(B)=Σ P(B|Aᵢ)·P(Aᵢ)** · **P(Aⱼ|B)=P(B|Aⱼ)·P(Aⱼ)/P(B)** · Baum: Pfad × , Pfade +
- erst alle Größen aus dem Text: P(A), P(Ā), P(B|A), P(B|Ā)

## ⑥ Verteilungs-Baukasten ●

1. **|Ω|** (oft Ziele^Akteure) 2. **Werte von X** 3. je Wert Fälle zählen → P(X=k) 4. **Σ P = 1 ✓** 5. Tabelle k | P | k·P | k²·P
- **E[X]=Σ k·P(X=k)** · **Var=E[X²]−(E[X])²** · σ=√Var · F(x)=P(X≤x)
- E[aX+b]=aE[X]+b · Var(aX+b)=a²Var(X) · E[X+Y]=E[X]+E[Y] immer
- **Indikator:** X=ΣIᵢ ⇒ **E[X]=ΣP(Iᵢ=1)** (Hasen: n·(1−((n−1)/n)³))
- Jäger (3 Akteure, n Ziele): 1/n² · 3(n−1)/n² · (n−1)(n−2)/n²
- Max zweier Würfel: (2k−1)/36 · Min: (13−2k)/36 · gleichverteilt 1..n: E=(n+1)/2, Var=(n²−1)/12
- geometrisch: P(X=k)=(1−p)ᵏ⁻¹p · **P(X>k)=(1−p)ᵏ** · E=1/p · ○ Poisson: λᵏe^(−λ)/k!, E=Var=λ

## ⑦ Stetig ○

- C aus ∫f=1 · E=∫x·f · E[X²]=∫x²·f · Var=E[X²]−E² · P(a<X<b)=∫ₐᵇf · gleichvert. [a,b]: E=(a+b)/2, Var=(b−a)²/12

---

## ⑧ Krypto-Werkzeuge ●

**⑧a Erweiterter Euklid als TABLEAU** (Rest | x | y), Start (a|1|0), (b|0|1), q=⌊oben/unten⌋, **neu = obere − q·untere**
```
396 |  1 |  0
317 |  0 |  1    q=1
 79 |  1 | −1    q=4
  1 | −4 |  5    ← ggT=1:  −4·396 + 5·317 = 1 ✓
```
- **Probe: a·x+b·y = ggT** · a·x+b·y=c lösbar ⇔ **ggT | c**, dann ×(c/ggT) · sonst „keine Lösung" hinschreiben
- **⑧b Inverse a⁻¹ mod m** (⇔ ggT(a,m)=1): Tableau (m,a), y-Wert mod m (negativ → +m) · **Probe a·a⁻¹ mod m = 1**
- a·x ≡ b (mod m): g=ggT(a,m) · g∤b → keine · sonst alles ÷g (auch Modul), x₀=(a/g)⁻¹·(b/g), **g Lösungen** x₀+k·m/g
- **⑧c φ:** φ(p)=p−1 · **φ(pq)=(p−1)(q−1)** · φ(pᵏ)=pᵏ⁻¹(p−1) · φ(n)=n·∏(1−1/p)
- **Euler:** ggT(a,n)=1 ⇒ a^φ(n)≡1 → Exponent mod φ nehmen · **Fermat:** aᵖ≡a (mod p)
- **Quadrier-Kette:** a, a², a⁴, a⁸ … je mod n **notieren**; Exponent = Summe von Zweierpotenzen
- ○ p,q aus n und φ: **p+q = n−φ+1**, dann x²−(p+q)x+n=0
- ○ Beweise: aᵖ−a → Fermat · (m−1)²=m²−2m+1≡1 · a³−a=(a−1)a(a+1)

## ⑨ RSA ●

1. **Faktorisieren bis √n** — Primzahlen 2,3,5,7,11,13,17,19,23,29,31 (437=19·23!)
2. **φ=(p−1)(q−1)** — ab hier Modul φ
3. **d=e⁻¹ mod φ** per Tableau (φ,e) · Probe e·d mod φ = 1 · mehrere e: nur ggT(e,φ)=1 gültig
4. **m=cᵈ mod n** (wieder Modul n) per Quadrier-Kette · verschlüsseln: c=mᵉ mod n
5. Endprobe mᵉ mod n = c · warum: m^(ed)=m^(1+kφ)≡m

## ⑩ Affine y=(a·x+b) mod 26, A=0…Z=25 ●

- 2 Paare → subtrahieren: a·Δx ≡ Δy (mod 26) → ⑧b (ggT-Fälle!) → nur ggT(a,26)=1 gültig
- b = y₁−a·x₁ mod 26 · **Probe mit beiden Paaren** · entschlüsseln x=a⁻¹(y−b) mod 26

## ⑪ Klassiker ○

- Caesar y=x+k mod 26 (26 Schlüssel, häufigster Buchstabe = E=4 → k) · monoalphabetisch: 26! Schlüssel, Häufigkeitsanalyse
- Vigenère: yᵢ = xᵢ + Schlüsselbuchstabe(i mod Länge) mod 26 · entschlüsseln: minus

## ⑫ Diffie-Hellman ○

- öffentlich p, g · A: α=gᵃ mod p · B: β=gᵇ mod p · **K=βᵃ=αᵇ mod p**

---
**Konstanten:** 17²=289 · 19²=361 · 23²=529 · 29²=841 · 31²=961 · 2¹⁰=1024 · A0 B1 C2 D3 E4 F5 G6 H7 I8 J9 K10 L11 M12 N13 O14 P15 Q16 R17 S18 T19 U20 V21 W22 X23 Y24 Z25
**🧮** ÷R = Teilen mit Rest · GGT(a;b) · negativer Rest → +Modul
**Jede Aufgabe:** klassifiziert? · Formel notiert? · (mod …) dabei? · Probe? — **3 min kein Fortschritt → weiter.**
