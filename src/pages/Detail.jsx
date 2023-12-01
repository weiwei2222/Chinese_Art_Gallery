import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let params = useParams();
  const id = params.getid;
  const [detail, setDetail] = useState(null);

  const getDetail = async (id) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/${id}`;
    try {
      const response = await fetch(url);
      const detaildata = await response.json();
      setDetail(detaildata.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  return detail ? (
    <div className="detail">
      <div className="bigimg">
        <img src={detail.images.web.url} />
      </div>
      <div className="title">Title</div>
      <div>{detail.title}</div>
      <div className="title">Title in original language</div>
      <div> {detail.title_in_original_language}</div>
      <div className="title">Culture</div>
      <div>{detail.culture}</div>
      <div className="title">Inscriptions</div>
      <div> {detail.inscriptions.map((ins) => ins.inscription)}</div>
      <div className="title">Description</div>
      <div>{detail.description}</div>
    </div>
  ) : (
    <h1>"loading..."</h1>
  );
}

export default Detail;
