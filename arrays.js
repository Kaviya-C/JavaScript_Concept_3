const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// value index array
number.forEach((value) => {
  console.log(value);
});
number.forEach((value, index) => {
  console.log("Value", value, "index ", index);
});

// map method
// we can do some changes..
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = numbers.map((value) => {
  return Math.sqrt(value).toFixed(2);
});
console.log(square);
console.table(square);

//slice -- particular portion want to store in another array
// i want particular portion of the array
// i can give start end value to print particular portion
console.log(numbers.slice());
console.log(numbers.slice(3));
console.log(numbers.slice(3, 6));

//splice method
// we can remove elements in array it will change the original array
// Splice(start,how many want to remove that length give here,new elements)

let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice: ", arrays);

let removed = arrays.splice(2);
console.log("Removed items: ", removed);

console.log("After splice: ", arrays);
