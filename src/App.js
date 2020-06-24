import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavMenu from './components/topNavs/NavMenu';
import Footer from './components/bottomNavs/Footer';
import Dashboard from './components/topNavs/Dashboard';
import ArticlesPage from './components/pages/ArticlesPage';
import SingleArticlePage from './components/pages/SingleArticlePage';
import ErrorPage from './components/pages/ErrorPage';

import './App.css';

class App extends Component {
  state = {
    user: { username: "", avatar_url: "", name: "" }
  }



  setUser = (objUser) => {
    this.setState({ user: { ...objUser } });
  }

  render() {
    const { user } = this.state;

    return (
      <BrowserRouter>
        <NavMenu />
        <Dashboard user={user} setUser={this.setUser} />
        <main>
          <Switch>
            <Route exact path='/' component={ArticlesPage} />
            <Route exact path='/topic/:slug' component={ArticlesPage} />
            <Route exact path='/articles/:article_id'
              render={(props) => <SingleArticlePage {...props} username={user.username} />} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;