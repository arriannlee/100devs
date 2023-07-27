//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
  constructor(name){
    this._name = name
  }
  get name(){
    return this._name
  }
  speak(){
    console.log(`${this._name} makes a sound`)
  }
}

class Dog extends Animal{
  constructor(name, breed, size, gender){
    super(name)
    this.breed = breed
    this.size = size
    this.gender = gender
  }
}

let harley = new Dog ('Harley', 'Border Collie', 'Medium', 'Female')

class MakeUp{
  constructor(type){
  this._type = type;
  }
  get type(){
    return this._type
  }
}

class Product extends MakeUp{
  constructor(type, brand, size, price, description, img){
  super(type);
  this.brand = brand;
  this.size = size;
  this.price = price;
  this.description = description;
  this.img = img;
  }
}
