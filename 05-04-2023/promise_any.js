// When all promises fulfilled 

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("--- When all promises fulfilled ---");
    console.log("Promise 1 fulfilled");
    resolve(1);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 fulfilled");
    resolve(2);
  }, 2000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
  console.log("Returned Promise");
  console.log(value);
});


// When one promise rejected 


const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("\n--- When one promise rejected ---");
    console.log("Promise 3 rejected");
    reject("error");
  }, 3000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 4 fulfilled");
    resolve(2);
  }, 4000);
});

const prom = Promise.any([p3, p4]);
prom.then((value) => {
  console.log("Returned Promise");
  console.log(value);
});


// When all promises rejected 



const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("\n--- When all promises rejected ---");
    console.log("Promise 5 rejected");
    reject("error1");
  }, 5000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 6 rejected");
    reject("error2");
  }, 6000);
});

const prom1 = Promise.any([p5, p6]);
prom1.catch((e) => {
  console.log("Returned Promise");
  console.log(e, e.errors);
});


