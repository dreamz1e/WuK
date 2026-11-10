# 🏋️ Drill: Verteilungen aufstellen (neu — Jäger-Typ der SS26-Klausur)

> Woche 6. Schema aus T3 §2 — **immer alle 5 Schritte hinschreiben:**
> ① |Ω| ② Werte von X ③ Fälle zählen → P(X=k) ④ Σ = 1 prüfen ⑤ E, E[X²], Var.
> Der Indikator-Trick (T3 §3) dient als Kontrolle für E.

1. 3 faire Münzen, X = Anzahl Wappen. Verteilung, E, Var.
2. 2 Personen steigen in einen Fahrstuhl mit k Stockwerken (jede wählt zufällig).
   X = Anzahl der angefahrenen Stockwerke. Verteilung, E[X].
3. 2 Würfel, X = Minimum der Augenzahlen. Verteilung (Formel in k), E[X].
4. Die Zahlen 1, 2, 3 werden zufällig permutiert. X = Anzahl der Zahlen, die auf ihrem
   Platz bleiben (Fixpunkte). Verteilung, E, Var. *(E auch per Indikator-Trick!)*
5. Urne mit 3 roten und 2 blauen Kugeln, 2 Züge ohne Zurücklegen, X = Anzahl rote.
   Verteilung, E. *(Erkenne: das ist hypergeometrisch — Schema und Formel müssen dasselbe liefern.)*
6. **Königsaufgabe (Klausurniveau SS26):** 3 Jäger, n Hasen — komplette Verteilung,
   E[X] und Var(X), ohne in T3 zu schauen. Danach mit
   `../Klausuren/Klausur_SS26_Rekonstruktion.md` (Aufgabe 5) abgleichen.

<details><summary>Lösungen</summary>

1. |Ω| = 8 · P = 1/8, 3/8, 3/8, 1/8 für k = 0..3 (Σ=1 ✓) · E = 1,5 · E[X²] = 3 → Var = 0,75.
   (= Bin(3, ½): E = np = 1,5, Var = np(1−p) = 0,75 ✓)
2. |Ω| = k² · X∈{1,2}: P(X=1) = k/k² = 1/k, P(X=2) = (k−1)/k (Σ=1 ✓) · E = 2 − 1/k.
3. P(Min=k) = [(7−k)² − (6−k)²]/36 = (13−2k)/36, k = 1..6 (Σ = (11+9+7+5+3+1)/36 = 1 ✓) ·
   E = Σ k(13−2k)/36 = 91/36 ≈ 2,53.
4. |Ω| = 6 · P(X=0) = 2/6 (die zwei 3er-Zyklen), P(X=1) = 3/6 (Transpositionen), P(X=3) = 1/6
   (X=2 unmöglich!) · Σ=1 ✓ · E = 3/6 + 3/6 = **1** · Indikator: 3·(1/3) = 1 ✓ ·
   E[X²] = 3/6 + 9/6 = 2 → Var = **1**.
5. P(X=0) = C(2,2)/C(5,2) = 1/10 · P(X=1) = C(3,1)C(2,1)/10 = 6/10 · P(X=2) = C(3,2)/10 = 3/10
   (Σ=1 ✓) · E = 2·(3/5) = 1,2 (= m·r/N ✓).
6. → Rekonstruktion Aufgabe 5: P = 1/n², 3(n−1)/n², (n−1)(n−2)/n² · E = 3 − 3/n + 1/n² ·
   Var = (n−1)(3n²−5n+1)/n⁴.
</details>
