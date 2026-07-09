# T1 — Kombinatorik komplett (Phase 1)

> Skript: Kap. 1–2 (S. 9–121). **Neu gegenüber SS26: die 4 Grundaufgaben als System,
> Schubfachprinzip, Siebformel.** Ziel: Nicht 6 Formeln auswendig, sondern **eine
> Entscheidungslogik**, die jede Einkleidung auf die richtige Formel abbildet.

---

## 1. Fundament: Fakultät & Binomialkoeffizient

- **n!** = n·(n−1)·…·1, per Definition 0! = 1.
- **C(n,k) = n!/(k!(n−k)!)** — Anzahl k-elementiger Teilmengen einer n-Menge.
- Regeln: C(n,k) = C(n,n−k) · C(n,0) = C(n,n) = 1 · C(n,1) = n · C(n,2) = n(n−1)/2
- Pascal: C(n,k) = C(n−1,k−1) + C(n−1,k).
- **Binomischer Lehrsatz:** (a+b)ⁿ = Σₖ C(n,k)·aᵏ·bⁿ⁻ᵏ.
  Klausur-Klassiker: „Koeffizient von x³ in (2+x)⁵?" → C(5,3)·2² = 40.
  Nebenprodukt: Σₖ C(n,k) = 2ⁿ (Anzahl aller Teilmengen).

**Mengen-Minimum** (für Aufgabentexte): |A∪B| = |A|+|B|−|A∩B| (→ Siebformel),
Komplement |Ā| = |Ω|−|A|, kartesisches Produkt |A×B| = |A|·|B|.

---

## 2. ⭐ Die 4 Grundaufgaben — EINE Matrix statt vier Formeln

Ziehe k aus n. Stelle **immer zuerst die 2 Fragen**:
**(1) Ist die Reihenfolge wichtig? (2) Darf sich ein Element wiederholen?**

| | mit Wiederholung | ohne Wiederholung |
|---|---|---|
| **Reihenfolge wichtig** („Variation") | **nᵏ** | **n!/(n−k)! = n·(n−1)·…·(n−k+1)** |
| **Reihenfolge egal** („Kombination") | **C(n+k−1, k)** | **C(n, k)** |

**Erkennungssignale im Text:**
- Reihenfolge **wichtig**: Wörter, PINs, Tupel, Plätze/Podium, „nacheinander", „1. / 2. / 3."
- Reihenfolge **egal**: Auswahl, Gremium, Hand, Lieferung, „gleichzeitig", „Menge"
- Wiederholung **ja**: „mit Zurücklegen", Sorten/Typen unbegrenzt verfügbar, Ziffern dürfen doppelt
- Wiederholung **nein**: Personen, konkrete Objekte, „ohne Zurücklegen", „verschiedene"

**Je ein geeichtes Beispiel (alle verifiziert):**
1. PIN aus 4 Ziffern: Reihenfolge ja, Wdh. ja → 10⁴.
2. Podium (Gold/Silber/Bronze) bei 10 Läufern: ja / nein → 10·9·8 = **720**.
3. Lotto 6 aus 49: nein / nein → C(49,6) = **13 983 816**.
4. **5 Gummibärchen aus 4 Farben** (Reihenfolge egal, Farben mehrfach): nein / ja →
   C(4+5−1, 5) = C(8,5) = **56**.
5. **Die Klausur-Aufgabe SS26:** 3 Kugeln Eis aus 10 Sorten, Reihenfolge egal →
   C(12,3) = **220**. (10³ = 1000 wäre Fall 1 — geordnete Tripel!)

**Warum C(n+k−1,k)? (Stars & Bars, 1× verstehen):** Bestellung = k Sterne auf n Fächer
verteilen; kodiert als Folge aus k Sternen und n−1 Trennstrichen → Position der k Sterne
unter n+k−1 Symbolen wählen.

---

## 3. Permutationen von Multimengen

Alle Anordnungen von n Objekten, davon Gruppen gleicher: **n!/(n₁!·n₂!·…·nₖ!)**

- MISSISSIPPI (1 M, 4 I, 4 S, 2 P): 11!/(1!·4!·4!·2!) = **34 650**.
- „beginnt mit S": S fixieren → 10!/(4!·3!·2!) — Zähler **und** die S-Gruppe schrumpfen!
- „alle I zusammen": IIII als Block → 8!/(4!·2!).

---

## 4. Schubfachprinzip (klein, aber prüfbar)

> Verteilt man **mehr als n** Objekte auf **n** Fächer, enthält ein Fach mindestens 2.
> Allgemein: bei m Objekten enthält ein Fach mindestens **⌈m/n⌉**.

Klausurform ist meist eine **Begründungsaufgabe**: Fächer benennen, Objekte benennen, zählen.
- „Unter 13 Personen haben 2 im selben Monat Geburtstag": 13 Objekte, 12 Fächer ✓.
- „Wie viele Karten ziehen, um sicher 3 gleicher Farbe zu haben?" 4 Farben, worst case
  2 pro Farbe = 8 → **9** Karten.

---

## 5. ⭐⭐ Die Siebformel (Inklusion–Exklusion) — kam SS26 dran!

**Problem:** |A∪B| durch |A|+|B| zählt die Überlappung doppelt → wieder abziehen:

$$|A\cup B| = |A| + |B| - |A\cap B|$$
$$|A\cup B\cup C| = |A|+|B|+|C| - |A\cap B| - |A\cap C| - |B\cap C| + |A\cap B\cap C|$$

**Allgemein:** Einzelmengen addieren, Paarschnitte subtrahieren, Dreierschnitte addieren, …
(Vorzeichen alternieren). Gilt wortgleich für Wahrscheinlichkeiten: P(A∪B) = P(A)+P(B)−P(A∩B).

**Erkennungssignale:** „durch a **oder** b **oder** c teilbar", „mindestens eine der
Eigenschaften", „spricht Englisch oder Französisch", überlappende Kategorien.
**„Keine der Eigenschaften"** = |Ω| − |A∪B∪C|.

### Rezept Teilbarkeitsaufgaben (häufigste Klausurform)
1. |durch t teilbar in 1..N| = **⌊N/t⌋**
2. Schnittmengen = teilbar durch das **kgV** (bei teilerfremden t einfach das Produkt)
3. Siebformel auswerten.

**Beispiel (verifiziert):** 1..100 durch 2, 3 oder 5:
50 + 33 + 20 − 16 − 10 − 6 + 3 = **74**. → „durch keine": 100 − 74 = 26.
**Übung:** dasselbe für 1..1000 → 500+333+200−166−100−66+33 = **734**.

**Beispiel Textform:** Von 40 Studierenden hören 25 Mathe, 18 Info, 10 beides.
Keins von beiden: 40 − (25+18−10) = **7**.

### Anwendung: Derangements (fixpunktfreie Permutationen)
„n Briefe zufällig in n Umschläge — wie viele Verteilungen, bei denen **kein** Brief
richtig steckt?" Siebformel über die Ereignisse „Brief i richtig":

$$D_n = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!} \qquad D_3 = 2,\; D_4 = 9,\; D_5 = 44$$

P(kein Fixpunkt) = Dₙ/n! → 1/e ≈ 0,368 für großes n.

---

## 6. Mini-Drill (Antworten unten)

1. Wie viele „Wörter" aus ABRAKADABRA?
2. 8 Türme auf 8 Säulen, 3 rote / 5 graue — Anordnungen?
3. Aus 12 Personen einen 4er-Ausschuss: (a) beliebig, (b) Anna ist Pflicht, (c) genau 2 von 5 Frauen?
4. 4-stelliges Passwort aus {A..F}: (a) Zeichen mehrfach erlaubt, (b) alle verschieden?
5. 6 identische Bonbons auf 3 Kinder (Kind darf leer ausgehen)?
6. Wie viele Zahlen 1..60 sind durch 2 oder 3 teilbar? Durch keine von beiden?
7. Begründe: Unter 25 Wörtern beginnen mindestens 2 mit demselben Buchstaben? (26 Buchstaben — stimmt die Aussage?)

<details><summary>Lösungen</summary>

1. 11 Buchstaben: 5 A, 2 B, 2 R, 1 K, 1 D → 11!/(5!·2!·2!) = 83 160.
2. 8!/(3!·5!) = C(8,3) = 56.
3. (a) C(12,4) = 495 · (b) C(11,3) = 165 · (c) C(5,2)·C(7,2) = 10·21 = 210.
4. (a) 6⁴ = 1296 · (b) 6·5·4·3 = 360.
5. Kombination mit Wdh. („6 aus 3 Sorten Empfänger"): C(3+6−1, 6) = C(8,6) = 28.
6. ⌊60/2⌋+⌊60/3⌋−⌊60/6⌋ = 30+20−10 = 40 · keine: 60−40 = 20.
7. **Nein** — 25 Wörter, 26 Fächer: Schubfachprinzip greift erst ab 27 Wörtern. (Genau diese Umkehrung wird gern gefragt.)
</details>
