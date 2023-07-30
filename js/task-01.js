const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  const firstChild = element.firstElementChild;
  const nextChild = firstChild.nextElementSibling.children;

  console.log(`Category: ${firstChild.textContent}`);
  console.log(`Elements: ${nextChild.length}`);
});
