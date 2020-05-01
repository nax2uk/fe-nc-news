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
      <nav>
        <Link to='/'>Home</Link>
        {topics.map(topic => {
          return <Link to={`/topic/${topic.slug}`} key={`${topic.slug}`} > {`${topic.slug}`}</Link>
        })
        }
      </nav>
    );
  }
}

export default NavMenu;