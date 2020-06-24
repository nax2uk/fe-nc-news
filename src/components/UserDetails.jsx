import React from 'react';

const UserDetails = (props) => {
  const { user, setUser } = props;
  return (
    <span className="badge badge-pill bg-light align-text-bottom">
      <img alt={user.username} src={user.avatar_url} className="border border-dark mr-2 mt-1" /> {user.username} <span className="divider ml-2"> | </span>
      <button className="btn btn-light ml-0 my-0 text-primary" onClick={() => setUser({ username: "", avatar_url: "", name: "" })}>Log out </button></span>
  );
};

export default UserDetails;