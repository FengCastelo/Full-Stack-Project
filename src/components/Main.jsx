import React from 'react'
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = () => {
  return (
      <div className='main'>
        {/* Item List - Artistas */}
        <ItemList title="Artistas" items ={5} itemsArray={ artistArray }/>
        {/* Item List - Músicas */}
        <ItemList title="Músicas" items ={20} itemsArray={ songsArray }/>
    </div>
  );
};

export default Main