/**
 * DescriptionPage.tsx
 * @file DescriptionPage.tsx
 * @description About page: who I am, then my personal projects as cards.
 */

import React from "react";

import Watermark from "./brand/Watermark";
import SectionTitle from "./brand/SectionTitle";
import ZoomableImage from "./ZoomableImage";

/**
 * Importing images
 */
import fah from "../images/fah.webp";
import chp from "../images/chp-services.webp";
import pokedex3d from "../images/3dpokedex.webp";
import dex3dMosaic from "../images/dex3d-mosaic.webp";

/**
 * A personal project, in display order. The screenshots all measure 1200 x 572.
 */
interface PersonalProject {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const personalProjects: PersonalProject[] = [
  {
    title: "FAH",
    description:
      "Site de mode présentant la collection 2024 : femme, homme et unisexe.",
    image: fah,
    alt: "Capture du projet FAH",
  },
  {
    title: "CHP Services",
    description:
      "Site vitrine d'une entreprise de chauffage, climatisation, plomberie et couverture sur le bassin d'Arcachon.",
    image: chp,
    alt: "Capture du projet CHP Services",
  },
  {
    title: "3D Pokédex",
    description:
      "Pokédex 3D des 151 Pokémon originaux, réalisé avec React et Three.js, avec des modèles interactifs rendus avec Blender.",
    image: pokedex3d,
    alt: "Capture du 3D Pokédex : modèle 3D de Venusaur dans une forêt",
  },
  {
    title: "DragonDex, NarutoDex, MarioDex et BleachDex 3D",
    description:
      "Encyclopédies 3D de personnages des univers Dragon Ball, Naruto, Super Mario et Bleach, sur la même base React et Three.js, avec des modèles interactifs rendus avec Blender.",
    image: dex3dMosaic,
    alt: "Captures des encyclopédies 3D Dragon Ball, Naruto, Super Mario et Bleach",
  },
];

/**
 * DescriptionPage component
 * @returns DescriptionPage component
 */
const DescriptionPage: React.FC = () => (
  <div className="relative isolate overflow-hidden">
    <Watermark className="top-10 -right-[14%] h-[24rem] md:h-[34rem]" />
    <section className="mx-auto max-w-6xl animate-rise px-6 pt-28 pb-14 md:pt-36 md:pb-20">
      <h1 className="text-[1.75rem] leading-[1.15] sm:text-4xl sm:leading-[1.1] md:text-5xl">
        Que faut-il savoir sur moi&nbsp;?
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
        <strong className="font-semibold text-foreground">
          Actuellement en 2e année de Master Informatique,
        </strong>{" "}
        je suis un élève motivé à avoir une expérience professionnelle solide.
        J'ai toujours souhaité vivre dans un monde dans lequel les tâches
        fastidieuses seraient facilitées par la technologie, c'est pourquoi ma
        carrière future était toute tracée ! Je reste toujours à la recherche
        de nouvelles connaissances.
      </p>
    </section>

    <section
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl px-6 pb-24 md:pb-32"
    >
      <SectionTitle id="projects-title">Mes projets personnels</SectionTitle>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-12">
        {personalProjects.map((project) => (
          <li
            key={project.title}
            className="overflow-hidden rounded-lg border border-border bg-card shadow-card transition-[border-color,transform] duration-200 ease-soft hover:-translate-y-0.5 hover:border-border-strong"
          >
            <ZoomableImage
              src={project.image}
              alt={project.alt}
              className="aspect-[1200/572] border-b border-border"
            />
            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl">{project.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default DescriptionPage;
