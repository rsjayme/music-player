import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

import LibrarySong from './LibrarySong';

const Library = () => {
  const { libraryStatus, setCurrentSong, songs } = useContext(PlayerContext);
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
