import React from 'react';

const Response = (props) => {
  return (
    <div>
      <div>
        <a href={props.url}>[img]</a>
        <div>
          Response from {props.name}:
          {props.body}
          {props.date}
        </div>
      </div>
    </div>
  );
};

export default Response;