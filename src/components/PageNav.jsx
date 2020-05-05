import React from 'react';


const PageNav = (props) => {
  const { postsPerPage, paginate, totalPosts } = props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) pageNumbers.push(i);

  return (
    <nav className="mr-2">
      <ul className="pagination justify-content-end">
        {pageNumbers.map(number => {
          return (
            <li key={number} className="page-item">
              <a className="page-link" href={`/articles/p/${number}`} onClick={() => paginate(number)}>{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNav;