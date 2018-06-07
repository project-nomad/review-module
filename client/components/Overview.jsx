import React from 'react';
import Stars from './Stars.jsx';
import styled from 'styled-components';

const HRule = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: px solid rgba(255, 255, 255, 0.3);
  margin-top: -5px;
`;

const OverviewTopLine = styled.div`
  display: flex;
`;

const StarOverview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Category = styled.div`
  flex: 0 49%;
  line-height: 2em;
  font-size: large;
  font-weight: lighter;
  color: rgb(68, 68, 68);
`;

const StarsPLACEHOLDER = styled.div`
  display: inline-block;
  float: right;
`;


const Overview = (props) => {

  const accuracy = Math.ceil(props.stats.avg_accuracy);
  const checkin = Math.ceil(props.stats.avg_checkin);
  const cleanliness = Math.ceil(props.stats.avg_cleanliness);
  const communication = Math.ceil(props.stats.avg_communication);
  const location = Math.ceil(props.stats.avg_location);
  const value = Math.ceil(props.stats.avg_value);
  
  const totalReviews = props.stats.total_reviews;
  const overview = Math.ceil((accuracy + checkin + cleanliness + communication + 
    location + value) / (6));

  return (
    <div>
      <OverviewTopLine>
        <h2>{totalReviews} Reviews</h2>
        <Stars rating={overview}></Stars>
      </OverviewTopLine>
      <HRule />
      <StarOverview>
        <Category>Accuracy <StarsPLACEHOLDER>[{accuracy}]</StarsPLACEHOLDER></Category>
        <Category>Location <StarsPLACEHOLDER>[{checkin}]</StarsPLACEHOLDER></Category>
        <Category>Communication <StarsPLACEHOLDER>[{cleanliness}]</StarsPLACEHOLDER></Category>
        <Category>Check-in <StarsPLACEHOLDER>[{communication}]</StarsPLACEHOLDER></Category>
        <Category>Cleanliness <StarsPLACEHOLDER>[{location}]</StarsPLACEHOLDER></Category>
        <Category>Value <StarsPLACEHOLDER>[{value}]</StarsPLACEHOLDER></Category>
      </StarOverview>
    </div>
  );
};

export default Overview;