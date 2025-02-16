import React from 'react'
import Player from '../components/Player'
import { Link, useParams} from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'


const Song = () => {

  // console.log(id)
  const {id} = useParams();
  
  const {image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];

  const artistObj = artistArray.filter(
    (currentartistObj) => currentartistObj.name === artist
  )[0];
  
  return (
    <div className='song'>
      <div className="song__container">
        <div className='song__image-container'>
          <img src={image}
          alt={`Imagem da música ${name}`}
        />
        </div>
      </div>

      <div className="song__bar">
         <Link to={`/artist/${artistObj.id}`} className='song__artist-image'>
            <img 
              width={70}
              height={70}
              src={artistObj.image}
              alt={`Imagem do Artista ${artist}`}
            />
         </Link>
         
         <Player duration={duration}/>
          
         <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
         </div>
      </div>
    </div>
  )
}

export default Song