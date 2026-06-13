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
