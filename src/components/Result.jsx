import React from "react";

function Result({ artObj }) {
  const chinsesArt = artObj.data;

  return chinsesArt.map((one, index) => (
    <div key={index} className="result">
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
  ));
}

export default Result;
