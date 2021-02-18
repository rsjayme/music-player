import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaPlay, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FaAngleLeft className="skip-back" size="2rem" />
        <FaPlay className="play" size="2rem" />
        <FaAngleRight className="skip-forward" size="2rem" />
      </div>
    </div>
  );
};

export default Player;
