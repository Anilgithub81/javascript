// " function* " k/as a generator function
// it returns a particular object, called “generator object”.

function* generate() {
  yield "anil";
  yield 14;
  yield "m.c.a";
  yield { age: 23, gender: "male" };
}

let it = generate();

console.log(it.next());
console.log(it.return()); // it give true here and  stop execution here
console.log(it.next());
console.log(it.next());
