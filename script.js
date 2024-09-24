function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let n = 67;
console.log(`Factorial of ${n} is ${factorial(n)}`);


function addBidsToElement(bids) {
  const element = document.getElementById('1');
  if (!element) {
    console.error("Element with ID '1' not found.");
    return;
  }
  element.innerHTML = '';
  bids.forEach(bid => {

 const bidItem = document.createElement('p');  
    bidItem.textContent = bid;
    element.appendChild(bidItem);
  });
}
const bidsArray = ['Bid 1', 'Bid 2', 'Bid 3'];
addBidsToElement(bidsArray);
