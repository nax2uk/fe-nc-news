import React from 'react';

const SingleArticle = (props) => {
  const { article } = props;
  return (
    <div>
      <h3>{`${article.title}`}</h3>
      <p>{`${article.body}`}</p>
      <p>{`${article.author}`}</p>
      <p>{`${article.created_at}`}</p>
    </div>
  );
};

export default SingleArticle;