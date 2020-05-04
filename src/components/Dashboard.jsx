import React from 'react';
import './Dashboard.css'

const Dashboard = (props) => {

  const { username, avatar_url } = props;
  console.log(avatar_url)
  return (
    <div className="nav-scroller bg-white shadow-sm">
      <nav className="nav nav-underline justify-content-end">
        <a className="nav-link nav-item ml-3" href="/"><i className="far fa-newspaper"></i> Articles
        <span className="badge badge-pill bg-light align-text-bottom">27</span>
        </a>
        <a href="/" className="nav-link nav-item" ><i className="far fa-comments"></i> Comments
        <span className="badge badge-pill bg-light align-text-bottom">27</span>
        </a>
        <a className="nav-link nav-item" href="/"><i className="far fa-edit"></i> Create Article</a>

        <a href="/" className="nav-link nav-item mr-3 ml-auto"><span className="badge badge-pill bg-light align-text-bottom"><img alt={username} src={avatar_url} className="border border-dark mr-1" /> {username}</span></a>
      </nav>
    </div>
  );

}

export default Dashboard;