function sum_of_digits(x) {
  if (x == 0) {
    return 0;
  } else {
    temp = x % 10;
    return temp + sum_of_digits(parseInt(x / 10));
  }
}
let x = 123456789;

console.log(`Sum of digits of ${x} is :-  ${sum_of_digits(x)} `);
