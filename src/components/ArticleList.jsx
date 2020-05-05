import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'
import SortForm from './SortForm'
import ArticleCard from './ArticleCard'


class ArticleList extends Component {
  state = { articles: [], isLoading: true, sort_by: "created_at", order: "desc" }

  componentDidMount() {
    if (this.props.match.path === '/') this.fetchArticles({ sort_by: "votes" })
    else if (this.props.match.params.slug) {
      this.fetchArticles({ topic: this.props.match.params.slug })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.fetchArticles({ topic: this.props.match.params.slug });
    }
  }

  fetchArticles = (params) => {
    api
      .getArticles(params)
      .then(articles => {

        this.setState({ sort_by: "created_at", order: "desc", articles: articles, isLoading: false })
      })
  }

  sortArticles = (params) => {
    this.setState({ isLoading: true });
    api
      .getSortedArticles(params)
      .then(articles => {
        console.log(params);
        const { sort_by, order } = params;
        if (sort_by !== this.state.sort_by) {
          this.setState({ sort_by: sort_by, order: "desc", articles: articles, isLoading: false })
        }
        else {
          this.setState({ sort_by: sort_by, order: order, articles: articles, isLoading: false })
        }
      });
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    else {

      const { articles, sort_by, order } = this.state;
      const { slug } = this.props.match.params;
      return (
        <section id="articles">
          {slug &&
            <div className="card mt-4">
              <div className="card-body text-capitalize">
                <h4 className="float-left pl-2 pt-1">{`${slug}`}</h4>
                <span className="float-right"><SortForm sortArticles={this.sortArticles} topic={slug} sort_by={sort_by} order={order} /></span>
              </div>
            </div>}
          <ArticleCard articles={articles} />
        </section>);
    }
  }
}

export default ArticleList;