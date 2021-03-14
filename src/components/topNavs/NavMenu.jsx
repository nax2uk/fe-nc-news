import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../utils/api';


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
      <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark  my-0 py-0" >
        <h1><Link to='/' className="navbar-brand">NC News</Link></h1>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerMenu"
          aria-controls="navbarTogglerMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerMenu">
          <ul className=" navbar-nav ml-auto" >
            {topics.map(topic => {
              return (
                <li key={`${topic.slug}`} className="nav-item" >
                  <Link to={`/topic/${topic.slug}`} className="nav-link text-capitalize">{`${topic.slug}`}</Link>
                </li>);
            })
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavMenu;