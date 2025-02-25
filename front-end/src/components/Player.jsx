import React, { useRef }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

  const formatTime = (timeInseconds) => {
    const minutes = Math.floor(timeInseconds / 60)
    .toString()
    .padStart(2, 0);
    const seconds = Math.floor(timeInseconds - minutes *   60)
    .toString()
    .padStart(2, 0);

    return `${minutes}:${seconds}`
  }

const Player = ({ duration, 
  randomId, 
  randomId2, 
  audio,
 }) => {

  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  
  // função
  // console.log(audioPlayer.current.play());

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPlaying);
    setCurrentTime(formatTime(audioPlayer.current.currentTime));
    // console.log(formatTime(audioPlayer.current.currentTime));
  }

  // setIsPLaying(false);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomId}`} aria-label="Música anterior">
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={ isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
          aria-label="Reproduzir/Pausar música"
        />

        <Link to={`/song/${randomId2}`} aria-label="Próxima música">
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <time dateTime="00:00">{currentTime}</time>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <time dateTime={duration}>{duration}</time>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;