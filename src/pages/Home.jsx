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
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArt(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getArt();
  }, []);

  console.log(art);
  return (
    <div>
      <Form artsearch={getArt} />
      <Result />
      <Footer />
    </div>
  );
}

export default Home;
