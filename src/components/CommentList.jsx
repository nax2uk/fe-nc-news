import React from 'react';

const CommentList = (props) => {
  const { comments } = props;

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> </li>
      {comments.map(comment => {
        return (
          <li key={`${comment.comment_id}`} className="list-group-item">
            <h6>{`${comment.author}`}</h6>
            <p>{`${comment.created_at}`}</p>
            <p>{`${comment.body}`}</p>
          </li>);
      })}
    </ul>
  );
}

export default CommentList;