
import CurrencyController from './Controllers/CurrencyController.js'
import ItemsController from "./Controllers/ItemsController.js";


class App {
  currencyController = new CurrencyController()
  itemsController = new ItemsController()

}

window["app"] = new App();
