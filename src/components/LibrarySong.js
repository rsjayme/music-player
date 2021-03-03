import React from 'react';

const LibrarySong = ({ song, setCurrentSong }) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt="album cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
