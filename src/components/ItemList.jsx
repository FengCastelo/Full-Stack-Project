import React from 'react'
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';


const ItenList = ({title, items, itemsArray, path, idPath}) => {
  // console.log(items);

  return (
      <div className='item-list'>
        <div className='item-list__header'>
          <h2>{title} Populares</h2>
          <Link className="item-list__link" to={{path}}>
            Mostrar mais
          </Link>
        </div>

        <div className='item-list__container'>
          {itemsArray
            .filter((currentValue, index) => index < items)
            .map((currObj, index) => (
              <SingleItem
                //  id={currObj.id}
                //  name={currObj.name}
                //  image={currObj.image}
                //  banner={currObj.banner}
                idPath={idPath}
                {...currObj}
                 key={`${title}-${index}`}/>))}
              </div>
         </div>
  );
};

export default ItenList;