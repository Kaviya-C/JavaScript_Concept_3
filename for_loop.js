let nums = [];
for (let i = 0; i < 3; i++) {
  nums.push([]);
  for (let j = 0; j < 3; j++) {
    nums[i].push(j);
  }
}
console.log(nums);
console.table(nums);

let names = ["radha", "geetha", "seetha", "meghana"];
for (let i of names) {
  console.log(i);
}

// for in loop used for keys values pair of object

let alien = {
  name: "Goodthings",
  age: 23,
  Favourite: "grandma",
  vacation: "paris",
};
for (let each in alien) {
  console.log(each, alien[each]);
}

// looping over objects by converting an array

let family = {
  name: "God",
  learn: "JavaScript",
  interest: "Technology",
  salary: 40_000,
};

let arr_keys = Object.keys(family);
console.table(arr_keys);

let arr_values = Object.values(family);
console.table(arr_values);

/*
 break statement in js
stops the complete iteration

continue -- skip the currrent iteration continue to the next iteration

*/
