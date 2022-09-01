const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (refs.input.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  } else {
    refs.nameLabel.textContent = event.currentTarget.value;
  }
}
