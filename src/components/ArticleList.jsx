import React, { Component } from 'react';
import axios from 'axios'


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

  fetchArticles = ({ sort_by, topic }) => {
    axios
      .get('https://nc--news-server.herokuapp.com/api/articles', {
        params: {
          sort_by: sort_by,
          topic: topic
        }
      })
      .then(({ data: { articles } }) => {
        this.setState({ articles: articles, isLoading: false })
      })
  }

  render() {
    const { articles } = this.state;
    return (
      <ul>
        {articles.map(article => {
          return (
            <li key={`${article.article_id}`}>
              <h2>{`${article.title}`}</h2>
              <p>{`${article.author}`}</p>
            </li>);
        })}
      </ul>);
  }
}

export default ArticleList;