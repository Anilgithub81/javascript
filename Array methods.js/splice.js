let arr = ["ab", "df", "3r", "4se", "6dh", "hfg"];
console.log("Original array is:- " + arr);
let x = arr.splice(1, 3, "rgh3", "uth7");
console.log("Spliced elements are :- " + x);
console.log("Required array - 1  is:- " + arr);
let y = arr.splice(-3, 2, "njh4", "zhy7");
console.log("Spliced elements are :- " + y);
console.log("Required array - 2  is:- " + arr);
