import React from 'react';

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
    <div>
      {totalReviews} Reviews [{overview}] <br/>
      Accuracy [{accuracy}] <br/>
      Location [{checkin}] <br/>
      Communication [{cleanliness}] <br/>
      Check-in [{communication}] <br/>
      Cleanliness [{location}] <br/>
      Values [{value}] <br/>
    </div>
  );
};

export default Overview;