const ages = [32, 33, 16, 40];
console.log("Original array :- " + ages);

const y = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(y);
