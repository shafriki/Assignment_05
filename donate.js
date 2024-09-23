// Dark to light mode
const htmlTag = document.getElementsByTagName("html")[0];
htmlTag.setAttribute("data-theme", "light");

//id function
function id(id) {
  return document.getElementById(id);
}

// main balance
let balance = 5500.55; 
const balanceElement = id("balance");
balanceElement.textContent = balance.toFixed(2); 

// donation, history button declared 
const donationButton = id("donation");
const historyButton = id("history");
let donationHistory = [];

// donation section
donationButton.addEventListener("click", function () {
  id("history-section").classList.add("hidden"); 
  id("thanks-modal").classList.add("hidden");
  document.querySelector("main").style.display = "block";

  this.classList.add("bg-[#B4F461]", "text-white");
  historyButton.classList.remove("bg-[#B4F461]", "text-white");
});

// Show history section
historyButton.addEventListener("click", function () {
  id("history-section").classList.remove("hidden"); 
  document.querySelector("main").style.display = "none"; 

  this.classList.add("bg-[#B4F461]", "text-white");
  donationButton.classList.remove("bg-[#B4F461]", "text-white");
});

// valid input
function isValidAmount(input) {
  const value = parseFloat(input); 
  return !isNaN(value) && value > 0; 
}

// modal section showing
function showModal() {
  id("thanks-modal").classList.remove("hidden");
}

// modal section closing
id("close-modal").addEventListener("click", function () {
  id("thanks-modal").classList.add("hidden");
});

// noakhali donation buttons
id("noakhali-btn").addEventListener("click", function () {
  handleDonation('Flood at Noakhali', 'noakhali-input', 'noakhali-amount');
});

// feni donation buttons
id("feni-btn").addEventListener("click", function () {
  handleDonation('Flood Relief in Feni', 'feni-input', 'feni-amount');
});

// quota movement donation buttons
id("quota-btn").addEventListener("click", function () {
  handleDonation('Injured in the Quota Movement', 'quota-input', 'quota-amount');
});

// donation handling function
function handleDonation(location, inputId, amountId) {
  const inputField = id(inputId);
  const inputAmount = inputField.value.trim(); 

  // Check if the input amount is valid
  if (isValidAmount(inputAmount)) {
    const donationAmount = parseFloat(inputAmount); 

    // check enough balance 
    if (donationAmount <= balance) {
      const currentAmount = parseFloat(id(amountId).textContent); 
      const newAmount = currentAmount + donationAmount; 
      id(amountId).textContent = newAmount.toFixed(2); 
      
      // mainbalace 
      balance -= donationAmount;
      balanceElement.textContent = balance.toFixed(2);
      inputField.value = '';

      // donation history
      donationHistory.push({
        location: location,
        amount: donationAmount,
        date: new Date().toString(),
      });

      // alert section
      showModal();
    } else {
      alert('Insufficient balance!'); 
    }
  } else {
    alert('Invalid Donation amount!'); 
  }
}

// donation history function
function displayDonationHistory() {
  const historyList = id("history-list");
  historyList.innerHTML = ''; 

  if (donationHistory.length === 0) {
    historyList.innerHTML = '<p>No donations made yet.</p>'; 
  } else {
    // Loop through each donation record
    for (let i = 0; i < donationHistory.length; i++) {
      const entry = donationHistory[i];
      historyList.innerHTML += `
        <div class="flex flex-col items-start gap-2 border border-gray-500 p-3 rounded-md mb-2">
          <p class="text-base lg:text-base font-medium">${entry.amount.toFixed(2)} BDT donated for ${entry.location},Bangladesh</p>
          <p class="text-xs lg:text-sm font-light">Date: ${entry.date}</p>
        </div>
      `;
    }
  }
}

historyButton.addEventListener("click", displayDonationHistory);
