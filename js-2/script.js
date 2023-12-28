// function (done)
// Arrow functions (done)
// Array (done)
// Var, let, const difference (done)
// Reassignment (done)
// hoisting (done)
// scope(global, function, block) (done)

// Function
function greet() {
  console.log("hello, how are you doing");
  console.log("Today is a nice day");
}

// organise your
// make it more module
// reusability

greet();
greet();
greet();
greet();

// 1. Function Declaration(Syntax)
function function_name(parameter1, parameter2) {
  //Code to be executed
  console.log("function called with parameter:", parameter1, parameter2);
}

// 2. Function calling
// To execure a function and run the code inside it, you need to invoke  or call the functin by using
// it's name followed by paranthesis.
function_name("ayush", 9);
function_name("Manish", "Verma");
function_name("Dharmender", "Pal");

// 3. Return statement
// A function can optionally return a value using the return statement.

function sum(a, b) {
  let result = a + b;
  return result;
}

console.log(sum(5, 10));

//4. Function scope
function myfunction() {
  let x = 10;
  console.log(x);
}
// console.log(x); //Reference Error: x is not defined
myfunction();

//5. Function Expression
let hello = function () {
  console.log("Hellow");
};

hello();
hello();
hello();

// anonymous function
// function(){
//     console.log("Hellow");
// };

// 6. Arrow Functions

// let hello=function(){
//     console.log("Hellow");
// };
let hello2 = () => {
  console.log("Hellow arrow");
};
hello2();

let multiply = (a, b) => a +(+b);
console.log(multiply(4, "5"));

// Array

// 1. Creating Arrays
let arr1 = [];
// let arr2=["Apple","Banana","Orange"];
let arr3 = [9, "hello", true, ["Dancing", "Singing", "writing"]];

// 2. Accessing Array Elements
// let arr2=["Apple","Banana","Orange"];
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2]);

// Modifying Array Element
// arr2[2]="Kiwi";
// console.log(arr2);

// Array Length:
// console.log(arr2.length);

// Array Methods and Operations:

let arr2 = ["Apple", "Banana", "Orange"];
// 1. Push
// Adds one or more elements to the end of an array
arr2.push("kiwi", "melon");
console.log(arr2);
// 2. Pop
// removes the last element from an array and returns it
arr2.pop();
console.log(arr2);
// 3. shift
// Used to remove the first element from an array
arr2.shift();
console.log(arr2);
// 4. unshift
// Used to add the element in the beginning of an array
arr2.unshift("Dragonfruit");
console.log(arr2);

// 5. concat

let arr4 = [9, 9, 93, 93, 483];
arr2 = arr2.concat(arr4);

console.log(arr2);

// let a=3; // using let
// var a=3; // using var
// const a=3; // using const

//         Reassignment    scope      Hoisting 
// var   |   Yes          Function     hoisted
// let   |   Yes          Block        Not hoisted
// const |   No           Block        Not hoisted


// global scope

let x = 10;
console.log(x);
function eg1() {
  console.log(x);
  if (5 > 10) {
    console.log(x);
    if (500 > 10) {
      console.log(x);
    }
  }
}
eg1();

// Function Scope
function abc(ayush, bansal) {
  let temp1 = 111;
  console.log(temp1);
  if (5 > 10) {
    console.log(temp1);
  }
  console.log(temp1);
}
abc("ayush",[]);

// console.log(temp1); //ReferenceError: temp1 is not defined!

// Block Scope

function temp2(){
    if(10>5){
        var temp3=10;
        console.log(temp3);
    }
    console.log(temp3);
}
temp2();

// console.log(temp3);

// Hoisting

// My code:
console.log(ayush); // Cannot access 'ayush' before initialization
var ayush="Awesome"; // initialization+ declaration
console.log(ayush);

// During Compilation:
var ayush; // 1
console.log(ayush); // undefined //389
ayush="Awesome"; //390
console.log(ayush); //Awesome //391

greet();

function greet(){
    console.log("hello");
}