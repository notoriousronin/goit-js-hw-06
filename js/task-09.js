function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const span = document.querySelector(".color");
const changeClrBtn = document.querySelector(".change-color");

changeClrBtn.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  span.textContent = currentColor;
});
