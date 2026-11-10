# 🧪 Probeklausur W3 — Wahrscheinlichkeitsrechnung und Kryptographie

> **WS27-Stil, „ohne Spicker"-Klausur:** saubere Standardtypen quer durch die Themen-Auswahl.
> **Empfohlen: komplett OHNE Spickzettel bearbeiten** (Ziel ≥ 60 Punkte) — der Spicker ist Backup, nicht Krücke.
> **Alle Ergebnisse numerisch (Python) verifiziert.**
>
> **Bearbeitungszeit: 120 Minuten** · **100 Punkte** · bestanden ab 50 Punkten
> **Hilfsmittel:** Taschenrechner (regulär zusätzlich: 1 einseitiger, handschriftlicher A4-Spicker)
> **Keine Themen-Überschriften** — zuerst je Aufgabe das Modell an den Rand schreiben.
> Lösung erst NACH der Bearbeitung öffnen: [Loesung_W3.md](Loesung_W3.md) · Auswertung: [Auswertungsbogen.md](Auswertungsbogen.md)

| Aufgabe | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Summe |
|---|---|---|---|---|---|---|---|---|---|
| Punkte | 12 | 10 | 14 | 12 | 12 | 14 | 10 | 16 | 100 |

---

## Aufgabe 1 (12 Punkte)

In einer Prüfung sind **6 von 10 Fragen** zu bearbeiten. Wie viele Auswahlmöglichkeiten gibt es,

**(a)** wenn keine Einschränkungen bestehen?
**(b)** wenn die ersten beiden Fragen bearbeitet werden müssen?
**(c)** wenn von den ersten 5 Fragen **genau 3** bearbeitet werden müssen?
**(d)** wenn von den ersten 5 Fragen **mindestens 4** bearbeitet werden müssen?

## Aufgabe 2 (10 Punkte)

**(a)** Welchen Koeffizienten hat x³ in **(2x + 1)⁵**?
**(b)** Wie viele Teilmengen hat eine Menge mit 6 Elementen? Wie viele davon haben eine gerade Anzahl von Elementen?
**(c)** Eine Eisdiele hat 6 Sorten. Wie viele verschiedene Becher mit 4 Kugeln gibt es, wenn die Reihenfolge keine Rolle spielt und Sorten mehrfach gewählt werden dürfen?
**(d)** Es sei Ω = {1, 2, …, 10}, A die Menge der geraden Zahlen in Ω und B die Menge der durch 3 teilbaren Zahlen in Ω. Geben Sie A ∩ B, A ∪ B und das Komplement von A ∪ B (in Ω) an.

## Aufgabe 3 (14 Punkte)

**Vier** unabhängig entscheidende Personen besteigen einen Fahrstuhl, um in eines der **fünf** oberen Stockwerke zu fahren; jedes Stockwerk ist für jede Person gleich wahrscheinlich. Wie groß ist die Wahrscheinlichkeit, dass

**(a)** alle vier im selben Stockwerk aussteigen?
**(b)** alle vier in verschiedenen Stockwerken aussteigen?
**(c)** die Personen A und B im selben Stockwerk aussteigen?
**(d)** der Fahrstuhl genau zweimal hält und dabei jeweils zwei Personen aussteigen?

## Aufgabe 4 (12 Punkte)

Ein Quiz besteht aus **8 Fragen** mit je 4 Antwortmöglichkeiten, von denen genau eine richtig ist. Ein Kandidat rät bei jeder Frage rein zufällig.

**(a)** Mit welcher Wahrscheinlichkeit beantwortet er genau 2 Fragen richtig?
**(b)** Mit welcher Wahrscheinlichkeit beantwortet er mindestens 2 Fragen richtig?
**(c)** Geben Sie Erwartungswert, Varianz und Standardabweichung der Anzahl richtiger Antworten an.
**(d)** Wie viele Fragen müsste das Quiz mindestens haben, damit der Kandidat mit mindestens 95 % Wahrscheinlichkeit wenigstens eine Frage richtig rät?

## Aufgabe 5 (12 Punkte)

Maschine A fertigt **60 %**, Maschine B **40 %** der Tagesproduktion. Bei A sind **3 %** der Teile Ausschuss, bei B **5 %**.

**(a)** Mit welcher Wahrscheinlichkeit ist ein zufällig gewähltes Teil Ausschuss?
**(b)** Ein Teil ist Ausschuss. Mit welcher Wahrscheinlichkeit stammt es von Maschine B?
**(c)** Ein Teil ist in Ordnung. Mit welcher Wahrscheinlichkeit stammt es von Maschine A?

## Aufgabe 6 (14 Punkte)

**(a)** Die diskrete Zufallsvariable X habe die Verteilung

| k | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = k) | 0,1 | 0,3 | 0,4 | 0,2 |

Berechnen Sie E[X], Var(X), die Standardabweichung, P(1 ≤ X < 3) sowie E[2X + 3] und Var(2X + 3).

**(b)** Die stetige Zufallsvariable Y habe die Dichte f(y) = C·y für 0 ≤ y ≤ 2 und f(y) = 0 sonst.
Bestimmen Sie C, E[Y], Var(Y) und P(Y > 1).

## Aufgabe 7 (10 Punkte)

**(a)** Bestimmen Sie das Inverse von **19 modulo 60**.
**(b)** Berechnen Sie **2¹⁰⁰ mod 13**.
**(c)** Zeigen Sie: 13 teilt a¹³ − a für jede ganze Zahl a.
**(d)** Berechnen Sie φ(45), φ(49) und φ(77).
**(e)** In einem Caesar-verschlüsselten deutschen Text ist **H** der häufigste Buchstabe. Welche Verschiebung k liegt vermutlich vor? Entschlüsseln Sie damit **NODXVXU**.

## Aufgabe 8 (16 Punkte)

In einem RSA-System mit dem öffentlichen Schlüssel **n = 143**, **e = 103** fangen Sie das Kryptogramm **c = 125** ab.

**(a)** Bestimmen Sie die Klarnachricht m (alle Einzelschritte, mit Proben).
**(b)** Warum wäre **e = 9** für diesen Modul kein zulässiger öffentlicher Exponent?
**(c)** Begründen Sie in 1–2 Zeilen, warum die Entschlüsselung m = cᵈ mod n funktioniert.
