import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import pizzaImg from '../assets/pizza.jpg';
import burgerImg from '../assets/burger.jpg';
import pastaImg from '../assets/pasta.jpg';
import './Resturant_card.css';

function Resturant() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card name="Pizza Palace" cuisine="Italian • Cheese Burst" image={pizzaImg} />
        <Card name="Burger Hub" cuisine="American • Crispy Burgers" image={burgerImg} />
        <Card name="Pasta Point" cuisine="Italian • White Sauce" image={pastaImg} />
      </div>
    </>
  );
}

export default Resturant;
