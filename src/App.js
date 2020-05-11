import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavMenu from './components/topNavs/NavMenu'
import Footer from './components/bottomNavs/Footer'
import Dashboard from './components/topNavs/Dashboard'
import ArticlesPage from './components/ArticlesPage'
import SingleArticlePage from './components/SingleArticlePage'
import ErrorPage from './components/ErrorPage'
import * as api from './utils/api'
import './App.css';

class App extends Component {
  state = {
    username: "jessjelly",
    avatar_url: "",
    name: ""
  }

  componentDidMount() {

    this.setState((currState) => {
      const { username } = currState;
      api.getUser(username)
        .then(user => {
          this.setState({ avatar_url: user.avatar_url, name: user.name })
        })
        .catch(() => {
          this.setState({ username: "" });
        })
    })
  }

  render() {
    const { name, avatar_url, username } = this.state;

    return (
      <BrowserRouter>
        <NavMenu />
        <Dashboard name={name} avatar_url={avatar_url} username={username} />
        <main>
          <Switch>
            <Route exact path='/' component={ArticlesPage} />
            <Route exact path='/topic/:slug' component={ArticlesPage} />
            <Route exact path='/articles/:article_id' render={(props) => <SingleArticlePage {...props} username={username} />} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;