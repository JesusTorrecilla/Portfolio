import React, { useContext } from "react";
import "./About.css";
import Me from "../../img/Me.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import javascript from "../../img/javascript.png";
import typescript from "../../img/typescript.webp";
import react from "../../img/react.png";
import redux from "../../img/redux.png";
import nodejs from "../../img/nodejs.png";
import express from "../../img/pngegg.png";
import sql from "../../img/sql.png";
import postgresql from "../../img/postgresql.png";
import sequelize from "../../img/sequelize.png";
import git from "../../img/git.png";
import { ThemeContext } from "../../context";

function About() {
  const theme = useContext(ThemeContext);
  const { enEs } = theme.state;

  return (
    <div className="about" id="about-me">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Me} alt="my-ph" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">{enEs ? `${"About me"}` : "Sobre mí"}</h1>
        <p className="about-desc">
          {enEs
            ? `${"As a Fullstack Developer, I am proficient in both front-end and back-end technologies, making me a versatile and valuable asset to any team. I am a fast learner, always eager to pick up new skills and technologies to keep up with the ever-changing landscape of software development. I am passionate about what I do and am excited to start my career as a junior developer. I trust in my skills and enthusiasm, and I am excited to continue my professional development and make valuable contributions as a Fullstack Developer."}`
            : "Como Fullstack Developer, puedo realizar tanto tareas de front-end como de back-end, lo que me convierte en un miembro versátil y valioso para cualquier equipo. Aprendo rápido, siempre estoy dispuesto a adquirir nuevas habilidades y aprender nuevas tecnologías para estar al día con el siempre cambiante mundo del desarrollo web. Me apasiona lo que hago y estoy ansioso por comenzar mi carrera como desarrollador junior. Confío en mis habilidades y entusiasmo, y estoy emocionado por continuar mi desarrollo profesional y hacer valiosas contribuciones como Fullstack Developer."}
        </p>
        <div className="about-technology">
          <img src={html} alt="html-logo" className="about-technology-img" />
          <img src={css} alt="css-logo" className="about-technology-img" />
          <img
            src={javascript}
            alt="javascript-logo"
            className="about-technology-img"
          />
          <img
            src={typescript}
            alt="typescript-logo"
            className="about-technology-img"
          />
        </div>
        <div className="about-technology">
          <img src={react} alt="react-logo" className="about-technology-img" />
          <img src={redux} alt="redux-logo" className="about-technology-img" />
          <img
            src={nodejs}
            alt="nodejs-logo"
            className="about-technology-img"
          />
          <img
            src={express}
            alt="express-logo"
            className="about-technology-img"
          />
        </div>
        <div className="about-technology">
          <img src={sql} alt="sql-logo" className="about-technology-img" />
          <img
            src={postgresql}
            alt="postgresql-logo"
            className="about-technology-img"
          />
          <img
            src={sequelize}
            alt="sequelize-logo"
            className="about-technology-img"
          />
          <img src={git} alt="git-logo" className="about-technology-img" />
        </div>
      </div>
    </div>
  );
}

export default About;
