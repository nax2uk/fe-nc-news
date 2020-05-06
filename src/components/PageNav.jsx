import React from 'react';


const PageNav = (props) => {
  const { articlesPerPage, paginate, totalArticles } = props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) pageNumbers.push(i);

  return (
    <nav className="mr-2">
      <ul className="pagination justify-content-end">
        {pageNumbers.map(number => {
          return (
            <li key={number} className="page-item">
              <a className="page-link" href="#!" onClick={() => paginate(number)}>{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNav;