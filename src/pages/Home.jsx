import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import Results from "../pages/Results";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";

function Home() {
  const [art, setArt] = useState(null);
  const page = 10;
  const [formData, setFormData] = useState({
    searchterm: "",
  });
  const [listArt, setListArt] = useSearchParams();
  const [sortBy, setSortBy] = useState("");
  // const { ref, inView } = useInView();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setListArt({ search: formData.searchterm });
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const getArt = async (link) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?q=${link}&department=Chinese%20Art&has_image=1`;

    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
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
    const showrandom = artArray[Math.floor(Math.random() * artArray.length)];
    const keyword = listArt.get("search");
    getArt(keyword ? keyword : showrandom);
  }, [listArt]);

  // const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
  //   useInfiniteQuery("listmore", ({ pageParam = page }) => getArt(pageParam), {
  //     getNextPageParam: (lastPage, allPages) => {
  //       const nextPage =
  //         lastPage.length === page ? allPages.length + 10 : undefined;
  //       return nextPage;
  //     },
  //   });

  return (
    <>
      <Form
        formData={formData}
        addhandleChange={handleChange}
        addhandleSubmit={handleSubmit}
        artObj={art}
        addhandleSort={handleSort}
        sortBy={sortBy}
      />
      {art ? <Results artObj={art} sortBy={sortBy} /> : "loading"}
    </>
  );
}

export default Home;
