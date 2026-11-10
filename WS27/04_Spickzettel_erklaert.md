# 📖 Der Spickzettel, erklärt — Zeile für Zeile

> Begleitdokument zu **[03_Spickzettel_A4_WS27.md](03_Spickzettel_A4_WS27.md)**.
> Der Spicker ist nur dann etwas wert, wenn du bei jeder Zeile weißt: **Wann nehme ich sie?
> Warum stimmt sie? Wo ist die Falle?** Genau das steht hier — mit je einem nachgerechneten
> Mini-Beispiel. Zwei der im Juli verlorenen Aufgaben standen auf dem alten Spicker und wurden
> nicht erkannt; dieses Dokument ist das Gegenmittel.
>
> **Benutzung:** In Woche 10 einmal komplett durchgehen, dabei jede Beispielrechnung zudecken
> und selbst rechnen. Was du nicht erklären kannst, zurück ins Themen-Modul (T1–T4).

---

## ⓪ Erkennung

**Wozu:** Die Klausur nennt das Thema nicht. Der erste Schritt jeder Aufgabe ist deshalb die
Einordnung — erst danach lohnt sich eine Formel.

**So gehst du vor:** Aufgabe lesen, Signalwort unterstreichen, Modellnamen an den Rand schreiben.
Die drei häufigsten Verwechslungen:

| Verwechslung | Unterscheidungsfrage |
|---|---|
| nᵏ ↔ C(n+k−1,k) | Ist die **Reihenfolge** wichtig? (Eis in der Tüte: nein → C(n+k−1,k)) |
| Binomial ↔ hypergeometrisch | Wird **zurückgelegt** bzw. bleibt p gleich? (Stichprobe aus Lieferung: nein → hypergeometrisch) |
| Laplace ↔ Bayes | Ist nach einer **Ursache bei bekannter Beobachtung** gefragt? Dann Bayes. |

---

## ① Zählen

### Permutationen
- **n!** = Anzahl der Reihenfolgen von n verschiedenen Dingen (n Wahlmöglichkeiten für Platz 1, n−1 für Platz 2, …).
- **Multimenge n!/(n₁!·…·nₖ!)**: Gleiche Dinge untereinander zu tauschen ändert nichts, also teilt man deren Vertauschungen heraus.
  *Beispiel:* RADAR hat 5 Buchstaben, 2 R, 2 A → 5!/(2!·2!) = **30**.
- **Block:** „Die Mathebücher stehen zusammen" → Block als ein Objekt zählen, dann innen permutieren.
  *Beispiel:* 4 Mathe-, 3 Info-, 3 Physik-, 2 Englischbücher, jede Gruppe zusammen: 4! (Reihenfolge der Blöcke) · 4!·3!·3!·2! = **41 472**.
- **Falle:** „beginnt mit S" bei MISSISSIPPI: ein S ist verbraucht, also schrumpft auch die S-Gruppe im Nenner.

### Die Matrix „k aus n"
Zwei Fragen entscheiden alles: **Ist die Reihenfolge wichtig? Darf sich etwas wiederholen?**

| Feld | Warum die Formel stimmt | Beispiel |
|---|---|---|
| nᵏ | k Plätze, jedes Mal n Möglichkeiten | PIN mit 4 Ziffern: 10⁴ |
| n!/(n−k)! | n · (n−1) · … (k Faktoren), weil nichts doppelt vorkommt | Podium aus 10 Läufern: 10·9·8 = 720 |
| C(n,k) | wie oben, aber die k! Reihenfolgen zählen als eine | Lotto: C(49,6) |
| C(n+k−1,k) | k Sterne und n−1 Trennstriche anordnen | 3 Kugeln Eis aus 10 Sorten: C(12,3) = **220** |

**Alle vier Felder an einem Beispiel** (10 Eissorten, 4 Kugeln):
gestapelt + Sorten doppelt erlaubt 10⁴ = 10 000 · gestapelt + alle verschieden 10·9·8·7 = 5040 ·
im Becher + alle verschieden C(10,4) = 210 · im Becher + doppelt erlaubt C(13,4) = 715.

**Fallen:**
- „Reihenfolge egal" + „Wiederholung möglich" ist **nicht** nᵏ (Juli-Fehler). Weitere Tarnungen desselben Feldes:
  Dominosteine (2 Zahlen aus 0..9, (1;3)=(3;1)): C(11,2) = **55**; identische Bonbons auf Kinder verteilen; „Wörter in alphabetischer Reihenfolge mit Wiederholung".
- „Jeder mit jedem" (Anstoßen, Händeschütteln, Spiele) = C(n,2). Rückwärts: 741-mal Kling → n(n−1)/2 = 741 → **n = 39**.

### Bedingungen bei der Auswahl
- **genau j aus einer Gruppe:** getrennt wählen und multiplizieren. Komitee aus 3 von 7 Männern und 2 von 5 Frauen: C(7,3)·C(5,2) = **350**.
- **mindestens einer:** alle minus keiner. 4 aus 10 Kugeln (4 rot, 6 blau), mindestens eine rot: C(10,4) − C(6,4) = **195**.
- **Pflichtmitglied:** Person ist gesetzt, also C(n−1,k−1).

### Binomischer Lehrsatz
(a+b)ⁿ = Σ C(n,k)·aᵏ·bⁿ⁻ᵏ — beim Ausmultiplizieren wählt man aus k der n Klammern das a.
- *Koeffizient von x³ in (2+x)⁵:* C(5,3)·2² = **40**. *Von x⁴ in (1−2x)⁶:* C(6,4)·(−2)⁴ = **240**. Vorzeichen mitnehmen!
- a=b=1 liefert Σ C(n,k) = 2ⁿ = Anzahl aller Teilmengen einer n-Menge.
- **Multinomial:** Koeffizient von x³yz² in (x+y+z)⁶ = 6!/(3!·1!·2!) = **60** (wie Multimengen-Permutation).
- **Gitterwege:** König von Ecke zu Ecke auf 8×8, nur rechts/hoch: 14 Züge, 7 davon „hoch" → C(14,7) = **3432**.

---

## ② Siebformel und Schubfach

### Siebformel
**Wann:** Mengen überlappen und es wird nach „oder" / „mindestens eine Eigenschaft" / „keine der Eigenschaften" gefragt.
**Warum:** Beim Addieren wird die Überlappung doppelt gezählt, also einmal abziehen; bei drei Mengen wird der Dreierschnitt dadurch einmal zu oft abgezogen, also wieder addieren.

*Beispiel Teilbarkeit:* 1..100 durch 2, 3 oder 5: 50+33+20 −16−10−6 +3 = **74**; durch keine: 26.
*Beispiel mit Falle:* 1..300 durch 4, 6 oder 10: Schnitte sind **kgV**, nicht Produkt: kgV(4,6)=12, kgV(4,10)=20, kgV(6,10)=30, kgV(4,6,10)=60 → 75+50+30 −25−15−10 +5 = **110**.
*Beispiel rückwärts (Skript 2.5.1):* 38 haben mindestens eine Klausur bestanden; M 24, I 15, P 22; M∩I 6, M∩P 13, I∩P 6. Alle drei: 38 − 24 − 15 − 22 + 6 + 13 + 6 = **2**.
*Passwort mit mindestens einer Ziffer und einem Buchstaben* (4 Zeichen, 26+10): alle − nur Buchstaben − nur Ziffern = 36⁴ − 26⁴ − 10⁴ = **1 212 640**.

**„Genau eine" / „genau zwei" Eigenschaften:** Venn-Diagramm von innen nach außen füllen — zuerst der Dreierschnitt, dann die Paarschnitte minus Dreierschnitt, dann die Einzelmengen minus alles, was schon drinsteht. Bei zwei Mengen: genau eine = |A∪B| − |A∩B|.

**Derangement:** n Dinge, keins am eigenen Platz. Dₙ = n!·(1 − 1 + 1/2! − 1/3! + …). D₄ = 24·(1/2 − 1/6 + 1/24) = **9**.

### Schubfachprinzip
**Wann:** Formulierungen wie „mit Sicherheit", „zeigen Sie, dass es zwei … gibt".
**Rechenfall:** Wie viele ziehen, um sicher k gleiche zu haben, bei n Sorten? Schlimmster Fall: von jeder Sorte k−1, das nächste Stück entscheidet → **(k−1)·n+1**.
*Socken in 3 Farben, 4 gleichfarbige sicher:* 3·3+1 = **10** (die Stückzahlen im Sack sind egal, solange jede Farbe mindestens 3-mal da ist).
**Beweisfall:** Fächer geschickt definieren. *Aus {1..10} sicher zwei Zahlen mit Summe 11:* Fächer {1,10},{2,9},{3,8},{4,7},{5,6} → 5 Fächer → **6** Zahlen.
**Falle:** 25 Wörter, 26 Anfangsbuchstaben → das Prinzip greift **nicht** (weniger Objekte als Fächer).

---

## ③ Laplace

P = günstige/mögliche gilt nur, wenn alle Ergebnisse gleich wahrscheinlich sind. Zähler und Nenner zählst du mit ①.

- **„mindestens ein" → Gegenereignis.** 4 Würfel, Produkt durch 5 teilbar ⇔ mindestens eine 5: 1 − (5/6)⁴ = **671/1296**.
- **Unabhängige Ereignisse, mindestens eines tritt ein** (Skript 3.2.10): Schützen mit 0,5 / 0,3 / 0,2 → 1 − 0,5·0,7·0,8 = **0,72**. Nie die p einfach addieren.
- **Multiplikationssatz:** P(A∩B) = P(A)·P(B|A). Drei Herz nacheinander aus 52: 13/52 · 12/51 · 11/50 = **11/850**.
- **Skat:** 32 Karten, 4 Asse. Genau ein Ass bei 3 Karten: C(4,1)·C(28,2)/C(32,3) = **189/620**.

### ③b Fahrstuhl / Belegungen
n Akteure wählen unabhängig eines von k Zielen → |Ω| = kⁿ. Dasselbe Modell: Geburtstage, Hashing, Jäger auf Hasen.
*4 Personen, 6 Stockwerke:* alle verschieden 6·5·4·3/6⁴ = **5/18** · alle gleich 6/6⁴ = 1/216 · genau zwei Stockwerke mit je zwei Personen C(6,2)·C(4,2)/6⁴ = **5/72**.

### ③c Hypergeometrisch
Ziehen **ohne Zurücklegen** aus N Stück, davon r „gute", m gezogen. Zähler: k gute und m−k schlechte wählen; Nenner: alle Auswahlen.
*10 Glühbirnen, 3 defekt, 3 entnommen:* P(X=0)=7/24, P(1)=21/40, P(2)=7/40, P(3)=1/120 (Σ=1 ✓), E = 3·3/10 = 0,9.
**Abgrenzung:** mit Zurücklegen (oder riesige Grundgesamtheit) → Binomial mit p = r/N.

---

## ④ Binomialverteilung

**Voraussetzungen:** feste Anzahl n, unabhängig, zwei Ausgänge, p konstant.
**Warum die Formel:** eine bestimmte Folge mit k Treffern hat pᵏ(1−p)ⁿ⁻ᵏ, und es gibt C(n,k) solche Folgen.
*Bogenschütze 30 %, 10 Schüsse, genau 4 Treffer:* C(10,4)·0,3⁴·0,7⁶ = **0,2001**.
„höchstens/mindestens": die kürzere Seite summieren oder Gegenereignis.

### ④b Mindest-n
„Wie oft, damit mit Wahrscheinlichkeit ≥ s mindestens ein Treffer?" → 1 − (1−p)ⁿ ≥ s.
Umstellen: (1−p)ⁿ ≤ 1−s. Logarithmieren; weil ln(1−p) negativ ist, **dreht sich beim Teilen das Zeichen**: n ≥ ln(1−s)/ln(1−p).
*p = 0,2, s = 0,955:* ln 0,045/ln 0,8 = 13,9 → **14**. Probe: 1−0,8¹³ = 0,945 ✗, 1−0,8¹⁴ = 0,956 ✓.
**Falle „größer als ½":** Würfel, mindestens eine Sechs mit P > ½: ln 0,5/ln(5/6) = 3,8 → **4**.
**Variante „mindestens 2 Treffer":** keine geschlossene Formel — P(X≤1) = (1−p)ⁿ + n·p·(1−p)ⁿ⁻¹ ≤ 1−s und n hochzählen. p=0,4, s=0,9 → **n = 9**.

### ④c Wettkampf
Zwei unabhängige Restserien werden verglichen (Juli: Schützen).
1. Nur die **verbleibenden** Versuche zählen: X ~ Bin(n_A, p_A), Y ~ Bin(n_B, p_B).
2. Gewinnbedingung als Ungleichung mit dem Zwischenstand.
3. Über die kürzere Serie bedingen: P = Σ_y P(Y=y)·P(X ≥ y+Δ).

*Beispiel:* A hat 6 Treffer und noch 3 Schüsse (p = 0,5); B hat 7 Treffer und noch 2 Schüsse (p = 0,3). A gewinnt ⇔ 6+X > 7+Y ⇔ X ≥ Y+2.
P(Y=0)=0,49, P(Y=1)=0,42, P(Y=2)=0,09 · P(X≥2)=0,5, P(X≥3)=0,125, P(X≥4)=0
→ P(A gewinnt) = 0,49·0,5 + 0,42·0,125 = **0,2975** (Gleichstand 0,3525, B gewinnt 0,35 — Summe 1 ✓).
**Punkte gibt es schon für:** Zufallsvariablen definieren, Ungleichung, Summenansatz.

---

## ⑤ Bayes

**Wann:** Die Beobachtung (Test positiv, Teil defekt, Kopf gefallen) ist bekannt, gefragt ist die Ursache.
**Rezept:** Baum zeichnen, Pfad zur Beobachtung über jede Ursache multiplizieren, alle addieren (totale Wahrscheinlichkeit) — der gesuchte Pfad geteilt durch diese Summe.
*Drei Münzen mit P(Kopf) = 1/3, 2/3, 1; eine zufällig gewählt, Kopf fällt* (Skript 3.2.12): P(Kopf) = (1/3)(1/3 + 2/3 + 1) = 2/3 → P(M1|K) = (1/9)/(2/3) = **1/6**, P(M2|K) = 1/3, P(M3|K) = 1/2.
*Test:* 2 % krank, 95 % Sensitivität, 10 % Fehlalarm → 0,019/(0,019+0,098) = **0,162**. Bei seltenen Ursachen dominieren die Fehlalarme.
**Falle:** P(B|A) und P(A|B) verwechseln. Immer hinschreiben, was gegeben und was gesucht ist.

---

## ⑥ Verteilungs-Baukasten

**Wann:** „Bestimmen Sie die Verteilung von X", „E(X) und Var(X)" — und es ist keine Standardverteilung.

**Die 5 Schritte:** |Ω| → Werte von X → Fälle zählen → **Σ = 1 prüfen** → Tabelle k | P | k·P | k²·P.

*Jäger-Aufgabe (Juli), hier mit n = 4 Hasen:* |Ω| = 4³ = 64.
X=1: alle denselben Hasen, 4 Fälle → 1/16 · X=3: alle verschieden, 4·3·2 = 24 → 3/8 · X=2: C(4,2)·(2³−2) = 36 → 9/16. Σ = 1 ✓.
E = 1/16 + 18/16 + 18/16 = **37/16** · E[X²] = 1/16 + 36/16 + 54/16 = 91/16 → Var = 91/16 − (37/16)² = **87/256**.

**Indikator-Trick:** Wenn X etwas zählt, ist E[X] die Summe der Einzelwahrscheinlichkeiten — ohne Verteilung.
Hase i wird getroffen mit 1 − (3/4)³ = 37/64 → E = 4·37/64 = 37/16 ✓ (gleicher Wert, gute Probe).
*Hash (Skript 3.3.12):* n Datensätze auf n Plätze, X = Plätze mit genau einem Datensatz. P(Platz i hat genau einen) = n·(1/n)·(1−1/n)ⁿ⁻¹ → **E = n·(1−1/n)ⁿ⁻¹**, E/n → 1/e.

**Weitere Standardmuster:**
- *Maximum zweier Würfel:* P(Max ≤ k) = (k/6)² → P(Max = k) = (2k−1)/36, E = 161/36.
- *Lineare Suche / gleichverteilt auf 1..n:* E = (n+1)/2, Var = (n²−1)/12.
- *Match mit Abbruchregel* (Tischtennis, Skript 3.3.7): Baum zeichnen, X = Länge der Pfade. Ergebnis dort: P(2)=1/2, P(3)=1/4, P(4)=1/8, P(5)=1/8, E = 23/8.
- *Geometrisch:* erster Treffer im k-ten Versuch (1−p)ᵏ⁻¹·p; **mehr als k Versuche nötig = k Fehlschüsse = (1−p)ᵏ**. p = 0,4, mehr als 3 Schüsse: 0,6³ = 0,216.
- *Verteilungsfunktion:* F(x) = P(X ≤ x), Treppenfunktion; P(a ≤ X < b) = Werte in diesem Bereich addieren.

**Regeln:** E ist immer linear, auch bei Abhängigkeit. Var(aX+b) = a²·Var(X); Varianzen addieren nur bei Unabhängigkeit.

---

## ⑦ Stetige Zufallsvariablen

Summen werden zu Integralen. Die Konstante folgt aus „Gesamtfläche = 1".
*f(x) = C·(3−x) auf [0,3]:* ∫₀³ C(3−x) dx = C·9/2 = 1 → C = 2/9 · E = (2/9)·∫₀³ x(3−x) dx = (2/9)·4,5 = **1** ·
E[X²] = (2/9)·∫₀³ x²(3−x) dx = (2/9)·6,75 = 1,5 → Var = 1,5 − 1 = **0,5**.

---

## ⑧ Krypto-Werkzeuge

### ⑧a Euklid-Tableau
**Wann:** ggT, Gleichung a·x + b·y = c, jede Inverse (RSA-d, affine Chiffre).
**Warum Tableau statt Rückwärtseinsetzen:** Jede Zeile enthält ihre eigene Probe (Rest = a·x + b·y). Ein Fehler fällt sofort auf, und es gibt kein fehleranfälliges Einsetzen von unten nach oben.

*Beispiel 729x + 75y = 6 (Skript 4.4.2):*
```
729 |  1 |   0
 75 |  0 |   1    q=9
 54 |  1 |  −9    q=1
 21 | −1 |  10    q=2
 12 |  3 | −29    q=1
  9 | −4 |  39    q=1
  3 |  7 | −68    ← ggT = 3:  7·729 − 68·75 = 5103 − 5100 = 3 ✓
```
3 teilt 6 → mal 2: **x = 14, y = −136**. Für die rechte Seite 5: 3 teilt 5 nicht → **keine Lösung** (das ist die vollständige Antwort).

### ⑧b Inverse und lineare Kongruenzen
Inverse von a mod m: Tableau mit (m, a), der y-Wert der ggT-Zeile ist die Inverse (negativ → +m). *7⁻¹ mod 120:* Zeilen (120|1|0), (7|0|1), q=17 → (1|1|−17) → −17 + 120 = **103**. Probe 7·103 = 721 = 6·120 + 1 ✓.

a·x ≡ b (mod m) mit g = ggT(a,m):
- *9x ≡ 6 (mod 15):* g = 3 teilt 6 → 3x ≡ 2 (mod 5) → x ≡ 2·3⁻¹ = 2·2 = 4 → **x ∈ {4, 9, 14}** (g = 3 Lösungen).
- *4x ≡ 3 (mod 10):* g = 2 teilt 3 nicht → keine Lösung.
- *7x ≡ 10 (mod 31):* 7⁻¹ = 9 → x = 90 mod 31 = **28**, eindeutig, weil ggT = 1.

### ⑧c φ, Euler, Fermat, Quadrier-Kette
- φ(n) zählt die zu n teilerfremden Zahlen. φ(72) = 72·(1/2)·(2/3) = 24 · φ(125) = 100 · φ(221) = 12·16 = 192.
- **Euler:** Exponent darf modulo φ(n) reduziert werden, wenn ggT(a,n) = 1. *7¹⁵⁷ mod 26:* φ(26) = 12, 157 = 13·12 + 1 → 7¹ = **7**.
- **Fermat** (Modul prim): *3⁴⁷ mod 23:* 3²² ≡ 1, 47 = 2·22 + 3 → 3³ = 27 ≡ **4**.
- **Quadrier-Kette** *84⁵ mod 323:* 84² = 7056 ≡ 273 · 84⁴ ≡ 273² ≡ 239 · 84⁵ ≡ 239·84 = 20076 ≡ **50**.
- **p und q aus n und φ** (Skript 4.4.1): φ = n − (p+q) + 1 → p+q = 94319 − 93696 + 1 = 624. x² − 624x + 94319 = 0 → x = 312 ± 55 → **257 und 367**.
- **Beweisbausteine:** „p teilt aᵖ − a" → Fermat. „m−1 ist zu sich selbst invers" → (m−1)² = m² − 2m + 1 ≡ 1. „a³ − a ist für ungerades a durch 8 teilbar" → (a−1)·a·(a+1), a−1 und a+1 sind aufeinanderfolgende gerade Zahlen, eine davon ist durch 4 teilbar.

---

## ⑨ RSA

Öffentlich (n, e), geheim d. Verschlüsseln c = mᵉ mod n, entschlüsseln m = cᵈ mod n.
**Warum es funktioniert:** e·d = 1 + k·φ, also cᵈ = m^(1+kφ) = m·(m^φ)ᵏ ≡ m (Euler).

*Komplettes Beispiel: n = 323, e = 173, c = 84.*
1. √323 ≈ 17,97 → testen bis 17: 323 = **17·19**.
2. φ = 16·18 = **288**.
3. Tableau (288|1|0), (173|0|1), q=1 → (115|1|−1), q=1 → (58|−1|2), q=1 → (57|2|−3), q=1 → (1|−3|5) → **d = 5**.
   Probe 173·5 = 865 = 3·288 + 1 ✓.
4. m = 84⁵ mod 323: 84² ≡ 273 · 84⁴ ≡ 273² ≡ 239 · 84⁵ ≡ 239·84 = 20076 ≡ **50**.
5. Endprobe: 50¹⁷³ mod 323 = 84 ✓.

**Die drei Juli-Fehler, jetzt abgesichert:** Faktorisieren bis √n (437 = 19·23 liegt jenseits von 13) · ab Schritt 2 mit φ rechnen, nicht mit n · d per Tableau statt Probieren.
**e-Wahl:** Nur e mit ggT(e, φ) = 1 sind zulässig. n = 221, φ = 192: 3 und 9 scheiden aus (192 ist durch 3 teilbar), **5** ist gültig, d = 77.

---

## ⑩ Affine Chiffre

y = (a·x + b) mod 26 mit A = 0. Zwei Buchstabenpaare ergeben zwei Gleichungen; Subtrahieren entfernt b.
*E→X, N→S:* 4a + b ≡ 23, 13a + b ≡ 18 → 9a ≡ −5 ≡ 21 → 9⁻¹ = 3 → a = 63 mod 26 = **11** → b = 23 − 44 ≡ **5**. Probe: 11·13 + 5 = 148 ≡ 18 ✓.
*Mit ggT-Tücke — C→S, O→A:* 2a + b ≡ 18, 14a + b ≡ 0 → 12a ≡ −18 ≡ 8 (mod 26). ggT(12,26) = 2 teilt 8 → 6a ≡ 4 (mod 13) → 6⁻¹ = 11 → a ≡ 44 ≡ 5 (mod 13) → Kandidaten 5 und 18 → nur **a = 5** ist teilerfremd zu 26 → b = 18 − 10 = **8**.

---

## ⑪ Klassische Verfahren

- **Caesar:** Verschiebung um k. KLAUSUR mit k = 3 → NODXVXU. Brechen: der häufigste Geheimtextbuchstabe steht meist für E; ist es H, dann k = 7 − 4 = 3.
- **Monoalphabetische Substitution:** beliebige Buchstabenvertauschung, 26! Schlüssel. Trotzdem unsicher, weil die Buchstabenhäufigkeiten erhalten bleiben (E, N, I, S, R, A, T).
- **Vigenère:** Schlüsselwort wiederholt unter den Text schreiben und spaltenweise addieren. ANGRIFF mit Schlüssel KEY → KREBMDP (A+K=K, N+E=R, G+Y=E, R+K=B, …). Gleiche Klartextbuchstaben werden unterschiedlich verschlüsselt, daher versagt die einfache Häufigkeitsanalyse; Angriff über die Schlüssellänge.
- **Begriffe:** symmetrisch = ein gemeinsamer Schlüssel (Problem: Schlüsselaustausch) · asymmetrisch = öffentlicher und geheimer Schlüssel · Einwegfunktion = leicht zu rechnen, praktisch nicht umkehrbar (Multiplizieren ↔ Faktorisieren, Potenzieren ↔ diskreter Logarithmus) · 80-Bit-Schlüssel braucht 2⁴⁰-mal so lange wie 40 Bit.

## ⑫ Diffie-Hellman

Beide einigen sich öffentlich auf p und g. Jeder potenziert g mit seiner Geheimzahl und schickt das Ergebnis; jeder potenziert das Empfangene mit seiner Geheimzahl. Beide erhalten g^(ab) mod p.
*p = 17, g = 3, a = 5, b = 7:* α = 3⁵ mod 17 = 5 · β = 3⁷ mod 17 = 11 · K = 11⁵ mod 17 = 5⁷ mod 17 = **10**.
