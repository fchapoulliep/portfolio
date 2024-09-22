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
import "../css/Background.sass";

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

/**
 * PortfolioPage component that returns the portfolio page of the portfolio website
 * @returns PortfolioPage component
 */
const PortfolioPage: React.FC = () => {
  /**
   * Reference to the experiences section of the page
   */
  const experiencesRef = useRef(null);

  /**
   * Reference to the Odomo section
   */
  const odomoRef = useRef<HTMLDivElement>(null);

  /**
   * Reference to the Biosphere 7 section
   */
  const biosphere7Ref = useRef<HTMLDivElement>(null);

  /**
   * Reference to the Machine Virtuelle section
   */
  const machineRef = useRef<HTMLDivElement>(null);

  /**
   * Reference to the SQL section
   */
  const sqlRef = useRef<HTMLDivElement>(null);

  /**
   * Reference to the Site Web section
   */
  const webRef = useRef<HTMLDivElement>(null);

  /**
   * Reference to the SWOT section
   */
  const swotRef = useRef<HTMLDivElement>(null);

  /**
   * Reference to the Symfony section
   */
  const symfonyRef = useRef<HTMLDivElement>(null);

  /**
   * Reference to the Chiffrement de Kifli section
   */
  const kifliRef = useRef<HTMLDivElement>(null);

  /**
   * Reference to the Tableau associatif section
   */
  const associativeArrayRef = useRef<HTMLDivElement>(null);

  /**
   * State to keep track of the number of steps in the portfolio
   */
  const [currentSteps, setCurrentSteps] = React.useState(0);

  useEffect(() => {
    /**
     * Getting the arrow, nav and steps elements
     */
    const arrow = document.querySelector(".arrow-scroll-top");
    const nav = document.querySelector(".nav-bar");
    const steps = document.querySelector(".portfolio-experiences-steps");

    /**
     * Intersection Observer to change the style of the page when scrolling
     */
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
            if (steps) {
              steps.classList.add("visible");
            }
          } else {
            if (arrow) {
              arrow.classList.remove("visible");
            }
            if (nav) {
              nav.classList.remove("background");
            }
            if (steps) {
              steps.classList.remove("visible");
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    /**
     * Observing the experiences section
     */
    const observerExperience = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === odomoRef.current && odomoRef.current) {
              odomoRef.current.classList.add("visible");
              setCurrentSteps(0);
            }
            if (
              entry.target === biosphere7Ref.current &&
              biosphere7Ref.current
            ) {
              biosphere7Ref.current.classList.add("visible");
              setCurrentSteps(1);
            }
            if (entry.target === machineRef.current && machineRef.current) {
              machineRef.current.classList.add("visible");
              setCurrentSteps(2);
            }
            if (entry.target === sqlRef.current && sqlRef.current) {
              sqlRef.current.classList.add("visible");
              setCurrentSteps(3);
            }
            if (entry.target === webRef.current && webRef.current) {
              webRef.current.classList.add("visible");
              setCurrentSteps(4);
            }
            if (entry.target === swotRef.current && swotRef.current) {
              swotRef.current.classList.add("visible");
              setCurrentSteps(5);
            }
            if (entry.target === symfonyRef.current && symfonyRef.current) {
              symfonyRef.current.classList.add("visible");
              setCurrentSteps(6);
            }
            if (entry.target === kifliRef.current && kifliRef.current) {
              kifliRef.current.classList.add("visible");
              setCurrentSteps(7);
            }
            if (
              entry.target === associativeArrayRef.current &&
              associativeArrayRef.current
            ) {
              associativeArrayRef.current.classList.add("visible");
              setCurrentSteps(8);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    const experience = experiencesRef.current;
    if (experience) {
      observer.observe(experience);
    }

    const odomo = odomoRef.current;
    if (odomo) {
      observerExperience.observe(odomo);
    }

    const biosphere7 = biosphere7Ref.current;
    if (biosphere7) {
      observerExperience.observe(biosphere7);
    }

    const machine = machineRef.current;
    if (machine) {
      observerExperience.observe(machine);
    }

    const sql = sqlRef.current;
    if (sql) {
      observerExperience.observe(sql);
    }

    const web = webRef.current;
    if (web) {
      observerExperience.observe(web);
    }

    const swot = swotRef.current;
    if (swot) {
      observerExperience.observe(swot);
    }

    const symfony = symfonyRef.current;
    if (symfony) {
      observerExperience.observe(symfony);
    }

    const kifli = kifliRef.current;
    if (kifli) {
      observerExperience.observe(kifli);
    }

    const associativeArray = associativeArrayRef.current;
    if (associativeArray) {
      observerExperience.observe(associativeArray);
    }

    return () => {
      if (experience) {
        observer.unobserve(experience);
      }
      if (odomo) {
        observerExperience.unobserve(odomo);
      }
      if (biosphere7) {
        observerExperience.unobserve(biosphere7);
      }
      if (machine) {
        observerExperience.unobserve(machine);
      }
      if (sql) {
        observerExperience.unobserve(sql);
      }
      if (web) {
        observerExperience.unobserve(web);
      }
      if (swot) {
        observerExperience.unobserve(swot);
      }
      if (symfony) {
        observerExperience.unobserve(symfony);
      }
      if (kifli) {
        observerExperience.unobserve(kifli);
      }
      if (associativeArray) {
        observerExperience.unobserve(associativeArray);
      }
    };
  }, []);

  /**
   * Function to scroll to the experiences section
   */
  const handleScrollExperiences = () => {
    const experiences = document.querySelector(".portfolio-experiences");
    if (experiences) {
      const top = experiences.getBoundingClientRect().top - 120;
      window.scrollBy({ top, behavior: "smooth" });
    }
  };

  /**
   * Function to scroll to a specific experience section
   */
  const handleScroll = (section: HTMLDivElement | null, current: number) => {
    if (section) {
      const top = section.getBoundingClientRect().top - 120;
      window.scrollBy({ top, behavior: "smooth" });
    }
    setCurrentSteps(current);
  };

  /**
   * Function to scroll to the top of the page
   */
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const lines = document.querySelector(".lines");

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        lines?.classList.add("smaller");
      } else {
        lines?.classList.remove("smaller");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleMouseEnter = () => {
    const about = document.querySelector(".portfolio-welcome-about");
    if (about) {
      about.classList.add("visible");
    }
  };

  const handleMouseLeave = () => {
    const about = document.querySelector(".portfolio-welcome-about");
    if (about) {
      about.classList.remove("visible");
    }
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-welcome">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="portfolio-welcome-about" >
          <p>
            Je suis un étudiant en 3ème année de BUT Informatique à l'IUT de
            Bordeaux. Passionné par le développement web et les nouvelles
            technologies, je suis à la recherche d'une alternance pour
            l'année 2024-2025.
          </p>
        </div>
        <div className="portfolio-welcome-text">
          <h1>Florian Chapoullié-Pino</h1>
          <p>Développeur Full-Stack</p>
          <button
            className="portfolio-welcome-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            À propos
          </button>
        </div>
        <div className="arrow-experiences">
          <img
            src={FlècheBas}
            onClick={handleScrollExperiences}
            alt="scroll-experiences-arrow"
          />
        </div>
      </div>
      <div className="arrow-scroll-top">
        <img
          src={FlècheHaut}
          onClick={handleScrollTop}
          alt="scroll-top-arrow"
        />
      </div>
      <div className="portfolio-experiences-steps">
        <Steps
          className="portfolio-steps"
          direction="horizontal"
          size="small"
          current={currentSteps}
          onChange={(current) =>
            handleScroll(
              current === 0
                ? odomoRef.current
                : current === 1
                ? biosphere7Ref.current
                : current === 2
                ? machineRef.current
                : current === 3
                ? sqlRef.current
                : current === 4
                ? webRef.current
                : current === 5
                ? swotRef.current
                : current === 6
                ? symfonyRef.current
                : current === 7
                ? kifliRef.current
                : associativeArrayRef.current,
              current
            )
          }
          responsive={false}
          items={[
            {
              title: "Odomo",
            },
            {
              title: "Biosphere 7",
            },
            {
              title: "Machine Virtuelle",
            },
            {
              title: "SQL",
            },
            {
              title: "Site Web",
            },
            {
              title: "SWOT",
            },
            {
              title: "Symfony",
            },
            {
              title: "Chiffrement de Kifli",
            },
            {
              title: "Tableau associatif",
            },
          ]}
        />
      </div>
      <div className="portfolio-experiences" ref={experiencesRef}>
        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="left"
        >
          Odomo
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={odomo}
          position="left"
          className="even"
          ref={odomoRef}
          experienceLink="experiences/retourOdomo.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="center"
        >
          Biosphere 7
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={biosphere7}
          position="right"
          className="odd"
          ref={biosphere7Ref}
          experienceLink="experiences/retourBiosphere.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="right"
        >
          Machine Virtuelle
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={machine}
          position="left"
          className="even"
          ref={machineRef}
          experienceLink="experiences/retourMachine.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="left"
        >
          SQL
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={sql}
          position="right"
          className="odd"
          ref={sqlRef}
          experienceLink="experiences/retourSQL.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="center"
        >
          Site Web
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={web}
          position="left"
          className="even"
          ref={webRef}
          experienceLink="experiences/retourWeb.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="right"
        >
          SWOT
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={swot}
          position="right"
          className="odd"
          ref={swotRef}
          experienceLink="experiences/retourSWOT.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="left"
        >
          Symfony
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={symfony}
          position="left"
          className="even"
          ref={symfonyRef}
          experienceLink="experiences/retourSymfony.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="center"
        >
          Chiffrement de Kifli
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={kifli}
          position="right"
          className="odd"
          ref={kifliRef}
          experienceLink="experiences/retourKifli.pdf"
        />

        <Divider
          className="portfolio-experiences-divider"
          type="horizontal"
          orientation="right"
        >
          Tableau associatif
        </Divider>

        <ExperiencesDiv
          text={
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
          }
          image={associativeArray}
          position="left"
          className="even"
          ref={associativeArrayRef}
          experienceLink="experiences/retourTableauAssociatif.pdf"
        />
      </div>
      <footer>
        <p>© 2024 Florian Chapoullié-Pino</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
