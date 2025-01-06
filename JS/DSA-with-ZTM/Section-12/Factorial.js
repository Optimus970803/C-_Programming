function findFactorialRecursive(n) {
  if (n === 2) return n;

  return n * findFactorialRecursive(n - 1);
}

findFactorialRecursive(5);

function findFactorialIterative(n) {
  let answere = 1;
  if (n === 2) answere = 2;
  for (let i = 2; i <= n; i++) {
    answere *= i;
  }
  return answere;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
