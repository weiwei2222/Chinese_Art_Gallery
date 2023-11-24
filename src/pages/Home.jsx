import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import Results from "../components/Results";

function Home() {
  const [art, setArt] = useState(null);
  const page = 10;

  const getArt = async (searchTerm) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${searchTerm}&department=Chinese%20Art&has_image=1&skip=${page}&limit=10`;
    console.log(url);
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
    ];
    getArt(artArray[Math.floor(Math.random() * artArray.length)]);
  }, []);

  console.log(art);
  return (
    <div>
      <Form artsearch={getArt} />
      {art ? <Results artObj={art} /> : "loading"}
    </div>
  );
}

export default Home;
