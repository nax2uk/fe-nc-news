import React, { Component } from 'react';
import axios from 'axios'
import Loader from './Loader'
import ArticleList from './ArticleList'

class HomePage extends Component {

  state = {
    articles: [], isLoading: true
  }

  componentDidMount() {
    axios
      .get('https://nc--news-server.herokuapp.com/api/articles', {
        params: {
          sort_by: "votes"
        }
      })
      .then(({ data: { articles } }) => {
        this.setState({ articles: articles, isLoading: false })
      })
  }

  render() {
    const { articles } = this.state;
    if (this.state.isLoading) return <Loader />
    return (
      <div className="homepage">
        <ArticleList articles={articles} />
      </div>);
  }
}

export default HomePage;