import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader'
import SortForm from './forms/SortForm'
import ArticleCardList from './ArticleCardList'
import ErrorPage from './ErrorPage'
import PageNav from './bottomNavs/PageNav'

class ArticlesPage extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc", err: "",
    articles_count: 0,
    currentPage: 1,
    limit: 5,
    totalArticles: 0
  }

  componentDidMount() {

    if (this.props.match.path === '/') {
      this.setState({ sort_by: "votes", order: "desc", limit: 5, p: 1 }, () => {
        this.fetchArticles();
      })

    }
    else if (this.props.match.params.slug) {
      this.setState({ sort_by: "created_at", order: "desc", limit: 4, p: 1 }, () => {
        this.fetchArticles();
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {

    const changedToHomePage = (this.props.match.path === '/')
    const urlHasChanged = (prevProps.match.url !== this.props.match.url);

    if (urlHasChanged) {
      if (changedToHomePage) {
        this.setState({ sort_by: "created_at", order: "desc", currentPage: 1, limit: 5 }, () => {
          this.fetchArticles();
        });
      }
      else if (this.props.match.params.slug) {
        // reset sort form and currentPage
        this.setState({ sort_by: "created_at", order: "desc", currentPage: 1, limit: 4 }, () => {
          this.fetchArticles();
        });
      }
    }
    else if (prevState.currentPage !== this.state.currentPage) {
      this.fetchArticles();
    }
  }




  fetchArticles = () => {
    const { sort_by, order, limit, currentPage } = this.state;
    const topic = this.props.match.params.slug;
    api
      .getArticles({ topic: topic, sort_by: sort_by, order: order, limit: limit, p: currentPage })
      .then(({ articles, articles_count }) => {
        this.setState({
          articles: articles,
          isLoading: false,
          totalArticles: articles_count,
        })
      })
      .catch(err => {
        this.setState({ isLoading: false, err: { status: err.response.status, msg: err.response.data.msg } });
      })
  }

  sortArticles = ({ sort_by, order }) => {

    this.setState({ sort_by: sort_by, order: order, isLoading: true }, () => {
      this.fetchArticles()
    })
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  render() {

    const { err } = this.state;
    if (this.state.isLoading) return <Loader />;
    else if (err) return <ErrorPage err={err} />;
    else {

      const { articles, sort_by, order, totalArticles, limit, currentPage } = this.state;
      const { slug } = this.props.match.params;

      return (
        <section id="articles">
          <div className="card mt-4">
            <div className="card-body text-capitalize">
              {slug ?
                <React.Fragment>
                  <h4 className="float-left pl-2 pt-1">{`${slug}`}</h4>
                  <SortForm sortArticles={this.sortArticles} sort_by={sort_by} order={order} />
                </React.Fragment>
                : <h4 className="float-left pl-2 pt-1">Top 5 Recently Posted Articles</h4>}
            </div>
          </div>
          <ArticleCardList articles={articles} />
          {(this.props.match.path !== '/') && <PageNav totalArticles={totalArticles} articlesPerPage={limit} currentPage={currentPage} paginate={this.paginate} />}
        </section>);
    }
  }
}

export default ArticlesPage;