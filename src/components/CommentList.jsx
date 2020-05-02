import React from 'react';
import Votes from './Votes'

const CommentList = (props) => {
  const { comments } = props;

  return (
    <div>
      {comments.map(comment => {
        return (
          <div>
            <h3>{`${comment.author}`}</h3>
            <p>{`${comment.created_at}`}</p>
            <p>{`${comment.body}`}</p>
            <Votes votes={`${comment.votes}`} />
          </div>);
      })}
    </div>
  );
}

export default CommentList;