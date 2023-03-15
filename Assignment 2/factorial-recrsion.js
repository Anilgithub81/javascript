function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    fact = x * factorial(x - 1);
    return fact;
  }
}
let x = 4;
let a = factorial(x);
console.log(`Factorial of  ${x} = ${a} `);
