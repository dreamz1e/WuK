# 🎯 Strategie WS27 — Wiederholungsklausur WuK

> **Erstellt 09.07.2026**, direkt nach der nicht bestandenen SS26-Klausur.
> Grundlage: Postmortem (`00_Postmortem_SS26.md`), offizielle Themen-Auswahl
> (`../SS26/wk.vfhwuk.gliederung.auswahl.pdf`), Skript `VFHWUK.pdf`.
> **Klausurtermin: Winter (vermutlich Ende Jan/Anfang Feb 2027) — eintragen, sobald bekannt.**

---

## 0. Der Strategiewechsel in einem Satz

**SS26 („Template-Mastery"):** 9 Aufgabentypen aus alten Klausuren drillen, Rest streichen.
→ Gescheitert, weil die Klausur die Themen-Auswahl prüft, nicht das alte Template.

**WS27 („Verstehen + Vollabdeckung + Erkennung"):**
> Die **komplette offizielle Themen-Auswahl** beherrschen, jede Aufgabe zuerst
> **klassifizieren**, jedes Werkzeug **stressfest** machen. Der lange Vorlauf
> (~7 Monate) macht das ohne Hektik möglich.

Drei Ebenen, alle drei werden trainiert:

| Ebene | Frage | SS26 | WS27 |
|---|---|---|---|
| **Erkennen** | Welches Modell ist das? | ❌ nie geübt | gemischte Sets, Klassifikation als Pflichtschritt |
| **Verstehen** | Warum gilt die Formel? Wie leite ich selbst her? | ❌ übersprungen | Skript-Herleitungen + „Verteilung aufstellen" |
| **Rechnen** | Fehlerfrei unter Zeitdruck | ✅ (zu schmal) | beibehalten, auf alle Themen ausgeweitet |

---

## 1. Die vollständige Themen-Landkarte (aus der offiziellen Auswahl)

**Fett = in SS26 gefehlt oder unterschätzt.** Skript-Seiten in Klammern.

### Block A — Grundlagen & Kombinatorik (Skript Kap. 1–2)
| Thema | Status SS26 | WS27-Modul |
|---|---|---|
| Mengenlehre (∪, ∩, Komplement, Mächtigkeit) (S. 9–27) | implizit | T1 |
| Binomialkoeffizienten, binomischer Lehrsatz (S. 41–48) | ✅ | T1 |
| **Vier Grundaufgaben als 2×2-System** (S. 61–89): Variation m./o. Zurücklegen, Kombination m./o. Zurücklegen | nur 2 von 4 | T1 ⭐ |
| Permutationen von Multimengen (S. 90–101) | ✅ | T1 |
| **Schubfachprinzip** (S. 102–108) | ❌ fehlte | T1 ⭐ |
| **Siebformel** inkl. Anwendungen (S. 109–121) | ❌ fehlte, **kam dran** | T1 ⭐⭐ |

### Block B — Wahrscheinlichkeit (Kap. 3.1–3.2)
| Thema | Status SS26 | WS27-Modul |
|---|---|---|
| Ergebnismengen, Ereignisse, Axiome (S. 135–148) | implizit | T2 |
| UND/ODER-Regeln — **ODER = Siebformel für P!** (S. 149–158) | teilweise | T2 ⭐ |
| Bedingte W., Multiplikationssatz, Ereignisbäume (S. 159–169) | ✅ | T2 |
| Totale Wahrscheinlichkeit + Bayes (S. 170–174) | ✅ | T2 |

### Block C — Zufallsvariablen & Verteilungen (Kap. 3.3–3.5)
| Thema | Status SS26 | WS27-Modul |
|---|---|---|
| **Verteilungen selbst aufstellen** (Werte → zählen → Σ=1) | ❌ fehlte, **kam dran** (Jäger) | T3 ⭐⭐ |
| E[X], Var(X) aus der Definition; **Indikator-Trick**, Linearität | ansatzweise | T3 ⭐ |
| Binomialverteilung inkl. Herleitung, E, Var (S. 241–248) | ✅ | T3 |
| **Ungleichungs-Aufgaben** (Mindest-n) + **Wettkampf/Vergleich** | Formel ohne Transfer | T3 ⭐⭐ |
| **Hypergeometrische Verteilung** (S. 249–251) | nur als Urnenformel | T3 ⭐ |
| Gleichverteilung, Bernoulli (S. 239–241) | ✅ | T3 |
| Stetige ZV: Dichte, C bestimmen, E, Var (S. 273–289) | Tier 3 | T3 |

### Block D — Kryptographie (Kap. 4)
| Thema | Status SS26 | WS27-Modul |
|---|---|---|
| Caesar, monoalphabetisch, statistische Analyse, Vigenère (S. 353–367) | ❌ ungelernt | T4 (klein) |
| Primzahlen, Teilbarkeit, ggT (S. 386–394) | ✅ | T4 |
| **Erweiterter Euklid als Tableau** (S. 392) | fehleranfällige Variante | T4 ⭐⭐ |
| φ-Funktion, Modulo-Arithmetik, Inverse (S. 394–408) | ✅ mit Lücken | T4 ⭐ |
| Euler-Theorem, schnelle Exponentiation (S. 409–412) | ✅ | T4 |
| Diffie-Hellman (S. 418–419) | ❌ fehlte | T4 |
| RSA komplett (S. 423–427) | ✅ mit Werkzeugdefekten | T4 ⭐ |
| Affine Chiffre | ✅ | T4 |

---

## 2. Neue Prioritäten (ersetzt die alte Tier-Liste)

Nicht mehr „was kommt wahrscheinlich dran", sondern **„was kostet mich Punkte, wenn ich
es nicht kann"** — die Klausur hat bewiesen, dass alles aus der Auswahl drankommen kann.

1. **P0 — Klausur-Killer beheben** (die 4 Postmortem-Ursachen):
   Siebformel · 4 Grundaufgaben als System · Verteilungen aufstellen + E/Var ·
   Euklid-Tableau/RSA stressfest. *Ohne die wäre auch die nächste Klausur verloren.*
2. **P1 — Bewährtes erhalten:** Permutationen, Auswahl, Binomial, Bayes, Laplace
   (Fahrstuhl/Urne), Affine. *Hier waren die Punkte schon mal sicher.*
3. **P2 — Restabdeckung:** Schubfachprinzip, Hypergeometrisch als benannte Verteilung,
   stetige ZV, Diffie-Hellman, klassische Chiffren, Mengenlehre-Formalia.
   *Kleine Themen, schnelle Punkte, keine Überraschungen mehr.*

**Wichtig:** P2 wird diesmal **nicht gestrichen** — nur später und schlanker gelernt.

---

## 3. Trainingsprinzipien (das eigentlich Neue)

1. **Klassifikation als Pflichtritual.** Jede Übungsaufgabe beginnt mit 3 Zeilen:
   *Modell? Formel? Warum?* — erst dann rechnen. Das Erkennungstraining
   (`Uebungen/Erkennungstraining_1.md`) besteht sogar **nur** aus diesem Schritt.
2. **Gemischt statt sortiert.** Ab Phase 2 nie wieder nur themenreine Drills —
   die Klausur verrät das Thema auch nicht.
3. **Varianten-Drill.** Zu jedem Typ mindestens 3 Einkleidungen üben
   (Schützen = Würfel = Serverausfälle = Torschüsse). Die Mathematik bleibt gleich,
   die Geschichte wechselt.
4. **Herleiten können, nicht nur einsetzen.** Für Binomial, Hypergeometrisch und
   „eigene" Verteilungen die Herleitung 1× selbst sauber aufschreiben.
5. **Werkzeuge mit Probe und Abbruch.** Jedes Rezept endet mit einer Probe;
   jede Abkürzung hat ein hartes Abbruchkriterium (→ Spickzettel).
6. **Skript nutzen.** Die „Aufgaben:"-Abschnitte des Skripts (je Kapitelende) sind
   der ehrlichste Prädiktor für Klausuraufgaben — sie werden systematisch mitgerechnet
   (insb. S. 82–89, 100, 107, 119–121, 177–186, 262–271, 435–438).

---

## 4. Klausurtag-Taktik (aktualisiert)

1. **Erst 2 Minuten alle Aufgaben überfliegen** und je Aufgabe das Modell notieren
   (genau das ist trainiert). Reihenfolge: Sicherstes zuerst.
2. Formel immer hinschreiben, Zwischenergebnisse stehen lassen, Modul notieren.
3. **Abbruchdisziplin:** Wenn ein Ansatz nach ~3 min nicht trägt → markieren, weiter,
   am Ende zurück. (SS26-Fehler: ewig an RSA-Probiererei festgebissen.)
4. Gegenereignis-Reflex bei „mindestens".
5. Letzte 15 min: Proben (Σ P = 1? · e·d mod φ = 1? · mᵉ mod n = c? · Brüche gekürzt?).

---

## 5. Definition of Ready (deutlich strenger als SS26)

Klausurbereit bist du, wenn:
- [ ] Du im **Erkennungstraining** 18/20 gemischte Aufgaben korrekt klassifizierst (nur Modell + Formel).
- [ ] Du die **SS26-Rekonstruktion** unter Klausurbedingungen mit ≥ 85 % löst.
- [ ] Du **2 alte Klausuren, die du länger nicht angefasst hast**, unter Zeit mit ≥ 70 % löst.
- [ ] Euklid-Tableau: beliebige Inverse mod m < 1000 in **< 3 min inkl. Probe**.
- [ ] Du eine unbekannte „Verteilung aufstellen"-Aufgabe (Stil Jäger/Hasen) vollständig
      durchziehst: Werte, P(X=k), Σ=1, E, Var.
- [ ] Siebformel mit 3 Mengen fehlerfrei, inkl. einer Anwendungsaufgabe.
- [ ] Spicker geschrieben **und** 1 Probeklausur ohne ihn ≥ 60 % (der Spicker ist Backup, nicht Krücke).

→ Zeitplan: `02_Lernplan_WS27.md`.
