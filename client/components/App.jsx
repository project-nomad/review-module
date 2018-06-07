import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Overview from './Overview.jsx';
import Reviews from './Reviews.jsx';

const StyledApp = styled.div`
  max-width: 725px;
  font-family: calibre, sans-serif;
  color: rgb(78, 78, 78);
`;

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
      <StyledApp>
        <Overview stats={this.state.stats} />
        <Reviews reviews={this.state.reviews} />
      </StyledApp>
    );
  }
}

export default App;