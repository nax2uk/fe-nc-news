import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import VoteUpdater from './VoteUpdater'
import PostCommentForm from './PostCommentForm'
import CommentList from './CommentList'


class SingleArticle extends Component {
  state = { postCommentIsClicked: false }

  togglePostCommentClick = () => {
    console.log('clicked')
    this.setState(currState => {
      return { postCommentIsClicked: !currState.postCommentIsClicked }
    })
  }

  addComment = (article_id, username, body) => {

    this.componentDidMount(){

    }

  }

  render() {
    const { article, username } = this.props;
    const { postCommentIsClicked } = this.state
    return (
      <div className="card-body">
        <h5 className="card-title">{`${article.title}`}</h5>
        <p className="text-capitalize card-subtitle text-muted small">in <Link to={`/topic/${article.topic}`}>{`${article.topic}`}</Link>
          <span className="card-subtitle text-muted"> {`᛫ Posted by ${article.author} on ${article.created_at}`}</span>
        </p>

        <div className="small">
          <VoteUpdater article={article} />
          <span className="votes"><i className="icon fas fa-comment-alt ml-3"></i> {`${article.comment_count} comments`} </span>

        </div>

        <button type="button" className="btn btn-secondary btn-sm small ml-2 my-2" onClick={this.togglePostCommentClick}>Post Comment</button>
        {postCommentIsClicked && <PostCommentForm username={username} article_id={article.article_id} addComment={this.addComment} />}
      </div>
    );
  }
};

export default SingleArticle;