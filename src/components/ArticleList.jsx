import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'
import SortForm from './SortForm'
import ArticleCard from './ArticleCard'
import ErrorPage from './ErrorPage'


class ArticleList extends Component {
  state = { articles: [], isLoading: true, sort_by: "created_at", order: "desc", err: "" }

  componentDidMount() {
    console.log("in mount")

    if (this.props.match.path === '/') this.fetchArticles({ sort_by: "votes", limit: 5 })
    else if (this.props.match.params.slug) {
      this.fetchArticles({ topic: this.props.match.params.slug })

    }
  }

  componentDidUpdate(prevProps) {

    console.log(prevProps.match.path !== this.props.match.path)

    if (prevProps.match.params.slug !== this.props.match.params.slug) {

      this.fetchArticles({ topic: this.props.match.params.slug });
    }
    if (prevProps.match.path !== this.props.match.path) {
      if (this.props.match.path === "/")
        this.fetchArticles({ sort_by: "votes", limit: 5 });
    }
  }

  fetchArticles = (params) => {
    api
      .getArticles(params)
      .then(articles => {
        this.setState({ sort_by: "created_at", order: "desc", articles: articles, isLoading: false })
      })
      .catch(err => {
        this.setState({ isLoading: false, err: { status: err.response.status, msg: err.response.data.msg } });
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

  getTotalArticles = () => {
    api
      .getArticles({})
      .then(articles => {
        this.setState({ totalPosts: articles.length })
      });
  }

  pagination = (pageNumber) => {
    this.setState({ currentPage: pageNumber })
  }

  render() {

    const { err } = this.state;
    if (this.state.isLoading) return <Loader />;
    else if (err) return <ErrorPage err={err} />;
    else {

      const { articles, sort_by, order } = this.state;
      const { slug } = this.props.match.params;

      return (
        <section id="articles">
          <div className="card mt-4">
            <div className="card-body text-capitalize">
              {slug ?
                <React.Fragment>
                  <h4 className="float-left pl-2 pt-1">{`${slug}`}</h4>
                  <span className="float-right"><SortForm sortArticles={this.sortArticles} topic={slug} sort_by={sort_by} order={order} /></span>
                </React.Fragment>
                : <h4 className="float-left pl-2 pt-1">Top 5 Recently Posted Articles</h4>}
            </div>
          </div>
          <ArticleCard articles={articles} />
        </section>);
    }
  }
}

export default ArticleList;