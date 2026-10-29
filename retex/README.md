# Retours d'expérience

Sources des PDF de `public/experiences/` (sauf le CV) : un seul gabarit, un fichier de données par retex.

- `template/retex.html` : le gabarit (thème clair du design system, teinte propre à chaque retex). S'ouvre avec `?d=<slug>&v=teinte`.
- `data/<slug>.json` : le contenu et la teinte de chaque retex.
- `img/` : les figures.
- `template/build.js` : génère les PDF A4 et un PNG par page, à exécuter dans le navigateur Playwright (`browser_run_code_unsafe`), avec ce dossier servi en local (`python3 -m http.server 8765` depuis `retex/`).

Pour modifier un retex : corriger son fichier de données, régénérer, puis copier le PDF de la variante teintée dans `public/experiences/` sous le même nom.
