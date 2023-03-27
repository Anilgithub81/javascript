// flat method makes the array
const arr1= [[1, 2, 3, 4], 5, 6, [7, 8, 9]];
console.log("Original Array-1 :- ",arr1)
console.log("Result-1 :- ",arr1.flat());

const arr2= [[1, 2, 3, 4], 5, 6, [[[[7, 8, 9]]]]];
console.log("Original Array-2 :- ",arr2)
console.log("Result-2 :- ",arr2.flat(4)); // 4 is used as depth i.e parenthesis

