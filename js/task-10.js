const controls = document.querySelector("#controls");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const { style } = boxes;

style.display = "flex";
style.flexWrap = "wrap";
style.columnGap = "5px";
style.rowGap = "25px";
style.marginTop = "20px";
style.alignItems = "flex-end";

function createBoxes() {
  const amount = Number(controls.querySelector("input").value);
  const max = Number(controls.querySelector("input").max);
  const min = Number(controls.querySelector("input").min);

  if (isNaN(amount) || amount < min || amount > max) {
    alert(`Please enter a number between ${min} and ${max}`);
    return;
  }
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const size = 30 + i * 10;
    const boxElement = `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;

    setTimeout(() => {
      boxes.insertAdjacentHTML("beforeend", boxElement);
    }, i * 100);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  controls.querySelector("input").value = "";
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
