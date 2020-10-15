import { ProxyState } from "../AppState.js";
import Currency from "../Models/Currency.js";

class CurrencyService {
  constructor() {
    console.log("Hello from Cur Ser")

  }
  add() {
    let currency = ProxyState.currency
    currency.amount += currency.add
    ProxyState.currency = currency
  }

}

export const currencyService = new CurrencyService()