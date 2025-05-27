import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context";
import { getApiData } from "./getApiData";
import TrackCard from "./TrackCard";
import { Track } from "./types";

const TRACKS_PER_LOAD = 7;

function Main() {
  const { searchData } = useContext(MainContext);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(28);

  useEffect(() => {
    async function fetchTop() {
      const url = "https://itunes.apple.com/search?term=metal&entity=song&limit=200"; // больше 200 нельзя(
      const data = await getApiData(url);

      if (!data) return;

      const results: Track[] = data.results.map((track: any) => ({
        trackId: track.trackId,
        trackName: track.trackName,
        artistName: track.artistName,
        artworkUrl100: track.artworkUrl100,
        trackViewUrl: track.trackViewUrl,
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
        {isSearch ? "Результаты поиска:" : "Топ треков (по мнению itunes):"}
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
