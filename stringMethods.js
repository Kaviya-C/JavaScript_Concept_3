// string methods in js

let name1 = "Kaviya";
let name2 = "Kavi";

//concatenate
console.log("concatenation ", name1 + " " + name2);

//concat() method
let con = name1.concat(" " + name2);
console.log("concat method", con);

// append method
con = "Good ";
con += "Time starts";
console.log("Append", con);

// escaping

let c;
c = "she can't run";
console.log("double quotes outside", c);

c = "she can't run";
console.log("using escape sequences ", c);

console.log("Length: ", name1.length);

console.log("UpperCase: ", name1.toUpperCase());

console.log("Lower case: ", name1.toLowerCase());

let names = "Kaviya";
console.log("Index number: ", names.indexOf("a"));

console.log("Last index of: ", names.lastIndexOf("a"));

console.log("CharAt method: ", names.charAt(4));

console.log("CharCodeAt method: ", names.charCodeAt(1));

// substr method
console.log("substr of 0 to 3", names.substr(0, 3));

let text = "0123456789";
console.log("Substring : ", text.substring(2, 4));

// substring value first lower second higher mean it will exchange  the both values
//if we give the range for substring is out of range it dont throw error it just give blank output

// Slice method
c = text.slice(2, 4);
console.log("Slice Method", c);

// slice method
/*
  >> slice method print the start to end-1
  >> slice method inside negative values are allowed 
            >> if we give -5 mean from -5 to end of all the values to be printed
  >> slice method if we give out of range values meant 
            we got output as blank
  >> slice method if we give first is higher second is smaller then we got blank output it not exchange as like of substring method

 */

//substr is deprecated

/* substring method
   this will give blank when range is out of index
   >>this will give values even though wee pass first num higher second num is lower
   it exchange and then give output
   >> negative are allowed but it give all the values when we giving negative index
   */

// split in js

let a = "kaviya".split("a");
console.log(a);
console.table(a);

// replace in js
a = "I am in salem";
c = a.replace("salem", "chennai");
console.log(c);

//includes in js
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("rat"));

// trim in js
a = "   hey this is  ";
console.log("Before trim ", a.length);
a = a.trim();
console.log("After trim ", a.length);

//padStart()  padEnd()

a = "9095";
a = a.padStart(8, 0);
console.log(a);

a = "8485";
a = a.padEnd(8, 0);
console.log(a);

// long literals mean use + to display line by line
// use slash to seperate line by line backward slash

// fromCharCode()

console.log(String.fromCharCode(97, 98, 99, 100));

//template string literals
let firstname = "kavi";
let age = 22;
let city = "salem";
let role = "CEO / Java Developer/ FullStackDeveloper";
// ES5
let output = "";
output =
  "<hr>" +
  "<table border='1'>" +
  "<tr><th>Name:</th><td>" +
  firstname +
  "</td></tr>" +
  "<tr><th>Age:</th><td>" +
  age +
  "</td></tr>" +
  "<tr><th>City:</th><td>" +
  city +
  "</td></tr>" +
  "<tr><th>Role:</th><td>" +
  role +
  "</td></tr>" +
  "</table>";

//ES6
output += `<hr>
<table border='1'>
<tr><th>Name:</th><td>${firstname}</td></tr>
<tr><th>Age:</th><td>${age >= 20 ? "GoodAge" : "It's Ok"}</td></tr>
<tr><th>City:</th><td>${city}</td></tr>
<tr><th>Role:</th><td>${role}</td></tr>
</table>`;
document.body.innerHTML = output;
