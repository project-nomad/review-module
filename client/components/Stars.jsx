import React from 'react';
import styled from 'styled-components';

const StarListContainerOverview = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 5px;
  font-size: 1.2em;
`;

const StarListContainerCategory = styled.div`
  display: flex;
  margin-top: 2px;
  font-size: 1em;
`;

const StarListContainerReview = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 0.9em;
`;

const StyledFilledStar = styled.div`
  height: 1em;
  width: 1em;
  display: block;
  margin-right: 5px;
  fill: rgb(17, 132, 136); // green
`;

const StyledNoFilledStar = styled.div`
  height: 1em;
  width: 1em;
  display: block;
  margin-right: 5px;
  fill: rgb(216, 216, 216); // gray
`;

const Stars = (props) => {

  var starSVG = <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 
      39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 
      12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 
      8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 
      41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
    </path>
  </svg>;

  var starList = [];

  for (var i = 0; i < 5; i++) {
    (i < props.rating)
      ? starList.push(<StyledFilledStar key={i}>{starSVG}</StyledFilledStar>)
      : starList.push(<StyledNoFilledStar key={i}>{starSVG}</StyledNoFilledStar>);
  }

  if (props.type === 'overview') {
    return (<StarListContainerOverview>{starList}</StarListContainerOverview>);
  } else if (props.type === 'category') {
    return (<StarListContainerCategory>{starList}</StarListContainerCategory>);
  } else {
    return (<StarListContainerReview>{starList}</StarListContainerReview>);
  }

};

export default Stars;


