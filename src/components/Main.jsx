import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticleList from './ArticleList'
import ArticlePage from './ArticlePage'

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={ArticleList} />
          <Route path='/topic/:slug' component={ArticleList} />
          <Route path='/articles/:article_id' component={ArticlePage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Main;