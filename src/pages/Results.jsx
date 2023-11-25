import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OneArt from "../components/OneArt";

function Results({ artObj }) {
  const chinsesArt = artObj.data;
  console.log(chinsesArt);
  return (
    <div className="result">
      <ul>
        {chinsesArt.length ? (
          chinsesArt.map((one, index) => <OneArt one={one} key={index} />)
        ) : (
          <div className="text title">
            Sorry, no result. Please search other keyword.
          </div>
        )}
      </ul>
    </div>
  );
}

export default Results;
