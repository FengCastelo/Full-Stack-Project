import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
      <div className='main'>
        <div className='item-list'>
            <div className='item-list__header'>
                <h2>Artistas Populares</h2>
                <a className="main-link" href="/">
                Mostrar mais
                </a>
            </div>

             <div className='single-item'>
                <img className='single-item__image' 
                src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" 
                alt="Imagem do Artista X" 
                />

                <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />

                <p>Henrique e Juliano</p>
                <p>Artista</p>
             </div>
        </div>
    </div>
  );
};

export default Main