// We'll refer to this constructor function as class even though JS doesn't support them
// JS doesn't use classical inheritance
// it uses prototypal inheritance, even in ECMAScript 6
// but ES6 has added a bit of syntectitcal sugar to the language
// that we can use to trick ourselve into thinking that JS does have classes



// PRE-ES6 code:
//
// function Person(fullName, favColor) {
//   this.name = fullName;
//   this.favoriteColor = favColor;
//   this.greet = function () {
//     console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//   };
// }
//
// module.exports = Person;



// ES6 translation:
class Person {
// constructor is a special reserved name in ES6
// JS knows to immediately run this function as soon as an object is created
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  };
}

// The Node.js' way: module.exports = Person;
export default Person;
