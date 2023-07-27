
// class MakeUp{
//   constructor(type, brand, size,){
//   this._type = type;
//   }
//   get type(){
//     return this._type
//   }
// }

// class Product extends MakeUp{
//   constructor(type, brand, size, price, description, img){
//   super(type);
//   this.brand = brand;
//   this.size = size;
//   this.price = price;
//   this.description = description;
//   this.img = img;
//   }
// }


























// class Customer{
//   constructor(name, address, telephoneNumber){
//     this._name = name
//     this._address = address
//     this._telephoneNumber = telephoneNumber
//   }
//   get name(){
//     return this._name
//   }
//   get address(){
//     return this._address
//   }
//   get telephoneNumber(){
//     return this._telephoneNumber
//   }
// }

// class Booking extends Customer{
//   constructor(name, telephoneNumber, appointmentDate, appointmentTime){
//     super(name, telephoneNumber)
//     // super(telephoneNumber)
//     this._appointmentDate = appointmentDate
//     this._appointmentTime = appointmentTime
//   }
//   get appointmentDate(){
//     return this._appointmentDate
//   }
//   get appointmentTime(){
//     return this._appointmentTime
//   }
//   confirmBooking(){
//     console.log(`Hey, ${name}! Just to confirm, an appointment has been made for ${this.appointmentTime} 
//     on ${this.appointmentDate}.`)
//   }
// }

// let arriann = new Booking ('Arriann', '0123456788765', '24/4/23', '10:30')


// class Salon extends Customer{

// }
// class Makeup extends Customer{

// }
// class Nails extends Customer{

// }



class Staff{
  constructor(staffName, bookingDate, bookingTime, commissionRate){
    this._staffName = staffName
    this._bookingDate = bookingDate
    this._bookingTime = bookingTime
    this._commissionRate = commissionRate
  }
  get staffName(){
    return this._staffName
  }
  get bookingDate(){
    return this._bookingDate
  }
  get bookingTime(){
    return this._bookingTime
  }
  get commissionRate(){
    return this._commissionRate
  }
}

class Customer extends Staff{
  constructor(staffName, commissionRate, customerName, customerNumber, service, price, bookingDate, bookingTime ){
    super(staffName, bookingDate, bookingTime, commissionRate)
    this._customerName = customerName
    this._customerNumber = customerNumber
    this._service = service
    this._price = price
  }
  get customerName(){
    return this._customerName
  }
  get customerNumber(){
    return this._customerNumber
  }
  get service(){
    return this._service
  }
  get price(){
    return this._price
  }
  confirmAppointment(){
    console.log(`Hey ${this._customerName}! An appointment has been made with ${super.staffName} for ${this._service} on ${this._bookingDate} at ${this._bookingTime}`)
  }
  staffEarning(){
    return Number(price - (price / 100 * commissionRate))
  }
  salonCommission(){
    return Number(price / 100 * commissionRate)
  }
}

let arriann = new Customer ('Harley', '25', 'Arriann', '01253493049', 'cut & color', '100' , '24/4/23', '10:30.')


