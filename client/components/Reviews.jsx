import React from 'react';
import Stars from './Stars.jsx';
import Response from './Response.jsx';
import styled from 'styled-components';

const StyledReview = styled.div`
  margin-top: 20px;
`;

const ReviewHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Username = styled.div`
  font-weight: bold;
`;

const ReviewDate = styled.div`
  margin-top: 3px;
  color: rgb(130, 130, 130);
  font-weight: lighter;
  font-size: smaller;
`;

const StarDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
`;

const ReviewBody = styled.div`
  line-height: 1.45em;
`;

const HRule = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: px solid rgba(255, 255, 255, 0.3);
`;

const ProfilePic = styled.img`
  margin-right: 15px;
  border-radius: 30px;
  height: 40px;
  width: 40px;
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

            <ReviewHeader>
              <ProfilePic src={review.user_pic_url}></ProfilePic>
              <div>
                <Username>{review.username}</Username>
                <ReviewDate>{review.review_date}</ReviewDate>
              </div>
            </ReviewHeader>

            <StarDiv>
              <Stars rating={Math.ceil(review.avg_rating)}/>
            </StarDiv>

            <div>
              <ReviewBody>{review.review_body}</ReviewBody>
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