import { ProxyState } from '../AppState.js'
import Item from '../Models/Item.js'



class ItemsService {
  checkOut() {
    let total = ProxyState.total
    let currency = ProxyState.currency
    let currentCurrency = currency.amount
    let cart = ProxyState.cart
    if (currentCurrency >= total) {

      cart = []
      currency.amount -= total
      total = 0
      ProxyState.currency = currency
      ProxyState.cart = cart
      ProxyState.total = total
      //sweet alert
    } else {
      //sweet alert 
      console.log("not enough")
    }

  }
  constructor() {
    console.log("hello from Items Service!!!!")
  }
  getTotal() {
    let cart = ProxyState.cart
    let total = 0
    cart.forEach(i => total += (i.price * i.quantity))
    ProxyState.total = total
    console.log(total)
  }

  cartAdd(id, rawItem) {
    let items = ProxyState.items
    let cart = ProxyState.cart
    let itemIndex = items.findIndex(i => id == i.id)
    if (rawItem.quantity > 0) {
      items[itemIndex].quantity = rawItem.quantity
      cart.push(items[itemIndex])
    }
    ProxyState.cart = cart
    this.getTotal()
  }


}

export const itemsService = new ItemsService()