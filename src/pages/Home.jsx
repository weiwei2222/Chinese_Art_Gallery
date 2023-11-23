import React from "react";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Form from "../components/Form";
import Result from "../components/Result";
import Footer from "../components/Footer";

function Home() {
  const [art, setArt] = useState(null);

  const getArt = async (searchTerm) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${searchTerm}&department=Chinese%20Art&has_image=1&skip=0&limit=10`;
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
      {art ? <Result artObj={art} /> : "loading"}
    </div>
  );
}

export default Home;
