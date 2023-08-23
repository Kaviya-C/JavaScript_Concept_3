// Datatypes in JS
/*
Dynamic programming
*/

var numbers = 90;
// this considered as number type automatically

// primitive datatypes --- in built data types
// number ,string ,null , undefined boolean , symbol--ES6

// reference types
//Arrays ,Object Literals , Date Time etc

// -----------------number type-----------

var a = 34;
console.log(typeof a);

var names = "Kaviya";
console.log(typeof names);

var bool = true;
console.log(typeof bool);

var phone = null;
console.log(typeof phone);

var n = " ";
console.log(typeof n);
// if we not assign any value mean:
let u;
console.log(typeof u);

// --------------symbols ---------------------------
// this is for identity purpose
const s1 = Symbol();
console.log(s1);

const s2 = Symbol();
console.log(s2);

console.log(s1 === s2); // false

//------------------Reference type ----------------------

var courses = ["Java", "HTML", "CSS", "SQL"];
console.log(typeof courses);

var student = {
  name: "Kaviya",
  age: 22,
};
var d = new Date();
console.log(typeof d);
console.log(d);

// ------------- type conversion-----------------------
//                     toString or String
let value;
value = 45;
console.log(value, typeof value);

value = String(value);
console.log(value, typeof value);

value = 56.67;
console.log(value, typeof value);

a = new Date();
console.log(a, typeof a);

a = 900;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);

// -------------type conversion ----------------

a = "7899";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

let j = "234";
j = parseInt(j);
console.log(j, typeof j);

let r = true;
r = Number(r);
console.log(r, typeof r);

let array = [2, 4, 5, 6, 7];
array = Number(array);
console.log(array, typeof array);

// ---------------type coercion -----------------------

let q = 5039;
let u1 = 81992;
console.log(q + u1);

q = "Kaviya";
console.log(q + u1);

// ------------------- Arithmatic Operators ------------

let s = 8;
let gh = 49;
let res;
res = s + gh;
console.log(res);
res = s - gh;
console.log(res);
res = s * gh;
console.log(res);
res = s / gh;
console.log(res);
res = s % gh;
console.log(res);
res = s ** gh;
console.log(res);

// ----------------Assignment operators ----------------

let y = 93;
y += 6;
console.log(y);

y -= 9;
console.log(y);

y *= 9;
console.log(y);

y /= 9;
console.log(y);

y === 9;
console.log(y);

y !== 9;
console.log(y);

//---------------Math Functions------------------

//floor mean after decimal greater than 5 mean it increment automatically

//ceil mean after decimal any value is there it increment to the next values

//round mean it neglect the decimal value it gives the whole number

let c;
c = Math.PI;
console.log(c);
console.log(Math.round(c));
console.log(c);

let number = 45905703.3367763;
number = Math.floor(number);
console.log(number);

let number1 = 45905703.3367763;
number1 = Math.round(number, 2);
console.log(number);

let number2 = 45905703.3367763;
number2 = Math.ceil(number);
console.log(number);

let number3 = 45905703.3367763;
number3 = Math.floor(number);
console.log(number);

// square root finding use sqrt method in the math function
let square;
square = Math.sqrt(121);
console.log(square);

// abs makes the values as positive
let pos;
pos = Math.abs(-900);
console.log(pos);

// trunc -- just ignore the value after decimals
// even though after decimal has greater than 5
// 2.58 become 2 as output
let t;
t = Math.trunc(98.99988);
console.log(t);

// pow method is there
let po;
po = Math.pow(3, 4);
console.log(po);

// find max min
let max;
max = Math.max(90, 9, 1, 2, 900, 1000);
console.log(max);

let min;
min = Math.min(90, 9, 1, 2, 900, 1000);
console.log(min);

// want to display the random number:
let random;
random = Math.random(2, 3, 4, 58, 90);
console.log(random);

// i want random number between 1 to 15 not decimal value
let whole;
whole = Math.floor(Math.random() * 90);
console.log(whole);

// finding the sign of the number
let sig;
sig = Math.sign(-900);
console.log(sig);
sig = Math.sign(900);
console.log(sig);
sig = Math.sign(0);
console.log(sig);

sig = Math.sin(45);
console.log(sig);

sig = Math.cos(45);
console.log(sig);

sig = Math.log(45);
console.log(sig);

sig = Math.log2(45);
console.log(sig);

// -------------comparision  operator ----------------

// == this operator compares only values not datatypes checking

let it1 = 10;
let it2 = 10;
console.log(it1 == it2);

let it3 = 10;
let it4 = "10";
console.log(it3 == it4);

// === this checks the both datatype and value

let it5 = 10;
let it6 = 10;
console.log(it5 === it6);

let it7 = 10;
let it8 = "10";
console.log(it7 === it8);

// this two are not checking the data type so content is same  then it returns false bcoz these two are equal for this one assignment operator
console.log(it7 != it8);

console.log(it7 !== it8);
// this two are not equal so return true
