/**
 * DescriptionPage.tsx
 * @file DescriptionPage.tsx
 * @description About page: who I am, then my personal projects as cards.
 */

import React from "react";
import { ArrowUpRight } from "lucide-react";

import { buttonClasses } from "./ui/button";
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
  /** The live sites, when the project has one to show */
  links?: { label: string; href: string }[];
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
    links: [
      {
        label: "Ouvrir le 3D Pokédex",
        href: "https://fchapoulliep.github.io/3dpokedex/",
      },
    ],
  },
  {
    title: "DragonDex, NarutoDex, MarioDex et BleachDex 3D",
    description:
      "Encyclopédies 3D de personnages des univers Dragon Ball, Naruto, Super Mario et Bleach, sur la même base React et Three.js, avec des modèles interactifs rendus avec Blender.",
    image: dex3dMosaic,
    alt: "Captures des encyclopédies 3D Dragon Ball, Naruto, Super Mario et Bleach",
    links: [
      { label: "DragonDex", href: "https://fchapoulliep.github.io/dragondex3d/" },
      { label: "NarutoDex", href: "https://fchapoulliep.github.io/narutodex3d/" },
      { label: "MarioDex", href: "https://fchapoulliep.github.io/mariodex3d/" },
      { label: "BleachDex", href: "https://fchapoulliep.github.io/bleachdex3d/" },
    ],
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
      <h1 className="text-2xl leading-[1.2] sm:text-3xl sm:leading-[1.15] md:text-4xl md:leading-[1.1]">
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
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-[border-color,transform] duration-200 ease-soft hover:-translate-y-0.5 hover:border-border-strong"
          >
            <ZoomableImage
              src={project.image}
              alt={project.alt}
              className="aspect-[1200/572] border-b border-border"
            />
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="text-lg md:text-xl">{project.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              {/* At the bottom of the card, so that buttons line up from one card to the next;
                  several sites share a two-column grid, which never leaves one button alone on a row */}
              {project.links && (
                <div
                  className={
                    project.links.length > 1
                      ? "mt-auto grid grid-cols-2 gap-2 pt-6"
                      : "mt-auto flex pt-6"
                  }
                >
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses({ variant: "outline" })}
                    >
                      {link.label}
                      <ArrowUpRight strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default DescriptionPage;
