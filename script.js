"use strict";
// String
let myName = "Tao";
// myName = 49;
// Number
let myAge = 1;
// myAge = "Alexia"
// Boolean
let hasHobbies = true;
// hasHobbies = 6
// Types
let myRealAge;
myRealAge = 27;
//myRealAge = '27';
// Array
let hobbies = ["Cooking", 78, "Sports"];
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
// Void
function sayHello() {
    console.log("Hello");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(6, 12));
let myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 6));
// function types
function returnMyName() {
    let name = "Shade";
    return name;
}
console.log(returnMyName());
//objects
let userData = {
    name: "Max",
    age: 87,
};
console.log(userData.age);
let complex = {
    data: [100, 3.99],
    output: function (all) {
        return this.data;
    },
};
