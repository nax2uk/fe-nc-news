import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavMenu />
        <div className="container-fluid">
          <Switch>
            <Route path='/' exact component={ArticleList} />
            <Route path='/topic/:slug' component={ArticleList} />
            <Route path='/articles/:article_id' component={ArticlePage} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
