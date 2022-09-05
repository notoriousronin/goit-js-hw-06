const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, enter your information");
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();

  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log("onFormSubmit -> name", name);
  //     console.log("onFormSubmit -> value", value);
  //   });
}
