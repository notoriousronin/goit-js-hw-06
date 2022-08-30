const allCategoriesItems = document.querySelectorAll(".item");
console.log("Number of Categories:", allCategoriesItems.length);

allCategoriesItems.forEach((item) => {
  const titleEl = item.querySelector("h2");
  console.log("Category:", titleEl.textContent);

  const Elements = item.querySelectorAll("ul > li");
  console.log("Elements:", Elements.length);
});
