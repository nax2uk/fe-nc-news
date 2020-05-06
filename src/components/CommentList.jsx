import React from 'react';
import VoteUpdater from './VoteUpdater';

const CommentList = (props) => {
  const { comments, username } = props;

  const removeComment = (comment_id) => {

    const { deleteComment } = props;
    deleteComment(comment_id);
  }

  return (
    <ul className="list-group list-group-flush">

      {comments.map(comment => {
        return (
          <li key={`${comment.comment_id}`} className="list-group-item">
            <div className="clearfix">
              <p className="lead small float-left"><i className="icon fas fa-comment-dots"></i> {`${comment.author}`}<span className="text-muted"> ᛫ {`${new Date(comment.created_at).toDateString()}`} </span></p>    {(username === comment.author) && <button className="btn btn-outline-secondary btn-sm small px-1 py-0 float-right" onClick={() => removeComment(comment.comment_id)}>Delete</button>}
            </div>
            <p className="text-left mx-5">{`${comment.body}`}</p>
            <span className="ml-5"><VoteUpdater id={comment.comment_id} dir="comments" votes={comment.votes} /></span>

          </li>);
      })}
    </ul>
  );
}

export default CommentList;