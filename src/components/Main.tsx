import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context";
import { getApiData } from "./getApiData";
import TrackCard from "./TrackCard";
import { Track } from "./types";
import { API_KEY, BASE_API_URL } from "../constants";


const TRACKS_PER_LOAD = 7;

function Main() {
  const { searchData } = useContext(MainContext);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(28);

  useEffect(() => {
    async function fetchTop() {
      const url = `${BASE_API_URL}?method=tag.gettoptracks&tag=metal&limit=200&api_key=${API_KEY}&format=json`;
  
      const data = await getApiData(url);
  
      if (!data || !data.tracks || !data.tracks.track) {
        setTopTracks([
          {
            trackId: -1,
            trackName: `Я запрещаю вам слушать музыку`,
            artistName: "",
            artworkUrl100: "",
            trackViewUrl: "#",
          },
        ]);
        return;
      }
  
      const results: Track[] = data.tracks.track.map((track: any, index: number) => ({
        trackId: index,
        trackName: track.name,
        artistName: track.artist.name,
        artworkUrl100: track.image?.find((img: any) => img.size === "medium")?.["#text"] || "",
        trackViewUrl: track.url,
      }));
  
      setTopTracks(results);
    }
  
    fetchTop();
  }, []);

  const isSearch = searchData.length > 0;
  const tracksToShow = isSearch ? searchData : topTracks.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + TRACKS_PER_LOAD);
  };

  return (
    <main className="content">
      <h2 className="name">
        {isSearch ? "Результаты поиска:" : "Топ треков (по мнению уже не itunes):"}
      </h2>
      <div className="artist_content">
        {tracksToShow.map((track) => (
          <TrackCard key={track.trackId} data={track} />
        ))}
      </div>

      {!isSearch && visibleCount < topTracks.length && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button className="load-more-button" onClick={handleShowMore}>
            Показать ещё
          </button>
        </div>
      )}
    </main>
  );
}

export default Main;