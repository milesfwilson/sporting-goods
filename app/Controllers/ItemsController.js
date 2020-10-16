import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js"



function _draw() {
  let items = ProxyState.items
  let template = ""
  items.forEach(i => template += i.Template)
  document.getElementById("items").innerHTML = template
  let cart = ProxyState.cart
  let cartTemplate = ""
  cart.forEach(i => cartTemplate += i.CartTemplate)
  document.getElementById("cart").innerHTML = cartTemplate
  document.getElementById("total").innerHTML = `<h5>Cart Total: $${ProxyState.total}</h5>`
}
export default class ItemsController {
  constructor() {
    console.log("Hola from items controller")
    ProxyState.on("items", _draw)
    ProxyState.on("total", _draw)
    ProxyState.on("cart", _draw)

    _draw()
  }
  checkOut() {
    itemsService.checkOut()
  }

  cartAdd(id, e) {
    e.preventDefault()
    let form = e.target

    let rawItem = {
      quantity: form.quantity.value
    }

    itemsService.cartAdd(id, rawItem)
  }
}
