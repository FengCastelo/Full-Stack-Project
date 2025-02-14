import React from 'react'
import SingleItem from './SingleItem';


const ItenList = ({title, items, itemsArray}) => {
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
                {itemsArray
                .filter((currentValue, index) => index < items)
                .map((currObj, index) => (
                <SingleItem
                //  id={currObj.id}
                //  name={currObj.name}
                //  image={currObj.image}
                //  banner={currObj.banner}
                {...currObj}
                 key={`${title}-${index}`}/>))}
              </div>
         </div>
  );
};

export default ItenList;