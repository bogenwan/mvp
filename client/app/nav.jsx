import React from 'react';
import {Search} from './search.jsx';

var Nav = (props) => {
  return(
    <div>
      <Search search={props.search} changeLocation={props.changeLocation} changeRating={props.changeRating} changePrice={props.changePrice}/>
    </div>
  )
}

export {Nav};