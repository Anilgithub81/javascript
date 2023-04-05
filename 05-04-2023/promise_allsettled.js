// Promise.allSettled() ,  method  is used to get a promise when all inputs are settled which is either fulfilled or rejected.

 const p1 = Promise.resolve(50);
 const p2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Anil"));
 const prom = [p1, p2];

 Promise.allSettled(prom).then((results) =>
   results.forEach((result) => console.log(result.status, result.value))
 );