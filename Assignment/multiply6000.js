function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
console.log("Result:- " + mul(10)(20)(30));
