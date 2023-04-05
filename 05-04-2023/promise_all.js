// Promise.all(), method takes an iterable(number) of promises as input and returns a single Promise.
p1 = Promise.resolve(50);
p2 = 200;
p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, "Anil");
});

Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values);
});
