import React, { Component } from 'react';
import SingleArticle from './SingleArticle'
import CommentList from './CommentList'


class ArticlePage extends Component {
  state = {
    article: {}, isLoading: true
  }
  componentDidMount() {

  }


  render() {
    return (
      <div>
        <SingleArticle />
        <CommentList />
      </div>
    );
  }
}

export default ArticlePage;