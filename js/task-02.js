const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItems = ingredients.map((ingredient) => {
  const element = document.createElement("li");

  element.classList.add("item");
  element.textContent = ingredient;

  return element;
});
document.querySelector("#ingredients").append(...listItems);
