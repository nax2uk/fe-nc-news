import React, { Component } from 'react';
import SingleArticle from './SingleArticle'
import CommentList from './CommentList'


class ArticlePage extends Component {
  state = {
    articles: [], isLoading: true
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