import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Player = ({ duration, randomId, randomId2 }) => {

  const handlePlayPause = () => {
    console.log("Play/Pause clicado!");
  };

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomId}`} aria-label="Música anterior">
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={faCirclePlay}
          onClick={handlePlayPause}
          aria-label="Reproduzir/Pausar música"
        />

        <Link to={`/song/${randomId2}`} aria-label="Próxima música">
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <time dateTime="00:00">00:00</time>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <time dateTime={duration}>{duration}</time>
      </div>
    </div>
  );
};

export default Player;