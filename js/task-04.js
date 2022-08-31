// const counterValue = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);
// };

// counterValue.prototype._getRefs = function (rootSelector) {
//   console.log(rootSelector);

//   const refs = {};

//   refs.container = document.querySelector(rootSelector);
//   refs.decrementBtn = refs.container.querySelector("[data-action]");
//   refs.incrementBtn = refs.container.querySelector("[data-action]");

//   console.log(refs.incrementBtn);

//   console.log(refs.container);

//   return refs;
// };

// counterValue.prototype.increment = function () {
//   this._value += this._step;
// };

// counterValue.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter = new counterValue({ rootSelector: "#counter", step: 1 });

const incr = document.querySelector('[data-action="increment"]');
console.log(incr);

const decr = document.querySelector('[data-action="decrement"]');
console.log(decr);

const counter = document.querySelector("#value");
console.log(counter);
counter.value = 0;

incr.addEventListener("click", () => {
  counter.value += 1;
  counter.textContent = counter.value;
});

decr.addEventListener("click", () => {
  counter.value -= 1;
  counter.textContent = counter.value;
});
