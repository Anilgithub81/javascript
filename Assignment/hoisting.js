console.log("Decleration is Hoisted");
console.log(" Result = " + a);
var a;
console.log("\nInitialization  is  not  Hoisted");
console.log(" Result-1 = " + a);
var b = 9;
console.log("Value of b is initialised as :-  " + b);
console.log("\nFunction  is   Hoisted");
console.log(" Result of function = " + sum(2, 3)); //function call
// function defintion
function sum(x, y) {
  return x + y;
}
console.log("\nFunction Expression  is not Hoisted");
console.log(" Result of function expression :- " + x);
// function expression definition
var x = function (m, n) {
  return m * n;
};
console.log("\n'let' & 'const'  is  not  Hoisted - It gives error");
console.log("Result-2 = " + c);
let c;
console.log("Result-3 = " + d);
const d = 4;
console.log(d);
