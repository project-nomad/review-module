import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stats: {}
    };
  }

  componentDidMount() {
    console.log('component MOUNTED');
    this.getOverview();
    // this.getReviews();
  }

  getOverview() {
    axios.get('/reviews/listingId/2') // TODO manually checks listing 2 atm
      .then((response) => {
        this.setState({stats: response.data[0]});
      })
      .catch((err) => {
        // TODO
      });
  }

  getReviews() {

  }

  render() {
    return (
      <div>
        Hello World!
        <Overview stats={this.state.stats} />
      </div>
    );
  }
}

export default App;