import React from 'react';

const Dashboard = (props) => {

  const { username, avatar_url } = props;

  return (
    <div className="nav-scroller bg-white shadow-sm">
      <nav className="nav nav-underline justify-content-end">
        <a href="/" className="nav-link nav-item text-info mr-4 ml-auto disabled">{username ?
          <span className="badge badge-pill bg-light align-text-bottom">
            <img alt={username} src={avatar_url} className="border border-dark mr-2" /> {username}</span> : <span>User not logged in</span>}</a>
      </nav>
    </div>
  );

}

export default Dashboard;