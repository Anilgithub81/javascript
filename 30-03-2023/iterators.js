// The iterator  defines how to produce a sequence of values from an object.
//An object becomes an iterator when it implements a next() method.

const arr = [{name : "anil", gender : "male"}, 14 ,"M.C.A"];

const it = arr[Symbol.iterator]();

console.log("Using without values :- ");
console.log(it.next());
console.log(it.next()); // it returns false here
console.log(it.next());

console.log(it.next()); // it returns true here

