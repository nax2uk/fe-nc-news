import React, { Component } from 'react';
import ErrorPage from './pages/ErrorPage'
import Loader from './Loader'
import './css/UserList.css'
import * as api from '../utils/api';

class UsersList extends Component {
  state = {
    arrUsers: null,
    err: "",
    isLoading: true
  }

  fetchUsers = () => {
    api.getAllUsers()
      .then(result => {
        this.setState({ arrUsers: result, isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, err: { status: err.response.status, msg: err.response.data.msg } });
      })
  }
  componentDidMount() {

    this.fetchUsers();

  }
  handleLogin = (idx) => {
    const { setUser } = this.props;
    const { arrUsers } = this.state
    setUser(arrUsers[idx]);
  }

  render() {
    const { err, arrUsers } = this.state;
    if (this.state.isLoading) return <Loader />;
    else if (err) return <ErrorPage err={err} />
    else
      return (
        <section id="users">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {arrUsers.map((user, idx) => {
                return (
                  <div className="col mb-4" key={idx}>
                    <div className="card bg-light text-center">
                      <div className="card-header py-2">
                        <h5>{user.name}</h5>
                      </div>
                      <div className="card-body">
                        <img src={user.avatar_url}
                          className="card-img-top rounded mx-auto d-block" alt="..." />
                        <button className="btn btn-light mt-3 mb-0" data-dismiss="modal" onClick={() => this.handleLogin(idx)}>Login</button>
                      </div>
                      <div className="card-footer text-muted py-2">{user.username}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      );
  }
}

export default UsersList;