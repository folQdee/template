import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context";
import { getApiData } from "./getApiData";
import TrackCard from "./TrackCard";
import { Track } from "./types";


function Main() {
  const { searchData } = useContext(MainContext);
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  useEffect(() => {
    async function fetchTop() {
      const url =
        "https://itunes.apple.com/search?term=metal&entity=song&limit=26";
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
  const tracksToShow = isSearch ? searchData : topTracks;

  return (
    <main className="content">
      <h2 className="name">{isSearch ? "Результаты поиска:" : "Топ треков(по мнению itunes):"}</h2>
      <div className="artist_content">
        {tracksToShow.map((track) => (
          <TrackCard key={track.trackId} data={track} />
        ))}
      </div>
    </main>
  );
}

export default Main;
