// it return always first value that passes the test/function
const arr = [3, 9, 34, 2, 43, 5, 34, 6, 7, 64, 78];
console.log("Original Array:- " + arr);
const search = arr.find((item) => item > 10);
console.log("Required Array:- " + search);
