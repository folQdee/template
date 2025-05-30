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
  
    const apiKey = '4981c2f2e46f594d150e238103c0b5f9';
    const searchUrl = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${encodeURIComponent(value)}&limit=20&api_key=${apiKey}&format=json`;
  
    const data = await getApiData(searchUrl);
    if (!data || !data.results?.trackmatches?.track) {
      setSearchData([]);
      return;
    }
  
    const results: Track[] = data.results.trackmatches.track.map((track: any, index: number) => ({
      trackId: index, // Last.fm не даёт уникальный ID
      trackName: track.name,
      artistName: track.artist,
      artworkUrl100: track.image?.find((img: any) => img.size === "medium")?.["#text"] || "",
      trackViewUrl: track.url,
    }));
  
    setSearchData(results);
  }
  

  return (
    <input
      type="search"
      className="header__search"
      placeholder="Найти песню"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />
  );
}

export default Input;
