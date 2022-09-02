function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector('[type="number"]');
const boxesEl = document.querySelector("#boxes");

const createBoxes = () => {
  const amount = Number(inputEl.value);
  const elementSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const newSize = elementSize + i * 10;
    const divEl = document.createElement("div");
    divEl.style.width = `${newSize}px`;
    divEl.style.height = `${newSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(divEl);
  }
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
