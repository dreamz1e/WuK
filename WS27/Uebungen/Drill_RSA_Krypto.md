# 🏋️ Drill: Zahlentheorie · RSA · Affine · Diffie-Hellman · klassische Chiffren (Wochen 8–9)

> Methode: T4. **Standard ist das Euklid-Tableau** (Rest | x | y) — nicht probieren.
> Jede Aufgabe endet mit einer Probe. RSA immer in der Reihenfolge
> Faktorisieren (bis √n) → φ → d → Potenz → Endprobe. Alle Ergebnisse numerisch verifiziert.

## Teil A — Werkzeuge (Woche 8)

1. Faktorisiere: 221, 323, 493, 527, 667, 899. *(Vorher jeweils √n abschätzen.)*
2. Berechne φ(72), φ(97), φ(125), φ(221), φ(360).
3. n = 667 ist Produkt zweier Primzahlen und φ(667) = 616. Bestimme p und q **ohne zu probieren**.
4. Finde ganze Zahlen x, y mit 729x + 75y = 6. Warum hat 729x + 75y = 5 keine Lösung?
5. Berechne (a) 3⁴⁷ mod 23, (b) 7¹⁵⁷ mod 26, (c) die letzten zwei Ziffern von 3⁸².
6. Löse (a) 7x ≡ 10 (mod 31), (b) 9x ≡ 6 (mod 15), (c) 4x ≡ 3 (mod 10).
7. Berechne 7⁻¹ mod 120 und 173⁻¹ mod 288 per Tableau.

## Teil B — RSA (Woche 9)

8. n = 323, e = 173, c = 84. Entschlüssele.
9. n = 493, e = 299, c = 446. Entschlüssele.
10. n = 899, e = 611, c = 511. Entschlüssele.
11. n = 143, e = 7. Verschlüssele m = 9. Bestimme außerdem d.
12. n = 221. Welche der Exponenten e ∈ {3, 5, 9} sind zulässig? Bestimme für den zulässigen d und entschlüssele c = 9.
13. Erkläre in zwei Zeilen, warum m^(e·d) ≡ m (mod n) gilt.

## Teil C — Affine Chiffre, Caesar, Vigenère, Diffie-Hellman (Woche 9)

14. Affine Chiffre: A wird zu C, D wird zu D. Bestimme a und b, dann entschlüssele HZWGTCNX.
15. Affine Chiffre: B wird zu H, L wird zu L. Bestimme a und b. *(ggT-Tücke!)*
16. Verschlüssele KLAUSUR mit Caesar, k = 3. Entschlüssele WKHRULH (ebenfalls k = 3).
17. In einem Caesar-verschlüsselten deutschen Text ist H der häufigste Buchstabe. Wie lautet vermutlich der Schlüssel?
18. Verschlüssele ANGRIFF nach Vigenère mit dem Schlüsselwort KEY.
19. Diffie-Hellman mit p = 17, g = 3. Alice wählt a = 5, Bob b = 7. Berechne α, β und den gemeinsamen Schlüssel K.

## Teil D — Beweise und Theorie

20. Zeige: 13 teilt a¹³ − a für jede ganze Zahl a.
21. Zeige: Für jede ungerade Zahl a ist a³ − a ein Vielfaches von 8.
22. Zeige: m − 1 ist modulo m zu sich selbst invers (m > 1).
23. Ein Brute-Force-Angriff auf 40-Bit-Schlüssel dauert eine Stunde. Wie lange dauert er für 80-Bit-Schlüssel?
24. Warum ist die monoalphabetische Substitution trotz 26! Schlüsseln unsicher, und warum hilft Vigenère dagegen?

<details><summary>Lösungen</summary>

1. 221 = 13·17 · 323 = 17·19 · 493 = 17·29 · 527 = 17·31 · 667 = 23·29 · 899 = 29·31.
   (√899 ≈ 29,98 → man muss wirklich bis 29 testen!)
2. φ(72) = 72·½·⅔ = **24** · φ(97) = **96** (prim) · φ(125) = 5²·4 = **100** · φ(221) = 12·16 = **192** · φ(360) = 360·½·⅔·⅘ = **96**.
3. p+q = n − φ + 1 = 667 − 616 + 1 = 52 → x² − 52x + 667 = 0 → x = 26 ± √(676−667) = 26 ± 3 → **23 und 29**.
4. Tableau: 729|1|0 · 75|0|1 · (q=9) 54|1|−9 · (q=1) 21|−1|10 · (q=2) 12|3|−29 · (q=1) 9|−4|39 · (q=1) 3|7|−68.
   ggT = 3 = 7·729 − 68·75 (5103 − 5100 ✓) → mal 2: **x = 14, y = −136**. Rechte Seite 5: 3 ∤ 5 → keine Lösung.
5. (a) Fermat: 3²² ≡ 1 (mod 23), 47 = 2·22 + 3 → 3³ = 27 ≡ **4** · (b) φ(26) = 12, 157 = 13·12 + 1 → **7** ·
   (c) φ(100) = 40, 82 = 2·40 + 2 → 3² = **09**.
6. (a) 7⁻¹ mod 31 = 9 (63 = 2·31+1) → x = 90 mod 31 = **28** · (b) g = 3 | 6 → 3x ≡ 2 (mod 5) → x ≡ 4 → **{4, 9, 14}** ·
   (c) g = 2 ∤ 3 → **keine Lösung**.
7. 120|1|0 · 7|0|1 · (q=17) 1|1|−17 → −17 + 120 = **103** (7·103 = 721 = 6·120+1 ✓).
   288|1|0 · 173|0|1 · (q=1) 115|1|−1 · (q=1) 58|−1|2 · (q=1) 57|2|−3 · (q=1) 1|−3|5 → **5** (173·5 = 865 = 3·288+1 ✓).
8. 323 = 17·19 · φ = 288 · d = **5** (siehe 7) · 84² ≡ 273, 84⁴ ≡ 239, 84⁵ ≡ 239·84 ≡ **50**. Endprobe 50¹⁷³ mod 323 = 84 ✓.
9. 493 = 17·29 · φ = 448 · Tableau 448|1|0 · 299|0|1 · (q=1) 149|1|−1 · (q=2) 1|−2|3 → d = **3** (299·3 = 897 = 2·448+1 ✓) ·
   446² ≡ 237, 446³ ≡ 237·446 ≡ **200**.
10. 899 = 29·31 · φ = 840 · Tableau 840|1|0 · 611|0|1 · (q=1) 229|1|−1 · (q=2) 153|−2|3 · (q=1) 76|3|−4 · (q=2) 1|−8|11 → d = **11** (611·11 = 6721 = 8·840+1 ✓) ·
    11 = 8+2+1: 511² ≡ 411, 511⁴ ≡ 808, 511⁸ ≡ 190 → 190·411 ≡ 776, 776·511 ≡ **77**.
11. c = 9⁷ mod 143: 9² = 81, 9⁴ ≡ 126, 9⁷ = 9⁴·9²·9 → 126·81 ≡ 53, 53·9 = 477 ≡ **48**.
    143 = 11·13, φ = 120, d = 7⁻¹ mod 120 = **103**.
12. 221 = 13·17, φ = 192 = 2⁶·3 → 3 und 9 haben einen gemeinsamen Teiler mit φ, nur **e = 5** ist zulässig.
    Tableau 192|1|0 · 5|0|1 · (q=38) 2|1|−38 · (q=2) 1|−2|77 → d = **77**.
    9² = 81, 9⁴ ≡ 152, 9⁸ ≡ 120, 9¹⁶ ≡ 35, 9³² ≡ 120, 9⁶⁴ ≡ 35 · 77 = 64+8+4+1 → 35·120 ≡ 1, 1·152 = 152, 152·9 = 1368 ≡ **42**.
13. e·d = 1 + k·φ(n) → m^(ed) = m·(m^φ(n))ᵏ ≡ m·1ᵏ = m nach dem Satz von Euler (ggT(m,n) = 1).
14. 0·a + b ≡ 2 → b = 2 · 3a + 2 ≡ 3 → 3a ≡ 1 → a = 3⁻¹ = **9**, b = **2**. Entschlüsseln x = 9⁻¹·(y−2) = 3·(y−2) mod 26 → **PRIMZAHL**.
15. a + b ≡ 7, 11a + b ≡ 11 → 10a ≡ 4 (mod 26). g = 2 | 4 → 5a ≡ 2 (mod 13), 5⁻¹ = 8 → a ≡ 16 ≡ 3 (mod 13) →
    Kandidaten 3 und 16; nur ggT(3,26) = 1 → **a = 3**, b = 7 − 3 = **4**. Probe: 3·11 + 4 = 37 ≡ 11 ✓.
16. **NODXVXU** · **THEORIE**.
17. H = 7 steht für E = 4 → **k = 3**.
18. Schlüssel KEYKEYK = 10, 4, 24, 10, 4, 24, 10 → **KREBMDP**.
19. α = 3⁵ mod 17 = 243 mod 17 = **5** · β = 3⁷ mod 17 = **11** · K = 11⁵ mod 17 = 5⁷ mod 17 = **10**.
20. 13 ist prim → Fermat: a¹³ ≡ a (mod 13) → a¹³ − a ≡ 0 → 13 | a¹³ − a. ∎
21. a³ − a = (a−1)·a·(a+1). Für ungerades a sind a−1 und a+1 zwei aufeinanderfolgende gerade Zahlen; eine davon ist durch 4, die andere durch 2 teilbar → Produkt durch 8 teilbar. ∎
22. (m−1)² = m² − 2m + 1 = m·(m−2) + 1 ≡ 1 (mod m). ∎
23. 2⁸⁰/2⁴⁰ = 2⁴⁰ ≈ 1,1·10¹² Stunden (rund 125 Millionen Jahre).
24. Jeder Klartextbuchstabe wird immer gleich ersetzt, die Häufigkeitsverteilung der Sprache bleibt erhalten (E am häufigsten) → Häufigkeitsanalyse. Vigenère verschlüsselt denselben Buchstaben je nach Position verschieden und verwischt damit das Profil; angreifbar bleibt es über die Schlüssellänge.
</details>
