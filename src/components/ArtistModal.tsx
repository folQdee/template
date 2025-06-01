import React from "react";

interface ArtistInfo {
  artistName: string;
  primaryGenreName: string;
  artistLinkUrl: string;
}

interface Props {
  artist: ArtistInfo | null;
  onClose: () => void;
}

// окошко для исполнителей
const ArtistModal: React.FC<Props> = ({ artist, onClose }) => {
  if (!artist) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{artist.artistName}</h2>
        <p><strong>Жанр:</strong> {artist.primaryGenreName}</p>
        <a href={artist.artistLinkUrl} target="_blank">
          Перейти к исполнителю
        </a>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ArtistModal;
