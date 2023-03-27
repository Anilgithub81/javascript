// fill() method overwrite the original array
const arr1 = ["Banana", "Orange", "Apple", "Mango"];
arr1.fill("Cherry");
console.log("Result 1 :- ", arr1);

const arr2 = ["Banana", "Orange", "Apple", "Mango","Pineapple"];
arr2.fill("Cherry",1,3);
console.log("Result 2 :- ", arr2);
// indexes start from 0