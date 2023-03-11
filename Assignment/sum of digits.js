let x = 12345;
console.log("Number is:- " + x);
let sum = 0;
while (x) {
  temp = x % 10;
  sum = sum + temp;
  x = Math.floor(x / 10);
}
console.log("Sum of Digits:- " + sum);
