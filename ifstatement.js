// let age=prompt('Enter ur age : ');
// if(age!=null && age>=18)
// {
//  console.log("Eligible for votings");
// }
// else
// console.log('Not eligible');

let average = 70;
if (average >= 90 && average <= 100) console.log("A- Grade");
else if (average >= 80 && average <= 89) console.log("B grade");
else if (average >= 70 && average <= 79) console.log("C grade");
else console.log("D grade");

// switch statement

let choice = 0;
switch (choice) {
  case 2:
    console.log("Hai");
    break;
  case 10:
    console.log("Hello");
    break;
  default:
    console.log("Yes");
    break;
}

//vowels or not

let letters = "a";
switch (letters) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowels");
    break;
  default:
    console.log("not a vowels");
}
