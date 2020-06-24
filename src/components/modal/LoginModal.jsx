import React from 'react';
import UsersList from '../UsersList';

const LoginModal = (props) => {

  return (
    <span className="badge badge-pill bg-light align-text-middle">
      <button type="button" className="btn btn-light ml-0 my-0 text-primary" data-toggle="modal" data-target="#staticBackdrop">Login
      </button>

      {/*Modal */}
      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-dark" id="staticBackdropLabel">Choose a user to sign in:</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <UsersList setUser={props.setUser} />
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default LoginModal;