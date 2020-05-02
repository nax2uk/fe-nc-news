import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as api from '../utils/api'
import Loader from './Loader'
import SortForm from './SortForm'
import './ArticleList.css'


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
      console.log(sort_by);
      console.log(order);
      return (
        <section id="articles">
          {this.props.match.params.slug && <SortForm sortArticles={this.sortArticles} topic={this.props.match.params.slug} sort_by={sort_by} order={order} />}
          <div className="card">
            <ul className=" list-group list-group-flush">
              {articles.map(article => {
                return (
                  <li className="list-group-item" key={`${article.article_id}`}>
                    <Link to={`/articles/${article.article_id}`} >
                      <h5>{`${article.title}`}</h5> </Link>
                    <p className="text-capitalize small">in <Link to={`/topics/${article.topic}`}>{`${article.topic}`}</Link>
                      <span className="text-muted"> {`᛫ Posted by ${article.author} on ${article.created_at}`}</span>
                    </p>
                    <div className="small">
                      <button type="button" className="btn btn-light">
                        <i className="icon fas fa-comment-alt"></i><a href="/" className="small"> {`${article.comment_count} comments`} </a>
                      </button>
                      <button type="button" className="btn btn-light">
                        <i className="icon fas fa-vote-yea"></i> <a href="/" className="small">{`${article.votes} votes`}
                        </a></button>
                    </div>

                  </li>);
              })}
            </ul>
          </div>
        </section>);
    }
  }
}

export default ArticleList;