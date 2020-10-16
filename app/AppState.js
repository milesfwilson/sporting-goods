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
  items = [

    new Item({ name: "Banana", price: 50, description: "Of course", img: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1109&q=80", quantity: 5 }),

    new Item({ name: "Minolta Camera", price: 250, description: "There\'s nothing like film.", img: "https://images.unsplash.com/photo-1586527484765-979a20639316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", quantity: 5 }),

    new Item({ name: "Sun Glasses", price: 19, description: "Now you can finally look cool!", img: "https://images.unsplash.com/photo-1586339392738-65847e399f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", quantity: 5 }),

    new Item({ name: "External Battery", price: 25, description: "Charge everything.", img: "https://images.unsplash.com/photo-1586253634019-c77872f966f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", quantity: 5 }),

    new Item({ name: "Hand Knife", price: 99, description: "Cut anything you can imagine!", img: "https://images.unsplash.com/photo-1587459802854-49fb9313f01d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", quantity: 5 }),

    new Item({ name: "Decorative Rolling Pin", price: 50, description: "For pastries and other delicacies", img: "https://images.unsplash.com/photo-1586941961327-cb0e30afbf01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", quantity: 5 }),

    new Item({ name: "Magnifying Glass", price: 20, description: "See the world", img: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", quantity: 5 }),
    new Item({ name: "Camera", price: 50, description: "Very Powerful.", img: "https://images.unsplash.com/photo-1586253634026-8cb574908d1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", quantity: 5 })





  ]

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
