import { observable } from "mobx";

class CartStore {
  @observable items = []
  @observable foo = 'baz'

  constructor(rootStore) {
    this.rootStore = rootStore
  }
}

export default CartStore