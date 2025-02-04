function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function fibonacciRecuursive(n) {
  if (n < 2) return n;

  return fibonacciRecuursive(n - 1) + fibonacciRecuursive(n - 2);
}

console.log(fibonacciRecuursive(8));
console.log(fibonacciIterative(8));
