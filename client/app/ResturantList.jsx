import React from 'react';
import {ResturantEntry} from './resturantEntry.jsx'

var ResturantList = (props) => {
  //console.log(props.list[0])
  return(
    <div>
    {props.list.map((resturant, index) => {
      return (
        <ResturantEntry eachResturant={resturant} key={index}/>)
    })
    }
    </div>
    )
}

export {ResturantList};

