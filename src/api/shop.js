const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T恤", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "华为-mate40", "price": 6999, "inventory": 5}
]

export const getAllProducts = callback => {
  setTimeout(function () {
    console.log(_products)
    callback(_products)
  }, 500)
}
export const buyProducts = (products, callback, errorCallback) => {
  setTimeout(function () {
    Math.random() > 0.5 ? callback() : errorCallback()
    
  }, 400)
}