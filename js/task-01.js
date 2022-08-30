const allCategoriesItems = document.querySelectorAll(".item");
console.log("Number of Categories:", allCategoriesItems.length);

allCategoriesItems.forEach((item) => {
  const titleEl = document.querySelector("h2");
  console.log("Category:", titleEl.textContent);

  const Elements = document.querySelector("ul > li");
  console.log("Elements:", Elements.length);
});
