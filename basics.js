//2015 -- ES6  -- introduced let and const
// 1997 -- var is introduced

var num1 = 90;
var num2 = 43;
console.log(num1 + num2);

// 1 .Scope

if (true) {
  var message = "Welcome to JS";
}
console.log(message);
// if we declare any variable as var then it is consider as global variable..
// we can able to access outside of the block also worked

if (true) {
  let mes = "Welcome to JS";
}
//console.log(mes);

// if we mention let instead of var
// let indicated this variable belongs to local variable and the scope is only within the block

if (true) {
  const mes = "Welcome to JS";
}
// console.log(mes);
// even though const also local variable we cannot access outside of the block

// -----------------------------------------------------
//2 >>>>Variable Declaration
var num = 10;
console.log(num);
// we can declare the same variable name for var datatype
// but in let we cannot reasign the same variable name again so this is good to go
// const let are not allowed redeclaration

// ------------------------------------------------------
// 3 >>>> Value Assignment

var a = 90;
console.log(a);
a = 78;
console.log(a);

console.log("-------------------------");
let a1 = 89;
console.log(a1);
a1 = 100;
console.log(a1);

console.log("-------------------------");

// const a2=66;
// //Assignment to constant variable
// console.log(a2);
// a2=44;
// console.log(a2);

// var and let can able to reassign the values
// const mean we cannot modify the normal values

const student = { name: "Ram", age: 22 };
console.log(student);
console.log(student.name);
student.name = "Ramila";
console.log(student.name);

// we can change the object value even though we mention as const keyword
