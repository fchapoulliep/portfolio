/**
 * PortfolioPage.tsx
 * @file PortfolioPage.tsx
 * @description PortfolioPage.tsx is a React component for the portfolio page of the portfolio website.
 * It is a functional component that returns a div with the class name "portfolio".
 */

/**
 * Importing necessary modules to make the component work
 */
import React, { ReactNode, useEffect, useRef, useState } from "react";
import "../css/PortfolioPage.css";

/**
 * Importing images
 */
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
import kifli from "../images/kifli.png";
import associativeArray from "../images/associativeArray.png";
import { Divider, Steps } from "antd";
import Lines from "./Lines";

/**
 * An experience shown on the home page, in display order
 */
interface Experience {
  title: string;
  image: string;
  link: string;
  text: ReactNode;
}

const experiences: Experience[] = [
  {
    title: "Odomo",
    image: odomo,
    link: "experiences/retourOdomo.pdf",
    text: (
      <p>
        La réalisation de ce projet a été pour moi une véritable
        opportunité de démontrer les compétences que je vais développer
        tout au long de ma carrière professionnelle. J'ai pu identifier
        les moyens nécessaires pour répondre aux besoins d'un client à
        l'aide d'un langage de programmation, tout en fournissant un
        rapport détaillé et en expliquant clairement le code et son
        fonctionnement.
        <br />
        <br /> Ce projet m'a apporté de nombreux bénéfices, tels que la
        mise en place d'un planning optimisé pour un travail d'équipe
        efficace dans des conditions optimales, ainsi que le développement
        d'un sens des responsabilités, étant donné l'importance de livrer
        un code fonctionnel qui répond aux attentes du client.{" "}
      </p>
    ),
  },
  {
    title: "Biosphere 7",
    image: biosphere7,
    link: "experiences/retourBiosphere.pdf",
    text: (
      <p>
        Ce projet a été extrêmement enrichissant pour moi en termes
        d'apprentissage. Au cours des deux phases du projet, j'ai
        notamment contribué à la mise en place de deux stratégies
        destinées à une intelligence artificielle.
        <br />
        <br />
        Cela m'a permis de comprendre comment aborder une tâche donnée,
        qu'il s'agisse du cahier des charges et des règles associées ou
        des méthodes de travail à adopter. <br />
        <br />
        Le principal bénéfice de ce projet a été, pour moi, l'éveil de mon
        esprit logique, qui m'a permis de déterminer quelles actions
        étaient possibles et préférables selon chaque situation.
      </p>
    ),
  },
  {
    title: "Machine Virtuelle",
    image: machine,
    link: "experiences/retourMachine.pdf",
    text: (
      <p>
        Ce projet consistait à installer une machine virtuelle pour
        permettre à une équipe de développeurs de créer un nouveau jeu en
        utilisant le langage Go, qu'il a donc fallu installer, ainsi qu'un
        IDE pour l'utiliser.
        <br />
        <br />
        L'objectif était d'installer une machine avec un matériel adapté,
        ainsi que de configurer un compte administrateur et un compte
        développeur, chacun ayant des droits spécifiques selon leur
        statut. Il a également été nécessaire de mettre en place l'outil
        Git pour effectuer un git clone et de modifier le prompt Bash pour
        afficher l'état de ce Git depuis n'importe où.
        <br />
        <br />
        Ce projet nous a permis, à mes camarades et moi, de maîtriser
        l'installation d'une machine selon des caractéristiques bien
        définies, ainsi que de comprendre le fonctionnement d'un terminal
        de commande et comment le modifier pour y afficher des
        informations utiles.
      </p>
    ),
  },
  {
    title: "SQL",
    image: sql,
    link: "experiences/retourSQL.pdf",
    text: (
      <p>
        Ce travail de groupe dans le cadre d'un projet universitaire m'a
        permis de développer mes connaissances et de maîtriser
        adéquatement le langage SQL.
        <br />
        <br />
        Le défi principal de ce projet était d'établir une cohésion
        d'équipe avec mon binôme, en veillant à se répartir les tâches de
        manière efficace pour optimiser le temps de travail. Au-delà de
        cet esprit d'équipe, l'aspect le plus crucial de cette activité a
        été de garantir la qualité des données, en s'assurant qu'elles
        soient cohérentes, complètes et précises.
        <br />
        <br />
        Ainsi, mes compétences en bases de données se sont
        considérablement améliorées, notamment en ce qui concerne la
        création et le remplissage d'une base de données, ainsi que
        l'élaboration d'un schéma entité-association.
      </p>
    ),
  },
  {
    title: "Site Web",
    image: web,
    link: "experiences/retourWeb.pdf",
    text: (
      <p>
        Ce projet m'a permis de développer mon esprit créatif et de
        maîtriser de manière approfondie les langages HTML et CSS pour
        réaliser un site web pour une entreprise.
        <br />
        <br />
        Le site devait respecter des critères précis et la législation en
        vigueur, car il s'agissait d'une société produisant des boissons
        alcoolisées. J'ai ainsi appris à intégrer les normes légales
        requises pour un site internet, tout en veillant à créer une
        interface ergonomique et pratique pour le client.
        <br />
        <br />
        Cette expérience a été pour moi une grande leçon, m'enseignant non
        seulement le HTML et le CSS, mais aussi l'ergonomie web et les
        réglementations à respecter dans ce domaine.
      </p>
    ),
  },
  {
    title: "SWOT",
    image: swot,
    link: "experiences/retourSWOT.pdf",
    text: (
      <p>
        Ce projet m'a permis de mieux appréhender ma vision d'une
        entreprise.
        <br />
        <br />
        En collaboration avec mes camarades, nous avons réalisé une
        analyse fonctionnelle d'une entreprise. De plus, nous avons
        identifié les différentes opportunités et menaces auxquelles elle
        était confrontée.
        <br />
        <br />
        J'en retire de nombreux aspects positifs, tels que la mise en
        place d'un planning optimisé pour travailler en équipe dans de
        bonnes conditions, ainsi que la maîtrise des outils de recherche.
        Il était crucial de fournir des informations vérifiées et
        pertinentes afin de mieux comprendre l'environnement de
        l'entreprise.
      </p>
    ),
  },
  {
    title: "Symfony",
    image: symfony,
    link: "experiences/retourSymfony.pdf",
    text: (
      <p>
        Ce projet m'a permis de développer mon esprit créatif et de
        maîtriser de manière approfondie les langages HTML et CSS, ainsi
        que PHP avec le framework Symfony, pour réaliser une application
        full-stack.
        <br />
        <br />
        L'application devait respecter des critères précis définis lors
        d'une réunion avec le Product Owner. J'ai ainsi appris à créer un
        site ergonomique et pratique pour le client.
        <br />
        <br />
        Cette expérience a été pour moi une grande leçon, m'enseignant non
        seulement le PHP et l'utilisation de Symfony, mais aussi
        l'ergonomie web et les normes à respecter dans ce domaine.
      </p>
    ),
  },
  {
    title: "Chiffrement de Kifli",
    image: kifli,
    link: "experiences/retourKifli.pdf",
    text: (
      <p>
        Ce projet m'a permis de développer mes compétences en Python et de
        comprendre le fonctionnement du chiffrement de Kifli.
        <br />
        <br />
        Le défi principal de ce projet était de comprendre le
        fonctionnement de l'algorithme de chiffrement de Kifli et de
        l'implémenter en Python.
        <br />
        <br />
        Ainsi, mes compétences en Python se sont considérablement
        améliorées, notamment en ce qui concerne la manipulation des
        chaînes de caractères et la gestion des fichiers.
      </p>
    ),
  },
  {
    title: "Tableau associatif",
    image: associativeArray,
    link: "experiences/retourTableauAssociatif.pdf",
    text: (
      <p>
        Ce projet consistait à créer notre propre tableau associatif en
        Java, en réalisant deux implémentations : une statique et une
        dynamique. L'objectif était ensuite de comparer les performances
        des deux implémentations à l'aide de benchmarks.
        <br />
        <br />
        La première implémentation statique utilisait un tableau de taille
        fixe pour stocker les clés et les valeurs associées. La deuxième
        implémentation dynamique utilisait une structure de données telle
        qu'une liste chaînée ou un arbre pour permettre une taille
        variable du tableau associatif.
        <br />
        <br />
        Ce projet nous a permis de mieux comprendre les concepts de base
        des tableaux associatifs et d'apprécier les avantages et les
        inconvénients des différentes approches d'implémentation.
      </p>
    ),
  },
];

/**
 * The dividers alternate between left, center and right
 */
const dividerOrientations = ["left", "center", "right"] as const;

/**
 * PortfolioPage component that returns the portfolio page of the portfolio website
 * @returns PortfolioPage component
 */
const PortfolioPage: React.FC = () => {
  /**
   * Reference to the experiences section of the page
   */
  const experiencesRef = useRef<HTMLDivElement>(null);

  /**
   * References to each experience, in display order
   */
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * Whether the experiences section is on screen (shows the steps and the scroll-to-top arrow)
   */
  const [inExperiences, setInExperiences] = useState(false);

  /**
   * Experiences already revealed by the scroll animation
   */
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    experiences.map(() => false)
  );

  /**
   * Current step of the experiences steps bar
   */
  const [currentStep, setCurrentStep] = useState(0);

  /**
   * Whether the "À propos" panel is open
   */
  const [aboutOpen, setAboutOpen] = useState(false);

  /**
   * Pointer that pressed the "À propos" button last: a mouse opens it on
   * hover, while touch and keyboard toggle it on click
   */
  const lastPointerType = useRef<string | null>(null);

  useEffect(() => {
    const section = experiencesRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInExperiences(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const index = experienceRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index === -1) {
            return;
          }
          setRevealed((previous) =>
            previous[index]
              ? previous
              : previous.map((value, i) => (i === index ? true : value))
          );
          setCurrentStep(index);
        });
      },
      { threshold: 0.4 }
    );

    experienceRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  /**
   * Scroll to an element, keeping room for the fixed navigation bar
   */
  const scrollToElement = (element: HTMLElement | null) => {
    if (element) {
      const top = element.getBoundingClientRect().top - 120;
      window.scrollBy({ top, behavior: "smooth" });
    }
  };

  /**
   * Scroll to a specific experience from the steps bar
   */
  const handleStepChange = (current: number) => {
    scrollToElement(experienceRefs.current[current]);
    setCurrentStep(current);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-welcome">
        <Lines />
        <div
          id="welcome-about"
          className={`portfolio-welcome-about ${aboutOpen ? "visible" : ""}`}
        >
          <p>
            Je suis un étudiant en 2ème année de Master Informatique à l'Université de
            La Rochelle. Passionné par le développement web et les nouvelles
            technologies, j'aime concevoir des solutions qui facilitent les
            tâches répétitives du quotidien.
          </p>
        </div>
        <div className="portfolio-welcome-text">
          <h1>Florian Chapoullié-Pino</h1>
          <p>Développeur Full-Stack</p>
          <button
            className="portfolio-welcome-button"
            aria-expanded={aboutOpen}
            aria-controls="welcome-about"
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") {
                setAboutOpen(true);
              }
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") {
                setAboutOpen(false);
              }
            }}
            onPointerDown={(e) => {
              lastPointerType.current = e.pointerType;
            }}
            onClick={() => {
              if (lastPointerType.current !== "mouse") {
                setAboutOpen((open) => !open);
              }
              lastPointerType.current = null;
            }}
            onBlur={() => setAboutOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setAboutOpen(false);
              }
            }}
          >
            À propos
          </button>
        </div>
        <div className="arrow-experiences">
          <img
            src={FlècheBas}
            onClick={() => scrollToElement(experiencesRef.current)}
            alt="Scroll to first experience"
          />
        </div>
      </div>
      <div className={`arrow-scroll-top ${inExperiences ? "visible" : ""}`}>
        <img
          src={FlècheHaut}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          alt="Scroll to top"
        />
      </div>
      <div
        className={`portfolio-experiences-steps ${
          inExperiences ? "visible" : ""
        }`}
      >
        <Steps
          className="portfolio-steps"
          direction="horizontal"
          labelPlacement="vertical"
          size="small"
          current={currentStep}
          onChange={handleStepChange}
          responsive={false}
          items={experiences.map(({ title }) => ({ title }))}
        />
      </div>
      <div className="portfolio-experiences" ref={experiencesRef}>
        {experiences.map((experience, index) => (
          <React.Fragment key={experience.title}>
            <Divider
              className="portfolio-experiences-divider"
              type="horizontal"
              orientation={dividerOrientations[index % 3]}
            >
              {experience.title}
            </Divider>
            <ExperiencesDiv
              text={experience.text}
              image={experience.image}
              position={index % 2 === 0 ? "left" : "right"}
              className={index % 2 === 0 ? "even" : "odd"}
              visible={revealed[index]}
              ref={(element) => {
                experienceRefs.current[index] = element;
              }}
              experienceLink={experience.link}
            />
          </React.Fragment>
        ))}
      </div>
      <footer>
        <p>© 2025 Florian Chapoullié-Pino</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
