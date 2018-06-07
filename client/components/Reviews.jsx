import React from 'react';
import styled from 'styled-components';
import Response from './Response.jsx';

const StyledReview = styled.div`
  margin-top: 20px;
  border: 2px solid blue;
`;

const HRule = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: px solid rgba(255, 255, 255, 0.3);
`;

const Reviews = (props) => {

  return (
    props.reviews.map((review, i) => {

      var response;

      if (review.response_date) {
        response = <Response body={review.response_body} url={review.host_pic_url}
          name={review.host_username} date={review.response_date}/>;
      }

      return (
        <StyledReview key={i}>
          <div>

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
          <HRule />
        </StyledReview>
      );
    })
  );
};

export default Reviews;