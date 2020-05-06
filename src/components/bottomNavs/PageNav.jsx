import React from 'react';


const PageNav = (props) => {
  const { articlesPerPage, paginate, totalArticles, currentPage } = props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) pageNumbers.push(i);

  return (
    <nav class="btn-toolbar mb-3 justify-content-end">
      <div class="btn-group mr-2">
        {pageNumbers.map(number => {
          return (
            (currentPage === number) ?
              <button type="button" class="btn border btn-light cursor-pointer" disabled>{number}</button>
              : <button type="button" class="btn border text-primary" onClick={() => paginate(number)}>{number}</button>
          );
        })}
      </div>
    </nav>
  );
};

export default PageNav;