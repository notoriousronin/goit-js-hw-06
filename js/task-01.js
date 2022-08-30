const allCategoriesItems = document.querySelectorAll(".item");
console.log("Number of Categories:", allCategoriesItems.length);

allCategoriesItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);

  const Elements = item.querySelectorAll("ul > li");
  console.log("Elements:", Elements.length);
});
