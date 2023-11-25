import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import Results from "../pages/Results";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";

function Home() {
  const [art, setArt] = useState(null);
  const page = 10;
  const [formData, setFormData] = useState({
    searchterm: "",
  });
  const [listArt, setListArt] = useSearchParams();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setListArt({ searchterm: formData.searchterm });
    // getArt(formData.searchterm);
  };

  const getArt = async (link) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${link}&department=Chinese%20Art&has_image=1&skip=${page}&limit=10`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArt(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const keyword = listArt.get("searchterm");
    getArt(keyword);
  }, [listArt]);

  return (
    <>
      <Form
        formData={formData}
        addhandleChange={handleChange}
        addhandleSubmit={handleSubmit}
      />
      {art ? <Results artObj={art} /> : "loading"}
    </>
  );
}

export default Home;
