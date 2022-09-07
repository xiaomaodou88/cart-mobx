import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@observer
@inject('productsStore')
export default class Products extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>商品</h2>
      </div>
    )
  }
}

