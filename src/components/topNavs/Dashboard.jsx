import React from 'react';
import LoginModal from '../modal/LoginModal';
import UserDetails from '../UserDetails';

import '../css/Dashboard.css';

const Dashboard = (props) => {

  return (
    <div id="dashboard" className="nav-scroller bg-white shadow-sm">
      <nav className="nav nav-underline justify-content-end">
        <h5 className="text-info mr-4 ml-auto mt-1">{props.user.username ?
          <UserDetails {...props} />
          :
          <LoginModal setUser={props.setUser} />}
        </h5>
      </nav>
    </div>
  );

};

export default Dashboard;
