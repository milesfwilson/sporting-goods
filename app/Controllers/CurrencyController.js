import { ProxyState } from "../AppState.js"
import { currencyService } from "../Services/CurrencyService.js"


function _draw() {
  let temp = ProxyState.currency
  document.getElementById("currency").innerHTML = /*html*/
    `
    <div class="row">
<div class="col-6">
<button class="btn btn-success my-auto" onclick="app.currencyController.add()">Add</button>
</div>
<div class="col-6">
  
<h1 class="my-auto">$${temp.amount}</h1 >
</div>
</div>
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