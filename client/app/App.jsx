import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from './nav.jsx';
import {ResturantList} from './resturantList.jsx';
import {searchYelp} from './search.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resturantList: [],
      location: '',
      rating: '',
      price: ''
    };
    this.handleChangeLocation = this.handleChangeLocation.bind(this);

    this.handleChangeRating = this.handleChangeRating.bind(this);

    this.handleChangePrice = this.handleChangePrice.bind(this);

    this.searchClicked = this.searchClicked.bind(this);

  }

  handleChangeLocation (e) {
    this.setState({
      location: e.target.value,
    });
    console.log('handleChangeLocation', this.state.location)
  }

  handleChangeRating (e) {
    this.setState({
      rating: e.target.value,
    });
    console.log('handleChangeRating', this.state.rating)
  }

  handleChangePrice (e) {
  this.setState({
    price: e.target.value,
  });
  console.log('handleChangeRating', this.state.price)
  }


  // renderList () {
  // //   this.setState({
  // //   resturantList: window.data,
  // // })
  // }


  searchClicked (e) {
    //var context = this;
  e.preventDefault()
  this.setState({
    resturantList: window.data.businesses,
  })
  //console.log(this.state.resturantList)
  }

  componentWillMount() {
  this.setState({
    resturantList: [window.data.businesses[0],window.data.businesses[1]]
  })
  }
  //**************************need work*******
  // var context = this;

  // var queryObj = {
  //   location: this.state.location,
  //   rating: this.state.rating,
  //   //price: this.state.price.toString(),
  //   limit: 5,
  //   access_token: window.api.apiToken
  // };

  // console.log(queryObj);


  // window.searchYelp(queryObj, function(data) {
  //   console.log(data)
  //   context.setState({
  //     resturantList: data
  //   });
  // })
  //***************************need work *******





  render () {
    //console.log(this.state.resturantList)
    return (
      <div>
        <Nav search={this.searchClicked} changeLocation={this.handleChangeLocation} changeRating={this.handleChangeRating} changePrice={this.handleChangePrice} />
        <ResturantList list={this.state.resturantList}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));


