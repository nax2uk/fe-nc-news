import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CommentList from './CommentList'
import VoteUpdater from './VoteUpdater'
import PostCommentForm from './PostCommentForm'
import Loader from './Loader'
import * as api from '../utils/api'


class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    postCommentIsClicked: false
  }

  togglePostCommentClick = () => {
    console.log('clicked')
    this.setState(currState => {
      return { postCommentIsClicked: !currState.postCommentIsClicked }
    })
  }

  addComment = (article_id, username, body) => {
    api
      .postComment(article_id, username, body)
      .then((comment) => {
        this.setState(currState => {
          return { comments: [comment, ...currState.comments], postCommentIsClicked: false }
        })
      })

  }

  deleteComment = (comment_id) => {
    api
      .deleteComment(comment_id)
      .then(() => {
        this.setState(currState => {
          return { comments: currState.comments.filter(comment => comment.comment_id !== comment_id) }
        })
      })
  }

  componentDidMount() {
    const { article_id } = this.props.match.params;
    api
      .getComments(article_id)
      .then(comments => {
        this.setState({ comments: comments, isLoading: false })
      })
    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article });
      })
  }


  render() {
    const { username } = this.props;
    if (this.state.isLoading) return <Loader />;
    else {
      const { article, comments, postCommentIsClicked } = this.state;

      return (<div className="card mt-4">

        <div className="card-body">
          <h5 className="card-title">{`${article.title}`}</h5>

          <p className="text-capitalize card-subtitle text-muted small">in <Link to={`/topic/${article.topic}`}>{`${article.topic}`}</Link>
            <span className="card-subtitle text-muted"> {`᛫ Posted by ${article.author} on ${article.created_at}`}</span>
          </p>

          <p className="card-text mx-2 my-2">{`${article.body}`}</p>

          <div className="small">
            <VoteUpdater article={article} />
            <span className="votes"><i className="icon fas fa-comment-alt ml-3"></i> {`${article.comment_count} comments`} </span>

          </div>

          <button type="button" className="btn btn-secondary btn-sm small ml-2 my-2" onClick={this.togglePostCommentClick}>Post Comment</button>
          {postCommentIsClicked && <PostCommentForm username={username} article_id={article.article_id} addComment={this.addComment} />}
        </div>

        <CommentList comments={comments} username={username} deleteComment={this.deleteComment} />
      </div>

      );
    }
  }
}

export default ArticlePage;