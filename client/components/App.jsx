import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Overview from './Overview.jsx';
import Reviews from './Reviews.jsx';

const StyledApp = styled.div`
  max-width: 725px;
  font-family: calibre, sans-serif;
  font-weight: lighter;
  letter-spacing: 0.3px;
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
    this.getOverview(this.props.listingId);
    this.getReviews(this.props.listingId);
  }

  getOverview(id) {
    axios.get(`/listings/${id}/overviews`)
      .then((response) => {
        this.setState({stats: response.data.rows[0]});
      })
      .catch((err) => {
        throw err;
      });
  }

  getReviews(id) {
    axios.get(`/listings/${id}/reviews`)
      .then((response) => {
        this.setState({reviews: response.data.rows});
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