import React from 'react'
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';


const ItenList = ({title, items, itemsArray, path, idPath}) => {
  // console.log(items);
  // console.log(useLocation());
  const {pathname} = useLocation()
  // console.log(pathname);

  const isHome = pathname === "/"

  const finalItems = isHome ? items : Infinity;

  return (
      <div className='item-list'>
        <div className='item-list__header'>
          <h2>{title} Populares</h2>

          {isHome ? (
            <Link className="item-list__link" to={path}>
              Mostrar mais
          </Link>
        ) : (
          <></>
        )}
          
        </div>

        <div className='item-list__container'>
          {itemsArray
            .filter((currentValue, index) => index < finalItems)
            .map((currObj, index) => (
              <SingleItem
                //  id={currObj.id}
                //  name={currObj.name}
                //  image={currObj.image}
                //  banner={currObj.banner}
                {...currObj}
                idPath={idPath}
                 key={`${title}-${index}`}/>))}
              </div>
         </div>
  );
};

export default ItenList;