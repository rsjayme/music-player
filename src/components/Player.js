import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  songs,
  setSongs,
}) => {
  //UseEffect
  useEffect(() => {
    const newSongs = songs.map((songState) => {
      if (songState.id === currentSong.id) {
        songState.active = true;
      } else {
        songState.active = false;
      }
      return songState;
    });
    setSongs(newSongs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  //Event Handlers
  const playSongHandler = () => {
    if (!isPlaying) audioRef.current.play();
    else audioRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const formatTimeHandler = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const changeSongHandler = (amount) => {
    const currentSongIndex = songs.findIndex(
      (songState) => songState.id === currentSong.id,
    );
    let newSongIndex = currentSongIndex + amount;
    if (newSongIndex < 0) newSongIndex = songs.length - 1;
    if (newSongIndex >= songs.length) newSongIndex = 0;

    setCurrentSong(songs[newSongIndex]);
  };

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTimeHandler(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration ? songInfo.duration : 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>
          {isNaN(songInfo.duration)
            ? '0:00'
            : formatTimeHandler(songInfo.duration)}
        </p>
      </div>
      <div className="play-control">
        <FaAngleLeft
          onClick={() => {
            changeSongHandler(-1);
          }}
          className="skip-back"
          size="2rem"
        />
        {isPlaying ? (
          <FaPause onClick={playSongHandler} className="play" size="2rem" />
        ) : (
          <FaPlay onClick={playSongHandler} className="play" size="2rem" />
        )}
        <FaAngleRight
          onClick={() => {
            changeSongHandler(1);
          }}
          className="skip-forward"
          size="2rem"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
