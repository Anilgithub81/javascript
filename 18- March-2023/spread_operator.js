let str = "ANIL_KUMAR";
console.log("Original string :- " + str);
console.log("String using spread operator :-  ", ...str);

function sum(a, b, c) {
  return a + b + c;
}
const num = [1, 2, 3, 4, 5, 6, 7];
console.log("Result :- ",sum(...num)); //  spread operator used in function call
