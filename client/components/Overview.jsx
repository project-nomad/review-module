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

const StarsBoxer = styled.div`
  display: inline-block;
  float: right;
  font-size: 1em;
`;

const Overview = (props) => {

  const accuracy = Math.ceil(props.stats.avg_accuracy);
  const checkin = Math.ceil(props.stats.avg_checkin);
  const cleanliness = Math.ceil(props.stats.avg_cleanliness);
  const communication = Math.ceil(props.stats.avg_communication);
  const location = Math.ceil(props.stats.avg_location);
  const value = Math.ceil(props.stats.avg_value);
  
  const totalReviews = props.stats.total_reviews;
  const overview = Math.floor((accuracy + checkin + cleanliness + communication + 
    location + value) / (6));

  return (
    <div>
      <OverviewTopLine>
        <h2>{totalReviews} Reviews</h2>
        <Stars rating={overview} type="overview" />
      </OverviewTopLine>
      <HRule />
      <StarOverview>

        <Category>Accuracy
          <StarsBoxer>
            <Stars rating={accuracy} type="category" />
          </StarsBoxer>
        </Category>

        <Category>Location
          <StarsBoxer>
            <Stars rating={checkin} type="category" />
          </StarsBoxer>
        </Category>

        <Category>Communication
          <StarsBoxer>
            <Stars rating={cleanliness} type="category" />
          </StarsBoxer>
        </Category>

        <Category>Check-in
          <StarsBoxer>
            <Stars rating={communication} type="category" />
          </StarsBoxer>
        </Category>

        <Category>Cleanliness
          <StarsBoxer>
            <Stars rating={location} type="category" />
          </StarsBoxer>
        </Category>

        <Category>Value
          <StarsBoxer>
            <Stars rating={value} type="category" />
          </StarsBoxer>
        </Category>

      </StarOverview>
    </div>
  );
};

export default Overview;