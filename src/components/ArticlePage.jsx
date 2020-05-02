import React, { Component } from 'react';
import SingleArticle from './SingleArticle'
import CommentList from './CommentList'
import Loader from './Loader'
import * as api from '../utils/api'


class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
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
    if (this.state.isLoading) return <Loader />;
    else {
      const { article, comments } = this.state;
      return (
        <div>
          <SingleArticle article={article} />
          <CommentList comments={comments} />
        </div>
      );
    }
  }
}

export default ArticlePage;