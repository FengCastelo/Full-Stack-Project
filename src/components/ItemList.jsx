import React from 'react'
import SingleItem from './SingleItem';


const ItenList = ({title, items, itemsArray, path, idPath}) => {
  // console.log(items);

  return (
      <div className='item-list'>
        <div className='item-list__header'>
          <h2>{title} Populares</h2>
          <a className="item-list__link" href={{path}}>
            Mostrar mais
          </a>
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