/**
 * PortfolioPage.tsx
 * @file PortfolioPage.tsx
 * @description PortfolioPage.tsx is a React component for the portfolio page of the portfolio website.
 * It is a functional component that returns a div with the class name "portfolio".
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { useEffect, useRef } from "react";
import "../css/PortfolioPage.css";

/**
 * Importing images
 */
import florianC from "../images/florianC.jpg";
import FlècheBas from "../images/FlècheBas.png";
import FlècheHaut from "../images/FlècheHaut.png";
import ExperiencesDiv from "./ExperiencesDiv";
import biosphere7 from "../images/biosphere7.png";
import odomo from "../images/odomo.png";
import machine from "../images/machine.png";
import sql from "../images/SQL.png";
import web from "../images/web.png";
import swot from "../images/swot.png";
import symfony from "../images/symfony.png";

/**
 * PortfolioPage component that returns the portfolio page of the portfolio website
 * @returns PortfolioPage component
 */
const PortfolioPage: React.FC = () => {
  /**
   * Reference to the bottom of the page
   */
  const experiencesRef = useRef(null);

  useEffect(() => {
    const arrow = document.querySelector(".arrow-scroll-top");
    const nav = document.querySelector(".nav-bar");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (arrow) {
              arrow.classList.add("visible");
            }
            if (nav) {
              nav.classList.add("background");
            }
          } else {
            if (arrow) {
              arrow.classList.remove("visible");
            }
            if (nav) {
              nav.classList.remove("background");
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    const experience = experiencesRef.current;
    if (experience) {
      observer.observe(experience);
    }

    return () => {
      if (experience) {
        observer.unobserve(experience);
      }
    };
  }, []);

  /**
   * Function to scroll to the experiences section
   */
  const handleScrollExperiences = () => {
    const experiences = document.querySelector(".portfolio-experiences");
    if (experiences) {
      experiences.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Function to scroll to the top of the page
   */
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      <div className="portfolio-welcome">
        <div className="portfolio-welcome-photo">
          <img src={florianC} alt="florianC" />
        </div>
        <div className="portfolio-welcome-text">
          <h1>Bonjour ! Je m'appelle Florian Chapoullié-Pino.</h1>
          <h2>Bienvenue sur mon portfolio !</h2>
          <h2>Bonne visite.</h2>
          <div className="arrow-experiences">
            <img
              src={FlècheBas}
              onClick={handleScrollExperiences}
              alt="scroll-experiences-arrow"
            />
          </div>
        </div>
      </div>
      <div className="arrow-scroll-top">
        <img
          src={FlècheHaut}
          onClick={handleScrollTop}
          alt="scroll-top-arrow"
        />
      </div>
      <div className="portfolio-experiences" ref={experiencesRef}>
        <ExperiencesDiv
          text={
            <p>
              La réalisation de ce projet a été pour moi une réelle mise en
              avant du parcours à venir dans ma carrière professionelle, et des
              moyens à mettre en place afin d'implémenter un besoin client à
              l'aide d'un langage de programmation, tout en ayant à fournir un
              rapport sur ce projet et expliquer clairement le code et son
              fontionnement.
              <br /> Il en découle alors pour moi de nombreux points positifs,
              comme la mise en place d'un planning optimisé pour travailler en
              équipe et dans de bonne conditions, un sens des responsabilités
              car il était important de fournir un code fonctionnel qui répond
              aux besoins clients.{" "}
            </p>
          }
          image={odomo}
          position="left"
          onSideText="ODOMO"
        />

        <ExperiencesDiv
          text={
            <p>
              Ce projet a été pour moi très riche en matière d’apprentissage.
              Durant les deux phases qui constituaient ce projet, j’ai pu
              entre-autre contribuer à la mise en place de deux stratégies qui
              allaient être attribués à une intelligence artificielle.
              <br />
              Cela m'a permis d'apprendre comment apprivoiser une tache donnée,
              que ce soit le cahier des charges et les règles dictées par
              celle-ci ou bien meme les méthodes de travail à utiliser. <br />
              Le principal gain qui découle de ce projet a été pour ma part
              l'éveil de mon esprit logique, qui m'a permis de comprendre selon
              tel ou tel cas quelle était la ou les actions possibles, et
              préférables.
            </p>
          }
          image={biosphere7}
          position="right"
          onSideText="BIOSPHERE 7"
        />

        <ExperiencesDiv
          text={
            <p>
              Le « challenge » de cette SAE était d’installer une machine
              virtuelle pour permettre à une équipe de dev de développer un
              nouveau jeu avec le langage go, qu’il a donc fallu installer,
              ainsi qu’un IDE pour s’en servir. <br />
              L’enjeu était donc ici de mettre en place une machine avec un
              hardware adapté, un compte administrateur et un compte développeur
              qui ont chacun des droits définis selon leur statut. Il a
              également fallu mettre en place l'outil git pour réaliser un git
              clone ainsi que modifier le prompt bash pour afficher de n’importe
              où l’état de ce git. <br />
              Ainsi, ce projet nous a permis à moi et à mes camarades de
              maitriser l'installation d'une machine selon des caractéristiques
              bien définis, ainsi que de comprendre comment fonctionne un
              terminal de commande et comment le modifier pour y indiquer des
              élements utiles.
            </p>
          }
          image={machine}
          position="left"
          onSideText="MACHINE VIRTUELLE"
        />

        <ExperiencesDiv
          text={
            <p>
              {" "}
              Ce travail de groupe dans le cadre d'une SAE m'a permis de
              développer mes connaissances et de pouvoir maitriser le langage
              SQL de manière adéquate. <br />
              Le défi derrière ce projet était de mettre en place une cohésion
              d'équipe avec son binôme, de plus il a été important d'assurer le
              fait de se léguer les tâches pour optimiser le temps de travail.
              Au delà de cet esprit de groupe, l'élément le plus important qui
              découle de cette activé a été d'assurer la bonne qualité des
              données, de sorte à ce qu'elle soit cohérente, complete et
              précise. <br />
              Ainsi ma connaissance des bases de données a été accrue, avec
              notamment le remplissage et la création d'une base de donnée, en
              passant par un schéma entité-association.
            </p>
          }
          image={sql}
          position="right"
          onSideText="SQL"
        />

        <ExperiencesDiv
          text={
            <p>
              {" "}
              Voici une nouvelle fois une SAE qui m'a permis de développer mon
              esprit créatif et de maitriser de manière pointue le langage html
              et css pour permettre la réalisation d'un site web en rapport avec
              une société. <br />
              Le site qu'il était nécessaire de produire devait donc respecter
              des critères précis, la loi en vigueur, car dans mon cas il
              s'agissait d'une société qui produit des boissons alcoolisées.
              Dans ce cas-ci, j'ai pu apprendre les normes légales a mettre sur
              un site internet, en plus d'avoir à créer un site ergonomique et
              pratique au client. <br />
              Cette production a été pour moi une grande lecon, qui a pu m'en
              apprendre plus sur le langage HTML et CSS, mais aussi l'ergonomie
              d'un site et les normes a respecter vis-à-vis de celui-ci.
            </p>
          }
          image={web}
          position="left"
          onSideText="SITE WEB"
        />

        <ExperiencesDiv
          text={
            <p>
              Ce projet m'a permis de mieux aborder ma vision d'une entreprise.{" "}
              <br />
              En effet, j'ai pu ici réaliser avec mes camardes une analyse
              fonctionnelle d'une entreprise. Mais ce n'est pas tout, il a aussi
              fallu observer les différentes opportunités et menaces auxquelles
              elle était confrontée. <br />
              Il en découle alors pour moi de nombreux points positifs, comme la
              mise en place d'un planning optimisé pour travailler en équipe et
              dans de bonne conditions, une maitrise des outils de recherche car
              il était important de fournir des informations vérifiés et
              pertinentes qui permet de mieux comprendre l'environnement de
              l'entreprise.
            </p>
          }
          image={swot}
          position="right"
          onSideText="SWOT"
        />

        <ExperiencesDiv
          text={
            <p>
              {" "}
              Voici une nouvelle fois une SAE qui m'a permis de développer mon
              esprit créatif et de maitriser de manière pointue le langage html
              et css mais aussi php avec le framework Symfony pour permettre la
              réalisation d'une application full-stack. <br />
              L'application qu'il était nécessaire de produire devait donc
              respecter des critères précis, critères étant explicité autour
              d'une réunion avec le Product Owner. Dans ce cas-ci, j'ai pu
              apprendre à créer un site ergonomique et pratique au client.{" "}
              <br />
              Cette production a été pour moi une grande lecon, qui a pu m'en
              apprendre plus sur le langage PHP et l'outil Symfony, mais aussi
              l'ergonomie d'un site et les normes a respecter vis-à-vis de
              celui-ci.
            </p>
          }
          image={symfony}
          position="left"
          onSideText="SYMFONY"
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
