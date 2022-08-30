const counterValue = function ({ initialValue = 0 } = {}) {};

counterValue.prototype.increment = function () {
  this._value += this._step;
};
const counter = new counterValue({ step: 1 });

counter.increment();
