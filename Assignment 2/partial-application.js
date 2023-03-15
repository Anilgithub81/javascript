function sum(x) {
  return function (y, z) {
    return x * y * z;
  };
}
let a = sum(10)(20, 30);
console.log("Result = " + a);
