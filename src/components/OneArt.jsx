import React from "react";
import { Link } from "react-router-dom";

function OneArt({ one }) {
  console.log(one);
  return (
    <Link to={`/${one.id}`}>
      <div className="result">
        <ul>
          <li>
            <span>
              <img src={one.images.web.url} />
            </span>
            <span>title:{one.title}</span>
            <span>
              title in original language:{one.title_in_original_language}
            </span>
            <span>culture:{one.culture}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default OneArt;
