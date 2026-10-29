## Portfolio de Florian Chapoullié-Pino

Portfolio personnel de Florian Chapoullié-Pino, étudiant en deuxième année de Master Informatique à l'Université de La Rochelle et développeur Full-Stack en devenir.
**Site en ligne :** [fchapoulliep.github.io/portfolio](https://fchapoulliep.github.io/portfolio/)

## Contenu du portfolio
- **Accueil :** présentation, puis les expériences avec leur texte complet, et un sommaire qui suit le défilement sur grand écran.
- **À propos :** parcours, intérêts pour le développement web et projets personnels.
- **Thèmes sombre et clair :** le site suit le thème du système, un bouton de la barre permet de basculer.
- **Contact :** formulaire d'envoi de message et adresse e-mail de contact.
- **CV :** accès direct au CV au format PDF.
- **Retours d'expérience :** documents détaillés sur les projets suivants :
	- Odomo
	- Biosphere 7
	- Machine virtuelle
	- SQL
	- Site web
	- SWOT
	- Symfony
	- Chiffrement de Kifli
	- Tableau associatif

Le portfolio propose également des liens vers [LinkedIn](https://www.linkedin.com/in/florianpino/) et [GitHub](https://github.com/fchapoulliep).

## Technologies utilisées
- React 18 et TypeScript
- React Router pour la navigation entre les pages, avec de vraies adresses (`/portfolio/contact`). GitHub Pages ne connaît que des fichiers : le build copie `index.html` pour chaque route (`about.html`, `contact.html`) et en `404.html`. Une nouvelle route s'ajoute donc aussi dans `vite.config.ts`.
- Tailwind CSS 4, avec les tokens du design system personnel (couleurs, polices Comfortaa et Nunito, rayons, monogramme FC) dans `src/index.css`
- Icônes Lucide (`lucide-react`)
- IntersectionObserver du navigateur pour les apparitions au défilement et le sommaire de l'accueil

## Lancer en local
- `npm install`, puis `npm start` (serveur de développement Vite)
- `npm test` pour les tests, `npm run build` pour le build dans `build/`
- `npm run deploy` publie `build/` sur GitHub Pages
- EmailJS (`@emailjs/browser`) pour l'envoi du formulaire de contact
- Vite pour le développement et le build, Vitest pour les tests