import React from 'react';
import styled from 'styled-components';

const StyledResponse = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  display: flex;
`;

const ResponseName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ResponseBody = styled.div`
  line-height: 1.25em;
  margin-bottom: 10px;
`;

const ResponseDate = styled.div`
  color: rgb(130, 130, 130);
  font-weight: lighter;
  font-size: smaller;
`;

const ProfilePic = styled.img`
  margin-right: 15px;
  border-radius: 30px;
  height: 40px;
  width: 40px;
`;

const Response = (props) => {
  return (
    <StyledResponse>
      {/* <a href={props.url}>[img]</a> */}
      <ProfilePic src={props.url}></ProfilePic>
      <div>
        <ResponseName>Response from {props.name}:</ResponseName>
        <ResponseBody>{props.body}</ResponseBody>
        <ResponseDate>{props.date}</ResponseDate>
      </div>
    </StyledResponse>
  );
};

export default Response;