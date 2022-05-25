import './App.css';
import './scss/app.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

// import pizzas from './assets/pizza.json';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    fetch('https://628905bd7af826e39e67d760.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ? [...new Array(6)].map((_,index) => <Skeleton key={index}/>) : items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
