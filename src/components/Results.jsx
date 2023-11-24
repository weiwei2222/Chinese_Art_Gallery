import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OneArt from "./OneArt";

function Results({ artObj }) {
  const chinsesArt = artObj.data;
  return (
    <div className="result">
      <ul>
        {chinsesArt.map((one, index) => (
          <OneArt one={one} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Results;
