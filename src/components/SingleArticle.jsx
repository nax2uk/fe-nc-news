import React from 'react';

const SingleArticle = (props) => {
  const { article } = props;
  return (
    <div className="card-body">
      <h5 className="card-title">{`${article.title}`}</h5>
      <p className="card-text">{`${article.body}`}</p>
      <p className="card-text">{`${article.author}`}</p>
      <p className="card-text">{`${article.created_at}`}</p>
    </div>

  );
};

export default SingleArticle;