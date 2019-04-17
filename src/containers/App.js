import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import './App.css'
import HeaderCart from "../components/HeaderCart";

const App = () => (
  <div className={'appContainer'}>
    <div className={'headerContainer'}>
      <h2 className={'mainHeading'}>Acme Store</h2>
      <HeaderCart />
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    {/*<CartContainer />*/}
  </div>
);

export default App
