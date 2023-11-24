import React from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import OneArt from "./OneArt";

function Results({ artObj }) {
  const chinsesArt = artObj.data;
  return chinsesArt.map((one) => {
    return <OneArt one={one} />;
  });
}

export default Results;
