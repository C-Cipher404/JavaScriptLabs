function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let n = 67;
console.log(`Factorial of ${n} is ${factorial(n)}`);