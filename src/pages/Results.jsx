import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OneArt from "../components/OneArt";

function Results({ artObj, sortBy }) {
  const chinsesArt = artObj.data;
  const filterword = new RegExp(sortBy, "i");
  return (
    <>
      <div className="result">
        {chinsesArt.length ? (
          chinsesArt
            .filter((c) => c.culture.some((d) => d.match(filterword)))
            .map((one, index) => <OneArt one={one} key={index} />)
        ) : (
          <div className="text title">
            Sorry, no result. Please search other keyword.
          </div>
        )}
      </div>
      {/* <div className="more">
        <button className="btn">more results</button>
      </div> */}
    </>
  );
}

export default Results;
