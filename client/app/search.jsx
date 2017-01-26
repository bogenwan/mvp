import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
      <br />
        <form onSubmit={this.props.search}>
        <label>
          Location:
          <input id="location" className="form-control input-box" type="text" placeholder="zip code" ref="zip" onChange={this.props.changeLocation} />
        </label><br />
        <label>
          Rating:
          <input id="rating" className="form-control input-box" type="text" placeholder="rating ex. 5" ref="rating" onChange={this.props.changeRating} />
        </label><br />
        <label>
          Price:
          <input id="price" className="form-control input-box" type="text" placeholder="price ex. $$$$" ref="price" onChange={this.props.changePrice}/>
        </label><br />
          <button className="btn btn-success" id="search" type="submit">Find Resturant!</button>
        </form>
      </div>
    )
  }
}

export {Search};

//ref={(input) => { this.textInput = input; }}
//ref={(input)=> this.todo = input}