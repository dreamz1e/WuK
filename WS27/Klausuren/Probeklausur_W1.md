# 🧪 Probeklausur W1 — Wahrscheinlichkeitsrechnung und Kryptographie

> **WS27-Stil:** orientiert an der **echten SS26-Klausur** (offizielle Themen-Auswahl, nicht altes Template).
> Niveau ≈ SS26, neue Einkleidungen. **Alle Ergebnisse numerisch (Python) verifiziert.**
>
> **Bearbeitungszeit: 120 Minuten** · **100 Punkte** · bestanden ab 50 Punkten
> **Hilfsmittel:** 1 einseitiger, handschriftlicher A4-Spicker + Taschenrechner
> **Die Aufgaben tragen absichtlich keine Themen-Überschrift** — das Modell zu erkennen ist Teil der Prüfung.
> Erst 2 Minuten alle Aufgaben überfliegen und je Aufgabe das Modell an den Rand schreiben.
> Lösung erst NACH der Bearbeitung öffnen: [Loesung_W1.md](Loesung_W1.md) · Auswertung: [Auswertungsbogen.md](Auswertungsbogen.md)

| Aufgabe | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Summe |
|---|---|---|---|---|---|---|---|---|---|
| Punkte | 10 | 12 | 14 | 10 | 16 | 12 | 16 | 10 | 100 |

---

## Aufgabe 1 (10 Punkte)

Eine Bäckerei bietet **8 Sorten** Brötchen an (von jeder Sorte sind genügend vorhanden).

**(a)** Du kaufst eine Tüte mit **5 Brötchen**. Wie viele verschiedene Tüteninhalte gibt es, wenn Sorten mehrfach vorkommen dürfen?
**(b)** Wie viele Tüteninhalte gibt es, wenn alle 5 Brötchen von verschiedener Sorte sein sollen?
**(c)** 5 Kunden kaufen nacheinander je **ein** Brötchen. Wie viele verschiedene Verkaufsprotokolle (Kunde 1 → Sorte, Kunde 2 → Sorte, …) sind möglich?
**(d)** Wie viele Protokolle aus (c) gibt es, bei denen alle 5 Kunden verschiedene Sorten kaufen?

## Aufgabe 2 (12 Punkte)

Betrachtet werden die natürlichen Zahlen von **1 bis 300**.

**(a)** Wie viele dieser Zahlen sind durch 2, durch 3 oder durch 7 teilbar?
**(b)** Wie viele sind durch keine der drei Zahlen teilbar?
**(c)** Eine der 300 Zahlen wird zufällig gezogen. Mit welcher Wahrscheinlichkeit ist sie durch **genau eine** der drei Zahlen 2, 3, 7 teilbar?
**(d)** Begründen Sie: Unter 8 beliebigen ganzen Zahlen gibt es stets zwei, die bei Division durch 7 denselben Rest lassen.

## Aufgabe 3 (14 Punkte)

Zwei Basketballerinnen tragen einen Freiwurf-Wettbewerb aus; jede hat insgesamt **10 Würfe**, es gewinnt, wer am Ende mehr Treffer hat.
Spielerin A trifft jeden Wurf mit Wahrscheinlichkeit **0,7** und hat nach **7 Würfen 4 Treffer**.
Spielerin B trifft jeden Wurf mit Wahrscheinlichkeit **0,5** und hat nach **8 Würfen 5 Treffer**.
Alle Würfe sind unabhängig.

**(a)** Definieren Sie geeignete Zufallsvariablen für die restlichen Würfe und geben Sie deren Verteilungen vollständig an.
**(b)** Mit welcher Wahrscheinlichkeit gewinnt A den Wettbewerb noch?
**(c)** Mit welcher Wahrscheinlichkeit endet der Wettbewerb unentschieden?

## Aufgabe 4 (10 Punkte)

Bei einer Tombola gewinnt jedes Los unabhängig mit Wahrscheinlichkeit **0,15**.

**(a)** Wie viele Lose muss man mindestens kaufen, um mit einer Wahrscheinlichkeit von mindestens **90 %** mindestens einen Gewinn zu haben?
**(b)** Jemand kauft 10 Lose. Wie groß ist die Wahrscheinlichkeit für genau 2 Gewinne? Geben Sie außerdem Erwartungswert und Varianz der Anzahl der Gewinne an.
**(c)** Jemand öffnet Lose nacheinander. Mit welcher Wahrscheinlichkeit ist erst das **4. Los** der erste Gewinn?

## Aufgabe 5 (16 Punkte)

Drei Touristen wählen unabhängig voneinander und rein zufällig je eines von **n** Restaurants (n ≥ 3) für das Abendessen.
Die Zufallsvariable X bezeichne die **Anzahl der Restaurants, die mindestens einen der drei Gäste bekommen**.

**(a)** Bestimmen Sie die Wahrscheinlichkeitsverteilung von X (in Abhängigkeit von n).
**(b)** Zeigen Sie, dass sich die Wahrscheinlichkeiten zu 1 summieren.
**(c)** Berechnen Sie den Erwartungswert E[X] in Abhängigkeit von n.
**(d)** Berechnen Sie E[X] und Var(X) für **n = 4**.

## Aufgabe 6 (12 Punkte)

**20 %** aller eingehenden E-Mails eines Postfachs sind Spam. Ein Filter markiert Spam-Mails mit Wahrscheinlichkeit **95 %**, er markiert aber auch **4 %** der erwünschten Mails fälschlich.

**(a)** Zeichnen Sie einen Ereignisbaum und berechnen Sie die Wahrscheinlichkeit, dass eine zufällige Mail markiert wird.
**(b)** Eine Mail wurde markiert. Mit welcher Wahrscheinlichkeit ist sie tatsächlich Spam?
**(c)** Eine Mail wurde **nicht** markiert. Mit welcher Wahrscheinlichkeit ist sie trotzdem Spam?

## Aufgabe 7 (16 Punkte)

In einem RSA-System hat der Empfänger den öffentlichen Schlüssel **n = 391**, **e = 235**. Sie fangen das Kryptogramm **c = 118** ab.

Bestimmen Sie die Klarnachricht m. Stellen Sie alle Einzelschritte dar (Faktorisierung, φ(n), geheimer Schlüssel d, Entschlüsselung) und führen Sie die Proben durch.

## Aufgabe 8 (10 Punkte)

**(a)** Eine affine Chiffre f(x) = (a·x + b) mod 26 (A=0, …, Z=25) bildet **E auf F** und **N auf Q** ab. Bestimmen Sie a und b und prüfen Sie, ob der Schlüssel gültig ist.
**(b)** Entschlüsseln Sie mit diesem Schlüssel den Geheimtextbuchstaben **K**.
**(c)** Das vollständige Durchprobieren aller 40-Bit-Schlüssel dauere 1 Stunde. Wie lange dauert es bei gleichem Tempo für 50-Bit-Schlüssel?
