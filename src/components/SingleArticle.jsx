import React from 'react';
import Votes from './Votes'

const SingleArticle = (props) => {
  const { article } = props;
  return (
    <div>
      <h3>{`${article.title}`}</h3>
      <p>{`${article.body}`}</p>
      <Votes votes={`${article.votes}`} />
      <p>{`${article.author}`}</p>
      <p>{`${article.created_at}`}</p>
    </div>
  );
};

export default SingleArticle;