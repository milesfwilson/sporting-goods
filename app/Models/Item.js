import { generateId } from "../Utils/generateId.js"

export default class Items {
  constructor({ name, price, description, img, quantity }) {
    this.name = name
    this.price = price
    this.description = description
    this.img = img
    this.quantity = quantity
    this.id = generateId()
  }

  get Template() {
    return /*html*/`            
    <div class="col-4">
  <div class="card p-2 m-3 shadow text-center rounded">
      <img class="img-fluid"
          src="${this.img}">
      <h4>${this.name}</h4>
      <h4>$${this.price}</h4>
      <p>${this.description}</p>
      <form onsubmit="app.itemsController.cartAdd('${this.id}', event)">
      <div class="form-group">
      
      <input type="number" name="quantity" class="form-control" placeholder="0" aria-describedby="helpId">
      
      <button type="submit" class="btn btn-success mt-2">Add</button>
      </div>
      </form>
  </div>
</div>`
  }

  get CartTemplate() {
    return /*html*/`
    <div class="row border m-3">
      <div class="col-3">
        <img class="img-fluid"
    src="${this.img}">
      </div>
        <div class="col-3 text-left my-auto">
         <h5>${this.name}</h5>
        </div>
    <div class="col-3 my-auto">
    <h5>$${this.price}</h5>
    </div>
    <div class="col-3 my-auto">
    <h5>X ${this.quantity}</h5>
    </div>
    </div>            
    </div>`

  }
}