
var arr = "Danish_Soma";
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

const a = Object.fromEntries(map);

console.log("Result :- ",a);