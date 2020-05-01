import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <NavMenu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
