import React from 'react';
import styled from 'styled-components';

const StyledOverview = styled.div`
  border: 2px solid black;
`;

// TODO
const TopOverview = styled.h1`

`;

const HRule = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: px solid rgba(255, 255, 255, 0.3);
`;

// TODO
const StarOverview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Category = styled.div`
  flex: 0 49%;
  line-height: 2em;
  color: rgb(68, 68, 68);
`;

const Stars = styled.div`
  display: inline-block;
  float: right;
`;


const Overview = (props) => {

  const accuracy = props.stats.avg_accuracy;
  const checkin = props.stats.avg_checkin;
  const cleanliness = props.stats.avg_cleanliness;
  const communication = props.stats.avg_communication;
  const location = props.stats.avg_location;
  const value = props.stats.avg_value;
  
  const totalReviews = props.stats.total_reviews;
  const overview = (accuracy + checkin + cleanliness + communication + 
    location + value) / (6);

  return (
    <StyledOverview>
      <TopOverview>
        {totalReviews} Reviews [{overview}] <br/>
      </TopOverview>
      <HRule />
      <StarOverview>
        <Category>Accuracy <Stars>[{accuracy}]</Stars></Category>
        <Category>Location <Stars>[{checkin}]</Stars></Category>
        <Category>Communication <Stars>[{cleanliness}]</Stars></Category>
        <Category>Check-in <Stars>[{communication}]</Stars></Category>
        <Category>Cleanliness <Stars>[{location}]</Stars></Category>
        <Category>Values <Stars>[{value}]</Stars></Category>
      </StarOverview>
    </StyledOverview>
  );
};

export default Overview;