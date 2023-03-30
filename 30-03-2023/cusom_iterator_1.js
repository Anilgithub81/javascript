const custom_iterator = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
const it = custom_iterator[Symbol.iterator]();
console.log(it.next());
console.log(it.return());  // it will true and stop execution.
console.log(it.next());

