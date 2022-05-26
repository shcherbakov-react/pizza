import './App.css';
import './scss/app.scss';
import Header from './components/Header/Header';
import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'



// import pizzas from './assets/pizza.json';
import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
         <NotFound/>
        </div>
      </div>
    </div>
  );
}

export default App;
