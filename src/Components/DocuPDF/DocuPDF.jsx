import React, { Component } from "react";

class DocuPDF extends Component {
  componentDidMount() {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("PDF").click();
      window.close();
    }
  }

  render() {
    return (
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <object
          data={require("../../img/CV.pdf")}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <br />
          <a
            href={require("../../img/CV.pdf")}
            id="PDF"
            download="Curriculum Jesús Torrecilla.pdf"
          >
            Download CV
          </a>
        </object>
      </div>
    );
  }
}

export default DocuPDF;
