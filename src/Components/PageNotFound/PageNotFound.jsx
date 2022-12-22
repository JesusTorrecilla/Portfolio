import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <div>
        <Link to="/">Come back</Link>
      </div>
      <div>
        Page not Found
      </div>
    </div>
  );
}

export default PageNotFound;
