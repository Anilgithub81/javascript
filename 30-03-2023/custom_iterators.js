const custom_iterator = {      // custom-iterator
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
const it = custom_iterator[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());



