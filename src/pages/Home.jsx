import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import Results from "../pages/Results";
import { Link } from "react-router-dom";

function Home() {
  const [art, setArt] = useState(null);
  const page = 10;

  const getArt = async (searchTerm) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${searchTerm}&department=Chinese%20Art&has_image=1&skip=${page}&limit=10`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArt(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const artArray = [
      "flower",
      "sun",
      "luke",
      "mountain",
      "water",
      "birds",
      "Picture",
      "Woman",
      "Orchid",
      "Landscapes",
      "Leaf",
    ];
    getArt(artArray[Math.floor(Math.random() * artArray.length)]);
  }, []);

  return (
    <>
      <Form artsearch={getArt} />
      {art ? (
        // <Link to={`/${searchTerm}`}>
        <Results artObj={art} />
      ) : (
        // </Link>
        "loading"
      )}
    </>
  );
}

export default Home;
