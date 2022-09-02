const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", function (event) {
  textEl.style.fontSize = event.target.value + "px";
});
