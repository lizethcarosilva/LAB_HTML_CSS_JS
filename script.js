const counterEl = document.getElementById("counter");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");

let count = 0;

function updateCounter() {
  counterEl.textContent = count;

  if (count >= 10) {
    counterEl.classList.add("at-limit");
  } else {
    counterEl.classList.remove("at-limit");
  }
}

btnIncrement.addEventListener("click", () => {
  count += 1;
  updateCounter();
});

btnDecrement.addEventListener("click", () => {
  count -= 1;
  updateCounter();
});
