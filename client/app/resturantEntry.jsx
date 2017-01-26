import React from 'react';

var ResturantEntry = (props) => {
  console.log(props.eachResturant)
  return(
    <div>
      <div className="resturant-list-entry-title">{props.eachResturant.name}</div>Rating:
      <div>{props.eachResturant.rating}</div>
      <div>{props.eachResturant.location.address1}</div>
      <div>{props.eachResturant.location.city}</div>
      <div>{props.eachResturant.location.zip_code}</div>
      <a href={props.eachResturant.url}>Visit our yelp site and see our feedbacks!</a>
      <img className="media-object" src={props.eachResturant.image_url} resturantid={props.key}alt="" />
    </div>
  )
}

export {ResturantEntry};