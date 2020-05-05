import React from 'react';

const ErrorPage = (props) => {

  return (
    <div>
      {props.status ? <p>{`${props.err.status}: ${props.err.msg}`}</p> : <p>404: Path not found</p>}
    </div>
  );
};

export default ErrorPage;