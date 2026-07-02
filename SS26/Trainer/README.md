# 📱 WuK Trainer — Übungs-App

Eine eigenständige Web-App zum Üben unterwegs (Handy & PC), **offline-fähig**, **ohne Zettel & Stift**.
Ergänzung zu den statischen [`Lernkarten/`](../Lernkarten/).

## Sofort nutzen (PC)
Einfach **`App.html`** im Browser öffnen. Fertig — kein Setup, keine Installation.

## Die 4 Modi
- **🎯 Drill** — Zufallsaufgabe pro Typ (oder gemischt), Antwort eintippen, sofortiges Feedback + Rechenweg.
- **🔁 Wiederholung** — Leitner-System (5 Boxen): Schwaches kommt oft, Sicheres selten → hält dich frisch.
- **🃏 Karteikarten** — Formeln & Konzepte schnell wiederholen (umdrehen, „gewusst/nochmal").
- **⏱️ Mini-Klausur** — 9 Aufgaben (je 1 pro Typ) in 30 min, am Ende Punktestand.

Fortschritt wird **nur lokal** (localStorage) auf deinem Gerät gespeichert.

## Aufs Handy bringen (optional, via GitHub Pages)
Damit es „überall" per URL läuft:
1. Repo zu GitHub pushen → **Settings → Pages** → Branch `main`, Ordner `/root` aktivieren.
2. Am Handy die URL `…/SS26/Trainer/App.html` öffnen → **„Zum Home-Bildschirm"**.
3. `manifest.json` + `service-worker.js` machen es dann installierbar & offline-fähig.

> ⚠️ GitHub Pages macht das Repo-Inhalt öffentlich. Nur tun, wenn das ok ist.
> Alternativ: lokalen Mini-Server starten (`python3 -m http.server` im `Trainer/`-Ordner) und im selben WLAN vom Handy aufrufen.

## Technik
- Eine `App.html` (alles inline: UI, Logik, 9 deterministische Aufgaben-Generatoren) — **kein Build, kein Framework, kein CDN**.
- Aufgaben & Antworten werden **deterministisch berechnet** (verifizierte Modulo-/Kombinatorik-Logik) → garantiert mathematisch korrekt, keine KI im kritischen Pfad.
- Alle 9 Generatoren gegen je 2000 Zufallsfälle getestet (RSA `c=mᵉ mod n`, Affine `(a,b)` erfüllen beide Paare, etc.).

## Update 02.07. — Ausbau nach Klausur-Abgleich
Neue Varianten (gegen die echten modernen Klausuren SoSe20/21SoSe abgeglichen):
- **#3 Laplace → Fahrstuhl** (5 Varianten: hält 1×/n-mal, A+B gemeinsam, A allein, genau 2 Stockwerke à 2) — in beiden modernen Klausuren eine eigene 16–18-Pkt-Aufgabe.
- **#6 ZV:** jetzt E[X] **und** Var(X); neue Variante **Min/Max zweier Würfel** (21SoSe A6).
- **#7 Werkzeugkasten:** neue Variante **letzte Dezimalstelle von aᵉ** (mod 10).
- **#8 Affine:** ~50 % der Aufgaben mit **ggT-Tücke** (ggT(Δx,26)=2 → durch 2 teilen, 2 Kandidaten, Gültigkeit prüfen).
- **#9 RSA:** neue Variante **e-Wahl aus 3 Kandidaten** über ggT(e,φ)=1 (21SoSe A8) mit Feldern e, d, m.
- **Karteikarten:** 34 statt 22 (Fahrstuhl, Min/Max, Fermat/Teilbarkeit, Hypergeometrie).
- Alle neuen Formeln per Brute-Force-Enumeration verifiziert; Generator-Invarianten mit 10 000 Läufen/Typ getestet.
