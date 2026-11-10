# T4 — Krypto-Werkzeugkasten (Wochen 8–9)

> Skript: Kap. 4 (S. 329–438). **Ein** Werkzeugkasten (ggT, Euklid, Inverse, φ, Euler,
> schnelle Exponentiation) schaltet **drei** große Aufgabentypen frei: Zahlentheorie,
> Affine, RSA. **Neu nach SS26:** Euklid als **Tableau** (Standardmethode), Faktorisierung
> **bis √n**, Probierformel nur mit Abbruch, Diffie-Hellman & klassische Chiffren ergänzt.

---

## 1. Teilbarkeit, Primzahlen, ggT

- a | b ⇔ b = k·a. ggT(a,b) = größter gemeinsamer Teiler.
- **Faktorisieren: Primzahlen bis √n testen!** √n ausrechnen, dann 2, 3, 5, 7, 11, 13,
  17, 19, 23, … bis √n. (SS26-Killer: 437 = 19·23 — wer bei 13 aufhört, findet nichts.
  Merke: 17² = 289, 19² = 361, 23² = 529 → für n < 529 reicht die Liste bis 19… plus 23 ab 529.)
- Euklid-Grundform: ggT(a,b) = ggT(b, a mod b), ggT = **letzter Rest ≠ 0**.

## 2. ⭐⭐ Erweiterter Euklid als TABLEAU — die Standardmethode

**Ziel:** x, y mit a·x + b·y = ggT(a,b). Das Tableau ersetzt das fehleranfällige
Rückwärtseinsetzen (SS26-Verrechnungsquelle!) durch stures Zeilenrechnen **vorwärts**:

**Aufbau:** 3 Spalten (Rest | x | y). Startzeilen (a | 1 | 0) und (b | 0 | 1).
**Schritt:** q = ⌊Rest_oben / Rest_unten⌋; **neue Zeile = obere Zeile − q · untere Zeile**
(in allen 3 Spalten!). Wiederholen bis Rest 0; die Zeile davor liefert ggT, x, y.

**Beispiel 1 — die SS26-Aufgabe, d = 317⁻¹ mod 396:**

| Rest | x | y | q |
|---|---|---|---|
| 396 | 1 | 0 | |
| 317 | 0 | 1 | q=1 |
| 79 | 1 | −1 | q=4 |
| **1** | **−4** | **5** | ← ggT=1 |

Kontrolle: −4·396 + 5·317 = −1584 + 1585 = 1 ✓ → **d = 5** (y-Wert; falls negativ: +396).

**Beispiel 2 — 7⁻¹ mod 26:**

| Rest | x | y | q |
|---|---|---|---|
| 26 | 1 | 0 | |
| 7 | 0 | 1 | q=3 |
| 5 | 1 | −3 | q=1 |
| 2 | −1 | 4 | q=2 |
| **1** | **3** | **−11** | ← ggT=1 |

3·26 − 11·7 = 78 − 77 = 1 ✓ → 7⁻¹ ≡ −11 ≡ **15** (mod 26). Probe: 7·15 = 105 = 4·26+1 ✓

**Regeln:**
- **Immer Probe:** a·x + b·y = ggT nachrechnen (10 Sekunden, fängt jeden Zeilenfehler).
- Gleichung a·x + b·y = c lösbar ⇔ **ggT | c**; dann beide Werte ×(c/ggT).
  ggT ∤ c → als Antwort „keine Lösung" (volle Punkte, keine weitere Rechnung).
- Inverse a⁻¹ mod m: Tableau mit (m, a); Ergebnis = y-Wert **mod m** (negativ → +m).
  Existiert nur, falls ggT(a,m) = 1.

**Probierformel — nur noch als Schnelltest:** a⁻¹ = (1+m·k)/a für k = 1…10.
**k = 10 erreicht ohne ganzzahligen Treffer → STOPP.** Ursachen prüfen: falscher Modul
(n statt φ!), falsche Faktorisierung — dann Tableau. (SS26: mit falschem Modul 437 statt
396 kommt der erste Treffer erst bei k = 140 — die Formel warnt nicht, sie frisst nur Zeit.)

## 3. φ-Funktion & Euler-Theorem

- φ(n) = Anzahl der zu n teilerfremden Zahlen in 1..n.
- **φ(p) = p−1** · **φ(p·q) = (p−1)(q−1)** (p≠q prim) · **φ(p²) = p(p−1)** ⚠️ nicht (p−1)²!
- Mutterformel: φ(n) = n·∏(1 − 1/p) über die verschiedenen Primteiler.
  φ(36) = 36·(1/2)(2/3) = 12 · φ(25) = 20 · φ(437) = 18·22 = 396.
- **Euler:** ggT(a,n) = 1 ⇒ **a^φ(n) ≡ 1 (mod n)**.
- **Sonderfall Fermat** (p prim): a^p ≡ a (mod p) — Standard-Beweisaufgabe
  „zeige p | aᵖ−a": aᵖ − a ≡ a − a ≡ 0 (mod p). ∎

**Rezept „berechne aᵉ mod n":**
1. φ(n) bestimmen, ggT(a,n) = 1 prüfen, Euler zitieren.
2. e = q·φ + r (🧮 e ÷R φ) → aᵉ ≡ aʳ (mod n).
3. aʳ ausrechnen, ggf. Quadrier-Kette (§4).

Beispiel (verifiziert): 3¹⁰⁰ mod 7: φ = 6, 100 = 16·6 + 4 → 3⁴ = 81 ≡ **4** (mod 7).

## 4. Schnelle Exponentiation (Quadrier-Kette)

Für aᵈ mod n: Reste von a², a⁴, a⁸, … berechnen (je: vorherigen Rest quadrieren, mod n),
**jeden Rest notieren und mit dem TR prüfen** — ein Fehler macht alles danach wertlos.
d als Summe von Zweierpotenzen → zugehörige Reste multiplizieren, je mod n.

Beispiel: 300⁵ mod 437: 300² ≡ 415 · 300⁴ ≡ 415² ≡ 47 · 300⁵ ≡ 47·300 ≡ **116**.

## 5. RSA — komplett

**Setup:** n = p·q, φ = (p−1)(q−1), öffentlich (n, e) mit ggT(e, φ) = 1,
geheim d = e⁻¹ mod φ. Verschlüsseln: c = mᵉ mod n. Entschlüsseln: m = cᵈ mod n.

**Abarbeitungsschema** (Details/Warnungen → Spickzettel ⑨):
1. n faktorisieren (**bis √n!**) → 2. φ → 3. d per **Tableau** (Probe e·d mod φ = 1) →
4. m = cᵈ mod n (Quadrier-Kette, wieder Modul n!) → 5. Endprobe mᵉ mod n = c.

**Mini-Beispiel komplett (verifiziert):** p=5, q=11 → n=55, φ=40, e=7 → d=23
(7·23 = 161 = 4·40+1 ✓). m=9: c = 9⁷ mod 55 = **4**. Zurück: 4²³ mod 55 = **9** ✓.
**Große Übung:** die SS26-Aufgabe (437/317/300) → `../Klausuren/Klausur_SS26_Rekonstruktion.md`.

**Warum funktioniert RSA?** cᵈ = mᵉᵈ = m^(1+kφ) = m·(m^φ)ᵏ ≡ m·1ᵏ = m (Euler). 1× verstehen —
war schon als Theoriefrage dran. Sicherheit: Faktorisieren großer n ist praktisch nicht machbar (Einwegfunktion).

## 6. Affine Chiffre f(x) = (a·x + b) mod 26

Vollständiges Rezept auf dem Spickzettel (⑩). Kernpunkte: A=0…Z=25 ·
2 Paare → subtrahieren → a·Δx ≡ Δy · **ggT-Fallunterscheidung** (teilen inkl. Modul!) ·
Inverse per Tableau · nur ggT(a,26)=1 ist gültiger Schlüssel · **Probe mit beiden Paaren**.
Entschlüsseln: x = a⁻¹·(y−b) mod 26.

## 7. Klassische Verfahren & Diffie-Hellman (P2 — Verfahren kennen)

- **Caesar:** y = x + k mod 26 — Spezialfall der Affinen (a=1). Brechen: 26 Versuche/Häufigkeit.
- **Monoalphabetische Substitution:** beliebige Buchstabenpermutation (26! Schlüssel);
  Brechen per **Häufigkeitsanalyse** (E ≈ 17 % im Deutschen, dann N, I, S, R, A, T).
- **Vigenère:** Schlüsselwort, spaltenweise Caesar; gleiche Klartextbuchstaben können
  verschieden verschlüsselt werden (polyalphabetisch). Analyse: Schlüssellänge finden
  (Kasiski), dann je Spalte Häufigkeitsanalyse.
- **One-Time-Pad:** Schlüssel so lang wie Text, zufällig, einmalig → beweisbar sicher.
- **Diffie-Hellman-Schlüsselaustausch:** öffentlich p (prim), g.
  A wählt geheim a, sendet α = gᵃ mod p; B wählt b, sendet β = gᵇ mod p.
  Gemeinsam: **K = βᵃ = αᵇ = g^(ab) mod p.**
  Beispiel (verifiziert): p=23, g=5, a=6, b=15 → α=8, β=19, K = 19⁶ mod 23 = 8¹⁵ mod 23 = **2**.
  Sicherheit: diskreter Logarithmus ist schwer.
- Begriffe für Theoriefragen: symmetrisch (1 Schlüssel) vs. asymmetrisch (Schlüsselpaar),
  Hybridverfahren (RSA tauscht Sitzungsschlüssel aus, AES verschlüsselt Daten),
  digitale Signatur (mit d signieren, mit e prüfen — RSA „rückwärts").

## 8. Mini-Drill (Antworten unten)

1. ggT(391, 253) per Euklid — und x, y mit 391x + 253y = ggT (Tableau!).
2. 17⁻¹ mod 43?
3. 23⁻¹ mod 120?
4. φ(100)? · 7¹⁰⁰ mod 100? *(Tipp: ggT(7,100)=1)*
5. RSA: n = 91, e = 5, c = 11 → m? (komplett mit allen Proben)
6. Zeige: 11 teilt a¹¹ − a für jedes ganze a.

<details><summary>Lösungen</summary>

1. 391 = 1·253 + 138 · 253 = 1·138 + 115 · 138 = 1·115 + 23 · 115 = 5·23 + 0 →
   **ggT = 23**; Tableau: 23 = 2·391 − 3·253 (Probe: 782 − 759 = 23 ✓).
2. **38** (Probe: 17·38 = 646 = 15·43 + 1 ✓).
3. **47** (Probe: 23·47 = 1081 = 9·120 + 1 ✓).
4. φ(100) = 100·(1/2)(4/5) = **40** · 100 = 2·40 + 20 → 7¹⁰⁰ ≡ 7²⁰ (mod 100);
   7² = 49, 7⁴ = 49² = 2401 ≡ 1 → 7²⁰ = (7⁴)⁵ ≡ **1**.
5. 91 = 7·13 → φ = 72 · d = 5⁻¹ mod 72 = 29 (5·29 = 145 = 2·72+1 ✓) ·
   m = 11²⁹ mod 91: 11² ≡ 30, 11⁴ ≡ 30² = 900 ≡ 81, 11⁸ ≡ 81² = 6561 ≡ 9,
   11¹⁶ ≡ 81 · 29 = 16+8+4+1 → 81·9·81·11 mod 91 = **72**. Endprobe: 72⁵ mod 91 = 11 ✓.
6. 11 prim → Fermat: a¹¹ ≡ a (mod 11) ⇒ a¹¹ − a ≡ 0 (mod 11) ⇒ 11 | a¹¹ − a. ∎
</details>

---

# Ergänzungen November 2026

## 9. Skript-Typen Zahlentheorie und klassische Chiffren (alle nachgerechnet)

**Faktorisieren mit Hilfe von φ** (Skript 4.4.1): n = p·q und φ = (p−1)(q−1) = n − (p+q) + 1
→ **p+q = n − φ + 1**. Dann sind p, q die Lösungen von x² − (p+q)·x + n = 0.
n = 94319, φ = 93696: p+q = 624 → x = 312 ± √(312² − 94319) = 312 ± 55 → **257 · 367**.

**Diophantische Gleichung mit ggT > 1** (4.4.2): 729x + 75y = 6. Tableau liefert 7·729 − 68·75 = 3,
mal 2 → x = 14, y = −136. Für rechte Seite 5: 3 ∤ 5 → keine Lösung.

**Beweisaufgaben — drei Bausteine:**
- *Teilbarkeit durch Primzahl p:* Fermat aᵖ ≡ a (mod p).
- *a³ − a ist für ungerades a ein Vielfaches von 8* (4.4.3): a³ − a = (a−1)·a·(a+1). a−1 und a+1 sind
  aufeinanderfolgende gerade Zahlen; eine ist durch 4 teilbar, die andere durch 2 → Produkt durch 8.
- *m−1 ist in ℤₘ zu sich selbst invers* (4.4.4): (m−1)² = m² − 2m + 1 ≡ 1 (mod m).

**Potenzreste:** 3⁴⁷ mod 23 → Fermat 3²² ≡ 1, 47 = 2·22 + 3 → 27 ≡ **4** ·
7¹⁵⁷ mod 26 → φ(26) = 12, 157 = 13·12 + 1 → **7** · letzte zwei Ziffern von 3⁸² → φ(100) = 40, 82 = 2·40 + 2 → **09**.

**Lineare Kongruenz** (4.4.7): 7x ≡ 10 (mod 31) → 7⁻¹ = 9 → x = 90 mod 31 = **28**; eindeutig, da ggT(7,31) = 1.
Mit ggT > 1: 9x ≡ 6 (mod 15) → ÷3 → 3x ≡ 2 (mod 5) → x ≡ 4 → Lösungen 4, 9, 14.

**RSA-Varianten:** nur verschlüsseln (c = mᵉ mod n, kein φ nötig) · e aus Kandidaten wählen (ggT(e,φ) = 1) ·
entschlüsseln · p, q aus φ rekonstruieren · Signatur = mit d „verschlüsseln", mit e prüfen.

**Caesar rechnen:** Buchstabe → Zahl (A=0), +k mod 26, → Buchstabe. KLAUSUR, k=3 → NODXVXU.
Angriff: 26 Schlüssel durchprobieren oder häufigsten Buchstaben = E setzen.

**Vigenère rechnen:** Schlüsselwort periodisch unter den Text, spaltenweise addieren mod 26.
ANGRIFF + KEY → KREBMDP. Entschlüsseln: subtrahieren.

**Theoriefragen in einem Satz:**
- Substitution ändert die Buchstaben (Häufigkeitsprofil verschoben/vertauscht), Transposition ändert nur
  die Positionen (Häufigkeiten wie im Klartext) → statistisch unterscheidbar.
- Brute Force: 80 Bit statt 40 Bit = 2⁴⁰-mal so viele Schlüssel → 2⁴⁰ Stunden statt 1 Stunde.
- One-Time-Pad ist nur sicher mit echt zufälligem, einmalig benutztem Schlüssel in Textlänge;
  wird der Schlüssel aus dem Geheimtext fortgesetzt, kennt der Angreifer ihn.
- Diffie-Hellman vereinbart nur einen Schlüssel (kein Verschlüsseln); Sicherheit = diskreter Logarithmus.
  Beispiel p=17, g=3, a=5, b=7: α=5, β=11, K=10.
