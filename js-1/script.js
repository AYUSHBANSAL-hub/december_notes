// Outputting text in console (done)
// Data types (done)
// arithmetic operations (done)
// conditionals (done)
// loops (done)


// Outputting text in console

console.log("Hello World");
// console.log is a function that is used to displa
// the text "Hello World" in the browser's console.

//1. Concatenating Strings
// Simply means joining

let firstname = "Ayush";
let lastname = "Bansal";

console.log(firstname + " " + lastname); //Ayush Bansal
// this code tells how to concatenate multiple strings using + operator.

// 2. Mathematical Calculations
let radius = 5;
console.log(Math.PI * radius * radius);

// 3. Boolean expressions
// true/false

console.log(5 > 10);
// We can compare numbers using comparison operators.
// The results of the comparisons are boolean values (true/false)
// directly printed in the console

//  5
// 5>10
// 10
// false

// 4. Array displaying
let arr = ["Apple", "Banana", "Orange"];
console.log(arr);

// loosely handled/typed language
let a = 10;
console.log(a);

a = "Ayush Bansal";
console.log(a);

a = true;
console.log(a);

// Data types

// 1. String
let name1 = "Ayush bansal";
console.log(typeof name1);

// 2. Number

let age1 = 25.34567;
console.log(typeof age1);

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent);

// 4. Null
let address = null;
console.log(address);
// Explanation: This variable('address') stores a null value,
// indicating the absence of a value. It is commonly used to represent
// an intentionally empty or non-existent value.

// 5. Undefined
let phoneNumber;
console.log(phoneNumber);
// PhoneNumber variable is declared but not assigned a value!
// hence it has undefined data type

// 6. Array
let abc = ["Apple", "Banana", "orange", "kiwi"];
// Ordered collection of elements
console.log(abc);

// 7. Object
let person = {
  name: "Jayesh",
  age: 9,
  isStudent: false,
  hobbies: ["Apple", "Banana", "orange", "kiwi"],
};

// 8. Date

let currentDate = new Date();
console.log(currentDate);

// this variable stores a date data type which represents a specific date
// and time.
// It initializes the variable with the current date and time.

// 9. Big Int
let lgNumber = 1234567890876543234567898765432345678n;
// n is used to denote that is a bigInt literal

// arithmetic operations

// 1. Addition
let sum = 10 + 5;
console.log(sum);

// 2. Sutraction
let difference = 10 - 4;
console.log(difference);

// 3. Mutltiplication
let prod = 10 * 5;
console.log(prod);

// 4. Division
let quotient = 15 / 3;
console.log(quotient);

// 5. Modulo(remainder):
let remainder = 23 % 7;
console.log(remainder);

// 6. Increment Operator(++);
let number = 5;
// post increment
// console.log(number++);
// console.log(number)

// pre increment
console.log(++number);
console.log(number);

// 7. Decrement Operator(--):
let number2 = 5;
// post decrement operator
// console.log(number2--);
// console.log(number2);

// pre decrement operator
console.log(--number2);
console.log(number2);

// 8. Exponentiation Operator(**)
let res = 3 ** 4;
console.log(res);

console.log(5 + 5);
console.log("5" + "5");
console.log("5" + 5);
console.log(5 + "5");
console.log(5 + +"5"); //10

//9. Unary Plus operator
let num = +"shiv";
console.log(num); // nan=not a number

// 10. Unary Negation

let num2 = 10;
let num3 = -num2;

console.log(num3);

// conditionals

// 1. if Statement
// let x=10;
// if(x>15){
//     console.log("x is greater than 5");
// }

// 2. If else
let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else {
  console.log("x is smaller than 15");
}

// 3. If else if Else statement
let score = 95;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Average");
}


// 4. Ternary Operator
let isRaining=true;
let weather=(5>10)?"Take an Umbrella":"Enjoy dhoop!";

// (condition)?"Statement when true":"Statement when false"

// if(isRaining){
//     weather="Take an Umbrella";
// }else{
//     weather="Enjoy dhoop!";
// }
console.log(weather);

// 5.Switch Statement
let day=3;
let dayname;
switch (day){
    case 1:
        dayname="Monday";
        break;
    case 2:
        dayname="Tuesday";
        break;
    case 3:
        dayname="Wednesday";
        break;
    case 4:
        dayname="Thursday";
        break;
    case 5:
        dayname="Friday";
        break;
    default:
        dayname="Unknown input";
}
console.log(dayname);


// loops

// 1. For loop
for(let i=0;i<10;i++){
    console.log(i);
}


// 2. While loop
let aa=5;
while(aa--){
    console.log(aa);
}

