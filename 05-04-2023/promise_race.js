//  when both the promises are in resolved state.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});


// when one is in resolved case and one is in rejected case.

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("three")), 4000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 5000);
});

Promise.race([promise3, promise4]).then((value) => {
  console.log(value);
});

