import React, { useContext, useState } from "react";
import { MainContext } from "../context";
import { getApiData } from "./getApiData";
import { Track } from "./types";


function Input() {
  const { setSearchData } = useContext(MainContext);
  const [value, setValue] = useState("");

  async function handleSearch() {
    if (!value.trim()) {
      setSearchData([]);
      return;
    }

    const searchUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(
      value
    )}&entity=song&limit=20`;

    const data = await getApiData(searchUrl);
    if (!data) return;

    const results: Track[] = data.results.map((track: any) => ({
      trackId: track.trackId,
      trackName: track.trackName,
      artistName: track.artistName,
      artworkUrl100: track.artworkUrl100,
      trackViewUrl: track.trackViewUrl,
    }));

    setSearchData(results);
  }

  return (
    <input
      type="search"
      className="header__search"
      placeholder="Найти песню или/и исполнителя"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />
  );
}

export default Input;
