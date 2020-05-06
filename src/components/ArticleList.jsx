import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'
import SortForm from './SortForm'
import ArticleCard from './ArticleCard'
import ErrorPage from './ErrorPage'
import PageNav from './PageNav'

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc", err: "",
    articles_count: 0,
    currentPage: 1,
    articlesPerPage: 5,
    totalArticles: 0
  }

  componentDidMount() {

    if (this.props.match.path === '/') this.fetchArticles({ sort_by: "votes", limit: 5 })
    else if (this.props.match.params.slug) {
      const { currentPage, articlesPerPage } = this.state;
      this.fetchArticles({ topic: this.props.match.params.slug, limit: articlesPerPage, p: currentPage })

    }
  }

  componentDidUpdate(prevProps, prevState) {

    const { articlesPerPage, currentPage } = this.state;
    if (prevProps.match.params.slug !== this.props.match.params.slug) {

      this.fetchArticles({ topic: this.props.match.params.slug, limit: articlesPerPage, p: 1 });
    }

    if (prevProps.match.path !== this.props.match.path) {
      if (this.props.match.path === "/") {
        this.fetchArticles({ sort_by: "votes", limit: 5, p: 1 });
      }
    }
    else if (prevState.currentPage !== this.state.currentPage) {
      this.fetchArticles({ topic: this.props.match.params.slug, limit: articlesPerPage, p: currentPage })
    }


  }

  fetchArticles = (params) => {
    api
      .getArticles(params)
      .then(({ articles, articles_count }) => {
        this.setState({
          sort_by: "created_at",
          order: "desc",
          articles: articles,
          isLoading: false,
          totalArticles: articles_count
        })
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

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber })
  }

  render() {

    const { err } = this.state;
    if (this.state.isLoading) return <Loader />;
    else if (err) return <ErrorPage err={err} />;
    else {

      const { articles, sort_by, order, totalArticles, articlesPerPage } = this.state;
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
          {(this.props.match.path !== '/') && <PageNav totalArticles={totalArticles} articlesPerPage={articlesPerPage} paginate={this.paginate} />}
        </section>);
    }
  }
}

export default ArticleList;