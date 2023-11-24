import React from "react";
import { Link } from "react-router-dom";

function OneArt({ one }) {
  return (
    <li>
      <Link to={`/${one.id}`}>
        <span>
          <img src={one.images.web.url} />
        </span>
        <h3>{one.title}</h3>
        <div>{one.title_in_original_language}</div>
        <div>Culture:{one.culture}</div>
      </Link>
    </li>
  );
}

export default OneArt;
