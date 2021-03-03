import { createContext, useRef, useState } from 'react';
import data from '../util';

export const PlayerContext = createContext({});

export function PlayerProvider({ children }) {
  const audioRef = useRef(null);

  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <PlayerContext.Provider
      value={{
        libraryStatus,
        setLibraryStatus,
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        audioRef,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
