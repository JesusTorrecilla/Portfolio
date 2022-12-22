import React, { useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../context";

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const { darkMode, enEs } = theme.state;

  const handleClick2 = () => {
    theme.dispatch({ type: "EN/ES" });
  };

  return (
    <div className="Navbar">
      <div className="logoAndName">
        <span className="nav-logo">Portafolio - JT</span>
      </div>
      <div className="language" onClick={handleClick2}>
        ES/EN
      </div>
      <div className={`nav-items ${open && "open"}`}>
        <a
          href="#sobre-mí"
          className="color-specified"
          style={{ color: darkMode ? "white" : "#222" }}
        >
          {enEs ? `${"Home"}` : "Inicio"}
        </a>
        <a
          href="#about-me"
          className="color-specified"
          style={{ color: darkMode ? "white" : "#222" }}
        >
          {enEs ? `${"About me"}` : "Sobre mí"}
        </a>
        <a
          href="#projects"
          className="color-specified"
          style={{ color: darkMode ? "white" : "#222" }}
        >
          {enEs ? `${"Projects"}` : "Proyectos"}
        </a>
        <a
          href="#contact"
          className="color-specified"
          style={{ color: darkMode ? "white" : "#222" }}
        >
          {enEs ? `${"Contact"}` : "Contacto"}
        </a>
      </div>
      <div
        className={`${darkMode ? "nav-toggle2" : "nav-toggle"} ${
          open && "open"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div
          className="bar"
          style={{
            background: open ? "transparent" : darkMode ? "#ffffff" : "black",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Navbar;
