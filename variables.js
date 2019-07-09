/* Variables */

var myName;
myName = "Linh";

var state = "Michigan";

console.log("My name is " + myName);

state = "Califonia";

var bestWebsiteEver = "freeCodeCamp";

/* Data Types */
// There are 7 data types

// Boolean
var data = true;
if (data) {
    console.log("Booleans rule!");
} else {
    console.log("Booleans are lame");
}

// null
var n = null;
console.log(n * 32);

// undefined
var a;
console.log(a + 2);

// Number

var num = 3.6;
var ber = 6.4;
console.log(num + ber);

// String
var name = "Linh";
console.lpg("Hi! My name is " + name);

//Symbol
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2); // false
console.log(String(sym1) === String(sym2)); // true
console.log(String(sym1)); // Symbol("foo")

//Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make); // Ford


/* Number */

var number = 12 ;
number++;
number--;
number += 5;

console.log(number);
console.log(number++); // 12;
console.log(++number); // 13


/* String */
var myName = "Linh";

var sentence = "He said \" Hi!\"";
/**
 Code Output
 \' single quote
 \" double quote
 \\ backslash
 \n newsline
 \r carriage return
 \t tab
 \b backspace
 \f form feed 
 */

var fullName = 'Hoang ' + 'Linh'; // Hoang Linh

var sentence2 = 'My name is ' + fullName; // My name is Hoang Linh

fullName += ' is my name'; // Hoang Linh is my name


/* String: [bracket notation] */

var firstName = "Linh";

console.log(firstName[0]); // "L"
firstName[0] = "N"; // khong co tac dung gi
// co the
firstName = "Ninh";
console.log(firstName); // Ninh


/* 20 String Methods*/

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "fontend and backend development";

// charAt()
console.log(stringOne.charAt(1)); // => "r"

// charCodeAt()
console.log(stringOne.charCodeAt(1)); // => 114

// concat()
console.log(stringOne.concat(stringTwo));
// => "freeCodeCamp is the best place to learnfontend and backend development"

// endsWith()
console.log(stringOne.endsWith("learn")); // => true

// fromCharCode()
console.log(String.fromCharCode(114)); // => "r"

// includes()
console.log(stringTwo.includes("end")); // true

// indexOf()
console.log(stringTwo.indexOf("end")); //5

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end")); // 17

// match
console.log(stringTwo.match(/end/g)); // ["end", "end"]

// repeat()
console.log(stringOne.repeat(3));

// replace() 
console.log(stringTwo.replace(/end/g, "END"));

// search()
console.log(stringTwo.search("end")); // 5

// slice()
console.log(stringTwo.slice(2,4)); // "on"

// split()
console.log(stringOne.split(" ")); // Cat xau thanh cac mot list bat dau voi

// startWith()
console.log(stringOne.startsWith("free")); // true

// substr()
console.log(stringTwo.substr(2, 4)); // onte

// substring()
console.log(stringTwo.substring(2, 4)); // on

// toLowerCase()

// toUpperCase()

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim());
// Subscribe now!


/* Functions */

function square(number) {
    return number * number;
}

console.log(square(4)); // 16

var someVar = "Hat";
function myFun() {
    var someVar = "Shoes";
    console.log(someVar);
}

myFun(); // Shoes
console.log(someVar); // Hat

function addSquare(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

a = addSquare(2, 3); // returns 13
b = addSquare(3, 4); // returns 25
c = addSquare(4, 5); // returns 41


/* Hoisting */



