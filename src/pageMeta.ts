/**
 * @file pageMeta.ts holds what each page says about itself in search results
 * and link previews. The build writes it into the HTML file of each page and
 * into the sitemap (see vite.config.ts), and the app keeps the tab title in
 * step with navigation.
 * @module pageMeta
 */

/** The address of the site on GitHub Pages, with its trailing slash. */
export const SITE_URL = "https://fchapoulliep.github.io/portfolio/";

export interface PageMeta {
  /** The route, without slashes: "" for the home page. */
  path: string;
  title: string;
  description: string;
}

export const PAGES: PageMeta[] = [
  {
    path: "",
    title: "Portfolio de Florian Chapoullié-Pino",
    description:
      "Explorez le portfolio de Florian Chapoullié-Pino, un développeur full-stack en devenir étudiant à l'Université de La Rochelle. Découvrez des projets, des compétences et bien plus encore !",
  },
  {
    path: "about",
    title: "À propos | Florian Chapoullié-Pino",
    description:
      "Le parcours de Florian Chapoullié-Pino, étudiant en Master Informatique à l'Université de La Rochelle, et ses projets personnels : encyclopédies 3D, Pokédex 3D et sites web.",
  },
  {
    path: "contact",
    title: "Contact | Florian Chapoullié-Pino",
    description:
      "Contactez Florian Chapoullié-Pino pour un projet ou une question, par le formulaire de message ou par e-mail.",
  },
];
