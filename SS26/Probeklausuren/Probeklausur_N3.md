# 🧪 Probeklausur N3 — Wahrscheinlichkeitsrechnung und Kryptographie

> **Neu erstellt (02.07.26), thematisch & strukturell an den Referenzklausuren orientiert
> (Vorlage: SoSe20/21SoSe; mit Teilbarkeitsbeweis wie 21SoSe A7b und Entschlüsselungs-Teil bei der Affine).
> Alle Lösungen rechnerisch verifiziert.**
>
> **Bearbeitungszeit: 120 Minuten** · **109 Punkte** (davon 9 Bonuspunkte) · Bestehen ≈ 50 Pkt
> **Hilfsmittel:** 1 handschriftlicher A4-Spicker + Taschenrechner
> Lösung erst NACH der Bearbeitung öffnen: [Loesung_Probeklausur_N3.md](../Loesungen/Loesung_Probeklausur_N3.md)

| Aufgabe | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Summe |
|---|---|---|---|---|---|---|---|---|---|---|
| Punkte | 12 | 12 | 9 | 14 | 16 | 12 | 14 | 10 | 10 | 109 |

---

## Aufgabe 1 (12 Punkte)

Gegeben seien die Ziffern **1, 1, 3, 3, 3, 3, 7**.

**(a)** Wie viele verschiedene Anordnungen dieser Ziffern gibt es?
**(b)** Wie viele dieser Anordnungen beginnen mit einer 3 und enden mit einer 3?
**(c)** Wie viele Anordnungen gibt es, bei denen die beiden Einsen direkt nebeneinander stehen?

## Aufgabe 2 (12 Punkte)

In einer Bibliothek stehen **14 Bücher** einer Reihe. Für eine Ausstellung sollen **9** ausgewählt werden.

**(a)** Auf wie viele Weisen können die 9 Bücher ausgewählt werden?
**(b)** Auf wie viele Weisen, wenn die ersten beiden Bände auf jeden Fall dabei sein sollen?
**(c)** Auf wie viele Weisen, wenn **genau 3** der ersten 5 Bände dabei sein sollen?
**(d)** Auf wie viele Weisen, wenn **höchstens 1** der ersten 5 Bände dabei sein soll?

## Aufgabe 3 (9 Punkte)

Fünf Würfel mit 6 Seiten werden geworfen. Wie viele verschiedene Ergebnisse sind möglich, wenn die Würfel

**(a)** nicht unterscheidbar sind?
**(b)** sich durch ihre Farbe unterscheiden?

## Aufgabe 4 (14 Punkte)

Eine unfaire Münze zeigt mit der Wahrscheinlichkeit **2/5 Kopf** und mit der Wahrscheinlichkeit **3/5 Zahl**. Wie groß ist die Wahrscheinlichkeit, dass nach **5 Münzwürfen**

**(a)** nur Kopf vorkommt?
**(b)** genau 3-mal Kopf vorkommt?
**(c)** mindestens 1-mal Zahl vorkommt?

## Aufgabe 5 (16 Punkte)

Drei unabhängig entscheidende Personen besteigen einen Fahrstuhl, um in eines der **sechs** oberen Stockwerke zu fahren (alle Stockwerke gleich wahrscheinlich). Wie groß ist die Wahrscheinlichkeit, dass

**(a)** der Fahrstuhl nur einmal anhält?
**(b)** der Fahrstuhl dreimal anhält (alle steigen einzeln aus)?
**(c)** die Personen A und B im selben Stockwerk aussteigen (egal, wo die dritte Person aussteigt)?

## Aufgabe 6 (12 Punkte)

Ein E-Mail-Postfach erhält zu **20 %** Spam. Der Spam-Filter markiert Spam-Mails mit einer Wahrscheinlichkeit von **95 %** korrekt. Erwünschte Mails werden mit einer Wahrscheinlichkeit von **2 %** fälschlich als Spam markiert.

Wie groß ist die Wahrscheinlichkeit, dass eine als Spam markierte Mail tatsächlich Spam ist?

## Aufgabe 7 (14 Punkte)

**(a)** Berechnen Sie mit Hilfe des Eulerschen Theorems schriftlich **2¹⁰⁰ mod 9**.
**(b)** Bestimmen Sie ganze Zahlen x und y mit **322x + 70y = 14**. Stellen Sie alle Einzelschritte dar.
**(c)** Zeigen Sie: **a⁷ − a ist für jede ganze Zahl a durch 7 teilbar.**

## Aufgabe 8 (10 Punkte)

Eine affine Chiffre verschlüsselt Großbuchstaben (A=0, B=1, …, Z=25) über die Formel

**f(x) = (a·x + b) mod 26**

Verlässlichen Quellen ist zu entnehmen, dass das **H in das R** übergeht und das **M in das Q**.

**(a)** Welche Werte haben a und b?
**(b)** Entschlüsseln Sie den Geheimtext-Buchstaben **D**.

## Aufgabe 9 (10 Punkte)

In einem Public-Key-System nach dem RSA-Verfahren fangen Sie das Kryptogramm **c = 26** ab, das an einen Empfänger gerichtet ist, dessen öffentlicher Schlüssel aus **e = 5** und **n = 51** (das Modul) besteht.

Wie lautet die Klarnachricht zum Kryptogramm c?
