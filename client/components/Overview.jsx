import React from 'react';
import styled from 'styled-components';

const HRule = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: px solid rgba(255, 255, 255, 0.3);
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

const Stars = styled.div`
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
      <h1>
        {totalReviews} Reviews [{overview}] <br/>
      </h1>
      <HRule />
      <StarOverview>
        <Category>Accuracy <Stars>[{accuracy}]</Stars></Category>
        <Category>Location <Stars>[{checkin}]</Stars></Category>
        <Category>Communication <Stars>[{cleanliness}]</Stars></Category>
        <Category>Check-in <Stars>[{communication}]</Stars></Category>
        <Category>Cleanliness <Stars>[{location}]</Stars></Category>
        <Category>Value <Stars>[{value}]</Stars></Category>
      </StarOverview>
    </div>
  );
};

export default Overview;