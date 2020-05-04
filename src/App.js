import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'
import * as api from './utils/api'
import './App.css';

class App extends Component {
  state = {
    username: "jessjelly",
    avatar_url: "",
    name: ""
  }

  componentDidMount() {
    console.log("in mount")
    this.setState((currState) => {
      const { username } = currState;
      api.getUser(username)
        .then(user => {
          this.setState({ avatar_url: user.avatar_url, name: user.name })
        })
        .catch(err => {
          console.dir(err);
        })
    })
  }

  render() {
    const { name, avatar_url, username } = this.state;
    console.log(avatar_url)
    return (
      <BrowserRouter>
        <NavMenu />
        <Dashboard name={name} avatar_url={avatar_url} username={username} />
        <Switch>
          <Route path='/' exact component={ArticleList} />
          <Route path='/topic/:slug' component={ArticleList} />
          <Route path='/articles/:article_id' component={ArticlePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }

}

export default App;
