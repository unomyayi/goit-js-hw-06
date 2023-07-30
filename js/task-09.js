const button = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const colorBody = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColors() {
  const color = getRandomHexColor();

  textColor.textContent = color;
  colorBody.style.backgroundColor = color;
}
button.addEventListener("click", changeColors);
