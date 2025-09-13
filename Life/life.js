const quoteBox = document.getElementById("quote-box");
const quotes = quoteBox.querySelectorAll("p");
const cards = document.querySelectorAll(".life-card");
let current = 0;

function showQuote(i) {
  quotes.forEach((q, idx) => q.classList.toggle("active", idx === i));
}

function nextQuote() {
  current = (current + 1) % quotes.length;
  showQuote(current);
}

setInterval(nextQuote, 3000);

quoteBox.addEventListener("click", () => {
  const targetId = quotes[current].dataset.target;
  if (targetId) {
    cards.forEach(card => card.classList.remove("show-detail"));
    const targetCard = document.getElementById(targetId);
    if (targetCard) {
      targetCard.classList.add("show-detail");
      targetCard.scrollIntoView({ behavior: "smooth" });
    }
  }
});

quoteBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    quoteBox.click();
  }
});

showQuote(current);
