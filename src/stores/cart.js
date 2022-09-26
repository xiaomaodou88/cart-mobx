import { action, observable, computed } from "mobx";
import * as shop from '../api/shop'

class CartStore {
  @observable items = []
  @observable checkoutStatus = null
  
  @action.bound addToCart(product) {
    const prod = this.items.find(cartItem => cartItem.id === product.id)
    if (prod) {
      prod.quantity++
    } else {
      this.items.push({
        id: product.id,
        quantity: 1
      })
    }
    this.rootStore.productsStore.decrementInventory(product)
  }

  @computed get cartProducts() {
    const { productsStore } = this.rootStore
    return this.items.map(cartItem => {
      const prod = productsStore.all.find(prodItem => prodItem.id === cartItem.id)
      return {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: cartItem.quantity
      }
    })
  }

  @computed get totalPrice() {
    return this.cartProducts.reduce((total, prod) => {
      return total + prod.price * prod.quantity
    }, 0)
  }

  @action.bound checkout(products) {
    const saveProducts = [...products]
    this.setCheckoutStatus(null)
    this.setItems([])

    shop.buyProducts(
      products,
      () => {
        this.setCheckoutStatus('成功')
      },
      () => {
        this.setCheckoutStatus('失败')
        this.setItems(saveProducts)
      }
    )
  }

  @action.bound setCheckoutStatus(status) {
    this.checkoutStatus = status
  }
  @action.bound setItems(items) {
    this.items = items
  }
  constructor(rootStore) {
    this.rootStore = rootStore
  }
}

export default CartStore