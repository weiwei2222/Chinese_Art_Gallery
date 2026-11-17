import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  let params = useParams();
  const id = params.getid;
  const [detail, setDetail] = useState(null);
  const [status, setStatus] = useState("loading");

  const getDetail = async (artId, isRetry = false) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/${artId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const detaildata = await response.json();
      if (!detaildata.data) throw new Error("No data");
      setDetail(detaildata.data);
      setStatus("ok");
    } catch (e) {
      console.error(e);
      if (!isRetry) {
        // The museum API is sometimes slow or flaky; try once more.
        setTimeout(() => getDetail(artId, true), 1500);
      } else {
        setStatus("error");
      }
    }
  };

  useEffect(() => {
    setDetail(null);
    setStatus("loading");
    getDetail(id);
  }, [id]);

  if (status === "loading") {
    return (
      <div className="detail">
        <p className="loading-text">Loading…</p>
      </div>
    );
  }

  if (status === "error" || !detail) {
    return (
      <div className="detail">
        <div className="error-text">
          <p>Sorry, this artwork could not be loaded. The museum database may be slow right now.</p>
          <button className="btn" onClick={() => { setStatus("loading"); getDetail(id); }}>
            Try again
          </button>{" "}
          <Link className="btn" to="/">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const imgUrl = detail.images && detail.images.web && detail.images.web.url;
  const inscriptions = Array.isArray(detail.inscriptions) ? detail.inscriptions : [];

  return (
    <div className="detail">
      {imgUrl && (
        <div className="bigimg">
          <img src={imgUrl} alt={detail.title || "Artwork"} />
        </div>
      )}
      <div className="title">Title</div>
      <div>{detail.title || "—"}</div>
      <div className="title">Title in original language</div>
      <div>{detail.title_in_original_language || "—"}</div>
      <div className="title">Culture</div>
      <div>{Array.isArray(detail.culture) ? detail.culture.join(", ") : detail.culture || "—"}</div>
      <div className="title">Inscriptions</div>
      <div>{inscriptions.length ? inscriptions.map((ins) => ins.inscription) : "—"}</div>
      <div className="title">Description</div>
      <div>{detail.description || "—"}</div>
    </div>
  );
}

export default Detail;
