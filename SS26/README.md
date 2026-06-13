# 📚 WuK SS26 — Klausurvorbereitung (Neuanalyse)

**Modul:** Wahrscheinlichkeitsrechnung und Kryptographie · **Klausur:** Do, 09.07.2026
**Stand:** 27.05.2026 · **Ziel:** Bestehen mit ~20 h Aufwand + 1 A4-Spicker (handschr.) + TR

> Komplette Neuanalyse von Grund auf, basierend auf dem SS26-Skript (`VFHWUK.pdf`),
> der offiziellen Themen-Auswahl und **5 neu verifizierten Probeklausuren**.
> Ersetzt die SS25-Analyse (enthielt mehrere Rechenfehler — siehe unten).

## 🚀 Reihenfolge zum Loslegen
1. **[`00_Strategie_WuK.md`](./00_Strategie_WuK.md)** — Warum & Was: die 9 Aufgabentypen, Triage, Klausurtaktik.
2. **[`01_Lernplan_AKTUELL.md`](./01_Lernplan_AKTUELL.md)** — ⭐ **aktueller „Vollgas"-Plan** (Start 13.06, ~8 h/Woche). *(Der alte [`01_Lernplan_6Wochen.md`](./01_Lernplan_6Wochen.md) bleibt als Referenz.)*
   - **[`02_Tagesplan.md`](./02_Tagesplan.md)** — ✅ **abhakbarer Tag-für-Tag-Plan** in kleinen Paketen (~45–90 min/Tag).
3. **[`Lernkarten/`](./Lernkarten/)** — 🎨 **interaktive Lern-HTMLs** (im Browser öffnen): [KOMB](./Lernkarten/Lernkarte_1_KOMB.html) · [WK](./Lernkarten/Lernkarte_2_WK.html) · [KRYPTO](./Lernkarten/Lernkarte_3_KRYPTO.html). Mit Schritt-für-Schritt-Rechenwegen, eigenen Rechnern (RSA, Bayes, Binomial …) und Mini-Quiz.
   - **[`Trainer/App.html`](./Trainer/App.html)** — 📱 **Übungs-App** zum Drillen unterwegs (Handy/PC, offline): Zufallsaufgaben mit Sofort-Feedback, Leitner-Wiederholung, Karteikarten, Mini-Klausur.
4. **[`Uebungen/`](./Uebungen/)** — pro Woche ein **Übungsset** mit frischen Aufgaben + verifizierten Lösungen zum Selbsttest.
5. **[`Spickzettel_A4_WuK.md`](./Spickzettel_A4_WuK.md)** — Vorlage, die du **per Hand** auf eine A4-Seite überträgst.
6. **[`Loesungen/`](./Loesungen/)** — verifizierte Musterlösungen der 5 Probeklausuren.

## 🎯 Kernstrategie in einem Satz
Die Klausur ist eine **feste Vorlage aus 9 wiederkehrenden Aufgabentypen**. Beherrsche
die **5 Tier-1-Typen** (#1 Permutation, #2 Auswahl, #4 Binomial, #5 Bayes, #9 RSA) sicher —
das allein reicht zum Bestehen mit Puffer.

## 📝 Probeklausuren (Material im Ordner `../SS25/Probeklausuren/`)
| Klausur | Format | verifizierte Lösung |
|---|---|---|
| 21SoSe | modern, 100+ Pkt | [Loesung_21SoSe.md](./Loesungen/Loesung_21SoSe.md) |
| SoSe20 | modern, 100+ Pkt | [Loesung_SoSe20.md](./Loesungen/Loesung_SoSe20.md) |
| WS0607 | klassisch, 55+ Pkt | [Loesung_WS0607.md](./Loesungen/Loesung_WS0607.md) |
| SS14 | klassisch, 55+ Pkt | [Loesung_SS14.md](./Loesungen/Loesung_SS14.md) |
| WS0809 | klassisch, 55+ Pkt | [Loesung_WS0809.md](./Loesungen/Loesung_WS0809.md) |

## ⚠️ Korrigierte Fehler der SS25-Analyse (rechnerisch verifiziert)
| Klausur/Aufgabe | SS25 (falsch) | verifiziert |
|---|---|---|
| 21SoSe A9 (RSA) | m = 87 | **m = 82** |
| WS0607 A9 (RSA) | z = 60 | **z = 25** |
| WS0809 A9 (RSA) | z = 59 | **z = 68** |
| 21SoSe A6c (Varianz) | E[X²] = 287/36 | **301/36** |
| SoSe20 A7b | ggT(582,123) = 6 | **ggT = 3** |
| 21SoSe A8 (Affine) | „keine Lösung" | **(a,b) = (25,14)** |

→ Lehre: bei RSA **jeden Quadrierschritt mit dem TR prüfen**; bei Affine die **ggT-Tücke** beachten.
