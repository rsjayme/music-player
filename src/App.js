import React from 'react';

import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

import { PlayerProvider } from './contexts/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <div>
        <Nav />
        <Song />
        <Player />
        <Library />
      </div>
    </PlayerProvider>
  );
}

export default App;
