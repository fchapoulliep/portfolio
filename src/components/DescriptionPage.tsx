/**
 * DescriptionPage.tsx
 * @file DescriptionPage.tsx
 * @description DescriptionPage.tsx is a React component where there is my description and my personal projects.
 * It is a functional component that returns a div with the class name "description".
 */

/**
 * Importing necessary modules to make the component work
 */
import React from "react";
import "../css/DescriptionPage.css";
import { Carousel } from "antd";
import { Image } from "antd";
import fah from "../images/fah.png";
import { SearchOutlined } from "@ant-design/icons";

/**
 * DescriptionPage component
 * @returns DescriptionPage component
 */
const DescriptionPage: React.FC = () => {
  return (
    <div className="description">
      <div className="description-content">
        <h2> Que faut-il savoir sur moi</h2>
        <p>
          <b>Actuellement en 2ème de année de BUT Informatique, </b> je suis un
          élève motivé à avoir une expérience professionnelle solide. J'ai
          toujours souhaité vivre dans un monde dans lequel les tâches
          fastidieuses seraient facilitées par la technologie, c'est pourquoi ma
          carrière future était toute tracée ! Toujours à la recherche de
          nouvelles connaissances et opportunités, je suis ouvert à toute offre
          de stage d'emploi !
        </p>
      </div>

      <div className="description-carousel">
        <Carousel autoplay dotPosition="bottom">
          <div>
            <Image
              src={fah}
              alt="fah"
              preview={{
                mask: (
                  <span>
                    Voir plus
                    <SearchOutlined style={{marginLeft: "5px"}}/>
                  </span>
                ),
              }}
            />
          </div>
          <div>
            <Image
              src={fah}
              alt="fah"
              preview={{
                mask: (
                  <span>
                    Voir plus
                    <SearchOutlined style={{marginLeft: "5px"}}/>
                  </span>
                ),
              }}
            />
          </div>
          <div>
            <Image
              src={fah}
              alt="fah"
              preview={{
                mask: (
                  <span>
                    Voir plus
                    <SearchOutlined style={{marginLeft: "5px"}}/>
                  </span>
                ),
              }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DescriptionPage;
