import React from 'react'
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = () => {
  return (
      <div className='main'>
        {/* Item List - Artistas */}
        <ItemList 
        title="Artistas" 
        items ={20} 
        itemsArray={ artistArray } 
        path="/artists"
        />
        {/* Item List - Músicas */}
        <ItemList 
        title="Músicas" 
        items ={10} 
        itemsArray={ songsArray } 
        path='/songs'
        idPath='/song'
        />
    </div>
  );
};

export default Main