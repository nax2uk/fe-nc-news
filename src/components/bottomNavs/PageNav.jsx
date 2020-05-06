import React from 'react';


const PageNav = (props) => {
  const { articlesPerPage, paginate, totalArticles, currentPage } = props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) pageNumbers.push(i);

  return (
    <nav className="btn-toolbar mb-3 justify-content-end">
      <div className="btn-group mr-2">
        {pageNumbers.map(number => {
          return (
            (currentPage === number) ?
              <button key={number} type="button" className="btn border btn-light cursor-pointer" disabled>{number}</button>
              : <button key={number} type="button" className="btn border text-primary" onClick={() => paginate(number)}>{number}</button>
          );
        })}
      </div>
    </nav>
  );
};

export default PageNav;