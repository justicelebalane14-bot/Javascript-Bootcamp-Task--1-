// Exercise 1: Numbers

let integerNumber = 10;
let floatNumber = 5.5;

console.log("Addition:", integerNumber + floatNumber);
console.log("Subtraction:", integerNumber - floatNumber);
console.log("Multiplication:", integerNumber * floatNumber);
console.log("Division:", integerNumber / floatNumber);
console.log("Modulus:", integerNumber % 3);
console.log("Exponentiation:", integerNumber ** 2);

console.log(integerNumber);
console.log(floatNumber);

// Exercise 2: Boolean and Operators

let numA = 15;
let numB = 10;

let greaterThan = numA > numB;
let lessThan = numA < numB;

console.log(greaterThan);
console.log(lessThan);

// x and y comparison

let x = 8;
let y = 12;

console.log("x > y:", x > y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);

// Logical Operators

let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// Assignment Operators

let p = 10;

p += 5;
console.log("After += :", p);

p -= 3;
console.log("After -= :", p);

p *= 2;
console.log("After *= :", p);

p /= 4;
console.log("After /= :", p);

p %= 3;
console.log("After %= :", p);