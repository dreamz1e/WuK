# 🏋️ Drill: Die vier Grundaufgaben (Wochen 1–2)

> Methode: T1 §2. **Vor jeder Aufgabe zwei Kreuze setzen:** Reihenfolge wichtig? ja/nein ·
> Wiederholung möglich? ja/nein — erst dann die Formel. Die Eis-Aufgabe vom Juli ist genau an
> diesem Schritt gescheitert. Mehrere Aufgaben stammen aus den Übungsaufgaben des Skripts (2.2.x).
> Alle Ergebnisse numerisch verifiziert.

## Teil 1 (Woche 1)

1. Ein Dominostein trägt zwei Zahlen von 0 bis 9; (1;3) und (3;1) sind derselbe Stein. Wie viele verschiedene Steine gibt es?
2. Auf einer Party stößt jeder Gast mit jedem anderen an, es klingt 741-mal. Wie viele Gäste sind es?
3. Wie viele vierstellige Zahlen bestehen aus lauter verschiedenen Ziffern?
4. Wörter der Länge 5 aus den 26 Buchstaben. Wie viele gibt es,
   (a) beliebige, (b) mit Buchstaben in alphabetischer Reihenfolge, Wiederholungen erlaubt,
   (c) in alphabetischer Reihenfolge ohne Wiederholung, (d) ohne Wiederholung in beliebiger Reihenfolge?
5. Ein Eisladen hat 10 Sorten, du nimmst 4 Kugeln. Wie viele Möglichkeiten, wenn
   (a) im Becher, alle Sorten verschieden, (b) im Becher, Sorten dürfen mehrfach vorkommen,
   (c) in der Waffel gestapelt (Reihenfolge zählt), Sorten mehrfach erlaubt, (d) gestapelt, alle verschieden?
6. 7 gleiche Bälle werden auf 4 Kinder verteilt. (a) Wie viele Verteilungen? (b) Wie viele, wenn jedes Kind mindestens einen Ball bekommt?
7. Ein Komitee soll aus 3 Männern und 2 Frauen bestehen; 7 Männer und 5 Frauen stehen zur Wahl. Wie viele Komitees?
8. Ein Beutel enthält 10 nummerierte Kugeln, 4 rot und 6 blau. 4 werden ohne Zurücklegen und ohne Beachtung der Reihenfolge gezogen. Wie viele Ergebnisse gibt es,
   (a) insgesamt, (b) mit 2 roten und 2 blauen, (c) mit genau 3 gleichfarbigen, (d) mit mindestens einer roten?

## Teil 2 (Woche 2)

9. 4 Mathe-, 3 Informatik-, 3 Physik- und 2 Englischbücher (alle verschieden) kommen ins Regal; jede Gruppe soll zusammenstehen. Wie viele Anordnungen?
10. 3 Mädchen und 3 Jungen setzen sich auf 6 Plätze in einer Reihe, sodass nie zwei Mädchen oder zwei Jungen nebeneinandersitzen. Wie viele Sitzordnungen?
11. Zwei Eiswaffeln mit je 4 verschiedenen Kugeln aus 10 Sorten, alle 8 Sorten verschieden; das Vertauschen der Waffeln zählt nicht neu. Wie viele Zusammenstellungen?
12. Lotto 6 aus 49: Wie viele Tipps haben genau 4 Richtige?
13. Wie viele Lösungen hat x₁ + x₂ + x₃ = 10 mit ganzen Zahlen xᵢ ≥ 0?
14. Ein Passwort besteht aus 4 Zeichen (26 Kleinbuchstaben oder 10 Ziffern). (a) Wie viele gibt es? (b) Wie viele enthalten mindestens eine Ziffer und mindestens einen Buchstaben?

<details><summary>Lösungen</summary>

1. Reihenfolge egal, Wdh. ja (Doppelsteine) → C(10+2−1, 2) = C(11,2) = **55**.
2. Jeder mit jedem = C(n,2) = n(n−1)/2 = 741 → n² − n − 1482 = 0 → **n = 39** (39·38/2 = 741 ✓).
3. Erste Ziffer nicht 0: 9 · 9 · 8 · 7 = **4536**. (Falle: 10·9·8·7 zählt führende Nullen mit.)
4. (a) 26⁵ = 11 881 376 · (b) Reihenfolge erzwungen, Wdh. ja → C(30,5) = **142 506** ·
   (c) C(26,5) = **65 780** · (d) 26·25·24·23·22 = **7 893 600**.
5. (a) C(10,4) = **210** · (b) C(13,4) = **715** · (c) 10⁴ = **10 000** · (d) 10·9·8·7 = **5040**. Alle vier Felder der Matrix!
6. (a) C(4+7−1, 7) = C(10,7) = **120** · (b) erst jedem einen geben, Rest 3 Bälle verteilen: C(4+3−1, 3) = C(6,3) = **20**.
7. C(7,3)·C(5,2) = 35·10 = **350**.
8. (a) C(10,4) = **210** · (b) C(4,2)·C(6,2) = 6·15 = **90** · (c) 3 rot + 1 blau oder 3 blau + 1 rot: C(4,3)·6 + C(6,3)·4 = 24 + 80 = **104** · (d) 210 − C(6,4) = 210 − 15 = **195**.
9. Blöcke anordnen 4!, innen 4!·3!·3!·2! → 24·24·6·6·2 = **41 472**.
10. Muster MJMJMJ oder JMJMJM: 2 · 3! · 3! = **72**.
11. 8 Sorten wählen C(10,8) = 45, auf zwei Waffeln aufteilen C(8,4) = 70, Waffeltausch ÷2 → 45·70/2 = **1575**.
12. 4 der 6 Richtigen und 2 der 43 Falschen: C(6,4)·C(43,2) = 15·903 = **13 545**.
13. 10 Sterne, 2 Striche → C(12,2) = **66**.
14. (a) 36⁴ = **1 679 616** · (b) alle − nur Buchstaben − nur Ziffern = 1 679 616 − 456 976 − 10 000 = **1 212 640**.
</details>
