function sum(x) {
  return function sum1(y) {
    return x + y;
  };
}
console.log(" Result = " + sum(10)(20));
