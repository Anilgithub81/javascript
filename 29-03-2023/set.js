// Set is a object form, collection of unique objects.
let a = "anil";
let b = "dharini";
let c = { x: 1, y: 2 };
let d = "ankit";
let set = new Set([a, b, c, d]);
console.log("Original Set:- ", set);

// To add a new element in set
let e = "aryan";
set.add(e);
console.log("After inserted, Set is :- ", set);

// To delete element from set
set.delete(b);
console.log("After deleted, Set is :- ", set);

//To clear
set.clear();
console.log(set);

let set1 = new Set([a, b, c, d, 6, 8]);
console.log("\n New Set is :- ", set1);

// has() is used to check values in set i.e, it is used to return "true" or "false" value.
console.log("Check, Value-a :- ", set1.has("anil"));
console.log("Check, Value-a :- ", set1.has(a));

console.log("Size of set1 :-  ", set1.size);

console.log("\n Values  are :- ");
for (const value of set1) {
  console.log(value);
}

console.log("\n Keys  are :- ");
for (const key of set1.keys()) {
  console.log(key);
}

console.log("\n Key Value pair  are :- "); // set returns value:value pair
for (const [key, value] of set1.entries()) {
  console.log(key, " : ", value);
}

console.log("\n By using Spread_Operator :- ", ...set1);
