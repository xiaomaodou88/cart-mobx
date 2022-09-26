import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('productsStore', 'cartStore')
@observer
class Products extends Component {
  render() {
    console.log(this.props);
    const { productsStore, cartStore } = this.props
    return (
      <div>
        <h2>商品</h2>
        <ul>
          {productsStore.all.map(item => (
            <li key={item.id}>
              <span>{item.title} - {item.price} * {item.inventory}</span>
              <br />
              <button
                disabled={!item.inventory}
                onClick={() => {
                cartStore.addToCart(item)
                }}>{!item.inventory ? '已售光' : '加入购物车'}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.productsStore.getAllProducts()
    
  }
}

export default Products

