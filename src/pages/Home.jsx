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
  // const { ref, inView } = useInView();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setListArt({ search: formData.searchterm });
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
  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView, fetchNextPage, hasNextPage]);

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
