"use strict";
// String
let myName = "Tao";
// myName = 49;
// Number
let myAge = 67;
// myAge = "Alexia"
// Boolean
let hasHobbies = true;
// hasHobbies = 6
// Types
let myRealAge;
myRealAge = 27;
//myRealAge = '27';
// Array
let hobbies = ["Cooking", "Sports"];
hobbies = [1000];
// hobbies = 1000
// Tuples
let address = ["Lokoja", 12];
// Enums
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
let myColor = Color.Black;
console.log(myColor);
// Any
let country = "Nigeria";
console.log(country);
country = { name: "Ghana", PN: +233 };
console.log(country);
