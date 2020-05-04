import React from 'react';

const CommentList = (props) => {
  const { comments } = props;

  return (
    <div>
      {comments.map(comment => {
        return (
          <div key={`${comment.comment_id}`}>
            <h3>{`${comment.author}`}</h3>
            <p>{`${comment.created_at}`}</p>
            <p>{`${comment.body}`}</p>
          </div>);
      })}
    </div>
  );
}

export default CommentList;