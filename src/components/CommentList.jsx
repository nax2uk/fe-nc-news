import React from 'react';

const CommentList = (props) => {
  const { comments, username } = props;

  const removeComment = (comment_id) => {

    const { deleteComment } = props;
    deleteComment(comment_id);
  }

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> </li>
      {comments.map(comment => {
        return (
          <li key={`${comment.comment_id}`} className="list-group-item">
            <h6>{`${comment.author}`}</h6>
            <p>{`${comment.created_at}`}</p>
            <p className="ml-2">{`${comment.body}`}</p>
            {(username === comment.author) && <button className="btn btn-outline-secondary btn-sm small mr-auto mt-2" onClick={() => removeComment(comment.comment_id)}>Delete</button>}
          </li>);
      })}
    </ul>
  );
}

export default CommentList;