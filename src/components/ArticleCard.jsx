import React from 'react';
import { Link } from 'react-router-dom'
import VoteUpdater from './VoteUpdater'

const ArticleCard = (props) => {
  const { articles } = props;
  console.log(`/topics/${articles[0].topic}`)
  return (
    <div className="card">
      <ul className=" list-group list-group-flush">
        {articles.map(article => {
          return (
            <li className="list-group-item" key={`${article.article_id}`}>
              <Link to={`/articles/${article.article_id}`} >
                <h5 className="card-title">{`${article.title}`}</h5> </Link>
              <p className="text-capitalize card-subtitle text-muted small">in <Link to={`/topic/${article.topic}`}>{`${article.topic}`}</Link>
                <span className="card-subtitle text-muted"> {`᛫ Posted by ${article.author} on ${article.created_at}`}</span>
              </p>
              <div className="small">
                <VoteUpdater article={article} />
                <button type="button" className="btn btn-light">
                  <i className="icon fas fa-comment-alt"></i><a href="/" className="small"> {`${article.comment_count} comments`} </a>
                </button>
              </div>
            </li>);
        })}
      </ul>
    </div>
  );
};

export default ArticleCard;