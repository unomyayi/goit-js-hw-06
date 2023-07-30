let counterValue = 0;

const decrement = document.querySelector("[data-action ='decrement']");
const increment = document.querySelector("[data-action ='increment']");
const counter = document.querySelector("#value");

decrement.addEventListener("click", () => {
  counter.textContent = counterValue -= 1;
});
increment.addEventListener("click", () => {
  counter.textContent = counterValue += 1;
});
