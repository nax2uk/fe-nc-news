import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../utils/api'
import Loader from './Loader'


class ArticleList extends Component {
  state = { articles: [] }

  componentDidMount() {
    console.log(this.props)
    if (this.props.path === '/') this.fetchArticles({ sort_by: "votes" })
    else if (this.props.slug) {
      this.fetchArticles({ topic: this.props.slug })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      this.fetchArticles({ topic: this.props.slug });
    }
  }

  fetchArticles = (params) => {
    api
      .getArticles(params)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false })
      })
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    else {
      const { articles } = this.state;
      return (
        <ul>
          {articles.map(article => {
            return (
              <Link key={`${article.article_id}`} to={`/articles/${article.article_id}`}>
                <h2>{`${article.title}`}</h2>
                <p>{`${article.author}`}</p>
                <p>{`${article.topic}`}</p>
              </Link>);
          })}
        </ul>);
    }
  }
}

export default ArticleList;