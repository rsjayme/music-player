import React, { useEffect } from 'react';

const LibrarySong = ({
  audioRef,
  song,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
}) => {
  useEffect(() => {
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  const songSelectHandler = () => {
    setCurrentSong(song);
    const newSongs = songs.map((songState) => {
      if (songState.id === song.id) songState.active = true;
      else songState.active = false;

      return songState;
    });
    setSongs(newSongs);
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
