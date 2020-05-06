import React from 'react';


const PageNav = (props) => {
  const { articlesPerPage, paginate, totalArticles, currentPage } = props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) pageNumbers.push(i);

  return (
    <nav className="mr-2">
      <ul className="pagination justify-content-end">
        {pageNumbers.map(number => {
          return (
            (currentPage === number) ?
              <li key={number} className="page-item disabled">
                <a className="page-link" href="#!" tabIndex="-1" onClick={() => paginate(number)}>{number}</a>
              </li>
              : <li key={number} className="page-item" >
                <a className="page-link" href="#!" onClick={() => paginate(number)}>{number}</a>
              </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PageNav;