import React from 'react';
import { Link } from 'react-router-dom'
import './css/ErrorPage.css'

const ErrorPage = (props) => {
  let status = 404;
  let msg = "Path not found"
  if (props.err) {
    status = props.err.status;
    msg = props.err.msg;
  }

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h2>
              Oops!</h2>
            <h3>
              {status}</h3>
            <div className="error-details">
              {msg}
            </div>
            <div className="error-actions">
              <Link to="/" className="btn btn-secondary btn-lg"><span className="glyphicon glyphicon-home"></span>Take Me Home </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;