import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CommentList from '../CommentList'
import VoteUpdater from '../VoteUpdater'
import PostCommentForm from '../forms/PostCommentForm'
import ErrorPage from './ErrorPage'
import Loader from '../Loader'
import * as api from '../../utils/api'


class SingleArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    postCommentIsClicked: false,
    err: ""
  }

  togglePostCommentClick = () => {

    this.setState(currState => {
      return { postCommentIsClicked: !currState.postCommentIsClicked }
    })
  }

  addComment = (article_id, username, body) => {
    api
      .postComment(article_id, username, body)
      .then((comment) => {
        this.setState(currState => {
          const newArticle = { ...currState.article };
          newArticle.comment_count = parseInt(newArticle.comment_count) + 1;
          return { comments: [comment, ...currState.comments], article: newArticle, postCommentIsClicked: false }
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, err: { status: err.response.status, msg: err.response.data.msg } });
      })

  }

  deleteComment = (comment_id) => {
    api
      .deleteComment(comment_id)
      .then(() => {
        this.setState(currState => {
          const newArticle = { ...currState.article };
          newArticle.comment_count = parseInt(newArticle.comment_count) - 1;
          return { comments: currState.comments.filter(comment => comment.comment_id !== comment_id), article: newArticle }
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, err: { status: err.response.status, msg: err.response.data.msg } });
      })
  }

  componentDidMount() {
    const { article_id } = this.props.match.params;
    api
      .getComments(article_id)
      .then(comments => {
        this.setState({ comments: comments, isLoading: false })
      })
      .catch(err => {

        this.setState({ isLoading: false, err: { status: err.response.status, msg: err.response.data.msg } });
      })

    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {

        this.setState({ isLoading: false, err: { status: err.response.status, msg: err.response.data.msg } });
      })
  }

  render() {
    const { username } = this.props;
    const { err } = this.state;

    if (this.state.isLoading) return <Loader />;
    else if (err) return <ErrorPage err={err} />
    else {
      const { article, comments, postCommentIsClicked } = this.state;

      return (<div className="card mt-4">

        <div className="card-body border-bottom">

          <h5 className="card-title">{`${article.title}`}</h5>

          <p className="text-capitalize card-subtitle text-muted small mx-1 mt-0 text-left">in <Link to={`/topic/${article.topic}`}>{`${article.topic}`}</Link>
            <span className="card-subtitle text-muted"> {`᛫ Posted by ${article.author} on ${new Date(article.created_at).toDateString()}`}</span>
          </p>

          <p className="card-text mx-4 my-2">{`${article.body}`}</p>

          <div className="small mb-0 ml-4">
            <span className="votes ml-2"><i className="icon fas fa-comment-alt ml-3"></i> {`${article.comment_count} comments`} </span>
            <span className="ml-2"><VoteUpdater id={article.article_id} dir="articles" votes={article.votes} /></span>
          </div>
          <button type="button" className="btn btn-secondary custom-btn btn-sm small ml-3 mt-1 mb-3" onClick={this.togglePostCommentClick}>Post Comment</button>

          {postCommentIsClicked && <PostCommentForm username={username} article_id={article.article_id} addComment={this.addComment} />}
        </div>

        <CommentList comments={comments} username={username} deleteComment={this.deleteComment} />
      </div>

      );
    }
  }
}

export default SingleArticlePage;