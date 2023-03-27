// findIndex() method returns the index (position) of the first element that passes a test.
// indexes start from 0
const ages = [3, 10, 17 , 20, 56, 78];
let a = ages.findIndex(checkAge);

function checkAge(item) {
  return item > 18;
}

console.log("Result :- ",a)