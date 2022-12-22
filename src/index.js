import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <MainRoute/>
    </BrowserRouter>
  </ThemeProvider>
);