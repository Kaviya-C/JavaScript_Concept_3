// bitwise and or not exor left ,right shift

// & return true if both are true
// | return true if one is true
// ~ opposite of true is false vice versa
// exor ^ this mean both having different value mean it is 1
// left shift meant for left side  two zero gone
// right shift meant for right side two  zeros gone

console.log(5 << 2);
//001100

console.log(4 >> 2);
//0100
//
// Nullish coalescing operator (??)

const a = null ?? "No values";
console.log(a);

const e = 90 ?? 89;
console.log(e);

let user = { names: "Kaviya", city: "Chennai" };
console.log(user.names);
user.city ??= "Salem";
console.log(user.city);
