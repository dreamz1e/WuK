# 🧪 Probeklausur N2 — Wahrscheinlichkeitsrechnung und Kryptographie

> **Neu erstellt (02.07.26), thematisch & strukturell an den Referenzklausuren orientiert
> (Vorlage: 21SoSe — mit Schützen, ZV Max zweier Würfel, Affine mit ggT-Tücke und RSA-e-Wahl).
> Alle Lösungen rechnerisch verifiziert. Anspruchsvollster der drei neuen Sätze.**
>
> **Bearbeitungszeit: 120 Minuten** · **109 Punkte** (davon 9 Bonuspunkte) · Bestehen ≈ 50 Pkt
> **Hilfsmittel:** 1 handschriftlicher A4-Spicker + Taschenrechner
> Lösung erst NACH der Bearbeitung öffnen: [Loesung_Probeklausur_N2.md](../Loesungen/Loesung_Probeklausur_N2.md)

| Aufgabe | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Summe |
|---|---|---|---|---|---|---|---|---|---|---|
| Punkte | 12 | 12 | 9 | 14 | 16 | 12 | 14 | 10 | 10 | 109 |

---

## Aufgabe 1 (12 Punkte)

Gegeben seien die Buchstaben des Wortes **ANANAS** (A, N, A, N, A, S).

**(a)** Wie viele verschiedene Anordnungen dieser Buchstaben gibt es?
**(b)** Wie viele dieser Anordnungen beginnen mit einem A und enden mit einem A?
**(c)** Wie viele Anordnungen gibt es, bei denen die beiden N direkt nebeneinander stehen?

## Aufgabe 2 (12 Punkte)

Eine Klausur besteht aus **11 Aufgaben**, von denen **7 bearbeitet** werden sollen.

**(a)** Auf wie viele Weisen können die 7 Aufgaben ausgewählt werden?
**(b)** Auf wie viele Weisen, wenn die ersten drei Aufgaben auf jeden Fall bearbeitet werden müssen?
**(c)** Auf wie viele Weisen, wenn **genau 2** der ersten 4 Aufgaben bearbeitet werden?
**(d)** Auf wie viele Weisen, wenn die **erste ODER die zweite** Aufgabe bearbeitet wird (nicht beide)?

## Aufgabe 3 (9 Punkte)

Zwei Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit, dass

**(a)** die Augensumme 9 beträgt?
**(b)** mindestens eine 6 fällt?
**(c)** das Produkt der Augenzahlen ungerade ist?

## Aufgabe 4 (14 Punkte)

Drei Sportschützen A, B und C treffen eine Zielscheibe mit den Wahrscheinlichkeiten **p(A) = 0,6**, **p(B) = 0,4** und **p(C) = 0,5**.

**(a)** Schütze B schießt 4-mal. Wie groß ist die Wahrscheinlichkeit für **genau 2 Treffer**?
**(b)** Alle drei schießen gleichzeitig je einmal. Wie groß ist die Wahrscheinlichkeit, dass die Zielscheibe getroffen wird?
**(c)** Wie oft muss Schütze C mindestens schießen, damit die Zielscheibe mit einer Wahrscheinlichkeit von mindestens **90 %** mindestens einmal getroffen wird?

## Aufgabe 5 (16 Punkte)

Vier unabhängig entscheidende Personen besteigen einen Fahrstuhl, um in eines der **fünf** oberen Stockwerke zu fahren (alle Stockwerke gleich wahrscheinlich). Wie groß ist die Wahrscheinlichkeit, dass

**(a)** der Fahrstuhl nur einmal anhält?
**(b)** der Fahrstuhl zweimal anhält und jedes Mal zwei Personen aussteigen?
**(c)** die erste Person den Fahrstuhl allein verlässt?

## Aufgabe 6 (12 Punkte)

Zwei Würfel werden geworfen. Die Zufallsvariable **X** sei die **größere** der beiden Augenzahlen (bei Gleichstand der gemeinsame Wert).

**(a)** Bestimmen Sie die Wahrscheinlichkeitsverteilung P(X = k) für k = 1, …, 6.
**(b)** Berechnen Sie den Erwartungswert E[X].
**(c)** Berechnen Sie die Varianz Var(X) und die Standardabweichung σ.

## Aufgabe 7 (14 Punkte)

**(a)** Bestimmen Sie mit Hilfe des Eulerschen Theorems schriftlich die **letzte Dezimalstelle von 7²⁰¹⁴**.
**(b)** Bestimmen Sie ganze Zahlen x und y mit **273x + 119y = 7**. Stellen Sie alle Einzelschritte dar.
**(c)** Warum gibt es keine ganzen Zahlen x, y mit **273x + 119y = 12**?

## Aufgabe 8 (10 Punkte)

Eine affine Chiffre verschlüsselt Großbuchstaben (A=0, B=1, …, Z=25) über die Formel

**f(x) = (a·x + b) mod 26**

Verlässlichen Quellen ist zu entnehmen, dass das **E in das V** übergeht und das **K in das J**.

Welche Werte haben a und b? (Die Lösung der Kongruenz ist nicht eindeutig — alle Kandidaten sind gefragt, geben Sie den gültigen Schlüssel an.)

## Aufgabe 9 (10 Punkte)

In einem Public-Key-System nach dem RSA-Verfahren fangen Sie das Kryptogramm **c = 7** ab. Der öffentliche Schlüssel des Empfängers besteht aus dem Modul **n = 33** und einem Exponenten e, von dem nur bekannt ist, dass er einer der Werte **{4, 5, 7}** ist.

**(a)** Welcher der drei Werte ist der öffentliche Exponent e? Begründen Sie.
**(b)** Bestimmen Sie den privaten Schlüssel d.
**(c)** Wie lautet die Klarnachricht zum Kryptogramm c?
