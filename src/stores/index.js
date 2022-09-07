import ProductsStore from "./products"
import CartStore from "./cart"

export default class RootStore {
  constructor() {
    this.productsStore = new ProductsStore(this)
    this.cartStore = new CartStore(this)
  }
}