// === y use  this operator
// this operator called strict equality or identity operator

let a = 10;
console.log(a);

console.log(a == 10);

console.log(a === "10");

// these are the some exceptional cases which
/*
           == return true
           === return false
*/
//  0 and false
// new String('ram')  and 'ram'
// null and undefined
// '10' and 10
// '' and 0

//------------------------Ternary Operator----------------
const age = 16;
const results = age > 18 ? "Eligible" : "Not Eligible";
console.log(results);

//Handling null values

function welcome(name) {
  const res = name ? name : "Stranger";
  console.log("Hello " + res);
}

welcome(null);
welcome();
welcome("Kaviya");

//
user = { name: "Kaviya", age: 22 };
console.log(user);
console.log(user.name);

const greet = () => {
  return "oiiiiii";
};

console.log(greet());

user = { name: "Kaviya", age: 22 };
console.log(user);
console.log(user.name);

const greets = (username) => {
  const re = username.name ? username.name : "no name";
  return "oiiiiii " + username;
};

let reults = greets(user.name);
console.log(reults);

// ----------------------- conditional chaining ----------
let avg = 85;
console.log(avg >= 90 ? "A-grade" : avg >= 80 ? "B-grade" : "C-grade");

// bitwise operators in js
// & |  ~ ^ << >> >>>
