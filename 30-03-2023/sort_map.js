// it will return map entries in sorting order.
var arr = " A Map holds key-value pairs where the keys can be any datatype ";
const map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i]) == false) {
    map.set(arr[i], 1);
  } else {
    let count = map.get(arr[i]);
    count++;
    map.set(arr[i], count);
  }
}

function sort(map) {
  let result = [...map.entries()];
  result.sort((value_1, value_2) => {
    return value_2[1] - value_1[1];
  });
  return new Map(result);
}
let temp = sort(map);
console.log("After sorting, Result is :- ", temp);
