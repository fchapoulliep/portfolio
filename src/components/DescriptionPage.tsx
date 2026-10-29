/**
 * DescriptionPage.tsx
 * @file DescriptionPage.tsx
 * @description DescriptionPage.tsx is a React component where there is my description and my personal projects.
 * It is a functional component that returns a div with the class name "description".
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { useEffect } from "react";
import "../css/DescriptionPage.css";
import { Carousel } from "antd";
import { Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

/**
 * Importing images
 */
import fah from "../images/fah.webp";
import chp from "../images/chp-services.webp";
import pokedex3d from "../images/3dpokedex.webp";
import dex3dMosaic from "../images/dex3d-mosaic.webp";

/**
 * Importing services
 */
import handleScrollTop from "../services/scrollToTopService";

import Lines from "./Lines";

/**
 * A personal project shown in the carousel, in display order
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
const DescriptionPage: React.FC = () => {
  useEffect(() => {
    handleScrollTop();
  }, []);

  return (
    <div className="description" id="description">
      <Lines />
      <div className="description-content">
        <h1>Que faut-il savoir sur moi&nbsp;?</h1>
        <p>
          <b>Actuellement en 2e année de Master Informatique, </b> je suis un
          élève motivé à avoir une expérience professionnelle solide. J'ai
          toujours souhaité vivre dans un monde dans lequel les tâches
          fastidieuses seraient facilitées par la technologie, c'est pourquoi ma
          carrière future était toute tracée ! Je reste toujours à la
          recherche de nouvelles connaissances.
        </p>
      </div>

      <div className="description-carousel">
        <h2>Mes projets personnels&nbsp;:</h2>
        <Carousel
          arrows
          autoplay
          dotPosition="bottom"
          className="carousel"
        >
          {personalProjects.map((project) => (
            <div key={project.title}>
              <div className="carousel-media">
                <Image
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  placeholder={<div className="carousel-skeleton" />}
                  preview={{
                    mask: (
                      <span>
                        Voir plus
                        <SearchOutlined style={{ marginLeft: "5px" }} />
                      </span>
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DescriptionPage;
