# 🧪 Probeklausur W2 — Wahrscheinlichkeitsrechnung und Kryptographie

> **WS27-Stil, etwas schwerer als W1.** Schwerpunkte: Verteilungen, Wettkampf, RSA mit Primfaktoren > 13.
> **Alle Ergebnisse numerisch (Python) verifiziert.**
>
> **Bearbeitungszeit: 120 Minuten** · **100 Punkte** · bestanden ab 50 Punkten
> **Hilfsmittel:** 1 einseitiger, handschriftlicher A4-Spicker + Taschenrechner
> **Keine Themen-Überschriften** — zuerst je Aufgabe das Modell an den Rand schreiben.
> Lösung erst NACH der Bearbeitung öffnen: [Loesung_W2.md](Loesung_W2.md) · Auswertung: [Auswertungsbogen.md](Auswertungsbogen.md)

| Aufgabe | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Summe |
|---|---|---|---|---|---|---|---|---|---|
| Punkte | 10 | 12 | 16 | 16 | 10 | 12 | 16 | 8 | 100 |

---

## Aufgabe 1 (10 Punkte)

**(a)** Wie viele verschiedene „Wörter" lassen sich durch Umordnen der Buchstaben von **STATISTIK** bilden?
**(b)** Wie viele davon beginnen **und** enden mit einem T?
**(c)** Bei wie vielen stehen die drei T direkt nebeneinander?
**(d)** Welchen Koeffizienten hat der Term **x³y³z²** in der ausmultiplizierten Form von **(x + y + z)⁸**?

## Aufgabe 2 (12 Punkte)

**120 Studierende** werden nach den Betriebssystemen befragt, die sie nutzen. 60 nutzen Linux, 65 Windows und 40 macOS.
25 nutzen Linux und Windows, 20 Linux und macOS, 18 Windows und macOS. **10** der Befragten nutzen keines der drei Systeme.

**(a)** Wie viele Studierende nutzen alle drei Betriebssysteme?
**(b)** Wie viele nutzen genau eines der drei Systeme?
**(c)** Wie viele nutzen genau zwei der drei Systeme?

## Aufgabe 3 (16 Punkte)

**(a)** Zwei faire Würfel werden geworfen. X sei der **Betrag der Differenz** der beiden Augenzahlen. Bestimmen Sie die Wahrscheinlichkeitsverteilung von X und kontrollieren Sie die Summe.
**(b)** Berechnen Sie Erwartungswert und Varianz von X.
**(c)** Zwei Zufallsvariablen U und V haben folgende gemeinsame Verteilung:

| | V = 0 | V = 1 | V = 2 |
|---|---|---|---|
| **U = 0** | 0,1 | 0,2 | 0,1 |
| **U = 1** | 0,2 | 0,2 | 0,2 |

Bestimmen Sie die Randverteilungen von U und V sowie E[U] und E[V]. Sind U und V unabhängig? (Begründung!)

## Aufgabe 4 (16 Punkte)

Bei einem Bogenschieß-Duell schießt jede Schützin insgesamt **10 Pfeile**; es gewinnt, wer mehr Treffer hat.
Schützin A (Trefferwahrscheinlichkeit **0,6**) hat nach **6 Pfeilen 3 Treffer**.
Schützin B (Trefferwahrscheinlichkeit **0,5**) hat nach **7 Pfeilen 5 Treffer**.

**(a)** Mit welcher Wahrscheinlichkeit gewinnt A das Duell noch?
**(b)** Mit welcher Wahrscheinlichkeit endet das Duell unentschieden?
**(c)** Welche Endtrefferzahl ist für A bzw. B zu erwarten?

## Aufgabe 5 (10 Punkte)

Eine Lieferung enthält **20 Chips**, davon sind **5 defekt**. Ein Prüfer entnimmt zufällig **4 Chips**.

**(a)** Mit welcher Wahrscheinlichkeit ist genau 1 der entnommenen Chips defekt (Entnahme ohne Zurücklegen)?
**(b)** Mit welcher Wahrscheinlichkeit ist mindestens 1 defekt?
**(c)** Wie viele defekte Chips sind in der Stichprobe zu erwarten?
**(d)** Wie groß wäre die Wahrscheinlichkeit aus (a), wenn jeder Chip nach der Prüfung zurückgelegt würde?

## Aufgabe 6 (12 Punkte)

**(a)** Bestimmen Sie ganze Zahlen x und y mit **527x + 341y = ggT(527, 341)**. Stellen Sie alle Einzelschritte dar.
**(b)** Ist die Gleichung 527x + 341y = 62 lösbar? Ist 527x + 341y = 50 lösbar? (Begründung, ggf. Lösung angeben.)
**(c)** Berechnen Sie mit Hilfe des Satzes von Euler **3²⁰⁰ mod 34**.
**(d)** Zeigen Sie: Für jedes m > 1 ist m − 1 modulo m zu sich selbst invers.

## Aufgabe 7 (16 Punkte)

Ein RSA-System verwendet den Modul **n = 667**.

**(a)** Welche der Zahlen **11, 21, 237** sind als öffentlicher Exponent e zulässig? (Begründung!)
**(b)** Mit dem zulässigen Exponenten aus (a) wurde das Kryptogramm **c = 473** erzeugt. Bestimmen Sie die Klarnachricht m (alle Einzelschritte, mit Proben).

## Aufgabe 8 (8 Punkte)

Alice und Bob vereinbaren per Diffie-Hellman einen Schlüssel mit **p = 29** und **g = 2**. Alice wählt geheim **a = 5**, Bob wählt geheim **b = 12**.

**(a)** Welche Werte tauschen die beiden öffentlich aus?
**(b)** Berechnen Sie den gemeinsamen Schlüssel aus Sicht von Alice **und** aus Sicht von Bob.
