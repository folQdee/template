import React from "react";
import { Track } from "./types";


function TrackCard({ data }: { data: Track }) {
  return (
    <div className="card">
      <img src={data.artworkUrl100} alt={data.trackName} />
      <h3>{data.trackName}</h3>
      <p>{data.artistName}</p>
      <a href={data.trackViewUrl} target="_blank">
        Перейти
      </a>
    </div>
  );
}

export default TrackCard;
