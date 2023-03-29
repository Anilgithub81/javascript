// Map holds key-value pairs. Map is a object form. 
// [key,value]
// Map is also a collection of unique keys, but we repet values by using different keys.

const map = new Map([
  ["name", "anil"],
  ["age", 23],
  ["gender", "male"],
  ["nick_name", "anil"],
]);
console.log("Original map is :- ",map);

// to add a new key 
 map.set("study",'M.C.A');
 console.log("After inserted, Map is :- ", map);

 // to get values
 console.log("Value of 'Key- name' is :- ",map.get("name"));

 // to get size
 console.log("Size of map is - ", map.size);

 // to delete a key
console.log(" Check :-  ",map.delete("nick_name")); // it returns true
console.log ("After deleting a key, Map is :-  ",map)

// has() 
console.log("Check gender :- ",map.has("gender"));
console.log("Check anything_else :- ", map.has("personal"));

console.log("\n Values  are :- ");
for (const value of map.values()) {
  console.log(value);
}

console.log("\n Keys  are :- ");
for (const key of map.keys()) {
  console.log(key);
}

console.log("\n Key Value pair  are :- "); // map returns key :value pair
for (const [key, value] of map.entries()) {
  console.log(key, " : ", value);
}

console.log("\n By using Spread_Operator :- ", ...map);
