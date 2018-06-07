import React from 'react';
import Response from './Response.jsx';

const Reviews = (props) => {

  return (
    props.reviews.map((review, i) => {

      var response;

      if (review.response_date) {
        response = <Response body={review.response_body} url={review.host_pic_url}
          name={review.host_username} date={review.response_date}/>;
      }

      return (
        <div key={i}>

          <div>
            <a href={review.user_pic_url}>[img]</a>
            <div>
              {review.review_username}
              {review.review_date}
            </div>
          </div>

          <div>
            [ STARS: {review.avg_rating} ]
          </div>

          <div>
            {review.review_body}
            {response}
          </div>
        </div>
      );
    })
  );
};

export default Reviews;