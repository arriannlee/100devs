//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.topping = ['cheese', 'pepperoni', 'onion', 'pineapple']
pizza.base = 'thin'
pizza.size = 'large'
pizza.slices = '12'

pizza.isReady = function(){
  console.log(`Your ${pizza.size} is ready!`)
}

pizza.burnMouth = function(){
  console.log(`ejfvijnvljkrbvlehwbvelkg`)
}

pizza.estimatedDeliveryTime = function(){
  console.log('Calculating...')
}

function MakePizza(pizzaToppings, size, base, sauce){
  this.toppings = pizzaToppings
  this.size = size
  this.base = base
  this.sauce = sauce
  this.isReady = function(){
    console.log(`Your ${this.size} is ready`)
  }
  this.estimatedDeliveryTime = function(){
    console.log('Calculating...')
  }
  this.rateService = function(){
    console.log('Thank-you for your order, to be in with the chance of winning £10 gift card - rate your delivery!')
  }
}