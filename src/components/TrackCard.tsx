import React, { useState } from "react";
import ArtistModal from "./ArtistModal";
import { Track } from "./types";
import { getApiData } from "./getApiData";
import { API_KEY, BASE_API_URL } from "../constants";


function TrackCard({ data }: { data: Track }) {
  const [artistData, setArtistData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  async function fetchArtistInfo(name: string) {
    const url = `${BASE_API_URL}?method=artist.getinfo&artist=${encodeURIComponent(name)}&api_key=${API_KEY}&format=json`;
        const data = await getApiData(url);
    if (data?.results?.[0]) {
      setArtistData(data.results[0]);
      setShowModal(true);
    }
  }

  return (
    <div className="card">
      <img src={data.artworkUrl100} alt={data.trackName} />
      <h3>{data.trackName}</h3>
      <p
        style={{ cursor: "pointer", color: "#ff5050" }}
        onClick={() => fetchArtistInfo(data.artistName)}
      >
        {data.artistName}
      </p>
      <a href={data.trackViewUrl} target="_blank" rel="noopener noreferrer">
        Перейти
      </a>
      {showModal && <ArtistModal artist={artistData} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default TrackCard;
