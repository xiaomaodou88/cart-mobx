import React, { Component } from 'react'
import Products from "./components/Products";
import Cart from "./components/Cart";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>购物车案例</h1>
        <hr />
        <Products />
        <hr />
        <Cart />
      </div>
    )
  }
}
