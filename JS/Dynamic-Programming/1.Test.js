const foo = (n) => {
  if (n <= 1) return 1;
  console.log(n);
  foo(n - 1);
};

// foo(5); // O(n)

const bar = (n) => {
  if (n <= 1) return;
  console.log(n);
  bar(n - 2);
};

// bar(10); //O(n)

const dib = (n) => {
  if (n <= 1) return;
  console.log(n);
  dib(n - 1);
  dib(n - 1);
};

// dib(5);

const lib = (n) => {
  if (n <= 1) return;
  console.log(n);
  dib(n - 2);
  dib(n - 2);
};

// lib(8);

const fib = (n) => {
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp = --n;
  }
  return temp;
};

console.log(fib(5));
