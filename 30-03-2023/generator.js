// " function* " k/as a generator function
// it returns a particular object, called “generator object”.

function* generate() {
  yield "anil";
  yield 14;
  yield "m.c.a";
  yield { age: 23, gender: "male" };
}

let it = generate();
console.log("Using without values :- ");
console.log(it.next()); 
console.log(it.next());      // they all give false
console.log(it.next());  
console.log(it.next());
console.log(it.next()); // it gives true
