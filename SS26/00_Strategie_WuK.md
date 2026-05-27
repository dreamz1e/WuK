# 🎯 Strategie zum Bestehen — WuK SS26

> **Neuanalyse am 27.05.2026** auf Basis des SS26-Skripts (`VFHWUK.pdf`, 457 S.), der
> offiziellen Themen-Auswahl (`wk.vfhwuk.gliederung.auswahl.pdf`) und **5 neu
> verifizierten Probeklausuren**. Ersetzt die SS25-Analyse (die nachweislich
> mehrere Rechenfehler enthielt — siehe unten).

---

## 0. Ausgangslage (deine Rahmenbedingungen)

| Faktor | Wert | Konsequenz für die Strategie |
|---|---|---|
| **Klausurtermin** | Do, **09.07.2026** | exakt **6 Wochen** ab heute (43 Tage) |
| **Zeitbudget** | ~2–4 h/Woche → **~18–24 h gesamt** | **Kein** Vollstudium möglich → harte Triage |
| **Hilfsmittel** | **1 einseitiger A4-Spicker (handschriftlich) + Taschenrechner** | Spicker = strategische Waffe; Memorieren minimiert |
| **Vorkenntnis** | Grundlagen da, eingerostet | Auffrischen + **Drillen**, nicht von null lernen |
| **Format (vermutet)** | modern, **100 Punkte**, 9 Aufgaben, 120 min | Bestehen = **50 % = 50 Pkt** (klassisch: 28/55) |
| **Ziel** | **Bestehen** (nicht Bestnote) | „Top-Themen mit Puffer" statt Vollabdeckung |

---

## 1. Die zentrale Erkenntnis: Die Klausur ist eine feste Vorlage

Über **alle 5 Probeklausuren** (2× modern ~100 Pkt, 3× klassisch ~55 Pkt) wiederholen
sich **dieselben 9 Aufgabentypen** in nahezu identischer Form. Das heißt:

> **Du lernst keine 457 Seiten. Du beherrschst 9 wiederkehrende Rechen-Schemata.**

| # | Aufgabentyp | Vorkommen | Schema | typ. Punkte |
|---|---|---|---|---|
| 1 | **Permutation mit Wiederholung** (Multimengen, „BANANEN") | 5/5 | ★★★★★ | 6–12 |
| 2 | **Auswahl-Kombinatorik** (Binomialkoeffizient „k aus n") | 5/5 | ★★★★★ | 7–14 |
| 3 | **Laplace-Wahrscheinlichkeit** (Würfel/Fahrstuhl, Abzählen) | 5/5 | ★★★★☆ | 6–18 |
| 4 | **Binomialverteilung** (Schützen/Münze/Tennis) | 5/5 | ★★★★★ | 7–16 |
| 5 | **Bayes** (Test/Defekte) | 3/5 (alle modernen) | ★★★★★ | 5–12 |
| 6 | **Zufallsvariable** E[X], Var, σ (diskret) bzw. stetige Dichte (C, σ) | 5/5 | ★★★☆☆ | 6–12 |
| 7 | **Zahlentheorie** (Euler-Theorem aᵏ mod n + erw. Euklid + Teilbarkeit) | 5/5 | ★★★★☆ | 8–14 |
| 8 | **Affine Chiffre** (a·x+b mod 26 aus 2 Buchstaben lösen) | 5/5 | ★★★★☆ | 7–18 |
| 9 | **RSA-Entschlüsselung** (n→φ→d→c^d) | 5/5 | ★★★★★ | 5–18 |

---

## 2. Die Triage (Template-Mastery)

### 🟢 Tier 1 — auf Automatismus drillen (die „Bank"-Aufgaben)
**#1 Permutation · #2 Auswahl-Kombinatorik · #4 Binomialverteilung · #5 Bayes · #9 RSA**

Das sind die **schematischsten** und **zuverlässigsten** Typen. Rechnung mit
Taschenrechner, kaum Interpretationsspielraum, fast jedes Mal dabei.

> **Beweis, dass Tier 1 zum Bestehen reicht:**
> - 21SoSe (modern): 12+14+16+10+18 = **70 Pkt** (Bestehen: 50)
> - SoSe20 (modern): 12+12+14+12+10 = **60 Pkt** (Bestehen: 50)
>
> **→ Tier 1 sicher beherrscht = bestanden, mit Puffer.** Alles Weitere ist Sicherheit.

### 🟡 Tier 2 — solide als Puffer
**#7 Zahlentheorie · #3 Laplace-Wahrscheinlichkeit · #8 Affine Chiffre**

Ebenfalls schematisch. #7 + #8 teilen sich den Werkzeugkasten mit #9 (RSA) — du
lernst die Modulo-Mathematik **einmal** und schaltest **drei** Aufgaben frei.

### 🔴 Tier 3 — opportunistisch (Formel können, Teilpunkte mitnehmen)
**#6 Zufallsvariable / stetige Verteilung**

Am rechenintensivsten und eingerostetsten (Integral bzw. E[X²]-Summe). Formel auf
den Spicker, Ansatz hinschreiben, Teilpunkte sichern — aber nicht zur Priorität machen.

---

## 3. Der Synergie-Trick: 3 Lernblöcke statt 9 Einzelthemen

| Block | deckt ab | gemeinsames Werkzeug |
|---|---|---|
| **KOMB** | #1, #2 | Fakultät, Binomialkoeffizient C(n,k) |
| **WK** | #3, #4, #5 (+#6) | Laplace, Gegenereignis, bedingte W. |
| **KRYPTO** | #7, #8, #9 | **ein** Modulo-Werkzeugkasten: ggT, erw. Euklid, Inverse mod m, φ-Funktion, Euler-Theorem, schnelle Exponentiation |

**KRYPTO ist der größte Hebel:** ein Werkzeugkasten → 3 Aufgabentypen (≈ 30–40 Pkt).

---

## 4. Klausurtag-Taktik

**Reihenfolge: Sicheres zuerst, Punkte sammeln, Schweres zuletzt.**

1. **Erst alle Tier-1-Aufgaben** in Reihenfolge ihrer Sicherheit (#1 → #2 → #9 → #4 → #5).
2. Dann **Tier 2** (#7 → #3 → #8).
3. **Tier 3** (#6) nur mit Restzeit — Ansatz + Formel für Teilpunkte.
4. **Letzte 15 min:** Kontrolle (v.a. Modulo-Rechnungen & Brüche kürzen).

**Punkte-Maximierung:**
- **Immer die Formel hinschreiben**, bevor du rechnest → Teilpunkte auch bei Zahlfehler.
- **Gegenereignis-Reflex:** „mindestens ein/e …" → `1 − P(keins)`.
- **Zwischenergebnisse stehen lassen** (nicht überschreiben), damit Folgefehler nicht alle Punkte kosten.
- **Einheiten/Modul mitschreiben:** `… (mod 26)`, `… (mod n)`.

**Zeitbudget (100-Pkt-Format, 120 min):** ~10 min/Aufgabe + 15 min Kontrolle + 15 min Puffer.

---

## 5. Die teuersten Fallen (aus der Verifikation der alten Lösungen)

Diese Fehler hatte die **alte KI tatsächlich gemacht** — kenne sie, dann passieren sie dir nicht:

1. **φ bei Primzahlquadraten:** `φ(25) = 5·4 = 20` (**nicht** 16!). Allgemein `φ(p²) = p·(p−1)`.
2. **Schnelle Exponentiation nachrechnen:** `10⁸ mod 91 = 9` (alte KI: 20 → RSA-Ergebnis komplett falsch). **Jeden Quadrierschritt mit dem TR prüfen.**
3. **Affine Chiffre, ggT-Tücke:** Wenn beim Lösen `6a ≡ 20 (mod 26)` auftaucht und `ggT(6,26)=2`: **durch 2 teilen** → `3a ≡ 10 (mod 13)`. (Alte KI gab fälschlich „keine Lösung" an.)
4. **Gültiger Schlüssel:** Bei mehreren Lösungen für `a` ist nur die mit **`ggT(a,26)=1`** ein gültiger Affine-Schlüssel (z.B. a=25 gültig, a=12 nicht).
5. **ggT korrekt ablesen:** Der ggT ist der **letzte Rest ≠ 0** im Euklid-Algorithmus.
6. **E[X²] vs. (E[X])²:** `Var(X) = E[X²] − (E[X])²` — beide Terme getrennt sauber berechnen.

→ Vollständige, **neu verifizierte** Musterlösungen: `SS26/Loesungen/`.

---

## 6. Erfolgskriterium (Definition of „bereit")

Du bist klausurbereit, wenn du:
- [ ] **#1, #2, #4, #5, #9** je in **< 10 min ohne Spickzettel** rechnen kannst,
- [ ] den **Modulo-Werkzeugkasten** (#7/#8/#9) sicher anwendest,
- [ ] **mind. 2 komplette Probeklausuren** unter Zeit ≥ 60 % erreicht hast,
- [ ] dein **A4-Spicker fertig & verinnerlicht** ist.

**Nächster Schritt:** `01_Lernplan_6Wochen.md` → Woche für Woche.
