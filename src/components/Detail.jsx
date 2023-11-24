import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let params = useParams();
  const id = params.id;
  const [detail, setDetail] = useState(null);

  const getDetail = async (id) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/${id}`;
    console.log(url);
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
    <div>
      <ul>
        <li>
          <span>
            <img src={detail.images.web.url} />
          </span>
          <span>title:{detail.title}</span>
          <span>
            title in original language:{detail.title_in_original_language}
          </span>
          <span>culture:{detail.culture}</span>
          <span>
            inscriptions: {detail.inscriptions.map((ins) => ins.inscription)}
          </span>
          <span>
            inscription translation:{" "}
            {detail.inscriptions.map((ins) => ins.inscription_translation)}
          </span>
        </li>
      </ul>
    </div>
  ) : (
    <h1>"loading..."</h1>
  );
}

export default Detail;
