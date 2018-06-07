import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stats: {},
      reviews: []
    };
  }

  componentDidMount() {
    console.log('component MOUNTED');
    this.getOverview();
    this.getReviews();
  }

  getOverview() {
    axios.get('/reviews/listingId/2') // TODO manually checks listing 2 atm
      .then((response) => {
        this.setState({stats: response.data[0]});
      })
      .catch((err) => {
        throw err;
      });
  }

  getReviews() {
    axios.get('/reviews/listingId/2/reviews') // TODO manually checks listing 2 atm
      .then((response) => {
        this.setState({reviews: response.data});
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <Overview stats={this.state.stats} />
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;