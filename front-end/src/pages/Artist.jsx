import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Artist = () => {
  const { id } = useParams(); // Pega o id da URL

  console.log("ID Capturado:", id); // Verificação do id que foi capturado
  
  // Tenta encontrar o artista com base no id
  const artist = artistArray.find((currentArtistObj) => currentArtistObj._id === id);

  if (!artist) {
    return <div>Artista não encontrado!</div>; // Se não encontrar o artista
  }

  const { name, banner } = artist;

  // Filtra as músicas do artista
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  if (songsArrayFromArtist.length === 0) {
    return <div>Não há músicas disponíveis para este artista.</div>;
  }

  // Gera um índice aleatório para uma música do artista
  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomId = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomId}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
