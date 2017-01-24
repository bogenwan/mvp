import React from 'react';

var Search = (props) => {
  return (
    <div>
    in Search<br />
    <input id="location" className="input-box" type="text" placeholder="your location"/><br />
    <input id="rating" className="input-box" type="text" placeholder="rating"/><br />
    <input id="price" className="input-box" type="text" placeholder="price range"/><br />
    <button id="search" type="submit">Find Resturant!</button>
    </div>
  )
}

export {Search};