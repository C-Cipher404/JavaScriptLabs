function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function displayFactorial() {
  let n = document.getElementById('numberInput').value;
  let result = factorial(Number(n)); 
  document.getElementById('factorialResult').textContent = `Factorial of ${n} is ${result}`;
}

