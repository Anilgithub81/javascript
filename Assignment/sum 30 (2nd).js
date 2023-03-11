function sum(x) {
  return function add (y)
  {
    return x + y;
  }
}
let a = sum(10);
console.log("Result = " + a(20));
