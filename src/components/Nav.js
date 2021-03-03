import React, { useContext } from 'react';
import { FaMusic } from 'react-icons/fa';
import { PlayerContext } from '../contexts/PlayerContext';

const Nav = () => {
  const { libraryStatus, setLibraryStatus } = useContext(PlayerContext);
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FaMusic />
      </button>
    </nav>
  );
};

export default Nav;
