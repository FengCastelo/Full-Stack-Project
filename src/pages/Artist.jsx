import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams} from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists';

const Artist = () => {
  
  const {id} = useParams();
  // console.log(useParams())
  
  const artistObj = artistArray.filter(
    (currentArtistObj, i) => currentArtistObj.id === Number(id)
  )[0];

  return (
    <div className="artist">
      <div 
      className="artist__header" 
      style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
    }}
    >
      <h2 className='artist__title'>{artistObj.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList artistName ={artistObj.name}/>
      </div>

      <Link to="/song/1">
        <FontAwesomeIcon
          className='single-item__icon single-item__icon--artist' 
          icon={faCirclePlay} 
        />
      </Link>
    </div>
  );
};

export default Artist