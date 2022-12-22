import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import DocuPDF from "./Components/DocuPDF/DocuPDF";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function MainRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/curriculum" element={<DocuPDF />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default MainRoute;
