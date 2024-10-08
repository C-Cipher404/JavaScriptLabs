let bids = [];

function displayBids() {
    const bidList = document.getElementById('bid-list');
    bidList.innerHTML = '';
    bids.forEach((bid, index) => {
        const bidItem = document.createElement('div');
        bidItem.textContent = `Bid ${index + 1}: ${bid}`;
        bidList.appendChild(bidItem);
    });
}

function addBid(inputId) {
    const bidInput = document.getElementById(inputId);
    const bidValue = bidInput.value;
    if (bidValue) {
        bids.push(bidValue);
        displayBids();
        saveBidsToLocalStorage();
        bidInput.value = ''; 
    }
}
function saveBidsToLocalStorage() {
    localStorage.setItem('bids', JSON.stringify(bids));
}

function retrieveBidsFromLocalStorage() {
    const storedBids = localStorage.getItem('bids');
    if (storedBids) {
        bids = JSON.parse(storedBids);
        displayBids();
    }
}
document.getElementById('place-bid1').addEventListener('click', () => addBid('bid-input1'));
document.getElementById('place-bid2').addEventListener('click', () => addBid('bid-input2'));

window.onload = retrieveBidsFromLocalStorage;
