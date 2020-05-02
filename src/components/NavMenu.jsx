import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../utils/api'


class NavMenu extends Component {

  state = { topics: [] }

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics });
    })
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
        <Link to='/' className="navbar-brand">Northcoders</Link>
        <ul className=" navbar-nav ml-auto">
          {topics.map(topic => {
            return (
              <li className="nav-item" key={`${topic.slug}`}>
                <Link to={`/topic/${topic.slug}`} className="nav-link">{`${topic.slug}`}</Link>
              </li>);
          })
          }
        </ul>
      </nav>
    );
  }
}

export default NavMenu;