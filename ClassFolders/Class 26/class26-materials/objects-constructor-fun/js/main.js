//Create a constructor with 4 properties and 3 methods

class MakePizza{
  constructor(topping,base,sauce,size){
    this.topping = topping
    this.base = base
    this.sauce = sauce
    this.size = size
  }
  isReady(){
    console.log('Your pizza is ready!')
  }
  outForDelivery(){
    console.log('Your pizza is out for delivery')
  }
  feedback(){
    console.log('How did we do?')
  }
}

let order1 = new MakePizza(['onions', 'pineapple', 'peppers', 'sweetcorn'], 'thin', 'tomato', 'large')