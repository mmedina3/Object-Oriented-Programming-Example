//  create an object for laptop and customers
// each object should describe information about each Object
//  laptop : id, brand, year, size
// customer: id, first name, last name, purchase Date

var laptop = {
  'id' : '1038409238'
  'brand': 'apple'
  'year':'2018'
  'size':13
};

var customers = {
  'id' : '129038'
  'firstName' : 'Michelle'
  'lastName': 'Medina'
  'purchaseDate': '2018-26-02'
}

class Laptop {
  constructor(id, brand, year, size, firstName, lastName, purchaseDate) {
    this.id = id;
    this.brand =  brand;
    this.year = year;
    this.size = size;
    this.firstName = firstName;
    this.lastName = lastName;
    this.purchaseDate = purchaseDate;
  }
}

// var myLaptop = new Laptop(12334,'apple', '2018', 13, 'Michelle', 'Medina', '2018-04-05');

class Test extends Laptop {
  constructor(id, brand, year, size, firstName, lastName, purchaseDate, memory){
    super(id, brand, year, size, firstName, lastName, purchaseDate);
    this.memory = 100;
  }
}

var herLaptop = new Test( 1232, 'apple', '2018', 15, 'Ashley', 'Addison', '2017-03-04', 300);
