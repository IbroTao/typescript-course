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
let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';

// Array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [1000];
// hobbies = 1000

// Tuples
let address: [string, number] = ["Lokoja", 12];

// Enums
enum Color {
  Blue,
  Red,
  Black,
}
let myColor: Color = Color.Black;
console.log(myColor);

// Any
let country: any = "Nigeria";
console.log(country);
country = { name: "Ghana", PN: +233 };
console.log(country);

// Void
function sayHello(): void {
  console.log("Hello");
}

// argument types
function multiply(value1: number, value2: number) {
  return value1 * value2;
}
console.log(multiply(6, 12));

// function types
function returnMyName(): any {
  let name = "Shade";
  return name;
}
console.log(returnMyName());
