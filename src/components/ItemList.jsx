import React from 'react'
import SingleItem from './SingleItem';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';


const ItenList = ({title, items}) => {
  // console.log(items);

  return (
      <div className='item-list'>
                <div className='item-list__header'>
                    <h2>{title} Populares</h2>
                    <a className="main-link" href="/">
                    Mostrar mais
                    </a>
                </div>

              <div className='item-list__container'>
                {artistArray.filter((currentValue, index) => index < items)
                .map((currObj, index) => (
                <SingleItem
                 id={currObj.id}
                 name={currObj.name}
                 image={currObj.image}
                 banner={currObj.banner}
                 key={`${title}-${index}`}/>))}
              </div>
         </div>
  );
};

export default ItenList;