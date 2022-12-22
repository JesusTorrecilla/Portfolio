import React, { useState, useContext } from "react";
import "./Projects.css";
import Viewer from "react-viewer";
import { ThemeContext } from "../../context";

function Projects() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const theme = useContext(ThemeContext);
  const { darkMode, enEs } = theme.state;

  let imagenes = [
    require("../../img/Chilly.png"),
    require("../../img/Chilly2.png"),
    require("../../img/Chilly3.png"),
    require("../../img/Chilly4.png"),
  ];

  let imagenes2 = [
    require("../../img/Weather1.png"),
    require("../../img/Weather2.png"),
    require("../../img/Weather3.png"),
    require("../../img/Weather5.png"),
    require("../../img/Weather4.png"),
  ];

  let imagenes3 = [
    require("../../img/Poke1.png"),
    require("../../img/Poke2.png"),
    require("../../img/Poke3.png"),
    require("../../img/Poke4.png"),
    require("../../img/Poke5.png"),
    require("../../img/Poke6.png"),
  ];

  return (
    <div className="project-container" id="projects">
      <div className="project-title-first">
        {enEs ? `${"My Projects"}` : "Mis Proyectos"}
      </div>
      <div className="project">
        <div className="project-left">
          <div className="project-left-wrapper">
            <h1 className="project-title">Chilly E-Commerce</h1>
            <p>
              {enEs
                ? `${"E-Commerce with all the functionalities, such as store, user system, admin panel, and other special functionalities, for example, build your own pc, that counts with a compatility between components function."}`
                : "E-Commerce que cuenta con todas las funcionalidades típicas de un E-commerce, como, por ejemplo, una tienda, sistema de usuarios, panel de administrador, y otras especiales como la de armado de PC, con función de compatibilidad entre componentes."}
            </p>
            <div className="project-to-link">
              <a
                href="https://chilly-production.up.railway.app"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Deploy
              </a>
              <a
                href="https://github.com/cinthiapiera/PF-Chilly"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                {enEs ? `${"Repository"}` : "Repositorio"}
              </a>
              <a
                href="https://www.youtube.com/watch?v=s_ELrkSupn0&ab_channel=Jes%C3%BAsTorrecilla"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Video
              </a>
            </div>
            <div className="project-con-img">
              {imagenes.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="project-img"
                    className="project-img2"
                    onClick={() => {
                      setVisible(true);
                    }}
                  />
                );
              })}
              <Viewer
                visible={visible}
                onClose={() => {
                  setVisible(false);
                }}
                images={[
                  { src: imagenes[0], alt: "home-page" },
                  { src: imagenes[1], alt: "store-page" },
                  { src: imagenes[2], alt: "detail-page" },
                  { src: imagenes[3], alt: "panel-admin-page" },
                ]}
                zoomable={true}
              />
            </div>
          </div>
        </div>
        <div className="project-medium">
          <div className="project-medium-wrapper">
            <h1 className="project-title">Pokémon Api</h1>
            <p>
              {enEs
                ? `${"Pokémon API that counts with a home page, where you can see Pokémon cards, pagination, type and procedence filters that are combinable, attack and alphabetically name sort, search bar, details section and a controlled Pokémon creation form."}`
                : "Pokémon API que cuenta con un inicio en el que se puede visualizar tarjeta de los Pokémon, paginado, filtros combinables por tipo o procedencia, ordenamiento por ataque o nombre alfabéticamente, barra de búsqueda, sección de detalles y creación de Pokémon."}
            </p>
            <div className="project-to-link">
              <a
                href="https://github.com/JesusTorrecilla/PI-Henry"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Deploy
              </a>
              <a
                href="https://github.com/JesusTorrecilla/PI-Henry"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                {enEs ? `${"Repository"}` : "Repositorio"}
              </a>
              <a
                href="https://www.youtube.com/watch?v=s_ELrkSupn0&ab_channel=Jes%C3%BAsTorrecilla"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Video
              </a>
            </div>
            <div className="project-con-img">
              {imagenes3.slice(0, 4).map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="project-img"
                    className="project-img2"
                    onClick={() => {
                      setVisible3(true);
                    }}
                  />
                );
              })}
              <Viewer
                visible={visible3}
                onClose={() => {
                  setVisible3(false);
                }}
                images={[
                  { src: imagenes3[0], alt: "landing-page" },
                  { src: imagenes3[1], alt: "pokedex-page" },
                  { src: imagenes3[2], alt: "pokedex-filters-page" },
                  { src: imagenes3[3], alt: "pokemon-search" },
                  { src: imagenes3[4], alt: "pokemon-details" },
                  { src: imagenes3[5], alt: "controlled-create-pokemon-form" },
                ]}
                zoomable={true}
              />
            </div>
          </div>
        </div>
        <div className="project-right">
          <div className="project-right-wrapper">
            <h1 className="project-title">Weather App</h1>
            <p>
              {enEs
                ? `${"Web application where you can visualize the weather of the cities that you search through a searchbar. In the real-time cards that will be shown, you will also see other data, such as humidity, wind and visibility."}`
                : "Aplicación web en la cual se puede visualizar los climas de las ciudades que el usuario busque a través de una barra de búsqueda. En las tarjetas que nos aparecerán, las cuales son en tiempo real, también habra datos adicionales como viento, humedad o visibilidad."}
            </p>
            <div className="project-to-link">
              <a
                href="https://github.com/JesusTorrecilla/weather-app"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Deploy
              </a>
              <a
                href="https://github.com/JesusTorrecilla/weather-app"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                {enEs ? `${"Repository"}` : "Repositorio"}
              </a>
              <a
                href="https://youtu.be/D3Xo8drJFhg"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Video
              </a>
            </div>
            <div className="project-con-img">
              {imagenes2.slice(0, 4).map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="project-img"
                    className="project-img2"
                    onClick={() => {
                      setVisible2(true);
                    }}
                  />
                );
              })}
              <Viewer
                visible={visible2}
                onClose={() => {
                  setVisible2(false);
                }}
                images={[
                  { src: imagenes2[0], alt: "weather-app" },
                  { src: imagenes2[1], alt: "weather-app" },
                  { src: imagenes2[2], alt: "weather-app" },
                  { src: imagenes2[4], alt: "weather-responsive-app" },
                ]}
                zoomable={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
