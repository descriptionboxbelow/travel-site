var $ = require('jquery');
var Person = require('./modules/Person');

alert("Allo maman");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Plain", "teal");
jane.greet();

$("h1").remove();
