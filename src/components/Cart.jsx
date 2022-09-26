import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
@inject('cartStore')
@observer
export default class Cart extends Component {
  render() {
    const { cartStore } = this.props
    return (
      <div>
        <h2>购物车</h2>
        <ul>
          {cartStore.cartProducts.map(item => (
            <li key={item.id}>
              {item.title} - {item.price} * {item.quantity}
            </li>
          ))}
        </ul>
        <p>总价: {cartStore.totalPrice}</p>
        <p>
          <button
            disabled={!cartStore.items.length}
            onClick={() => {
              cartStore.checkout(cartStore.cartProducts)
            }}
          >结算</button>
        </p>
        {cartStore.checkoutStatus && <p>结算  {cartStore.checkoutStatus}</p>}
      </div>
    )
  }
}
