const arr = [{ name: "anil", gender: "male" }, 14, "M.C.A"];

const it = arr[Symbol.iterator]();

for (let value of it) {    // it returns value by using " for of " loop
  console.log(value);
}