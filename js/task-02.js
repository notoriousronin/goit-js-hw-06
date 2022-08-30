const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsPath = document.querySelector("#ingredients");
const newArr = [];

ingredients.forEach((element) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = element;
  newArr.push(newEl);
});
ingredientsPath.append(...newArr);

// const arr = ingredients.map((element) => {
//   const newEl = document.createElement("li");
//   newEl.classList.add("item");
//   newEl.textContent = element;

//   return newEl;
// });

// ingredientsPath.append(...arr);
