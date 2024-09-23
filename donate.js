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
