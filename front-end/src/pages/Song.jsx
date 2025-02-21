import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const songId = useParams().id;

  // Encontrar a música correspondente ao songId
  const songObj = songsArray.find(
    (currentSongObj) => currentSongObj._id === songId
  );

  // Verifica se a música foi encontrada para evitar erro ao acessar `undefined`
  if (!songObj) {
    return <h2>ERROR 404 - Música não Encontrada! </h2>;
  }

  const { image, name, duration, artist, audio, id } = songObj;

  // Encontrar o artista correspondente
  const artistObj = artistArray.find(
    (currentArtistObj) => currentArtistObj.name === artist
  );

  // Verifica se o artista foi encontrado
  if (!artistObj) {
    return <p>Artista não encontrado!</p>;
  }

  // Filtrar músicas do mesmo artista
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  // Verifica se há músicas suficientes antes de gerar índices aleatórios
  let randomId = null;
  let randomId2 = null;

  if (songsArrayFromArtist.length > 1) {
    const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
    randomId = songsArrayFromArtist[randomIndex]._id;

    const randomIndex2 = Math.floor(
      Math.random() * songsArrayFromArtist.length
    );
    randomId2 = songsArrayFromArtist[randomIndex2]._id;
  }

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artistObj.name}`}
          />
        </Link>

        <Player
          duration={duration}
          randomId={randomId}
          randomId2={randomId2}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;