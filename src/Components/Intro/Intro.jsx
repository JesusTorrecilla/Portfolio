import React, { useContext } from "react";
import Me from "../../img/Me.png";
import "./Intro.css";
import { ThemeContext } from "../../context";

function Intro() {
  const theme = useContext(ThemeContext);
  const { enEs, darkMode } = theme.state;

  return (
    <div className="info" id="sobre-mí">
      <div className="info-left">
        <div className="info-left-wrapper">
          <h2 className="info-intro">
            {enEs ? "Hi, my name is" : "Hola, mi nombre es"}
          </h2>
          <h1 className="info-name">Jesús Torrecilla</h1>
          <div className="info-title">
            <div className="info-title-wrapper">
              <div className="info-title-item">Fullstack Web Developer</div>
              <div className="info-title-item">Front End</div>
              <div className="info-title-item">Back End</div>
            </div>
          </div>
          <p className="info-desc">
            {enEs
              ? "Fullstack web developer that focus on creation of web applications with advanced functionalities and simple, user friendly and attractive designs."
              : "Soy un programador web que se centra en la creación de aplicaciones web con funcionalidades avanzadas y diseños simples, intuitivos y atractivos."}
          </p>
          <div className="info-to-link">
            <a
              href="/curriculum"
              target="__blank"
              style={{ color: darkMode ? "white" : "#222" }}
            >
              {enEs ? "See CV" : "Ver CV"}
            </a>
            <a
              href={require("../../img/CV.pdf")}
              id="enlaceDescargarPDF"
              style={{ color: darkMode ? "white" : "#222" }}
              download="Curriculum Jesús Torrecilla"
            >
              {enEs ? "Download CV" : "Descargar CV"}
            </a>
          </div>
        </div>
      </div>
      <div className="info-right">
        <div className="info-bg"></div>
        <img src={Me} alt="my-fotito" className="info-img" />
      </div>
    </div>
  );
}

export default Intro;
