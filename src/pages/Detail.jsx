import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const stripHtml = (s) =>
  typeof s === "string" ? s.replace(/<[^>]*>/g, "") : s;

function Detail() {
  let params = useParams();
  const id = params.getid; // accession number, e.g. "1980.10"
  const location = useLocation();
  const passed = location.state && location.state.art;
  const [detail, setDetail] = useState(
    passed && passed.accession_number === id ? passed : null
  );
  const [status, setStatus] = useState(detail ? "ok" : "loading");

  const getDetail = async (accession, isRetry = false) => {
    // NOTE: the museum's single-artwork endpoint (/api/artworks/<id>) does not
    // send CORS headers, so browsers block it. The list endpoint does send
    // them, and it can look up one artwork by accession_number.
    const url = `https://openaccess-api.clevelandart.org/api/artworks/?accession_number=${encodeURIComponent(
      accession
    )}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const detaildata = await response.json();
      const art = detaildata.data && detaildata.data[0];
      if (!art) throw new Error("No data");
      setDetail(art);
      setStatus("ok");
    } catch (e) {
      console.error(e);
      if (!isRetry) {
        // The museum API is sometimes slow or flaky; try once more.
        setTimeout(() => getDetail(accession, true), 1500);
      } else {
        setStatus("error");
      }
    }
  };

  useEffect(() => {
    if (passed && passed.accession_number === id) {
      setDetail(passed);
      setStatus("ok");
      return;
    }
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
      <div>{inscriptions.length ? inscriptions.map((ins) => stripHtml(ins.inscription)).join(" ") : "—"}</div>
      <div className="title">Description</div>
      <div>{detail.description ? stripHtml(detail.description) : "—"}</div>
    </div>
  );
}

export default Detail;
