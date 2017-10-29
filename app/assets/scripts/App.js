var $ = require('jquery');
//  require is not a part of JS
//  require is a Node.js functionality because before ES6 there was no JS native way of importing a module
// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  // Method
  payTaxes(){
    console.log(this.name + " now owes $200 in taxes.")
  }
}
// alert("This is a popup");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Plain", "beige");
jane.greet();
jane.payTaxes();

$("h1").remove();
