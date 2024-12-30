const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}; //

const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log("fib:" + fib(45));
console.log("fibonacci:" + fibonacci(45));
