import Currency from "./Models/Currency.js"
import Value from "./Models/Value.js"
import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {Currency} */
  currency = new Currency()

  /** @type {Item[]} */
  items = [new Item({ name: "Slingshot", price: 50, description: "This thing is amazing", img: "https://images-na.ssl-images-amazon.com/images/I/41YzcNoFmoL._SY600_.jpg", quantity: 5 })]

  /** @type {Item[]} */
  cart = []

  total = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
