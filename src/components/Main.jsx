import React from 'react'
import ItemList from './ItemList';

const Main = () => {
  return (
      <div className='main'>
        {/* Item List - Artistas */}
        <ItemList title="Artistas" items ={10}/>
        {/* Item List - Músicas */}
        <ItemList title="Músicas" items ={20}/>
    </div>
  );
};

export default Main