import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../context";

function Footer() {
  const theme = useContext(ThemeContext);
  const { enEs } = theme.state;
  return (
    <div className="footer">
      {enEs ? `${"Created in 2022"}` : "Creado en 2022"}
    </div>
  );
}

export default Footer;
