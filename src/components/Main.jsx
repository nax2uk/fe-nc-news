import React from 'react';
import { Router } from '@reach/router'
import ArticleList from './ArticleList'
import ArticlePage from './ArticlePage'
import HomePage from './HomePage'

const Main = () => {
  return (
    <main>
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/topic/:slug' />
        <ArticlePage path='/articles/:article_id' />
      </Router>
    </main>
  );
};

export default Main;