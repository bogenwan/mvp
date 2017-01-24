import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from './nav.jsx';
import {ResturantList} from './resturantList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resturantList: []
    }
  }
  render () {

    return (
      <div>
      <Nav />
      <p> in App {this.state.resturantList}</p>
      <ResturantList />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));