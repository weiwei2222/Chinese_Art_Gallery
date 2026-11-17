import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OneArt from "../components/OneArt";

function Results({ artObj, sortBy }) {
  const rawArt = artObj.data || [];
  // The museum search API sometimes returns the same artwork several times.
  const seen = new Set();
  const chinsesArt = [];
  for (const c of rawArt) {
    if (c && !seen.has(c.id)) {
      seen.add(c.id);
      chinsesArt.push(c);
    }
  }
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
