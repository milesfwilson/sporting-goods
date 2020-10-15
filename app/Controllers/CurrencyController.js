import { ProxyState } from "../AppState.js"
import { currencyService } from "../Services/CurrencyService.js"


function _draw() {
  let temp = ProxyState.currency
  document.getElementById("currency").innerHTML = /*html*/
    `<div class="col-1"></div>
    <div class="col-5">
    <h1>Balance: $${temp.amount}</h1 >
    </div >
    <div className="col-5">
    <button class="btn btn-success btn-block" onclick="app.currencyController.add()">Add Money</button>
    </div>
    <div class="col-1"></div>
  `
}
export default class CurrencyController {
  constructor() {
    console.log("Hello from Currency Con")
    ProxyState.on("currency", _draw)
    _draw()
  }
  add() {
    currencyService.add()
  }
}