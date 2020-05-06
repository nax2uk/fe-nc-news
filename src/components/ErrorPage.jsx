import React from 'react';
import './css/ErrorPage.css'

const ErrorPage = (props) => {
  let status = 404;
  let msg = "Path not found"
  if (props.err) {
    status = props.err.status;
    msg = props.err.msg;
  }

  return (

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>
              Oops!</h1>
            <h2>
              {status}</h2>
            <div class="error-details">
              {msg}
            </div>
            <div class="error-actions">
              <a href="/" class="btn btn-secondary btn-lg"><span class="glyphicon glyphicon-home"></span>Take Me Home </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;